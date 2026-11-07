"""Weekly check for new albums by the artists in The Collection.

Runs on GitHub (see .github/workflows/new-releases.yml), once a week. For every artist in data/artists.json it asks
MusicBrainz (a free, open music database) for studio and live albums released from 2020 on, and for vinyl reissues, and saves them to
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
FIRST_YEAR = 2020                    # New Releases shows every year from 2020 on
RECHECK_MISSING_DAYS = 30            # artists MusicBrainz couldn't match are tried again after a month
# names MusicBrainz knows an artist by today (the band renamed itself)
SEARCH_AS = {"Dixie Chicks": "The Chicks"}
# archival releases (old recordings put out now) and classical works are left out of New Releases and Reissues
ARCHIVAL = re.compile(r"\b(unreleased|outtakes?|rarities|from the vaults?|the vaults?|archives?|archival|broadcasts?|bbc sessions|radio sessions|"
                      r"bootleg series|demos?|lost (?:\w+ )?(?:tapes|recordings|sessions|album|reels|concerts?|broadcasts?)|previously unissued)\b|\bcomplete\b.*\bsessions?\b", re.I)
LIVEISH = re.compile(r"\b(live|sessions?|concerts?|recordings?|tour|at the|in concert)\b", re.I)
CLASSICAL = re.compile(r"\b(symphon(y|ies|ic)|concertos?|sonatas?|op\.\s?\d|opus \d|bwv|requiem|cantatas?|string quartets?|oratorio|beethoven|mozart|bach|"
                       r"chopin|brahms|vivaldi|tchaikovsky|dvo[rř][aá]k|debussy|handel|schubert|mahler|haydn|rachmaninoff|stravinsky)\b", re.I)


def archival_title(title, year):
    if ARCHIVAL.search(title):
        return True
    old = [int(y) for y in re.findall(r"\b(19\d\d|20\d\d)\b", title)]
    return any(y <= year - 10 for y in old) and bool(LIVEISH.search(title))   # "Live in Paris (1971)" released in 2022


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


def end_year(a):
    e = ((a or {}).get("life-span") or {}).get("end") or ""
    return int(e[:4]) if e[:4].isdigit() else 0


def find_artist(name, known):
    """The MusicBrainz artist with this name who also made at least one album we know of (so a namesake isn't picked).
    Returns (id, year the artist ended or 0)."""
    name = SEARCH_AS.get(name, name)
    q = str(name).replace("\\", " ").replace('"', '\\"')
    d = mb("artist/", {"query": f'artist:"{q}"', "limit": 8}) or {}
    want = fold(name)
    cands = [a for a in d.get("artists", [])
             if int(a.get("score", 0)) >= 90 and any(fold(n) == want for n in [a.get("name", "")] + [x.get("name", "") for x in a.get("aliases", []) or []])]
    for a in cands[:3]:
        g = mb("release-group", {"artist": a["id"], "limit": 100}) or {}
        titles = {bare(x.get("title", "")) for x in g.get("release-groups", [])} | {fold(x.get("title", "")) for x in g.get("release-groups", [])}
        if titles & known:
            return a["id"], end_year(a)
    return None, 0


def kind_ok(g):
    """Studio albums and live albums; no compilations, soundtracks, remixes, demos, DJ mixes or interviews."""
    sec = g.get("secondary-types") or []
    return g.get("primary-type") == "Album" and set(sec) <= {"Live"}


def albums_of(mbid):
    """New studio and live albums (first released from FIRST_YEAR on)."""
    out, offset = [], 0
    while True:
        d = mb("release-group", {"artist": mbid, "type": "album", "limit": 100, "offset": offset})
        if not d:
            return None if offset == 0 else out
        groups = d.get("release-groups", [])
        for g in groups:
            date = g.get("first-release-date") or ""
            if not kind_ok(g) or not date[:4].isdigit():
                continue
            if int(date[:4]) < FIRST_YEAR or date > TODAY.isoformat():
                continue          # too old to matter here, or not out yet
            a = {"title": g["title"], "date": date, "year": int(date[:4]), "mb": g["id"]}
            if "Live" in (g.get("secondary-types") or []):
                a["live"] = True
            out.append(a)
        offset += len(groups)
        if not groups or offset >= d.get("release-group-count", 0):
            return out


def reissues_of(mbid):
    """Vinyl reissues from FIRST_YEAR on: an official vinyl release of a studio or live album first released in an earlier year.
    One entry per album per year (the earliest such release that year)."""
    found, vinyl, offset = {}, set(), 0
    while True:
        d = mb("release", {"artist": mbid, "type": "album", "status": "official", "inc": "release-groups+media", "limit": 100, "offset": offset})
        if not d:
            return (None, vinyl) if offset == 0 else (sorted(found.values(), key=lambda e: e["date"]), vinyl)
        rels = d.get("releases", [])
        for r in rels:
            date, g = r.get("date") or "", r.get("release-group") or {}
            first = g.get("first-release-date") or ""
            if g.get("id") and any("vinyl" in (m.get("format") or "").lower() for m in r.get("media") or []):
                vinyl.add(g["id"])            # this album is (or was) out on vinyl
            if not (date[:4].isdigit() and first[:4].isdigit()) or not kind_ok(g):
                continue
            year = int(date[:4])
            if year < FIRST_YEAR or date > TODAY.isoformat() or int(first[:4]) >= year:
                continue          # not a reissue (first released that same year), too old, or not out yet
            if not any("vinyl" in (m.get("format") or "").lower() for m in r.get("media") or []):
                continue          # vinyl and colored vinyl only (no CD, cassette or digital reissues)
            key = (g["id"], year)
            if key not in found or date < found[key]["date"]:
                e = {"title": g.get("title") or r.get("title"), "date": date, "year": year, "orig": int(first[:4]), "mb": g["id"]}
                if "Live" in (g.get("secondary-types") or []):
                    e["live"] = True
                found[key] = e
        offset += len(rels)
        if not rels or offset >= d.get("release-count", 0):
            return sorted(found.values(), key=lambda e: e["date"]), vinyl


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
    # artists whose albums in the collection are mostly classical (composers, orchestras, Yo-Yo Ma ...)
    cl, tot = {}, {}
    for a in json.load(open(os.path.join(ROOT, "data", "albums.json"))):
        k = a.get("artistKey") or a.get("artist")
        tot[k] = tot.get(k, 0) + 1
        cl[k] = cl.get(k, 0) + ("Classical" in (a.get("genres") or []))
    classical = {k for k in tot if cl[k] * 2 >= tot[k] and cl[k]}
    for k, v in artists.items():
        for x in v.get("studio_albums") or []:
            known.setdefault(k, set()).update({fold(x["title"]), bare(x["title"])})
    had_state = os.path.exists(OUT)
    state = json.load(open(OUT)) if had_state else {}
    v2 = state.get("version", 1) >= 2           # live albums and reissues are tracked from version 2 on
    recent = (TODAY - dt.timedelta(days=90)).isoformat()   # the weekly email lists only albums out in the last 3 months
    report = {"new": [], "live": [], "reissue": []}
    found_ids, albums, reissues = state.get("artists", {}), state.get("albums", {}), state.get("reissues", {})
    started = time.time()
    sp = Spotify()
    # artists whose reissues were checked longest ago go first, so a run that runs out of time is finished by the next one
    names = sorted((k for k in artists if k and not SKIP.search(k)), key=lambda k: (found_ids.get(k, {}).get("ri", ""), k))
    print(f"Checking {len(names)} artists on MusicBrainz (albums from {FIRST_YEAR} on)...")
    new_count = 0
    for i, key in enumerate(names, 1):
        info = found_ids.get(key, {})
        tracked, ri_before = bool(info.get("mbid")), bool(info.get("ri"))   # an artist checked for the first time reports nothing (it's all old news)
        if not info.get("mbid"):
            tried = info.get("tried", "")
            if tried and (TODAY - dt.date.fromisoformat(tried)).days < RECHECK_MISSING_DAYS and key not in SEARCH_AS:
                continue
            mbid, ended = find_artist(artists[key].get("name") or key, known.get(key, set()) - {""})
            info = {"mbid": mbid, "end": ended} if mbid else {"tried": TODAY.isoformat()}
            found_ids[key] = info
            if not mbid:
                continue
        if "end" not in info:          # artists matched before this was tracked: look up once when they stopped
            info["end"] = end_year(mb("artist/" + info["mbid"], {}))
        if key in classical:
            albums.pop(key, None); reissues.pop(key, None)
            continue                      # classical composers and orchestras: not part of New Releases
        got = albums_of(info["mbid"])
        if got is None:
            continue                      # MusicBrainz didn't answer: keep last week's list
        old = {a["mb"]: a for a in albums.get(key, [])}
        for a in got:
            # archival: put out after the artist died or broke up, or an old recording by its title ("Live in Paris (1971)", "The Lost Tapes")
            if (info.get("end") and a["year"] > info["end"]) or archival_title(a["title"], a["year"]) or CLASSICAL.search(a["title"]):
                a["archival"] = True
            prev = old.get(a["mb"])
            if prev is None:
                new_count += 1
                print(f"  new: {key} - {a['title']} ({a['date']})")
                if had_state and tracked and a["date"] >= recent and (v2 or not a.get("live")) and not a.get("archival"):
                    report["live" if a.get("live") else "new"].append((key, a))
            if prev and prev.get("vinyl"):
                a["vinyl"] = True
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
        # vinyl reissues (the longest part: every official release of the artist); skipped if the run is getting long,
        # in which case last week's reissues stay and the next run carries on
        if time.time() - started < 95 * 60:          # GitHub stops the job at 2 hours
            ri, on_vinyl = reissues_of(info["mbid"])
            for a in albums.get(key, []):
                if a["mb"] in on_vinyl:
                    a["vinyl"] = True
            if ri is not None:
                info["ri"] = TODAY.isoformat()
                seen = {(e["mb"], e["year"]) for e in reissues.get(key, [])}
                for e in ri:
                    if archival_title(e["title"], e["year"]) or CLASSICAL.search(e["title"]):
                        e["archival"] = True
                    elif info.get("end") and e["orig"] > info["end"]:
                        e["archival"] = True          # first put out after the artist was gone: archival, then reissued
                    elif ri_before and v2 and (e["mb"], e["year"]) not in seen and e["date"] >= recent:
                        report["reissue"].append((key, e))
                if ri:
                    reissues[key] = ri
                else:
                    reissues.pop(key, None)
        if i % 50 == 0:
            print(f"  {i}/{len(names)}")
    write_email(report, artists)
    out = {"version": 2, "updated": TODAY.isoformat(), "first_year": FIRST_YEAR, "artists": found_ids, "albums": albums, "reissues": reissues}
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    json.dump(out, open(OUT, "w"), indent=0, ensure_ascii=False, sort_keys=True)
    total = sum(len(v) for v in albums.values())
    print(f"Done: {total} albums from {FIRST_YEAR} on for {len(albums)} artists ({new_count} new since last week); "
          f"{sum(len(v) for v in reissues.values())} vinyl reissues for {len(reissues)} artists.")


def write_email(report, artists):
    """weekly/this_week.md: this week's finds in three sections; GitHub posts it as an issue, which it emails to you."""
    path = os.path.join(ROOT, "weekly", "this_week.md")
    if os.path.exists(path):
        os.remove(path)
    if not any(report.values()):
        print("Nothing new for the weekly email.")
        return
    nice = lambda d: dt.date.fromisoformat(d).strftime("%b %-d, %Y") if len(d) == 10 else d
    def line(key, a, extra=""):
        name = artists.get(key, {}).get("name") or key
        links = [f"[MusicBrainz](https://musicbrainz.org/release-group/{a['mb']})"]
        if a.get("sp"):
            links.insert(0, f"[Spotify](https://open.spotify.com/album/{a['sp']})")
        return f"- **{name}** · {a['title']}{extra} · {nice(a['date'])} · " + " · ".join(links)
    out = [f"Albums by artists in The Collection found this week ({TODAY.strftime('%b %-d, %Y')}).", ""]
    sections = [("New Releases", "new", lambda a: " (on vinyl)" if a.get("vinyl") else ""),
                ("New Reissues (vinyl)", "reissue", lambda a: f" (Reissue of {a['orig']} Album)"),
                ("New Live Albums", "live", lambda a: " (on vinyl)" if a.get("vinyl") else "")]
    for title, k, extra in sections:
        best = {}   # one line per album, even when it's listed under several names ("Willie Nelson" / "Willie Nelson & Family")
        for key, a in report[k]:
            name = artists.get(key, {}).get("name") or key
            if a["mb"] not in best or len(name) < len(artists.get(best[a["mb"]][0], {}).get("name") or best[a["mb"]][0]):
                best[a["mb"]] = (key, a)
        items = sorted(best.values(), key=lambda x: (fold(artists.get(x[0], {}).get("name") or x[0]), x[1]["title"]))
        out += [f"## {title}", ""] + ([line(key, a, extra(a)) for key, a in items] or ["None this week."]) + [""]
    out += ["See every year's lists on [The Collection](https://mrjonessf.com/music) under New Releases."]
    open(path, "w").write("\n".join(out) + "\n")
    print(f"Weekly email: {len(report['new'])} new, {len(report['reissue'])} reissues, {len(report['live'])} live.")


if __name__ == "__main__":
    sys.exit(main())
