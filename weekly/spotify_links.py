"""Daily Spotify links for albums that aren't in The Collection.

Runs on GitHub every night (see .github/workflows/spotify-links.yml). It finds the Spotify album for albums the site
lists but you don't own: New Releases, Reissues, the Best Of lists, and every artist's Discography. Found albums get
a play button. Results go to weekly/spotify_links.json, which the site reads.

Spotify gives small apps long breaks if they ask too much, so each run makes at most PER_RUN requests, slowly, and
the next night carries on where it stopped. New Releases and Best Of come first, then Discographies (newest first).
Albums Spotify doesn't have are tried again after RETRY_DAYS days.
Needs the repository secrets SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET (the same ones the weekly check uses).
"""
import base64, datetime as dt, difflib, json, os, re, sys, time, unicodedata, urllib.error, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "weekly", "spotify_links.json")
PER_RUN = 450        # Spotify requests per night (leaves room for the lookups run on the Mac)
GAP = 1.6            # seconds between requests
RETRY_DAYS = 60
TODAY = dt.date.today()


# one-off concert recordings (dated shows, radio sessions): the site leaves these out
CONCERT = re.compile(r"^\d{4}[-\u2010\u2011]\d{2}[-\u2010\u2011]\d{2}|\b\d{1,2}[-\u2010./]\d{1,2}[-\u2010./]\d{2,4}\b|\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.? \d{1,2},? \d{4}|radio (session|concert)|on the air|\bvol\.? ?\d", re.I)


def key(s):   # the same as the site's titleKey(): lower case, no accents, no leading "the", letters and digits only
    s = unicodedata.normalize("NFD", str(s or "").lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", re.sub(r"^the\s+", "", s))


def base(s):  # title without "(Deluxe Edition)", "- Remastered" etc.
    return key(re.split(r"\s+-\s+", re.sub(r"\s*[\(\[].*?[\)\]]", "", str(s or "")))[0])


def load(path, default):
    try:
        return json.load(open(path))
    except Exception:
        return default


class Spotify:
    def __init__(self):
        self.id, self.secret = os.environ.get("SPOTIFY_CLIENT_ID", ""), os.environ.get("SPOTIFY_CLIENT_SECRET", "")
        self.token, self.used, self.stop = None, 0, None

    def get(self, path, params):
        if self.used >= PER_RUN:
            self.stop = self.stop or "this night's limit reached"
            return None
        if not self.token:
            req = urllib.request.Request("https://accounts.spotify.com/api/token", data=b"grant_type=client_credentials",
                  headers={"Authorization": "Basic " + base64.b64encode(f"{self.id}:{self.secret}".encode()).decode(),
                           "Content-Type": "application/x-www-form-urlencoded"})
            self.token = json.load(urllib.request.urlopen(req, timeout=30))["access_token"]
        time.sleep(GAP)
        self.used += 1
        req = urllib.request.Request("https://api.spotify.com/v1" + path + "?" + urllib.parse.urlencode(params),
                                     headers={"Authorization": "Bearer " + self.token})
        try:
            return json.load(urllib.request.urlopen(req, timeout=30))
        except urllib.error.HTTPError as e:
            wait = int(e.headers.get("Retry-After") or 0)
            if e.code == 429 and wait <= 60:
                time.sleep(wait + 1)
                return self.get(path, params)
            if e.code == 429:
                self.stop = f"Spotify asked for a break of {wait // 60} minutes"
            elif e.code in (400, 401):
                self.stop = f"Spotify refused the request ({e.code}); check the SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET secrets"
            return None

    def find(self, artist, title):
        """Spotify album id, "" if Spotify doesn't have it, None if we had to stop before knowing."""
        want_t, want_a = base(title), key(artist)
        various = artist.lower().startswith("various")
        for q in (f'album:"{title}" artist:"{artist}"', f"{artist} {re.sub(r'[(].*?[)]', '', title)}"):
            d = self.get("/search", {"q": q, "type": "album", "limit": 10, "market": "US"})
            if d is None:
                return None
            best = None
            for a in (d.get("albums") or {}).get("items") or []:
                if not a:
                    continue
                arts = [key(x["name"]) for x in a.get("artists", [])]
                if not various and not any(x == want_a or (len(x) > 3 and (x in want_a or want_a in x)) for x in arts):
                    continue
                got = base(a["name"])
                sim = 1.0 if got == want_t else difflib.SequenceMatcher(None, got, want_t).ratio()
                if sim < 0.85:
                    continue
                plain = not re.search(r"deluxe|expanded|anniversary|edition|live|demo|instrumental|karaoke|super|box", a["name"], re.I)
                score = (sim, plain, (a.get("total_tracks") or 0) > 3)
                if not best or score > best[0]:
                    best = (score, a["id"])
            if best:
                return best[1]
        return ""


def targets():
    """(artist name, title) of every album on the site that isn't in the collection, most wanted first."""
    artists = load(os.path.join(ROOT, "data", "artists.json"), {})
    albums = load(os.path.join(ROOT, "data", "albums.json"), [])
    bestof = load(os.path.join(ROOT, "data", "bestof.json"), {})
    newrel = load(os.path.join(ROOT, "weekly", "new_releases.json"), {})
    name = lambda k: (artists.get(k) or {}).get("name") or k
    owned = set()
    for a in albums:
        for who in {a.get("artist", ""), a.get("artistKey", ""), name(a.get("artistKey", ""))}:
            owned |= {(key(who), key(a["title"])), (key(who), base(a["title"]))}
    have = set((bestof.get("_sp") or {}))            # already linked by the Mac lookups
    out, seen = [], set()
    def add(artist, title):
        k = key(artist) + "|" + key(title)
        if k in seen or k in have or (key(artist), key(title)) in owned or (key(artist), base(title)) in owned:
            return
        seen.add(k); out.append((artist, title, k))
    # only the albums the site actually shows (the same rules as its New Releases lists)
    for k, rows in (newrel.get("albums") or {}).items():
        for r in sorted(rows, key=lambda r: -int(r.get("year") or 0)):
            if not r.get("sp") and not r.get("archival") and (not r.get("live") or (r.get("vinyl") and not CONCERT.search(r["title"]))):
                add(name(k), r["title"])
    for k, rows in (newrel.get("reissues") or {}).items():
        for r in sorted(rows, key=lambda r: -int(r.get("year") or 0)):
            if not r.get("sp") and not r.get("archival") and int(r.get("orig") or 9999) <= int(r.get("year") or 0) - 3:
                add(name(k), r["title"])
    for lst, rows in bestof.items():
        if not lst.startswith("_") and isinstance(rows, list):
            for r in rows:
                if isinstance(r, list) and len(r) >= 2:
                    add(r[0], r[1])
    disc = [(int(s.get("year") or 0), name(k), s["title"]) for k, a in artists.items() for s in a.get("studio_albums") or [] if not s.get("sp")]
    for y, artist, title in sorted(disc, reverse=True):
        add(artist, title)
    return out


def main():
    data = load(OUT, {})
    sp, miss = data.setdefault("sp", {}), data.setdefault("miss", {})
    if not (os.environ.get("SPOTIFY_CLIENT_ID") and os.environ.get("SPOTIFY_CLIENT_SECRET")):
        sys.exit("The SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET secrets are missing.")
    old = (TODAY - dt.timedelta(days=RETRY_DAYS)).isoformat()
    todo = [t for t in targets() if t[2] not in sp and miss.get(t[2], "") <= old]
    print(f"{len(todo)} albums still to look up on Spotify.")
    s, found, gone = Spotify(), 0, 0
    for artist, title, k in todo:
        got = s.find(artist, title)
        if got is None:
            break
        if got:
            sp[k] = got; miss.pop(k, None); found += 1
        else:
            miss[k] = TODAY.isoformat(); gone += 1
    data["updated"] = TODAY.isoformat()
    data["left"] = max(0, len(todo) - found - gone)
    with open(OUT + ".tmp", "w") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
    os.replace(OUT + ".tmp", OUT)
    print(f"Found {found}, not on Spotify {gone}, {data['left']} left for the next nights. Linked in all: {len(sp)}."
          + (f" Stopped: {s.stop}." if s.stop else ""))


if __name__ == "__main__":
    main()
