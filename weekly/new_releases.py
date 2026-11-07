"""Weekly check for new albums by the artists in The Collection.

Runs on GitHub (see .github/workflows/new-releases.yml), once a week. For every artist in data/artists.json it asks
MusicBrainz (a free, open music database) for studio albums released in the last few years, and saves them to
weekly/new_releases.json. The site reads that file and adds any album it doesn't already list to the artist's
Discography and to the New Releases lists.

Optional: if the repository has SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET secrets, new albums also get a Spotify
link (so they get a play button). Without them everything else still works.
"""
import base64, datetime as dt, json, os, re, sys, time, unicodedata, urllib.parse, urllib.request, urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "weekly", "new_releases.json")
UA = "TheCollection/1.0 ( https://jimjonessf.github.io/collection/ )"   # MusicBrainz asks every program to name itself
TODAY = dt.date.today()
FIRST_YEAR = TODAY.year - 6          # keep albums from the last six years (New Releases shows the last six)
RECHECK_MISSING_DAYS = 30            # artists MusicBrainz couldn't match are tried again after a month
SKIP = re.compile(r"various|original (broadway|london|motion|cast|soundtrack)|soundtrack|cast recording", re.I)


def fold(s):
    s = unicodedata.normalize("NFKD", str(s)).encode("ascii", "ignore").decode().lower()
    s = s.replace("&", " and ").replace("+", " and ")
    s = re.sub(r"^the\s+", "", s)
    return re.sub(r"[^a-z0-9]", "", s)


_last = [0.0]
def mb(path, params):
    """One MusicBrainz request, at most one per 1.1 seconds (their rule), with a few retries."""
    url = "https://musicbrainz.org/ws/2/" + path + "?" + urllib.parse.urlencode({**params, "fmt": "json"})
    for attempt in range(5):
        wait = 1.1 - (time.time() - _last[0])
        if wait > 0:
            time.sleep(wait)
        _last[0] = time.time()
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=30) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code in (503, 429, 502, 500):
                time.sleep(5 * (attempt + 1)); continue
            if e.code == 404:
                return None
            raise
        except (urllib.error.URLError, TimeoutError):
            time.sleep(5 * (attempt + 1))
    return None


def bare(s):
    return fold(re.sub(r"\s*[\(\[].*?[\)\]]", "", str(s)))


def find_artist(name, known):
    """The MusicBrainz artist with this name who also made at least one album we know of (so a namesake isn't picked)."""
    q = str(name).replace("\\", " ").replace('"', '\\"')
    d = mb("artist/", {"query": f'artist:"{q}"', "limit": 8}) or {}
    want = fold(name)
    cands = [a["id"] for a in d.get("artists", [])
             if int(a.get("score", 0)) >= 90 and any(fold(n) == want for n in [a.get("name", "")] + [x.get("name", "") for x in a.get("aliases", []) or []])]
    for mbid in cands[:3]:
        g = mb("release-group", {"artist": mbid, "limit": 100}) or {}
        titles = {bare(x.get("title", "")) for x in g.get("release-groups", [])} | {fold(x.get("title", "")) for x in g.get("release-groups", [])}
        if titles & known:
            return mbid
    return None


def albums_of(mbid):
    out, offset = [], 0
    while True:
        d = mb("release-group", {"artist": mbid, "type": "album", "limit": 100, "offset": offset})
        if not d:
            return None if offset == 0 else out
        groups = d.get("release-groups", [])
        for g in groups:
            date = g.get("first-release-date") or ""
            if g.get("primary-type") != "Album" or g.get("secondary-types") or not date[:4].isdigit():
                continue          # studio albums only: no live albums, compilations, soundtracks, remixes or demos
            if int(date[:4]) < FIRST_YEAR or date > TODAY.isoformat():
                continue          # too old to matter here, or not out yet
            out.append({"title": g["title"], "date": date, "year": int(date[:4]), "mb": g["id"]})
        offset += len(groups)
        if not groups or offset >= d.get("release-group-count", 0):
            return out


class Spotify:
    def __init__(self):
        self.id, self.secret = os.environ.get("SPOTIFY_CLIENT_ID", ""), os.environ.get("SPOTIFY_CLIENT_SECRET", "")
        self.token, self.off = None, not (self.id and self.secret)

    def find(self, artist, title):
        if self.off:
            return None
        try:
            if not self.token:
                req = urllib.request.Request("https://accounts.spotify.com/api/token", data=b"grant_type=client_credentials",
                      headers={"Authorization": "Basic " + base64.b64encode(f"{self.id}:{self.secret}".encode()).decode(),
                               "Content-Type": "application/x-www-form-urlencoded"})
                self.token = json.load(urllib.request.urlopen(req, timeout=30))["access_token"]
            q = urllib.parse.urlencode({"q": f'album:"{title}" artist:"{artist}"', "type": "album", "limit": 10})
            req = urllib.request.Request("https://api.spotify.com/v1/search?" + q, headers={"Authorization": "Bearer " + self.token})
            items = json.load(urllib.request.urlopen(req, timeout=30)).get("albums", {}).get("items", [])
            time.sleep(0.5)
            for it in items:
                if fold(it["name"]) == fold(title) and any(fold(a["name"]) == fold(artist) for a in it["artists"]):
                    return it["id"]
            return ""
        except urllib.error.HTTPError as e:
            if e.code == 429:
                print("Spotify is limiting requests; Spotify links will be tried again next week.")
            self.off = True
            return None
        except Exception:
            return None


def main():
    artists = json.load(open(os.path.join(ROOT, "data", "artists.json")))
    known = {}
    for a in json.load(open(os.path.join(ROOT, "data", "albums.json"))):
        known.setdefault(a.get("artistKey") or a.get("artist"), set()).update({fold(a["title"]), bare(a["title"])})
    for k, v in artists.items():
        for x in v.get("studio_albums") or []:
            known.setdefault(k, set()).update({fold(x["title"]), bare(x["title"])})
    state = json.load(open(OUT)) if os.path.exists(OUT) else {}
    found_ids, albums = state.get("artists", {}), state.get("albums", {})
    sp = Spotify()
    names = sorted(k for k in artists if k and not SKIP.search(k))
    print(f"Checking {len(names)} artists on MusicBrainz (albums from {FIRST_YEAR} on)...")
    new_count = 0
    for i, key in enumerate(names, 1):
        info = found_ids.get(key, {})
        if not info.get("mbid"):
            tried = info.get("tried", "")
            if tried and (TODAY - dt.date.fromisoformat(tried)).days < RECHECK_MISSING_DAYS:
                continue
            mbid = find_artist(artists[key].get("name") or key, known.get(key, set()) - {""})
            info = {"mbid": mbid} if mbid else {"tried": TODAY.isoformat()}
            found_ids[key] = info
            if not mbid:
                continue
        got = albums_of(info["mbid"])
        if got is None:
            continue                      # MusicBrainz didn't answer: keep last week's list
        old = {a["mb"]: a for a in albums.get(key, [])}
        for a in got:
            prev = old.get(a["mb"])
            if prev is None:
                new_count += 1
                print(f"  new: {key} - {a['title']} ({a['date']})")
            a["sp"] = (prev or {}).get("sp", "")
            if not a["sp"] and (not prev or prev.get("sp_tried", "") < (TODAY - dt.timedelta(days=7)).isoformat()):
                s = sp.find(artists[key].get("name") or key, a["title"])
                if s is not None:
                    a["sp"] = s or ""
                    if not s:
                        a["sp_tried"] = TODAY.isoformat()
            elif prev and prev.get("sp_tried"):
                a["sp_tried"] = prev["sp_tried"]
        if got:
            albums[key] = sorted(got, key=lambda a: a["date"])
        else:
            albums.pop(key, None)
        if i % 50 == 0:
            print(f"  {i}/{len(names)}")
    out = {"updated": TODAY.isoformat(), "first_year": FIRST_YEAR, "artists": found_ids, "albums": albums}
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    json.dump(out, open(OUT, "w"), indent=0, ensure_ascii=False, sort_keys=True)
    total = sum(len(v) for v in albums.values())
    print(f"Done: {total} albums from {FIRST_YEAR} on for {len(albums)} artists ({new_count} new since last week).")


if __name__ == "__main__":
    sys.exit(main())
