"""Pitchfork reviews for the albums in The Collection.

Runs on GitHub every Sunday (see .github/workflows/pitchfork.yml); "Run workflow" on the Actions tab runs it right away.
For every album it finds Pitchfork's review (any version of the album: the original review, a reissue review or a
Sunday Review; any review Pitchfork wrote of the album is kept and shown with that album), with its score and the year it was published, and saves them to weekly/pitchfork.json. The album
page shows an orange PITCHFORK button that links to the review.

Where it looks:
  1. the album's Wikipedia article (its ratings box usually cites Pitchfork's review), then
  2. Pitchfork's usual review address (pitchfork.com/reviews/albums/artist-title/), checked against the page.
The score and date are read from the review page itself; if Pitchfork can't be reached, Wikipedia's score is used.
Albums without a review are checked again after RETRY_DAYS days; found reviews are kept.
"""
import datetime as dt, json, os, re, sys, time, unicodedata, urllib.error, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "weekly", "pitchfork.json")
UA = "TheCollection/1.0 (personal record collection site; https://mrjonessf.com/music)"
RETRY_DAYS = 30
MAX_MINUTES = 50          # stop in time to save; the next run carries on
TODAY = dt.date.today()
START = time.time()
PF_URL = re.compile(r"https?://(?:www\.)?pitchfork(?:media)?\.com/reviews/albums/[A-Za-z0-9_\-/]+", re.I)


def get(url, tries=3):
    for n in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.status, r.read().decode("utf-8", "replace"), r.geturl()
        except urllib.error.HTTPError as e:
            if e.code in (404, 410):
                return e.code, "", url
            if e.code == 429 or e.code >= 500:
                time.sleep(10 * (n + 1)); continue
            return e.code, "", url
        except Exception:
            time.sleep(5)
    return 0, "", url


def slug(s):
    s = unicodedata.normalize("NFKD", str(s or "")).encode("ascii", "ignore").decode().lower()
    s = re.sub(r"&", " and ", s)
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def words(s):
    s = unicodedata.normalize("NFKD", str(s or "")).encode("ascii", "ignore").decode().lower()
    return [w for w in re.findall(r"[a-z0-9]+", re.sub(r"\(.*?\)|\[.*?\]", " ", s)) if w not in ("the", "a", "an", "and")]


def clean_url(u):
    u = u.split("?")[0].replace("pitchforkmedia.com", "pitchfork.com").replace("http://", "https://")
    u = re.sub(r"https://pitchfork", "https://pitchfork", u)
    return u.rstrip("/") + "/"


# ------------------------------------------------------------------ Wikipedia
def wiki_title(url):
    m = re.search(r"/wiki/(.+)$", url or "")
    return urllib.parse.unquote(m.group(1)).replace("_", " ") if m else ""


def wiki_candidates(artist, title):
    """Wikipedia articles that look like this album (for albums with no Wikipedia link of their own)."""
    st, body, _ = get("https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode(
        {"action": "query", "list": "search", "srsearch": f'"{title}" {artist} album', "srlimit": 6, "format": "json"}))
    if st != 200:
        return []
    try:
        hits = json.loads(body)["query"]["search"]
    except Exception:
        return []
    want = words(title)
    return ["https://en.wikipedia.org/wiki/" + urllib.parse.quote(h["title"].replace(" ", "_"))
            for h in hits if words(re.sub(r"\s*\(.*?\)$", "", h["title"])) == want][:2]


def from_wikipedia(wiki, artist=None):
    """(review url, score from Wikipedia, year from the citation) or None."""
    t = wiki_title(wiki)
    if not t:
        return None
    st, body, _ = get("https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode(
        {"action": "parse", "page": t, "prop": "wikitext", "format": "json", "redirects": 1, "formatversion": 2}))
    if st != 200:
        return None
    try:
        text = json.loads(body)["parse"]["wikitext"]
    except Exception:
        return None
    if artist:   # found by searching: make sure it's this artist's album (the infobox names the artist)
        box = re.search(r"\|\s*artist\s*=\s*([^\n]*)", text, re.I)
        named_artist = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]*)\]\]", r"\1", box.group(1) if box else text[:1500])   # [[Link|Name]] -> Name
        want, have = set(words(artist)), set(words(named_artist))
        if not want or not want <= have:
            return None
    named = {m.group(1).strip().strip('"'): m.group(2) for m in re.finditer(r'<ref\s+name\s*=\s*"?([^">/]+)"?\s*>(.*?)</ref>', text, re.S | re.I)}
    score, url, year = None, None, None
    # the ratings box: "| rev4 = [[Pitchfork (website)|Pitchfork]]" then "| rev4score = {{Rating|8.7|10}}<ref ...>"
    for m in re.finditer(r"\|\s*rev(\d+)\s*=\s*([^\n]*)", text, re.I):
        if "pitchfork" not in re.split(r"\|\s*rev\d", m.group(2))[0].lower():
            continue
        sm = re.search(r"\|\s*rev" + m.group(1) + r"\s*score\s*=\s*(.*)", text, re.I)
        if sm:
            line = sm.group(1)
            r = re.search(r"\{\{\s*rating\s*\|\s*([\d.]+)\s*\|\s*10\s*\}\}", line, re.I) or re.search(r"([\d.]+)\s*/\s*10\b", line)
            if r:
                try:
                    score = float(r.group(1))
                except ValueError:
                    pass
            ref = re.search(r"<ref[^>/]*>(.*?)</ref>", line, re.S | re.I)
            refname = re.search(r'<ref\s+name\s*=\s*"?([^">/]+)"?\s*/>', line, re.I)
            cite = ref.group(1) if ref else named.get(refname.group(1).strip(), "") if refname else ""
            u = PF_URL.search(cite)
            if u:
                url = u.group(0)
                d = re.search(r"\|\s*date\s*=\s*[^|}]*?(\d{4})", cite)
                year = int(d.group(1)) if d else None
        break
    if not url:   # no ratings box: any Pitchfork album review cited in the article
        u = PF_URL.search(text)
        if u:
            url = u.group(0)
    return (clean_url(url), score, year) if url else None


# ------------------------------------------------------------------ Pitchfork
def real_score(v):
    try:
        f = float(v)
    except (TypeError, ValueError):
        return False
    return 0 <= f <= 10 and abs(f * 10 - round(f * 10)) < 1e-6 and re.fullmatch(r"\d{1,2}(\.\d0*)?", str(v).strip()) is not None


def read_review(url):
    """(score, year, page title) from the review page, or None if it can't be read."""
    st, body, final = get(url)
    if st != 200 or not body:
        return None
    score = year = None
    strong = False   # True when the page states it as the review's rating (most trusted)
    # Pitchfork scores are 0-10 with one decimal (8.7, 10.0); other numbers on the page (like "score":0.0677) are something else
    for pat in (r'"ratingValue"\s*:\s*"?([\d.]+)', r'"rating"\s*:\s*"?([\d.]+)', r'"score"\s*:\s*"?([\d.]+)', r'class="[^"]*Rating[^"]*"[^>]*>\s*([\d.]+)\s*<'):
        for m in re.finditer(pat, body):
            if real_score(m.group(1)):
                score = float(m.group(1)); strong = pat.startswith('"ratingValue'); break
        if score is not None:
            break
    m = re.search(r'"datePublished"\s*:\s*"(\d{4})', body) or re.search(r'"pubDate"\s*:\s*"(\d{4})', body) or re.search(r'<time[^>]*datetime="(\d{4})', body)
    if m:
        year = int(m.group(1))
    t = re.search(r"<title>(.*?)</title>", body, re.S)
    return score, year, (t.group(1) if t else ""), clean_url(final), strong


def review_fits(r, url, artist, title):
    """Is this review about this artist's album? (Wikipedia articles also cite reviews of covers and box sets.)
    Returns (fits, several): several = the review covers more than one album, so its first score may belong to another."""
    page = (r[2] if r else "") or urllib.parse.unquote(url.rstrip("/").rsplit("/", 1)[-1]).replace("-", " ")
    page = re.sub(r"\s*(album review|\| pitchfork).*$", "", page, flags=re.I)
    pw = set(words(page))
    aw, tw = [w for w in words(artist) if len(w) > 1][:2], set(words(re.sub(r"\s*[\(\[].*?[\)\]]", "", title)))
    fits = bool(tw) and tw <= pw and (not aw or set(aw) <= pw or not r)   # the album's name, and the artist when the page title is known
    several = page.count("/") >= 1 or len(re.findall(r"edition|reissue|box", page, re.I)) > 1
    return fits, several


def pick_score(fits, several, r, wscore):
    """The review's own rating; Wikipedia's score when the review covers several albums (its first score may be another album's)."""
    if not fits:
        return None
    if r and r[4] and not several:
        return r[0]
    if wscore is not None:
        return wscore
    return r[0] if r and not several else None


REISSUE_SLUGS = ["deluxe-edition", "reissue", "remastered", "expanded-edition", "anniversary-edition"]


def guess(artist, title, reissues=False):
    """Pitchfork's usual review address for an album, if the page there is that album.
    reissues=True also tries the usual addresses of a reissue review (artist-title-deluxe-edition/ and so on):
    any Pitchfork review of the album counts, of the original release or of a reissue."""
    plain = re.sub(r"\s*[\(\[].*?[\)\]]", "", title)
    tries = list(dict.fromkeys([title, plain]))
    if reissues:
        tries += [f"{plain} {s.replace('-', ' ')}" for s in REISSUE_SLUGS]
    for n, t in enumerate(tries):
        url = f"https://pitchfork.com/reviews/albums/{slug(artist)}-{slug(t)}/"
        if n:
            time.sleep(0.5)
        r = read_review(url)
        if r and r[0] is not None:
            page = set(words(r[2]))
            if set(words(plain)) <= page and set(words(artist)[:2]) <= page:
                return r[3], r
    return None


def key(s):   # the same as the site's titleKey()
    s = unicodedata.normalize("NFD", str(s or "").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", re.sub(r"^the\s+", "", s))


CONCERT = re.compile(r"^\d{4}[-\u2010\u2011]\d{2}[-\u2010\u2011]\d{2}|\b\d{1,2}[-\u2010./]\d{1,2}[-\u2010./]\d{2,4}\b|\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.? \d{1,2},? \d{4}|radio (session|concert)|on the air|\bvol\.? ?\d", re.I)


YEAR = {}   # New Releases album -> its release year


def nr_targets(albums):
    """(artist, title, key) of the New Releases albums (last 12 years) not in the collection, newest first."""
    artists = json.load(open(os.path.join(ROOT, "data", "artists.json")))
    try:
        newrel = json.load(open(os.path.join(ROOT, "weekly", "new_releases.json")))
    except Exception:
        newrel = {}
    name = lambda k: (artists.get(k) or {}).get("name") or k
    owned = {(key(a.get("artist")), key(a["title"])) for a in albums} | {(key(name(a.get("artistKey", ""))), key(a["title"])) for a in albums}
    first = TODAY.year - 11
    rows = []
    for k, art in artists.items():
        for s in art.get("studio_albums") or []:
            if int(s.get("year") or 0) >= first and s.get("type") not in ("EP", "Compilation", "Remixes"):
                rows.append((int(s["year"]), name(k), s["title"]))
    for k, lst in (newrel.get("albums") or {}).items():
        for r in lst:
            if int(r.get("year") or 0) >= first and not r.get("archival") and (not r.get("live") or (r.get("vinyl") and not CONCERT.search(r["title"]))):
                rows.append((int(r["year"]), name(k), r["title"]))
    out, seen = [], set()
    for y, artist, title in sorted(rows, reverse=True):
        k = key(artist) + "|" + key(title)
        if k not in seen and (key(artist), key(title)) not in owned and "various" not in artist.lower():
            seen.add(k); out.append((artist, title, k)); YEAR[k] = y
    return out


EDITION_SQ = re.compile(r"\d+(st|nd|rd|th)(?!e)|\d+|the|super|deluxe|expanded|edition|anniversary|remaster(ed)?|reissue|boxset|box|set")


def review_names(k, url):
    """Does this review's address name the album k (artist|title, as key())? Some earlier reissue matches were other albums."""
    if re.search(r"best-of|greatest-hits", url):
        return False
    artist, title = k.split("|", 1)
    rest = key(urllib.parse.unquote(url.rstrip("/").rsplit("/", 1)[-1]).replace("-", " ")).replace(artist, "", 1)
    if title != artist:
        return title in rest
    return EDITION_SQ.sub("", rest) == ""   # a self-titled album: nothing but edition words left


def main():
    albums = json.load(open(os.path.join(ROOT, "data", "albums.json")))
    try:
        data = json.load(open(OUT))
    except Exception:
        data = {}
    found, tried = data.setdefault("found", {}), data.setdefault("tried", {})
    if data.get("check") != 2:   # Nov 20: reviews of covers / box sets were being matched; check every found review again
        for k in list(found): tried.pop(k, None)
        found.clear()
        for k in list(data.get("nr") or {}): (data.get("nr_tried") or {}).pop(k, None)
        (data.get("nr") or {}).clear()
        data["check"] = 2
    for k in [k for k, v in found.items() if not real_score(v.get("s"))]:   # a wrong number was read as the score (first run): look again
        del found[k]; tried.pop(k, None)
    old = (TODAY - dt.timedelta(days=RETRY_DAYS)).isoformat()
    rv_tried = data.setdefault("rv_tried", {})   # albums already checked at the usual reissue-review addresses
    todo = [a for a in albums if a["id"] not in found and tried.get(a["id"], "") <= old]
    print(f"{len(albums)} albums, {len(found)} reviews already found, {len(todo)} to look up.")
    n_new = 0
    for i, a in enumerate(todo, 1):
        if time.time() - START > MAX_MINUTES * 60:
            print("Out of time for this run; the next run carries on."); break
        artist, title = a.get("artist", ""), a.get("title", "")
        hit = None
        w = from_wikipedia(a.get("wiki")) if a.get("wiki") else None
        time.sleep(0.5)
        if w:
            url, wscore, wyear = w
            r = read_review(url)
            time.sleep(1)
            fits, several = review_fits(r, url, artist, title)
            # the page's own rating first (unless the review covers several albums), then Wikipedia's score
            score = pick_score(fits, several, r, wscore)
            year = (r[1] if r and r[1] else None) or wyear
            if fits and real_score(score):
                hit = {"u": r[3] if r else url, "s": float(score), "y": year}
        if not hit and "various" not in artist.lower():
            g = guess(artist, title, reissues=a["id"] not in rv_tried)   # reissue-review addresses: the first time only
            rv_tried[a["id"]] = 1
            time.sleep(1)
            if g:
                hit = {"u": g[0], "s": g[1][0], "y": g[1][1]}
        if hit:
            found[a["id"]] = hit; n_new += 1
            print(f"  [{i}/{len(todo)}] {artist} - {title}: {hit['s']} ({hit['y']})")
        tried[a["id"]] = TODAY.isoformat()
    # New Releases (the site's last 12 years) by artists in the collection, owned or not: Pitchfork's usual review address
    nr, nr_tried = data.setdefault("nr", {}), data.setdefault("nr_tried", {})
    for k in [k for k, v in nr.items() if not real_score(v.get("s"))]:
        del nr[k]; nr_tried.pop(k, None)
    if data.get("nr_method") != "wikipedia":   # Wikipedia was added for these (Nov 17): look again at the ones not found yet
        nr_tried.clear(); data["nr_method"] = "wikipedia"
    targets = nr_targets(albums)
    # a review from years before the album came out is of a different (older) album: drop it
    early = lambda k, h: h.get("y") and YEAR.get(k) and int(h["y"]) < YEAR[k] - 1
    for k in [k for k, v in nr.items() if early(k, v)]:
        del nr[k]
    todo_nr = [t for t in targets if t[2] not in nr and nr_tried.get(t[2], "") <= old]
    print(f"New Releases: {len(nr)} reviews already found, {len(todo_nr)} to look up.")
    n_nr = 0
    for i, (artist, title, k) in enumerate(todo_nr, 1):
        hit = None
        if time.time() - START > MAX_MINUTES * 60:
            print("Out of time for this run; the next run carries on."); break
        hit = None
        for w in wiki_candidates(artist, title):   # Wikipedia first (it also knows Pitchfork's older review addresses)
            time.sleep(0.5)
            got = from_wikipedia(w, artist)
            if got:
                url, wscore, wyear = got
                r = read_review(url)
                time.sleep(1)
                fits, several = review_fits(r, url, artist, title)
                score = pick_score(fits, several, r, wscore)
                if fits and real_score(score):
                    hit = {"u": r[3] if r else url, "s": float(score), "y": (r[1] if r and r[1] else None) or wyear}
                break
        if not hit:
            g = guess(artist, title, reissues=k not in rv_tried)
            rv_tried[k] = 1
            time.sleep(1)
            if g and real_score(g[1][0]):
                hit = {"u": g[0], "s": g[1][0], "y": g[1][1]}
        if hit and early(k, hit):
            hit = None
        if hit:
            nr[k] = hit; n_nr += 1
            print(f"  NR [{i}/{len(todo_nr)}] {artist} - {title}: {hit['s']} ({hit['y']})")
        nr_tried[k] = TODAY.isoformat()
    print(f"New Releases: found {n_nr} new reviews; {len(nr)} in all.")
    # Nov 28, 2026: the Reissues lists are gone, but their reviews are kept: any Pitchfork review of an album (original
    # release or reissue) goes with that album wherever the site shows it (album page, Discography row, New Releases)
    for k, v in (data.pop("ri", None) or {}).items():
        if "|" in k and real_score(v.get("s")) and review_names(k, v.get("u", "")):
            nr.setdefault(k, v)
    data.pop("ri_tried", None)
    by_name = {}
    for a in albums:
        for t in dict.fromkeys([a.get("title", ""), re.sub(r"\s*[\(\[].*?[\)\]]", "", a.get("title", ""))]):
            by_name.setdefault(key(a.get("artist")) + "|" + key(t), a["id"])
    n_att = 0
    for k, v in nr.items():   # a review found for the album under its name (New Releases, Discography, a reissue) also goes on your copy's page
        aid = by_name.get(k)
        if aid and aid not in found and real_score(v.get("s")):
            found[aid] = v; n_att += 1
    if n_att:
        print(f"Added {n_att} reviews to albums you own from the reviews found by name.")
    data["updated"] = TODAY.isoformat()
    with open(OUT + ".tmp", "w") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
    os.replace(OUT + ".tmp", OUT)
    print(f"Found {n_new} new reviews; {len(found)} albums have a Pitchfork review.")


if __name__ == "__main__":
    main()
