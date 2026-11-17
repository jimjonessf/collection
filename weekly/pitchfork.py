"""Pitchfork reviews for the albums in The Collection.

Runs on GitHub every Sunday (see .github/workflows/pitchfork.yml); "Run workflow" on the Actions tab runs it right away.
For every album it finds Pitchfork's review (any version of the album: the original review, a reissue review or a
Sunday Review), with its score and the year it was published, and saves them to weekly/pitchfork.json. The album
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


def from_wikipedia(wiki):
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
def read_review(url):
    """(score, year, page title) from the review page, or None if it can't be read."""
    st, body, final = get(url)
    if st != 200 or not body:
        return None
    score = year = None
    for pat in (r'"ratingValue"\s*:\s*"?([\d.]+)', r'"score"\s*:\s*"?([\d.]+)', r'class="[^"]*Rating[^"]*"[^>]*>\s*([\d.]+)\s*<'):
        m = re.search(pat, body)
        if m:
            try:
                v = float(m.group(1))
                if 0 <= v <= 10:
                    score = v; break
            except ValueError:
                pass
    m = re.search(r'"datePublished"\s*:\s*"(\d{4})', body) or re.search(r'"pubDate"\s*:\s*"(\d{4})', body) or re.search(r'<time[^>]*datetime="(\d{4})', body)
    if m:
        year = int(m.group(1))
    t = re.search(r"<title>(.*?)</title>", body, re.S)
    return score, year, (t.group(1) if t else ""), clean_url(final)


def guess(artist, title):
    """Pitchfork's usual review address for an album, if the page there is that album."""
    for t in dict.fromkeys([title, re.sub(r"\s*[\(\[].*?[\)\]]", "", title)]):
        url = f"https://pitchfork.com/reviews/albums/{slug(artist)}-{slug(t)}/"
        r = read_review(url)
        if r and r[0] is not None:
            page = set(words(r[2]))
            if set(words(t)) <= page and set(words(artist)[:2]) <= page:
                return r[3], r
    return None


def main():
    albums = json.load(open(os.path.join(ROOT, "data", "albums.json")))
    try:
        data = json.load(open(OUT))
    except Exception:
        data = {}
    found, tried = data.setdefault("found", {}), data.setdefault("tried", {})
    old = (TODAY - dt.timedelta(days=RETRY_DAYS)).isoformat()
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
            score = r[0] if r and r[0] is not None else wscore
            year = (r[1] if r and r[1] else None) or wyear
            if score is not None:
                hit = {"u": r[3] if r else url, "s": score, "y": year}
        if not hit and "various" not in artist.lower():
            g = guess(artist, title)
            time.sleep(1)
            if g:
                hit = {"u": g[0], "s": g[1][0], "y": g[1][1]}
        if hit:
            found[a["id"]] = hit; n_new += 1
            print(f"  [{i}/{len(todo)}] {artist} - {title}: {hit['s']} ({hit['y']})")
        tried[a["id"]] = TODAY.isoformat()
    data["updated"] = TODAY.isoformat()
    with open(OUT + ".tmp", "w") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
    os.replace(OUT + ".tmp", OUT)
    print(f"Found {n_new} new reviews; {len(found)} albums have a Pitchfork review.")


if __name__ == "__main__":
    main()
