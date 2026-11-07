/* The Collection - embed for mrjonessf.com/music. Generated file: edit page_template.html and rebuild instead. */
(function () {
  var script = document.currentScript;
  var BASE = new URL('.', script.src).href;
  var host = document.getElementById('the-collection');
  if (!host) { host = document.createElement('div'); host.id = 'the-collection'; script.parentNode.insertBefore(host, script); }
  if (host.shadowRoot) return;
  // keep the host page's styles (borders, outlines, shadows on code blocks or divs) from framing The Collection
  host.style.cssText += ';border:0 !important;outline:0 !important;box-shadow:none !important;background:transparent !important;padding:0 !important;';
  var p = host.parentElement;
  for (var i = 0; p && i < 3; i++, p = p.parentElement) { if (/sqs-block|code-block|sqs-html/.test(p.className || '')) p.style.cssText += ';border:0 !important;outline:0 !important;box-shadow:none !important;'; }
  if (!document.querySelector('link[data-collection-fonts]')) {
    var f = document.createElement('link'); f.rel = 'stylesheet'; f.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Poppins:wght@300;400;500;600&family=Pinyon+Script&display=swap"; f.setAttribute('data-collection-fonts', ''); document.head.appendChild(f);
  }
  var root = host.attachShadow({ mode: 'open' });
  root.innerHTML = '<style>' + "\n/* Layout: matches mrjonessf.com \u2014 Manrope headings, Poppins text, the site's five-step grey palette, square outlined buttons and underline fields.\n   Cover wall up front; each album opens to a \"back of the sleeve\" page. The logo's octopus orange is the only accent. */\n:host{\n  --paper:#ffffff; --panel:#f3f3f3; --line:#d4d4d4; --muted:#6e6e6e; --ink:#000000; --accent:#d96a34; --on-ink:#ffffff;\n  --sleeve-shadow:rgba(0,0,0,.22); --shadow-near:rgba(0,0,0,.32); --sleeve-light:rgba(255,255,255,.24); --sleeve-dark:rgba(0,0,0,.20); --vinyl:#151515; --vinyl-hi:#5a5a5a;\n  --f-head:\"Manrope\",ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;\n  --f-body:\"Poppins\",ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;\n}\n\n*{box-sizing:border-box}\n:host{display:block;background:var(--paper);color:var(--ink);font-family:var(--f-body);font-weight:400;font-size:16px;line-height:1.6;text-align:left}\n:host *{box-sizing:border-box}\n\na{color:inherit}\n:focus-visible{outline:2px solid var(--accent);outline-offset:3px}\n.wrap{max-width:1560px;margin:0 auto}\n.label{font:600 11px/1.4 var(--f-body);text-transform:uppercase;letter-spacing:.14em;color:var(--muted)}\n\n/* stand-in for the mrjonessf.com Squarespace header */\n.site{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 28px;padding-block:18px;border-bottom:1px solid var(--line)}\n.site img{height:58px;width:auto;display:block}\n.site nav{display:flex;flex-wrap:wrap;gap:6px 22px;font-size:14px}\n.site nav a{text-decoration:none;padding-bottom:2px}\n.site nav a[aria-current]{border-bottom:2px solid var(--accent)}\n\n/* page title */\n.mast{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 28px;padding-block:44px 22px}\n.mast h1{font:400 clamp(52px,8.5vw,112px)/1.15 \"Pinyon Script\",var(--f-head),cursive;letter-spacing:0;margin:6px 0 0;padding-bottom:.08em}   /* script title, in the spirit of the Marantz \"Stereophonic Receiver\" lettering */\n.mast h1 a{text-decoration:none}\n/* home page banner: the receiver photo (STEREO light and tuning dial), title and counts in white over its darker lower part */\n.wrap.photo .mast{color:#fff;aspect-ratio:8/3;align-content:flex-end;padding:0 40px 34px;background:linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.8)),var(--banner) center 4.6%/cover}   /* bottom quarter of the old 2:1 banner trimmed; same top edge */\n.wrap.photo .mast h1 a,.wrap.photo .mast .stats b,.wrap.photo .mast .stats .label{color:#fff}\n.wrap.photo .mast .shuffle{border-color:#fff;color:#fff}\n.wrap.photo .mast .shuffle .ic{background:#fff;color:#000}\n.wrap.photo .mast .shuffle:hover,.wrap.photo .mast .shuffle.on{border-color:var(--accent)}\n.wrap.photo .mast .shuffle:hover .ic,.wrap.photo .mast .shuffle.on .ic{background:var(--accent);color:#fff}\n/* album pages: no photo and no counters; a larger \"\u2190 The Collection\" link leads back home */\n.wrap.albumpg .mast{display:none}\n.wrap.albumpg .back{font:600 20px/1.2 var(--f-head);letter-spacing:-.01em;color:var(--ink);padding-block:28px 22px}\n.wrap.albumpg .back:hover{color:var(--accent)}\n@media (max-width:620px){.wrap.photo .mast{aspect-ratio:auto;padding:200px 18px 20px;background:linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.8)),var(--banner-sm) 72% 0%/cover}}\n.stats{display:flex;flex-wrap:wrap;gap:10px 28px}\n.stats span{display:flex;flex-direction:column;align-items:center;text-align:center}\n.stats .label{padding-left:.14em}   /* balances the letter-spacing after the last letter so the label sits truly centered */\n.stats b{padding-right:.02em}\n.stats b{font:600 28px/1.1 var(--f-head);letter-spacing:-.02em;font-variant-numeric:tabular-nums}\n/* Shuffle Play: plays every song on the albums the home page is showing right now, in random order */\n.shuffle{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:10px;align-self:center;\n  border:1.5px solid var(--ink);padding:7px 14px 7px 10px;color:var(--ink);background:transparent}\n.shuffle .ic{width:30px;height:30px;flex:none;border-radius:50%;background:var(--ink);color:var(--on-ink);display:grid;place-items:center}\n.shuffle .ic svg{width:16px;height:16px}\n.stats .shuffle span.tx{display:flex;flex-direction:column;align-items:flex-start;text-align:left}\n.shuffle .tx b{font:600 15px/1.2 var(--f-head);letter-spacing:-.005em;padding:0}\n.shuffle .tx .label{padding-left:0;letter-spacing:.1em;white-space:nowrap}\n.shuffle:hover,.shuffle.on{border-color:var(--accent)}\n.shuffle:hover .ic,.shuffle.on .ic{background:var(--accent);color:#fff}\n.shuffle:focus-visible{outline:2px solid var(--accent);outline-offset:3px}\n.shuffle[disabled]{opacity:.4;cursor:default}\n@media (max-width:620px){.shuffle{flex:1 1 100%}}\n.player .resume{all:unset;cursor:pointer;flex:none;display:inline-flex;align-items:center;gap:8px;padding:9px 18px;background:var(--accent);color:#fff;font:600 14px/1 var(--f-head)}\n.player .resume svg{width:11px;height:12px}\n.player .resume:hover{background:var(--ink)}\n.player .resume[hidden]{display:none}\n.player .here{all:unset;cursor:pointer;flex:none;font:600 12px/1 var(--f-head);padding:8px 10px;border:1.5px solid var(--line);color:var(--muted);white-space:nowrap}\n.player .here:hover{border-color:var(--accent);color:var(--accent)}\n.player .here[hidden]{display:none}\n@media (max-width:620px){.player .here{display:none}}\n.sp-toast{position:fixed;left:50%;bottom:96px;transform:translateX(-50%);z-index:30;background:var(--ink);color:var(--paper);padding:12px 18px;font-size:14px;max-width:min(560px,92vw);box-shadow:0 8px 24px rgba(0,0,0,.25)}\n.sp-toast a{color:var(--accent);font-weight:600}\n.sp-toast button{all:unset;cursor:pointer;margin-left:12px;opacity:.7}\n.player .skip{all:unset;cursor:pointer;flex:none;width:30px;height:30px;display:grid;place-items:center;border:1.5px solid var(--ink);color:var(--ink)}\n.player .skip svg{width:14px;height:14px}\n.player .skip:hover{background:var(--accent);border-color:var(--accent);color:#fff}\n.player .skip[hidden]{display:none}\n.player .now .sub{display:block;font-size:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.player .now .sub a{color:inherit;text-decoration:none;border-bottom:1px solid var(--line)}\n.player .now .sub a:hover,.player .now .sub a:focus-visible{color:var(--accent);border-color:var(--accent)}\n\n/* toolbar: underline fields like the site's forms */\n.tools{display:flex;flex-wrap:wrap;gap:14px 24px;align-items:flex-end;padding-block:8px 18px;border-top:1px solid var(--line)}\n.field{display:flex;flex-direction:column;gap:2px;min-width:0}\n.field.grow{flex:0 1 calc((100% - 269px) / 2);min-width:260px}   /* half the old width; Sort by stays at the right */\n.tools > .field:last-child{margin-left:auto}\n@media (max-width:700px){.field.grow{flex:1 1 100%}.tools > .field:last-child{margin-left:0}}\n.field input,.field select{font:400 15px var(--f-body);color:var(--ink);background:transparent;border:0;border-bottom:1.5px solid var(--muted);border-radius:0;padding:8px 0;width:100%}\n.field select{padding-right:22px;cursor:pointer}\n.field input:focus,.field select:focus{outline:none;border-bottom-color:var(--ink)}\n.filters{display:flex;flex-direction:column;gap:12px;padding-bottom:32px}\n.filter-row{display:grid;grid-template-columns:5.5em minmax(0,1fr);gap:10px;align-items:start}\n.filter-row > .label{min-height:35px;display:flex;align-items:center}\n.chips{display:flex;flex-wrap:wrap;gap:8px}\n.chip:disabled{opacity:.35;cursor:default;background:transparent}\n@media (max-width:520px){.filter-row{grid-template-columns:minmax(0,1fr);gap:6px}.filter-row > .label{min-height:0}}\n.chip{text-align:center;font:500 13px/20px var(--f-body);border:1.5px solid var(--ink);background:transparent;color:var(--ink);padding:6px 14px;border-radius:0;cursor:pointer}\n.chip:hover{background:var(--panel)}\n.chip[aria-pressed=\"true\"]{background:var(--ink);color:var(--on-ink)}\n.chip small{margin-left:6px;opacity:.6;font-size:11px}\n\n/* cover wall */\n.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:34px 22px}\n.rec{display:flex;flex-direction:column;gap:10px;min-width:0}\n.rec a{text-decoration:none}\n.rec .cover{display:block}\n.rec .meta-row{display:flex;gap:10px;align-items:flex-start;justify-content:space-between;min-width:0}\n.rec .meta-row .meta{flex:1}\n.mini-play{all:unset;box-sizing:border-box;flex:none;width:14px;height:14px;margin-top:2px;border:1px solid var(--ink);position:relative;color:var(--ink);display:grid;place-items:center;cursor:pointer}\n.mini-play svg{width:6px;height:6px;margin-left:1px}\n.mini-play::after{content:\"\";position:absolute;inset:-10px}\n.mini-play:hover{background:var(--accent);border-color:var(--accent);color:#fff}\n.mini-play:focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n.mini-play.on{background:var(--accent);border-color:var(--accent);color:#fff}\n.sleeve{position:relative;aspect-ratio:1;max-width:100%;background:var(--panel)}\n.sleeve img{width:100%;height:100%;object-fit:cover;display:block;position:relative;z-index:1;\n  box-shadow:0 2px 3px var(--shadow-near),0 6px 12px var(--sleeve-shadow),0 18px 34px var(--sleeve-shadow)}\n/* light falling from the top left across the sleeve, with a faint edge, so covers read as card stock */\n.sleeve:has(img)::after{content:\"\";position:absolute;inset:0;z-index:2;pointer-events:none;\n  background:linear-gradient(135deg,var(--sleeve-light) 0%,transparent 42%,transparent 55%,var(--sleeve-dark) 100%);\n  box-shadow:inset 1px 1px 0 var(--sleeve-light),inset -1px -1px 0 var(--sleeve-dark)}\n.disc{position:absolute;inset:3%;border-radius:50%;z-index:0;\n  background:#151515;transition:transform .35s ease}\n.rec:hover .disc,.rec:focus-within .disc{transform:translateX(16%)}\n.rec .meta{min-width:0;display:flex;flex-direction:column}\n.rec .t{font-weight:500;font-size:14px;line-height:1.3}\n.rec .a{font-size:13px;color:var(--muted);line-height:1.4}\n.rec .y{font-size:11px;color:var(--muted);letter-spacing:.04em;margin-top:2px}\n.rec .ty{font-size:11px;color:var(--muted);letter-spacing:.04em;line-height:1.4}\n.blank{position:absolute;inset:0;z-index:1;display:flex;flex-direction:column;justify-content:flex-end;padding:14px;gap:2px;background:var(--panel);border:1.5px solid var(--line)}\n.blank span{font:600 18px/1.15 var(--f-head);letter-spacing:-.01em}\n.blank em{font-style:normal;font-size:12px;color:var(--muted)}\n.empty{padding:40px 0;color:var(--muted)}\n\n/* album page */\n.back{display:inline-block;font-size:14px;text-decoration:none;color:var(--muted);padding-block:26px 18px}\n.back:hover{color:var(--ink)}\n.album{display:grid;grid-template-columns:minmax(0,440px) minmax(0,1fr);grid-template-rows:auto 1fr;grid-template-areas:\"cover side\" \"tracks side\";gap:40px 48px;align-items:start}\n.album .cover-col{grid-area:cover}\n.album .side-col{grid-area:side}\n/* tracklist and personnel sit under the cover, in the left column */\n.track-col{grid-area:tracks;min-width:0}\n.track-col h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:0 0 14px}\n.track-col .sides{grid-template-columns:minmax(0,1fr)}\n.track-col .pers{margin-top:34px}\n/* more albums by the artist: one row of covers across the page */\n.more-by{margin-top:56px;padding-top:24px;border-top:2px solid var(--ink)}\n.more-by h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:0 0 18px}\n.more-by h3 a{text-decoration:none;border-bottom:2px solid var(--accent)}\n.more-row{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(150px,170px);gap:22px;overflow-x:auto;padding-bottom:12px;scroll-snap-type:x proximity}\n.more-row .rec{scroll-snap-align:start}\n.album .sleeve img{box-shadow:0 3px 5px var(--shadow-near),0 10px 20px var(--sleeve-shadow),0 32px 58px var(--sleeve-shadow)}\n.album .sleeve{width:85%}\n.cover-col{min-width:0}\n.playalb-row{width:85%;display:flex;justify-content:center;margin-top:34px}\n.playalb-row .shuffle{align-self:auto;flex:none!important}\n.playalb-row .shuffle .tx{display:flex;flex-direction:column;align-items:flex-start;text-align:left}\n.album .disc{transform:translateX(17%);animation:slideOut 1.1s cubic-bezier(.2,.7,.2,1) .3s both}\n@keyframes slideOut{from{transform:translateX(0)}}\n.side-col{display:flex;flex-direction:column;gap:24px;min-width:0}\n.album h2{font:600 clamp(32px,4.6vw,50px)/1.05 var(--f-head);letter-spacing:-.025em;margin:8px 0 8px;text-wrap:balance}\n.album .by{font-size:18px;font-weight:400}\n.album .by a{text-decoration:none;border-bottom:2px solid var(--accent)}\n.pills{display:flex;flex-wrap:wrap;gap:6px}\n.pill{font:500 12px var(--f-body);padding:4px 10px;background:var(--panel)}\n.pill.ed{background:var(--ink);color:var(--on-ink)}\na.pill{text-decoration:none;color:inherit}\na.pill:hover,a.pill:focus-visible{background:var(--accent);color:#fff}\n.listen{display:flex;flex-wrap:wrap;gap:10px}\n.btn{display:inline-flex;align-items:center;gap:9px;font:500 14px var(--f-body);padding:11px 20px;text-decoration:none;border:2px solid var(--ink);background:transparent;color:var(--ink)}\n.btn:hover{background:var(--ink);color:var(--on-ink)}\n.btn svg{width:16px;height:16px;flex:none}\n.notes{border-left:2px solid var(--accent);padding:2px 0 2px 18px;max-width:60ch;font-weight:300;font-size:16px}\n.notes p{margin:0}\n.notes.placeholder{color:var(--muted);border-left-style:dashed;font-size:14px}\n.facts{display:grid;grid-template-columns:max-content minmax(0,1fr);gap:8px 22px;margin:0;font-size:14px;padding-top:20px;border-top:1px solid var(--line)}\n.facts dt{color:var(--muted)}\n.facts dd{margin:0;min-width:0;font-variant-numeric:tabular-nums}\n.facts a{text-decoration:none;border-bottom:1px solid var(--accent)}\n\n/* back of the sleeve */\n.back-sleeve{margin-top:56px;display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:44px;background:var(--panel);padding:32px max(16px,3vw)}\n.back-sleeve h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:0 0 14px}\n.sides{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px 32px}\n.side h4{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin:0 0 4px;padding-bottom:6px;border-bottom:1.5px solid var(--ink)}\n.side h4 .label{color:var(--ink)}\n.side h4 span:last-child{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}\n.side ol{list-style:none;margin:0;padding:0}\n.side li{display:grid;grid-template-columns:2.4em minmax(0,1fr) auto;gap:10px;padding:6px 0;border-bottom:1px solid var(--line);font-size:14px;line-height:1.4}\n.side li .p{font-size:12px;color:var(--muted);padding-top:1px}\n.side li .d{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums;padding-top:1px}\n.credits{list-style:none;margin:0;padding:0;font-size:14px;display:flex;flex-direction:column;gap:8px;line-height:1.45}\n.credits .role{color:var(--muted)}\n.credits a.person{color:inherit;text-decoration:none;border-bottom:1px solid var(--line)}\n.credits a.person:hover,.credits a.person:focus-visible{color:var(--accent);border-color:var(--accent)}\n.album .cover-col .sleeve{cursor:zoom-in}\n/* the big cover: clicking the album cover shows it at about 3/4 of the screen; any click (or Esc) closes it */\n.zoom{position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:rgba(10,10,10,.86);cursor:zoom-out;\n  animation:zoomBg .25s ease both;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}\n.zoom img{width:min(75vw,75vh);height:min(75vw,75vh);object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,.6);animation:zoomIn .3s cubic-bezier(.2,.7,.2,1) both}\n.zoom .cap{position:absolute;left:0;right:0;bottom:max(14px,3vh);text-align:center;color:#ddd;font-size:13px;letter-spacing:.04em}\n@keyframes zoomBg{from{opacity:0}}\n@keyframes zoomIn{from{transform:scale(.6);opacity:0}}\n.pager{display:flex;justify-content:space-between;gap:16px;margin-top:40px;padding-top:18px;border-top:1px solid var(--line);font-size:14px}\n.pager a{text-decoration:none;max-width:48%;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:4px}\n.pager a.nx{text-align:right;align-items:flex-end}\n.pager .pg-cover{width:120px;aspect-ratio:1;object-fit:cover;margin-top:10px;box-shadow:0 2px 4px var(--shadow-near),0 8px 18px var(--sleeve-shadow);transition:transform .2s}\n.pager a:hover .pg-cover{transform:translateY(-3px)}\n@media (max-width:620px){.pager .pg-cover{width:96px}}\n.pager a:hover span{border-bottom:1px solid var(--accent)}\n\n/* playable songs + Spotify player bar */\n.side li .song{all:unset;cursor:pointer;display:flex;gap:8px;align-items:baseline;min-width:0}\n.side li .song:focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n.side li .song .ic{width:10px;flex:none;color:var(--muted);font-size:10px;transform:translateY(-1px)}\n.side li .song:hover,.side li.playing .song{color:var(--accent)}\n.side li .song:hover .ic,.side li.playing .ic{color:var(--accent)}\n.side li.playing{font-weight:500}\n.side li .d{display:flex;justify-content:flex-end;align-items:center;min-height:19px}\n/* spinning record: replaces the song length while that song is actually playing (1.8 s per turn = 33\u2153 rpm) */\n.rec-spin{display:none;width:16px;height:16px;border-radius:50%;flex:none;\n  background:\n    radial-gradient(circle, var(--paper) 0 7%, var(--accent) 8% 30%, transparent 31%),\n    repeating-radial-gradient(circle, transparent 0 1px, rgba(255,255,255,.07) 1px 1.6px),\n    conic-gradient(var(--vinyl) 0 8%, var(--vinyl-hi) 13%, var(--vinyl) 20% 58%, var(--vinyl-hi) 63%, var(--vinyl) 70%);\n  box-shadow:0 0 0 1px rgba(0,0,0,.15);animation:spin 1.8s linear infinite}\n.rec-spin.cd{background:radial-gradient(circle,var(--paper) 0 9%,rgba(255,255,255,.65) 10% 28%,transparent 30%),\n  conic-gradient(rgba(255,80,160,.35),rgba(255,210,60,.35),rgba(60,230,170,.35),rgba(60,140,255,.35),rgba(190,80,255,.35),rgba(255,80,160,.35)),\n  conic-gradient(#cfd2d6,#f4f5f7 25%,#b3b7bd 50%,#eceef1 75%,#cfd2d6);animation-duration:1s}\n.wrap.sp-live .side li.playing .len{display:none}\n.wrap.sp-live .side li.playing .rec-spin{display:block}\n.wrap.sp-paused .side li.playing .rec-spin{animation-play-state:paused}\n@keyframes spin{to{transform:rotate(360deg)}}\n.player{position:fixed;left:0;right:0;bottom:0;z-index:20;background:var(--paper);border-top:2px solid var(--ink);\n  padding:10px max(16px,env(safe-area-inset-right,0px)) calc(10px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px))}\n.player .in{max-width:1560px;margin:0 auto;display:flex;gap:14px;align-items:center}\n.player .now{flex:none;width:170px;min-width:0}\n.player .now b{display:block;font:600 14px/1.3 var(--f-head);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.player .embed{flex:1;min-width:0;min-height:80px}\n.player .embed iframe{display:block;border:0;width:100%}\n.player .msg{font-size:14px;color:var(--muted);flex:1}\n.player .msg a{color:var(--ink)}\n.player .x{all:unset;cursor:pointer;font-size:20px;line-height:1;padding:4px 8px;color:var(--muted)}\n.player .x:hover{color:var(--ink)}\n.wrap.has-player{padding-bottom:120px}\n@media (max-width:620px){.player .now{display:none}}\n/* facts + discography */\n.info{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px;padding-top:20px;border-top:1px solid var(--line)}\n.info .facts{padding-top:0;border-top:0;align-content:start}\n.facts .cats a{text-decoration:none;border-bottom:1px solid var(--line)}\n.facts .cats a:hover,.facts .cats a:focus-visible{color:var(--accent);border-color:var(--accent)}\n.disco h3{font:600 15px/1.2 var(--f-head);margin:0 0 10px;letter-spacing:-.005em}\n.disco ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px;font-size:14px;line-height:1.35}\n.disco li{display:grid;grid-template-columns:3em minmax(0,1fr) 14px;gap:8px;align-items:start}\n.disco .mini-play{margin-top:2px}\n.disco .mini-play.mine{color:var(--accent);border-color:var(--accent)}      /* albums in the collection: orange triangle */\n.disco .mini-play.mine:hover,.disco .mini-play.mine.on{color:#fff}\n.disco .yr{color:var(--muted);font-variant-numeric:tabular-nums}\n.disco li.owned{font-weight:600}\n.disco li.owned a{text-decoration:none;border-bottom:1.5px solid var(--line)}\n.disco li.owned a:hover,.disco li.owned a:focus-visible{border-bottom-color:var(--accent);color:var(--accent)}\n.disco li.current{font-weight:600;color:var(--accent)}\n.disco li.current .yr{color:var(--accent)}\n.disco .xt{font-weight:400;font-size:12px;color:var(--muted);white-space:nowrap}\n.disco .note{font-size:12px;color:var(--muted);margin:10px 0 0}\n/* award medals for best-of lists (original design: gold medal, orange ribbons) */\n/* the whole Best Of list under the albums when a Best Of button is on */\n.bestfull{margin-top:64px;padding-top:22px;border-top:2px solid var(--ink)}\n.bestfull+.bestfull{margin-top:48px}\n.bestfull h2{font:600 24px/1.2 var(--f-head);letter-spacing:-.01em;margin:0 0 4px}\n.bestfull .sub{color:var(--muted);font-size:14px;margin:0 0 18px}\n.bestfull .sub b{color:var(--accent);font-weight:600}\n.bestfull ol{list-style:none;margin:0;padding:0;columns:3 280px;column-gap:34px}\n.bestfull li{break-inside:avoid;display:grid;grid-template-columns:3.2em 1fr 14px;align-items:start;gap:8px;padding:5px 6px;font-size:14px;line-height:1.35;border-bottom:1px solid var(--panel);color:var(--muted)}\n.bestfull li .n{font-variant-numeric:tabular-nums;text-align:right;color:var(--muted)}\n.bestfull li .a{color:var(--ink)}\n.bestfull .mini-play{margin-top:2px}\n.bestfull .mini-play.mine{color:var(--accent);border-color:var(--accent)}\n.bestfull .mini-play.mine:hover,.bestfull .mini-play.mine.on{color:#fff}\n.bestfull li.own{background:color-mix(in srgb,var(--accent) 12%,transparent);color:var(--ink)}\n.bestfull li.own .n{color:var(--accent);font-weight:700}\n.bestfull li.own a{color:var(--ink);font-weight:600;text-decoration:none}\n.bestfull li.own a:hover{color:var(--accent);text-decoration:underline}\n.bestfull li.own a::after{content:\" \u2192\";color:var(--accent)}\n.bestfull .xt{font-size:12px;font-weight:400;color:var(--muted);white-space:nowrap}\n.best-row{display:grid;grid-template-columns:max-content max-content 1fr;gap:8px 18px;align-items:start;font-size:14px;margin-top:18px;padding-top:16px;border-top:1px solid var(--line)}\n.best-lab{color:var(--muted);min-width:6.7em}\n.best-links a{text-decoration:none;border-bottom:1px solid var(--accent);line-height:1.9}\n.best-row .awards{margin-top:-2px}\n@media (max-width:620px){.best-row{grid-template-columns:max-content 1fr}.best-row .awards{grid-column:1/-1}}\n.awards{display:flex;flex-wrap:wrap;gap:2px}\n.award{width:58px;text-align:center;text-decoration:none;color:var(--ink);display:block;border:0!important}\n.award .nm{font:600 8.5px/1.15 var(--f-body);margin-bottom:4px;min-height:2.3em;display:flex;align-items:flex-end;justify-content:center}\n.award .d{width:54px;height:54px;margin:0 auto;border-radius:50%;display:grid;place-items:center;position:relative;z-index:1;color:#3d2a05;\n  background:radial-gradient(circle at 32% 28%,#fff6cf 0 6%,#f2d36b 22%,#c99a2e 58%,#8f6512 100%);\n  box-shadow:inset 0 0 0 3px rgba(255,255,255,.35),inset 0 0 0 5px rgba(120,80,10,.45),0 2px 6px rgba(0,0,0,.25);transition:transform .2s}\n.award .d b{font:800 7.5px/1.05 var(--f-head);display:block;letter-spacing:0;text-transform:uppercase;white-space:nowrap}\n.award .d small{font:700 8.5px/1.1 var(--f-head);display:block;margin-top:2px;opacity:.85}\n.award .r{display:flex;justify-content:center;gap:3px;height:26px;margin-top:-10px}\n.award .r i{width:13px;height:26px;background:linear-gradient(90deg,#b8501f,#e47a44 50%,#b8501f);clip-path:polygon(0 0,100% 0,100% 100%,50% 76%,0 100%)}\n.award .r i:first-child{transform:rotate(12deg)} .award .r i:last-child{transform:rotate(-12deg)}\n.award.aoty .d b{font-size:6px;line-height:1.12;white-space:normal;max-width:30px;margin:0 auto}\n.award.aoty .d small{font-size:7.5px;margin-top:1px}\n.award:hover .d,.award:focus-visible .d{transform:scale(1.06)}\n/* wikipedia columns */\n.wiki{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:44px;margin-top:28px;padding-top:24px;border-top:2px solid var(--ink)}\n.wiki h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:4px 0 10px}\n.wiki p{margin:0 0 12px;max-width:62ch;font-size:15px}\n.wiki p.missing{color:var(--muted);font-size:14px}\n.wiki a.more{font-size:14px;text-decoration:none;border-bottom:1px solid var(--accent)}\n/* artist page */\n.artist-head{padding-block:4px 26px;margin-bottom:30px;border-bottom:1px solid var(--line)}\n.artist-head h2{font:600 clamp(36px,6vw,58px)/1.05 var(--f-head);letter-spacing:-.025em;margin:8px 0 0}\nfooter{margin-top:64px;padding-top:16px;border-top:1px solid var(--line);font-size:12px;color:var(--muted);display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:space-between}\n\n@media (max-width:760px){\n  .album,.back-sleeve,.wiki{grid-template-columns:minmax(0,1fr)}\n  /* phones: cover, title and buttons, then tracklist and personnel, then details, discography and Best Of */\n  .album{display:flex;flex-direction:column;gap:24px}\n  .album .side-col{display:contents}\n  .album .cover-col{order:1}.album .side-col > *{order:2}.album .track-col{order:3;margin-top:8px}.album .side-col > .info,.album .side-col > .best-row{order:4}\n  .more-row{grid-auto-columns:minmax(130px,140px)}\n  .wiki{gap:28px}\n  .album{gap:28px}\n  .album .sleeve{max-width:380px}\n  .playalb-row{max-width:380px}\n  .grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:26px 14px}\n  .site img{height:46px}\n}\n@media (max-width:1000px){.info{grid-template-columns:minmax(0,1fr)}}\n@media (prefers-reduced-motion:reduce){.disc{transition:none}.album .disc{animation:none}.rec-spin{animation:none}}\n" + '</style>' + "<div class=\"wrap\">\n  <div class=\"mast\">\n    <div><h1><a href=\"#shelf\">The Collection</a></h1></div>\n    <div class=\"stats\" id=\"stats\"></div>\n  </div>\n  <main id=\"view\"></main>\n  <div class=\"player\" id=\"player\" hidden>\n    <div class=\"in\">\n      <div class=\"now\"><div class=\"label\" id=\"nowLabel\">Now playing</div><b id=\"nowTitle\"></b><span class=\"sub\" id=\"nowSub\"></span></div>\n      <button class=\"skip\" id=\"prevSong\" type=\"button\" aria-label=\"Previous song\" title=\"Previous song\" hidden><svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1h2v12H2zM13 1v12L5 7z\" fill=\"currentColor\"/></svg></button>\n      <button class=\"resume\" id=\"resumeBtn\" type=\"button\" hidden><svg viewBox=\"0 0 10 12\" aria-hidden=\"true\"><path d=\"M0 0v12l10-6z\" fill=\"currentColor\"/></svg>Continue</button>\n      <div class=\"embed\" id=\"embedWrap\"><div id=\"embed\"></div></div>\n      <button class=\"skip\" id=\"nextSong\" type=\"button\" aria-label=\"Next song\" title=\"Next song\" hidden><svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M10 1h2v12h-2zM1 1v12l8-6z\" fill=\"currentColor\"/></svg></button>\n      <button class=\"here\" id=\"playHere\" type=\"button\" title=\"Bring the music back to this page (for example after using Play on Spotify)\" hidden>\u21bb Play here</button>\n      <button class=\"here\" id=\"saveSp\" type=\"button\" title=\"Make this list a playlist in your Spotify account, in this order starting with the current song, and keep listening there\" hidden>\u25b6 Play in Spotify</button>\n      <div class=\"msg\" id=\"playerMsg\" hidden></div>\n      <button class=\"x\" id=\"closePlayer\" type=\"button\" aria-label=\"Close player\">\u00d7</button>\n    </div>\n  </div>\n</div>\n\n";
  var get = function (name) { return fetch(BASE + 'data/' + name + '.json?v=20261107141147').then(function (r) { return r.json(); }); };
  // the weekly new-release file changes on its own every Monday, so it's fetched fresh once a day; the site still loads without it
  var weekly = Promise.race([
    fetch(BASE + 'weekly/new_releases.json?d=' + new Date().toISOString().slice(0, 10)).then(function (r) { return r.ok ? r.json() : {}; }),
    new Promise(function (ok) { setTimeout(function () { ok({}); }, 3000); })
  ]).catch(function () { return {}; });
  Promise.all([get('albums'), get('artists'), get('bestof'), weekly]).then(function (d) {
    window.__COLLECTION_ROOT = root; window.__COLLECTION_BASE = BASE;
    window.__COLLECTION_DATA = { data: d[0], artists: d[1], bestof: d[2], newrel: d[3] || {} };
    (function () {

// Works two ways: as this stand-alone page (data in the script tags below), or embedded on Squarespace by collection.js,
// which renders into a shadow root and passes the data, the root and the GitHub address in through window.__COLLECTION_*
const ROOT = window.__COLLECTION_ROOT || document;
const BASE = window.__COLLECTION_BASE || '';
const readJSON = id => window.__COLLECTION_DATA ? window.__COLLECTION_DATA[id] : JSON.parse(document.getElementById(id).textContent);
const ALBUMS = readJSON('data');
const ARTISTS = readJSON('artists');
// ---- weekly new-release check (weekly/new_releases.json, kept up to date by GitHub every Monday) ----
// albums an artist released recently that their Discography doesn't list yet are added to it
const NEWREL = (() => { try { return (window.__COLLECTION_DATA && window.__COLLECTION_DATA.newrel) || {}; } catch (e) { return {}; } })();
(() => {
  const k = t => String(t).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&|\+/g, ' and ').replace(/[^a-z0-9]/g, '');
  const b = t => k(String(t).replace(/\s*[\(\[].*?[\)\]]/g, ''));
  Object.entries(NEWREL.albums || {}).forEach(([key, list]) => {
    const art = ARTISTS[key]; if (!art || !art.studio_albums || !art.studio_albums.length) return;   // no Discography yet: leave it empty rather than show only the newest albums
    list.forEach(n => {
      if (n.live || n.archival) return;   // Discographies list studio albums (live albums you own are added there already)
      const hit = art.studio_albums.find(s => k(s.title) === k(n.title) || b(s.title) === b(n.title));
      if (hit){ if (!hit.sp && n.sp) hit.sp = n.sp; return; }
      art.studio_albums.push({ year:n.year, title:n.title, sp:n.sp || '', date:n.date, isNew:true });
    });
    art.studio_albums.sort((x, y) => (+x.year || 0) - (+y.year || 0));
  });
})();
const $ = s => ROOT.querySelector(s);
const STAGE = () => $('.wrap');
const toTop = () => { if (ROOT === document) return window.scrollTo(0, 0);
  const y = ROOT.host.getBoundingClientRect().top + window.scrollY - 90; if (window.scrollY > y) window.scrollTo(0, y); };
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/^the\s+/,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const sortName = s => String(s).replace(/^the\s+/i,'').toLowerCase();
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_FULL = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// "1984-02-13" -> "February 13, 1984"; "1974-04" -> "April 1974"; "1974" -> "1974"
const fmtRelease = iso => { if(!iso) return ''; const [y,m,d] = iso.split('-').map(Number);
  return d ? `${MONTHS_FULL[m-1]} ${d}, ${y}` : m ? `${MONTHS_FULL[m-1]} ${y}` : `${y}`; };
// search ignores accents and case: "beyonce" finds Beyoncé
const fold = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const titleKey = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/^the\s+/,'').replace(/[^a-z0-9]+/g,'');
const fmtDate = iso => { if(!iso) return ''; const [y,m,d] = iso.split('-').map(Number); return `${MONTHS[m-1]} ${d}, ${y}`; };
const secs = d => { const m = /^(\d+):(\d\d)$/.exec(d||''); return m ? (+m[1])*60 + (+m[2]) : null; };
const mmss = n => `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;
// Decade always comes from the ORIGINAL release year, never the reissue year.
const DECADES = ['Old','60s','70s','80s','90s','2000s','2010s','2020s'];
function decadeOf(y){
  y = +y; if (!y) return '';
  if (y < 1960) return 'Old';
  if (y < 2000) return `${String(Math.floor(y/10)*10).slice(2)}s`;
  return `${Math.floor(y/10)*10}s`;
}
// words a search for the decade should match, e.g. "70s", "1970s", "'70s"
const decadeWords = a => { const d = a.decade; if (!d) return ''; if (d==='Old') return 'old pre-1960';
  const full = d.length===3 ? `19${d}` : d; return `${d} '${d} ${full}`; };

// group artists case-insensitively (e.g. "Death Cab For Cutie" / "Death Cab for Cutie")
// Format: every album is vinyl unless its data says "CD" (set when CDs are loaded separately)
// Media: each album shows once. "medium" is Vinyl (the default), CD, or both; when both are owned,
// the album keeps its vinyl details (pressing, reissue year, catalog #, color).
const mediaOf = a => { const m = String(a.medium || '').toUpperCase();
  const cd = /\bCD\b/.test(m), vinyl = !m.trim() || /VINYL|LP|RECORD/.test(m);
  return { vinyl: vinyl || !cd, cd }; };
const hasVinyl = a => mediaOf(a).vinyl;
const isCD = a => mediaOf(a).cd;   // owned on CD (alone or alongside vinyl)
const mediaLabel = a => { const m = mediaOf(a); return m.vinyl && m.cd ? 'Vinyl & CD' : m.cd ? 'CD' : 'Vinyl'; };
// Colored vinyl: any vinyl pressing Discogs lists with a color (clear, splatter and picture discs included)
const isColored = a => hasVinyl(a) && !!String(a.vinylColor || '').trim();
// Standard wording for album types, whatever the label says
const normType = s => String(s || '').replace(/\bDebut Studio Album\b/i, 'Debut Album').replace(/\bCompilation Album\b/i, 'Compilation');
// Extra genre labels, added on top of Discogs genres (an album can have several).
// Yacht Rock = (1) any album named on a published yacht rock album list: BBC Music Magazine (15 and 21 greatest),
// Rolling Stone album guide, Louder, Far Out, Kevin Brockmeier, Top40weekly (25 best), Grunge, SMU Daily Campus,
// Union Street Journal, WUSC and Chuck Eddy; or (2) any album containing a song from the
// Williamson Source "Top 100 Songs of Yacht Rock" (Steve Ludwig, 2015), all 125 entries.
const YACHT_ROCK = [
  ['Ambrosia','One Eighty'],['Airplay','Airplay'],['Jackson Browne','Running on Empty'],['Jackson Browne','Late for the Sky'],
  ['Al Jarreau',"Breakin' Away"],['Player','Player'],['Byrne & Barnes','An Eye for an Eye'],['Pages','Pages'],
  ['Steely Dan','Gaucho'],['Steely Dan','Aja'],['Donald Fagen','The Nightfly'],['Boz Scaggs','Down Two Then Left'],['Boz Scaggs','Silk Degrees'],
  ['Kenny Loggins','High Adventure'],['Kenny Loggins','Keep the Fire'],['Loggins & Messina','Full Sail'],
  ['Toto','Toto'],['Toto','IV'],['Toto','Toto IV'],['Toto','Hydra'],['Toto','Turn Back'],
  ['Doobie Brothers',"Livin' on the Fault Line"],['Doobie Brothers','Minute by Minute'],
  ['Bobby Caldwell','Bobby Caldwell'],['Bill LaBounty','Bill LaBounty'],['Christopher Cross','Christopher Cross'],
  ['Michael McDonald',"If That's What It Takes"],['Michael McDonald','Sweet Freedom'],['Rupert Holmes','Partners in Crime'],
  ['Dr. Hook','Sometimes You Win'],['Carly Simon','Boys in the Trees'],['John Mayer','Sob Rock'],['Isley Brothers','3+3'],
  ['Crosby, Stills & Nash','Daylight Again'],['George Harrison','George Harrison'],['Wings','London Town'],['Beach Boys',"Surf's Up"],
  ['Paul Davis','Cool Night'],['DeBarge','Rhythm of the Night'],['DeBarge','In a Special Way'],['Randy Vanwarmer','Warmer'],
  ['Little River Band','Sleeper Catcher'],['Michael Sembello','Bossa Nova Hotel'],['Dan Hill','Dan Hill'],['Weezer','Weezer (White Album)'],
  ['Seals & Crofts','Get Closer'],['Glenn Frey','No Fun Aloud'],['Hall & Oates','Voices'],['Hall & Oates','Along the Red Ledge'],
  ['Hall & Oates','Private Eyes'],['Hall & Oates','H2O'],['Pages','Future Street'],['Dan Fogelberg','Nether Lands'],
  ['Robbie Dupree','Robbie Dupree'],['George Benson',"Breezin'"],['Linda Ronstadt','Living in the U.S.A.'],['Kenny Loggins','Back to Avalon'],
  ['Grover Washington Jr.','Inside Moves'],['Marc Jordan','Blue Desert'],['America','Hearts'],['America','Harbor'],
  ['America','Homecoming'],['America','Holiday'],['Nicolette Larson','All Dressed Up and No Place to Go'],['Leo Sayer','Endless Flight'],
  ['George Duke','Thief in the Night'],['Steely Dan','The Royal Scam'],['Gerry Rafferty','City to City'],['John Stewart','Bombs Away Dream Babies'],
];
const YACHT_SONGS = [
  ['Steely Dan','Hey Nineteen'],['Herb Alpert','Route 101'],['Robbie Dupree','Steal Away'],['Jan Hammer Group',"Don't You Know"],
  ['Blues Image','Ride Captain Ride'],['Toto/Cheryl Lynn','Georgy Porgy'],['Gerry Rafferty','Right Down The Line'],['Paul Young','Every Time You Go Away'],
  ['Boz Scaggs','Jojo'],['Johnny Nash','I Can See Clearly Now'],['Daryl Hall/John Oates','Sara Smile'],['Orleans','Dance With Me'],
  ['Olivia Newton John','Magic'],['Seals & Crofts','Summer Breeze'],['Lionel Richie','All Night Long'],['Fleetwood Mac','You Make Loving Fun'],
  ['Steely Dan','Deacon Blues'],['Christopher Cross','Ride Like The Wind'],['Little River Band','Cool Change'],['Jackson Browne',"Somebody's Baby"],
  ['10cc','Dreadlock Holiday'],['Dr. Hook',"When You're In Love With A Beautiful Woman"],['Boz Scaggs','Lowdown'],['Player',"This Time I'm In It For Love"],
  ['Fleetwood Mac','Everywhere'],['Steely Dan','Peg'],['Todd Rundgren','I Saw The Light'],['Gerry Rafferty','Baker Street'],
  ['Eagles','One Of These Nights'],['James Ingram','Yah-Mo Be There'],['10cc',"I'm Not In Love"],['Ambrosia','Biggest Part Of Me'],
  ['Terri Gibbs',"Somebody's Knockin'"],['Atlanta Rhythm Section','So In To You'],['Boz Scaggs','Lido Shuffle'],['Steve Miller Band','Wild Mountain Honey'],
  ['Michael McDonald','I Gotta Try'],['Matthew Wilder','Break My Stride'],['England Dan & John Ford Coley',"I'd Really Love To See You Tonight"],['Player','Baby Come Back'],
  ['Kenny Loggins','This Is It'],['Michael McDonald',"I Keep Forgettin' (Every Time You're Near)"],['Toto','Rosanna'],['Daryl Hall/John Oates','Kiss On My List'],
  ['Doobie Brothers','What A Fool Believes'],['Christopher Cross','Sailing'],['Loggins & Messina','Watching The River Run'],['Eagles','The Long Run'],
  ['Looking Glass',"Brandy (You're A Fine Girl)"],['Bread','Everything I Own'],['Steely Dan',"Reelin' in the Years"],['Joe Jackson',"Steppin' Out"],
  ['Jackson Browne','Doctor My Eyes'],['Sanford & Townsend','Smoke from a Distant Fire'],['Bobby Caldwell',"What You Won't Do For Love"],['Fleetwood Mac','Rhiannon'],
  ['Ace','How Long'],['Daryl Hall/John Oates','Rich Girl'],['Toto','Africa'],['Steely Dan','Do It Again'],
  ['Bertie Higgins','Key Largo'],['Rupert Holmes','Escape (The Pina Colada Song)'],['Little River Band','Reminiscing'],['Jimmy Buffett','Margaritaville'],
  ['Fleetwood Mac','Dreams'],['Firefall','Just Remember I Love You'],['Eagles',"I Can't Tell You Why"],['Eagles','The Best Of My Love'],
  ['Eagles','Take It To The Limit'],['Eagles','Tequila Sunrise'],['Chicago','Saturday In The Park'],['Bob Welch','Sentimental Lady'],
  ['America','Sister Golden Hair'],['America','A Horse With No Name'],['Ambrosia','How Much I Feel'],['Alan Parsons','Eye In The Sky'],
  ['Air Supply','Lost In Love'],['Steely Dan','Dirty Work'],['Steely Dan','Only A Fool Would Say That'],['Orleans','Still The One'],
  ['Stephen Bishop','Sinking In An Ocean Of Tears'],['10cc','The Things We Do For Love'],['America','Ventura Highway'],['Al Stewart','Year Of The Cat'],
  ['Bread',"Baby I'm A Want You"],['Firefall','You Are The Woman'],['George Benson','Gimme The Night'],['Barbra Streisand/Barry Gibb','Guilty'],
  ['Christopher Cross',"Arthur's Theme"],['Marty Balin','Hearts'],['Poco','Barbados'],['Daryl Hall/John Oates',"I Can't Go For That (No Can Do)"],
  ['Al Stewart','Time Passages'],['Jay Ferguson','Thunder Island'],['Dr. Hook','Sexy Eyes'],['Donald Fagen','I.G.Y.'],
  ['Michael McDonald','Gotta Try'],['Bread','Make It With You'],['Pablo Cruise','Whatcha Gonna Do'],['Doobie Brothers',"Dependin' On You"],
  ['Ozark Mountain Daredevils','Jackie Blue'],['Pablo Cruise','Love Will Find A Way'],['Starbuck','Moonlight Feels Right'],['Billy Ocean','Caribbean Queen'],
  ['Linda Ronstadt','Ooh Baby Baby'],['Hues Corporation','Rock The Boat'],['Loggins & Messina',"Danny's Song"],['Rupert Holmes','Answering Machine'],
  ['Stephen Bishop','On And On'],['Bread','The Guitar Man'],['Seals & Crofts','Diamond Girl'],['Air Supply','Even The Nights Are Better'],
  ['Ambrosia',"You're The Only Woman"],['George Benson',"Breezin'"],['Daryl Hall/John Oates',"She's Gone"],['Dave Loggins','Please Come To Boston'],
  ['Rickie Lee Jones',"Chuck E.'s In Love"],['Captain/Tennille','Love Will Keep Us Together'],['Dr. Hook','Better Love Next Time'],['Chilliwack','I Believe'],
  ['Crosby, Stills & Nash','Southern Cross'],['Climax Blues Band',"Couldn't Get It Right"],["Gilbert O'Sullivan",'Alone Again (Naturally)'],['America','Daisy Jane'],
  ['Beach Boys','Sail On, Sailor'],
];
// Song matches need the same song title AND a matching artist (so Van Halen's "Dreams" isn't Fleetwood Mac's)
const songKeys = s => { const k = titleKey(s), k2 = titleKey(String(s).replace(/\s*[\(\[].*?[\)\]]/g, '')); return k2 && k2 !== k ? [k, k2] : [k]; };
const artistParts = s => String(s).split(/\s*(?:\/|&|,| and )\s*/i).map(titleKey).filter(k => k.length >= 3);
const sameArtist = (listArtist, ourArtist) => { const ours = titleKey(ourArtist);
  return artistParts(listArtist).some(p => ours.includes(p) || p.includes(ours)); };
const YACHT_SONG_INDEX = new Map();
YACHT_SONGS.forEach(([ar, so]) => songKeys(so).forEach(k => { if (!YACHT_SONG_INDEX.has(k)) YACHT_SONG_INDEX.set(k, []); YACHT_SONG_INDEX.get(k).push(ar); }));
const hasYachtSong = a => a.tracks.some(tr => songKeys(tr.t).some(k => (YACHT_SONG_INDEX.get(k) || []).some(ar => sameArtist(ar, a.artist))));
const YACHT_ALBUMS = new Set(YACHT_ROCK.map(([ar, ti]) => titleKey(ar) + '|' + titleKey(ti)));
const isYacht = a => YACHT_ALBUMS.has(titleKey(a.artist) + '|' + titleKey(a.title)) || hasYachtSong(a);
// Genre buttons: Discogs genres, tidied. "Folk, World, & Country" shows as Country; Hip Hop shows as Rap; Latin and Children's become styles;
// Punk, Rap and Disco are added from Discogs styles (Discogs files punk under Rock and rap under Hip Hop).
const PUNK_STYLES = /^(punk|hardcore|pop punk|skate punk|oi|crust|garage punk|street punk|anarcho-punk|horror punk|ska punk|emo|melodic hardcore|riot grrrl|psychobilly)$/i;
const RAP_STYLES = /(rap|hip hop|hip-hop|trap|boom bap|gangsta|horrorcore|crunk|grime|drill)/i;
const ALWAYS_GENRES = ['Punk', 'Rap', 'Disco'];
const DISCO_STYLES = /^(disco|nu-disco|italo-disco|euro-disco|hi nrg|disco polo|space disco|cosmic disco)$/i;
const STYLE_ONLY = ['Latin', "Children's"];
const tagLabel = g => esc(g);
const MAX_TAGS = 10;   // most genre + style boxes shown on an album page (all still count for search)
// Tags you've asked to hide on particular albums (artist | title -> genres/styles to drop)
const HIDE_TAGS = { 'sault|7': ['Disco'] };
function normGenres(a){
  const hide = HIDE_TAGS[titleKey(a.artist) + '|' + titleKey(a.title)] || [];
  a.genres = a.genres.filter(x => !hide.includes(x)); a.styles = a.styles.filter(x => !hide.includes(x));
  const g = [];
  const add = x => { if (!g.includes(x)) g.push(x); };
  a.genres.forEach(x => {
    if (x === 'Folk, World, & Country') add('Country');
    else if (x === 'Hip Hop') add('Rap');
    else if (STYLE_ONLY.includes(x)) { if (!a.styles.includes(x)) a.styles.unshift(x); }   // shown on the album, not as a home button
    else add(x);
  });
  if (a.styles.some(s => PUNK_STYLES.test(s))) add('Punk');
  if (a.styles.some(s => RAP_STYLES.test(s))) add('Rap');
  if (a.styles.some(s => DISCO_STYLES.test(s))) add('Disco');
  if (isYacht(a)) add('Yacht Rock');
  a.genres = g.filter(x => !hide.includes(x));
}
// Never show the same release twice: entries with the same artist, media and catalog number are one album.
// (No catalog number: the Discogs release, then the title, decides.) The earliest acquired copy is kept,
// and anything it's missing, such as a cover or Spotify link, is filled from the duplicate.
(() => {
  const normCat = s => String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  const keep = new Map();
  [...ALBUMS].sort((x,y) => (x.acquired||'9').localeCompare(y.acquired||'9') || x.id.localeCompare(y.id)).forEach(a => {
    const id = normCat(a.catno) || (a.discogs ? 'D' + a.discogs.replace(/\D+/g, ' ').trim().split(' ')[0] : 'T' + titleKey(a.title));
    const key = `${mediaLabel(a)}|${titleKey(a.artist)}|${id}`;
    const first = keep.get(key);
    if (!first) return keep.set(key, a);
    ['cover','spAlbum','discogs','released','wiki','about','label','vinylColor'].forEach(f => { if (!first[f] && a[f]) first[f] = a[f]; });
    if (!first.tracks.length) first.tracks = a.tracks;
  });
  // the same album on vinyl and on CD: one card, labelled "Vinyl & CD", keeping the vinyl details
  const vinylByTitle = new Map();
  keep.forEach(a => { if (hasVinyl(a)) vinylByTitle.set(titleKey(a.artist) + '|' + titleKey(a.title), a); });
  keep.forEach((a, k) => {
    if (hasVinyl(a)) return;
    const v = vinylByTitle.get(titleKey(a.artist) + '|' + titleKey(a.title));
    if (!v) return;
    v.medium = 'Vinyl & CD'; v.cdId = a.id;
    ['cover','spAlbum','released','wiki','about'].forEach(f => { if (!v[f] && a[f]) v[f] = a[f]; });
    keep.delete(k);
  });
  const kept = new Set(keep.values());
  for (let i = ALBUMS.length - 1; i >= 0; i--) if (!kept.has(ALBUMS[i])) ALBUMS.splice(i, 1);
})();
ALBUMS.forEach(a => { a.aslug = slug(a.artist); a.decade = decadeOf(a.year); a.type = normType(a.type); normGenres(a); });
// Each album shows only its own genres and styles (from its own Discogs release); nothing is shared across an artist's albums.
const num = n => Math.round(n).toLocaleString('en-US');   // whole numbers with commas: 1,234
const artistName = {}; ALBUMS.forEach(a => artistName[a.aslug] ??= a.artist);
// "Best of" lists: an album is on a list when the artist and the title match (ignoring "The", punctuation and bracketed extras)
// link to the list's own page about the album
const ordinal = n => n + (['th','st','nd','rd'][(n % 100 - 20) % 10] || ['th','st','nd','rd'][n % 100] || 'th');
const bestUrl = b => b.list === 'rs' ? `https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/${b.slug}/`
  : b.list === 'apple' ? `https://100best.music.apple.com/us/album/${b.rank}`
  : b.list === 'acclaimed' ? `https://www.acclaimedmusic.net/album/A${b.slug}.htm`
  : b.list === 'grammy' ? `https://en.wikipedia.org/wiki/${ordinal(b.rank - 1958)}_Annual_Grammy_Awards`
  : b.list === 'punk' ? 'https://www.rollingstone.com/music/music-lists/best-punk-albums-1235538842/'
  : `https://pitchfork.com/reviews/albums/${b.slug}/`;
// what each list shows: the line in the Best of links, and the big/small text on the medal
const bestText = b => { const L = BEST_LISTS.find(x => x.key === b.list);
  if (b.list === 'grammy') return { line:`Grammy Album of the Year · ${b.rank}`, name:'Grammy', top:'Album of the Year', val:String(b.rank) };
  if (b.list === 'punk') return { line:`Rolling Stone Best Punk 100 · #${b.rank}`, name:'Rolling Stone', top:'Best Punk 100', val:'#' + b.rank };
  const val = b.list === 'pitchfork' ? Number(b.score).toFixed(1) : '#' + b.rank;
  return { line:`${L.short} · ${val}`, name:L.name.replace(/ Top \d+$/, ''), top:L.name.replace(/^.*?(Top \d+)$/, '$1'), val }; };
const BEST_LISTS = [
  { key:'rs', name:'Rolling Stone Top 200', short:'Rolling Stone 200' },
  { key:'apple', name:'Apple Music Top 100', short:'Apple Music 100' },
  { key:'pitchfork', name:'Pitchfork Top 200', short:'Pitchfork 200' },
  { key:'acclaimed', name:'Acclaimed Music Top 200', short:'Acclaimed Music 200' },
  { key:'grammy', name:'Grammy Album of the Year', short:'Grammy Album of the Year' },
  { key:'punk', name:'Rolling Stone Best Punk 100', short:'Rolling Stone Punk 100' }];
const BEST_FULL = {};   // every entry of each list, with the album it matches in the collection (if any)
(() => {
  const data = readJSON('bestof');
  const BEST_SP = data._sp || {};   // "artist|title" -> Spotify album id, for albums not in the collection
  const artistK = s => titleKey(String(s).replace(/\s+(&|and)\s+/gi, ' '));
  const bare = s => titleKey(String(s).replace(/\s*[\(\[].*?[\)\]]/g, ''));
  // the same album under another name: list title -> the title on this site
  const ALIAS = { 'radiohead|kida':'kidamnesia', 'frankocean|blond':'blonde', 'radiohead|okcomputeroknotok19972017':'okcomputer',
    'otisredding|otisblue':'otisblueotisreddingsingssoul', 'johnlennon|plasticonoband':'johnlennonplasticonoband',
    'velvetunderground|velvetundergroundandnico':'velvetundergroundnico', 'rollingstones|exileonmainstreet':'exileonmainst',
    'gratefuldead|americanbeautytheangelsshare':'americanbeauty', 'milesdavis|completebirthofthecool':'birthofthecool',
    'johncoltrane|alovesupremethecompletemasters':'alovesupreme', 'vanmorrison|astralweekshisbandandthestreetchoir':'astralweeks',
    'publicenemy|ittakesanationofmillionstoholdusbackfearofablackplanet':'ittakesanationofmillionstoholdusback',
    'johnnycash|johnnycashatfolsomprison':'atfolsomprison', 'beyonce|cowboycarter':'actiicowboycarter', 'deadkennedys|freshfruitforrottingvegetables':'freshfruitforrottingvegetables2022mix' };
  // "Prince" on a list matches "Prince And The Revolution" here (and the other way round)
  const sameArt = (a, artist) => { const L = artistK(artist), ours = [artistK(a.artist), artistK(a.artistKey || '')];
    return ours.includes(L) || ours.some(o => o.length >= 5 && L.length >= 5 && (o.startsWith(L) || L.startsWith(o))); };
  const ART_BY_K = {}; Object.entries(ARTISTS).forEach(([k, v]) => { ART_BY_K[artistK(k)] = v; });
  ALBUMS.forEach(a => { a.best = []; });
  BEST_LISTS.forEach(L => (BEST_FULL[L.key] = (data[L.key] || []).map(([artist, title, rank, x, y]) => {
    const score = L.key === 'pitchfork' ? x : null, slug = L.key === 'pitchfork' ? y : x;
    const owned = [];
    ALBUMS.forEach(a => {
      if (!sameArt(a, artist)) return;
      const want = ALIAS[titleKey(artist) + '|' + titleKey(title)] || titleKey(title);
      if (titleKey(a.title) !== want && bare(a.title) !== bare(title)) return;
      owned.push(a);
      if (!a.best.some(b => b.list === L.key)) a.best.push({ list:L.key, rank, score, slug });
    });
    // a Spotify album to play: from the Best Of lookup, or from the artist's Discography lookup
    let sp = BEST_SP[titleKey(artist) + '|' + titleKey(title)] || '';
    if (!sp) { const art = ART_BY_K[artistK(artist)];
      const hit = art && (art.studio_albums || []).find(e => e.sp && (titleKey(e.title) === titleKey(title) || bare(e.title) === bare(title)));
      if (hit) sp = hit.sp; }
    return { artist, title, rank, score, own: owned[0] || null, sp };
  })));
})();

// format / genre / decade / best hold the selected buttons of each row (empty = All); several can be on at once, and albums must match all of them
// ---- Personnel: each credit is "Name – role"; a credit can name two people ("Benny Andersson & Björn Ulvaeus – producer") ----
const pkey = n => n.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
// other names for the same person: a band named after its leader, a first-name-only credit
const PERSON_ALIAS = { 'santana':'carlos santana', 'sinead':'sinead o connor' };
const pkeyA = n => { const k = pkey(n); return PERSON_ALIAS[k] || k; };
const creditNames = p => p.split(' – ')[0].split(/\s+&\s+|,\s+/).map(n => n.trim()).filter(n => n && n.length < 60);
const PEOPLE = {};   // person key -> {name, ids:Set}
ALBUMS.forEach(a => (a.personnel || []).forEach(p => creditNames(p).forEach(n => { const k = pkeyA(n); if (!k) return; (PEOPLE[k] = PEOPLE[k] || { name:n, ids:new Set() }).ids.add(a.id); })));
// a person's own albums count too: clicking "Sinéad O'Connor" in a credit also shows the albums released under her name
ALBUMS.forEach(a => [a.artist, a.artistKey].forEach(n => { const k = n && pkeyA(n); if (k && PEOPLE[k]) PEOPLE[k].ids.add(a.id); }));
const personOf = k => PEOPLE[k] || { name:k, ids:new Set() };
const state = { q:'', format:[], genre:[], decade:[], style:'', person:'', best:[], newyr:[], sort:'acquired', expanded:false };
const GENRES_SHOWN = 12;   // genre buttons shown before ...EXPAND...
try { const s = JSON.parse(localStorage.getItem('shelf-prefs')||'{}'); if (s.sort) state.sort = s.sort === 'year' ? 'yearAsc' : s.sort; } catch(e) {}
const savePrefs = () => { try { localStorage.setItem('shelf-prefs', JSON.stringify({sort:state.sort})); } catch(e) {} };

$('#stats').innerHTML = `
  <button class="shuffle" id="shuffle" type="button"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="tx"><b>Shuffle Play These Albums</b><span class="label" id="shuffleCount"></span></span></button>
  <span><b>${num(ALBUMS.filter(hasVinyl).length)}</b><span class="label">Records</span></span>
  <span><b>${num(ALBUMS.filter(isCD).length)}</b><span class="label" style="text-transform:none">CDs</span></span>
  <span><b>${num(Object.keys(artistName).length)}</b><span class="label">Artists</span></span>
  <span><b>${num(ALBUMS.reduce((n,a)=>n+a.tracks.length,0))}</b><span class="label">Tracks</span></span>
  <span title="Total of all known song lengths"><b>${num(ALBUMS.reduce((n,a)=>n+a.tracks.reduce((m,t)=>m+(secs(t.d)||0),0),0)/3600)}</b><span class="label">Hours</span></span>`;

// ---- Vinyl color: draw the disc in the pressing's color from Discogs ("Red", "Translucent Blue", "Clear", "Gold Marbled"...) ----
const VINYL_HUES = [
  ['sea ?glass','#9fd6c6'],['coke bottle( green| clear)?','#7fb8a4'],['bone|cream|custard|milky|beige','#efe6cf'],['white','#f4f2ec'],
  ['silver|grey|gray|smoke|smokey|smog|haze','#a9adb3'],['gold|amber|copper|bronze','#c99a2e'],['yellow','#f0c933'],
  ['orange|peach|coral','#ec7a2c'],['hot pink|magenta','#e0408f'],['pink|rose','#f08cb6'],
  ['red|ruby|crimson','#c3262e'],['burgundy|maroon|oxblood','#6e1426'],['purple|violet|orchid|lila|lilac|lavender|indigo|plum','#7b4fb5'],
  ['navy','#1f2f6b'],['blue|cyan','#2c63d6'],['teal|turquoise|aqua','#1d9e9e'],['mint','#9fe0c0'],
  ['green|emerald|jade|olive','#2f8f4e'],['brown|tan','#7a4a26'],['black','#151515'],
];
function vinylLook(text){
  const s = String(text || '').toLowerCase(); if (!s) return null;
  if (/picture/.test(s)) return { picture:true };
  const hits = []; let rest = s;
  for (const [re, hex] of VINYL_HUES){ const m = rest.match(new RegExp(`\\b(${re})\\b`)); if (m){ hits.push([m.index, hex]); rest = rest.replace(m[0], ' '.repeat(m[0].length)); } }
  hits.sort((x,y) => x[0]-y[0]);
  const clear = /\b(clear|transparent|translucent|glass|ice|coke bottle)\b/.test(s);
  if (!hits.length && clear) hits.push([0,'#d9dde0']);
  if (!hits.length) return /\b(colou?red|multi)/.test(s) ? { colors:['#c3262e','#2c63d6'], style:'marble' } : null;
  const colors = hits.map(h => h[1]);
  const style = /splatter/.test(s) ? 'splatter' : /marble|swirl|galaxy|haze/.test(s) ? 'marble' : /half|split/.test(s) ? 'split' : colors.length > 1 ? 'marble' : 'solid';
  return { colors, style, clear };
}
const alpha = (hex, a) => { const n = parseInt(hex.slice(1),16); return `rgba(${n>>16},${(n>>8)&255},${n&255},${a})`; };
// Every disc gets grooves, plus smooth gaps between songs placed by Side A's song lengths (first song at the outer edge)
function sideABands(a){
  const side = a.tracks.filter(t => /^(A|1-)/i.test(t.p)); const list = side.length ? side : a.tracks;
  if (list.length < 2) return [];
  const lens = list.map(t => secs(t.d)), ok = lens.every(x => x);
  const w = ok ? lens : list.map(() => 1), total = w.reduce((x,y) => x+y, 0);
  // ray % (radial gradients measure to the corner, so the disc edge is ~70.7%): music runs from 68% in to 23%
  const outer = 68, inner = 23; let acc = 0; const out = [];
  for (let i = 0; i < list.length - 1; i++){ acc += w[i]; out.push(outer - (outer - inner) * acc / total); }
  return out;
}
// CD-only albums: a silver compact disc with a clear hub and a rainbow sheen instead of a black LP
const CD_STYLE = 'background:' + [
  'radial-gradient(circle,var(--paper) 0 5.5%,rgba(255,255,255,.65) 5.5% 6.5%,rgba(228,232,238,.45) 6.5% 15.5%,rgba(140,146,154,.55) 15.5% 16.2%,rgba(255,255,255,.5) 16.2% 21%,rgba(140,145,150,.4) 21% 21.6%,transparent 22%)',
  'conic-gradient(from 15deg,transparent 0 4%,rgba(255,80,160,.24) 8%,rgba(255,210,60,.24) 12%,rgba(60,230,170,.24) 16%,rgba(60,140,255,.24) 20%,rgba(190,80,255,.22) 24%,transparent 28% 54%,rgba(255,80,160,.2) 58%,rgba(255,210,60,.2) 62%,rgba(60,230,170,.2) 66%,rgba(60,140,255,.2) 70%,rgba(190,80,255,.18) 74%,transparent 78%)',
  'radial-gradient(circle,transparent 0 69.4%,rgba(110,116,122,.65) 69.6% 70.7%,transparent 70.8%)',
  'repeating-radial-gradient(circle,transparent 0 2px,rgba(255,255,255,.09) 2px 3px)',
  'conic-gradient(#cfd2d6,#f4f5f7 12%,#b3b7bd 25%,#eceef1 38%,#c0c4c9 50%,#f7f7f9 62%,#b2b6bb 75%,#e6e8eb 88%,#cfd2d6)'].join(',');
function discStyle(a){
  if (!hasVinyl(a)) return CD_STYLE;
  const look = vinylLook(a.vinylColor);
  const light = !look || look.picture ? false : look.colors.every(c => parseInt(c.slice(1,3),16) + parseInt(c.slice(3,5),16) + parseInt(c.slice(5,7),16) > 420);
  const ridge = look && !look.picture ? 'rgba(0,0,0,.10)' : 'rgba(255,255,255,.055)';
  const smooth = look && !look.picture ? (light ? 'rgba(255,255,255,.35)' : 'rgba(255,255,255,.12)') : 'rgba(255,255,255,.08)';
  const label = 'radial-gradient(circle,var(--paper) 0 1.4%,var(--accent) 1.6% 15%,rgba(0,0,0,.35) 15.5% 16.5%,transparent 17%)';
  const runout = `radial-gradient(circle,transparent 0 17%,${smooth} 17% 22.5%,transparent 22.5% 68.5%,${smooth} 68.5% 70.7%,transparent 70.7%)`;
  const gaps = sideABands(a).map(r => `radial-gradient(circle,transparent 0 ${(r-.45).toFixed(2)}%,${smooth} ${(r-.45).toFixed(2)}% ${(r+.45).toFixed(2)}%,transparent ${(r+.45).toFixed(2)}%)`);
  const grooves = `repeating-radial-gradient(circle,transparent 0 1px,${ridge} 1px 1.7px)`;
  const sheen = 'conic-gradient(from 30deg,rgba(255,255,255,0) 0 10%,rgba(255,255,255,.2) 14%,rgba(255,255,255,0) 20% 60%,rgba(255,255,255,.14) 64%,rgba(255,255,255,0) 70%)';
  const layers = base => `background:${[label, sheen, runout, ...gaps, grooves, base].join(',')}`;
  if (!look) return layers('#151515');
  if (look.picture) return a.cover ? `background:${label},${sheen},url('${BASE + a.cover}') center/cover` : layers('#151515');
  const op = look.clear ? .62 : 1, [c1, c2 = (look.style === 'marble' ? alpha('#f4f2ec', op) : c1)] = look.colors.map(c => alpha(c, op));  // one-color marble swirls with white
  const base = look.style === 'split' ? `linear-gradient(90deg,${c1} 50%,${c2} 50%)`
    : look.style === 'marble' ? `conic-gradient(from 20deg,${c1},${c2} 18%,${c1} 31%,${c2} 47%,${c1} 63%,${c2} 80%,${c1})`
    : look.style === 'splatter' ? (() => { const sp = look.colors.slice(1).length ? look.colors.slice(1) : ['#151515'];
        const dots = [[30,35,4],[68,28,3],[62,70,5],[26,72,2.5],[78,52,2.5],[44,84,3],[50,22,2]];
        return dots.map(([x,y,r],i) => `radial-gradient(circle at ${x}% ${y}%,${alpha(sp[i % sp.length],1)} 0 ${r}%,transparent ${r+1}%)`).join(',') + `,${c1}`; })()
    : c1;
  return layers(base);
}
const sleeve = a => `<div class="sleeve"><div class="disc" style="${discStyle(a)}"></div>${a.cover
  ? `<img src="${esc(BASE + a.cover)}" alt="Cover of ${esc(a.title)} by ${esc(a.artist)}" loading="lazy">`
  : `<div class="blank"><span>${esc(a.title)}</span><em>${esc(a.artist)} · no cover yet</em></div>`}</div>`;
// Cover card: cover and text link to the album; the small square button plays it in the Spotify player
const playUri = a => a.spAlbum ? `spotify:album:${a.spAlbum}` : (a.tracks.find(t => t.sp) ? `spotify:track:${a.tracks.find(t => t.sp).sp}` : '');
const card = a => { const uri = playUri(a); return `<div class="rec"><a class="cover" href="#${a.id}" tabindex="-1" aria-hidden="true">${sleeve(a)}</a><div class="meta-row"><a class="meta" href="#${a.id}"><span class="t">${esc(a.title)}</span><span class="a">${esc(a.artist)}</span><span class="y">${a.year?esc(a.year):''}${a.edition==='Reissue'&&a.reissue?` · ${a.reissue} Reissue`:''} · ${mediaLabel(a)}</span>${a.type?`<span class="ty">${esc(String(a.type).replace(/;\s*/g,' · '))}</span>`:''}</a>${uri?`<button class="mini-play" type="button" data-album="${a.id}" data-uri="${esc(uri)}" data-label="${esc(a.title)}" aria-label="Play ${esc(a.title)} by ${esc(a.artist)}" title="Play"><svg viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0v12l10-6z" fill="currentColor"/></svg></button>`:''}</div></div>`; };

// original release date (falls back to the year) so albums from the same year stay in release order; undated albums go last
const relKey = a => (a.released && String(a.released).startsWith(String(a.year)) ? String(a.released) : String(a.year||'')).padEnd(10,'-');
function sorted(list){
  const by = {
    acquired:(x,y)=> (y.acquired||'').localeCompare(x.acquired||'') || x.id.localeCompare(y.id),
    artist:(x,y)=> sortName(x.artist).localeCompare(sortName(y.artist)) || (x.year||0)-(y.year||0),
    yearAsc:(x,y)=> (x.year?0:1)-(y.year?0:1) || relKey(x).localeCompare(relKey(y)) || sortName(x.artist).localeCompare(sortName(y.artist)),
    yearDesc:(x,y)=> (x.year?0:1)-(y.year?0:1) || relKey(y).localeCompare(relKey(x)) || sortName(x.artist).localeCompare(sortName(y.artist)),
    title:(x,y)=> sortName(x.title).localeCompare(sortName(y.title)),
  }[state.sort] || ((x,y)=> (y.acquired||'').localeCompare(x.acquired||''));
  return [...list].sort(by);
}

// Genre buttons: the top 12 genres by album count; ...EXPAND... adds every genre and style in the collection, still ranked by count
function genreList(genres){
  const base = Object.entries({...Object.fromEntries(ALWAYS_GENRES.map(g=>[g,0])), ...genres}).sort((a,b)=>b[1]-a[1]);
  if (!state.expanded){
    // Rap, Punk and Disco always appear; the other spots go to the biggest genres, then all are ranked by count
    const pinned = base.filter(([g]) => ALWAYS_GENRES.includes(g));
    const top = [...base.filter(([g]) => !ALWAYS_GENRES.includes(g)).slice(0, GENRES_SHOWN - pinned.length), ...pinned].sort((a,b)=>b[1]-a[1]);
    state.genre.forEach(sel => { if (!top.some(([g]) => g === sel)) top.push(base.find(([g]) => g === sel) || [sel, ALBUMS.filter(a => a.styles.includes(sel)).length]); });
    return top;
  }
  const all = {...Object.fromEntries(base)};
  ALBUMS.forEach(a => a.styles.forEach(s => { if (!a.genres.includes(s) && !(s in genres)) all[s] = (all[s] || 0) + 1; }));
  return Object.entries(all).sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0]));
}
function renderShelf(){
  const genres = {}; ALBUMS.forEach(a => a.genres.forEach(g => genres[g]=(genres[g]||0)+1));
  const decades = {}; ALBUMS.forEach(a => { if (a.decade) decades[a.decade]=(decades[a.decade]||0)+1; });
  const formats = { Vinyl: ALBUMS.filter(hasVinyl).length, 'Colored Vinyl': ALBUMS.filter(isColored).length, CD: ALBUMS.filter(isCD).length };
  $('#view').innerHTML = `
    <div class="tools">
      <div class="field grow"><label class="label" for="q">Search</label>
        <input id="q" type="search" placeholder="Artist, album, track, year, genre, style, label or catalog #" value="${esc(state.q)}"></div>
      <div class="field"><label class="label" for="sort">Sort by</label>
      <select id="sort">
        <option value="acquired">Recently acquired</option><option value="artist">Artist A–Z</option>
        <option value="yearAsc">Release Year (Oldest First)</option><option value="yearDesc">Release Year (Newest First)</option><option value="title">Album title</option>
      </select></div>
    </div>
    <div class="filters">
      <div class="filter-row"><span class="label">Media</span>
        <div class="chips" role="group" aria-label="Filter by media" data-kind="format">
          <button class="chip" data-v="" aria-pressed="${!state.format.length}">All</button>
          ${['Vinyl','Colored Vinyl','CD'].map(f => `<button class="chip" data-v="${f}" aria-pressed="${state.format.includes(f)}"${formats[f]?'':' disabled'}>${f}<small>${formats[f]}</small></button>`).join('')}
        </div></div>
      <div class="filter-row"><span class="label">Genre</span>
        <div class="chips" role="group" aria-label="Filter by genre" data-kind="genre">
          <button class="chip" data-v="" aria-pressed="${!state.genre.length}">All</button>
          <button class="chip more genre-more" type="button" aria-expanded="${state.expanded}">${state.expanded ? '...CONTRACT...' : '...EXPAND...'}</button>
          ${genreList(genres).map(([g,n])=>`<button class="chip" data-v="${esc(g)}" aria-pressed="${state.genre.includes(g)}"${n?'':' disabled'}>${tagLabel(g)}<small>${n}</small></button>`).join('')}
          ${state.expanded ? `<button class="chip more genre-more" type="button" aria-expanded="true">...CONTRACT...</button>` : ''}
        </div></div>
      <div class="filter-row"><span class="label">Decade</span>
        <div class="chips" role="group" aria-label="Filter by decade" data-kind="decade">
          <button class="chip" data-v="" aria-pressed="${!state.decade.length}">All</button>
          ${DECADES.map(d=>{ const n=decades[d]||0; return `<button class="chip" data-v="${d}" aria-pressed="${state.decade.includes(d)}"${n?'':' disabled'}${d==='Old'?' title="Released before 1960"':''}>${d}<small>${n}</small></button>`; }).join('')}
        </div></div>
      <div class="filter-row"><span class="label">Best Of</span>
        <div class="chips" role="group" aria-label="Filter by best-of list" data-kind="best">
          <button class="chip" data-v="" aria-pressed="${!state.best.length}">All</button>
          ${BEST_LISTS.map(L=>{ const n=ALBUMS.filter(a=>a.best.some(b=>b.list===L.key)).length; return `<button class="chip" data-v="${L.key}" aria-pressed="${state.best.includes(L.key)}"${n?'':' disabled'}>${L.name}<small>${n}</small></button>`; }).join('')}
        </div></div>
      <div class="filter-row"><span class="label">New Releases</span>
        <div class="chips" role="group" aria-label="Filter by release year" data-kind="newyr">
          <button class="chip" data-v="" aria-pressed="${!state.newyr.length}">All</button>
          ${NEW_YEARS().map(y=>{ const n=ALBUMS.filter(a=>+a.year===y).length; return `<button class="chip" data-v="${y}" aria-pressed="${state.newyr.includes(String(y))}">${y}<small>${n}</small></button>`; }).join('')}
        </div></div>
      ${state.person ? `<div class="filter-row"><span class="label">Personnel</span>
        <div class="chips"><button class="chip" id="clearPerson" aria-pressed="true" title="Show everyone">${esc(personOf(state.person).name)}<small>${personOf(state.person).ids.size}</small> ×</button></div></div>` : ''}
      ${state.style ? `<div class="filter-row"><span class="label">Style</span>
        <div class="chips"><button class="chip" id="clearStyle" aria-pressed="true" title="Show all styles">${esc(state.style)}<small>${ALBUMS.filter(a=>a.styles.includes(state.style)).length}</small> ×</button></div></div>` : ''}
    </div>
    <div class="grid" id="grid"></div>
    <div id="bestFull"></div>`;
  $('#sort').value = state.sort;
  $('#q').addEventListener('input', e => { state.q = e.target.value; fillGrid(); });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; savePrefs(); fillGrid(); });
  ROOT.querySelectorAll('.chips[data-kind]').forEach(group => group.querySelectorAll('.chip[data-v]').forEach(b => b.addEventListener('click', () => {
    // All clears the row; any other button toggles on/off, and turning the last one off goes back to All
    const k = group.dataset.kind, v = b.dataset.v;
    // Decade picks one at a time (a new button replaces the old); Media, Genre and Best Of combine (Vinyl + CD = albums owned in both)
    const single = k === 'decade' || k === 'newyr';
    state[k] = !v ? [] : state[k].includes(v) ? state[k].filter(x => x !== v) : single ? [v] : [...state[k], v];
    if (location.hash !== '#shelf' && location.hash) history.replaceState(null, '', '#shelf');
    if (k === 'genre' && !state.expanded) return renderShelf();   // e.g. All drops a style added after ...CONTRACT...
    group.querySelectorAll('.chip[data-v]').forEach(c => c.setAttribute('aria-pressed', c.dataset.v ? state[k].includes(c.dataset.v) : !state[k].length)); fillGrid(); })));
  equalizeChips(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(equalizeChips);
  ROOT.querySelectorAll('.genre-more').forEach(b => b.addEventListener('click', () => { state.expanded = !state.expanded; renderShelf(); }));
  const cp = $('#clearPerson');
  if (cp) cp.addEventListener('click', () => { state.person = ''; history.replaceState(null, '', '#shelf'); renderShelf(); });
  const cs = $('#clearStyle');
  if (cs) cs.addEventListener('click', () => { state.style = ''; history.replaceState(null, '', '#shelf'); renderShelf(); });
  fillGrid();
}
// every button in a filter row gets the width of that row's widest button
function equalizeChips(){
  ROOT.querySelectorAll('.chips[data-kind]').forEach(group => {
    const chips = [...group.querySelectorAll('.chip')];   // includes ...EXPAND...
    chips.forEach(c => c.style.minWidth = '');
    const w = Math.ceil(Math.max(...chips.map(c => c.getBoundingClientRect().width)));
    chips.forEach(c => c.style.minWidth = w + 'px');
  });
}
function fillGrid(){
  const q = fold(state.q.trim());
  // an album must match EVERY selected button, in the same row or different rows (Rock + 70s = rock albums from the 70s)
  const fmtOk = f => f==='CD' ? isCD : f==='Colored Vinyl' ? isColored : hasVinyl;
  const list = sorted(ALBUMS.filter(a => state.format.every(f => fmtOk(f)(a)) &&
    state.genre.every(g => a.genres.includes(g) || a.styles.includes(g)) && state.decade.every(d => a.decade === d) && (!state.style || a.styles.includes(state.style)) && (!state.person || personOf(state.person).ids.has(a.id)) && state.best.every(k => a.best.some(b => b.list === k)) && state.newyr.every(y => +a.year === +y) &&
    (!q || fold([a.artist,a.title,a.label,a.catno,a.year,decadeWords(a),...a.genres,...a.styles,...a.tracks.map(t=>t.t),...a.personnel].join(' ')).includes(q))));
  const filt = [state.format.join(' + '), state.genre.join(' + '), state.decade.join(' + '), state.style, state.person ? personOf(state.person).name : '', state.best.map(k => (BEST_LISTS.find(L => L.key === k) || {}).name).join(' + '), state.newyr.map(y => `New releases ${y}`).join('')].filter(Boolean).join(' · ');
  setShuffleList(list, [state.q.trim() ? `“${state.q.trim()}”` : '', filt].filter(Boolean).join(' · ') || 'All albums');
  $('#grid').innerHTML = list.length ? list.map(card).join('')
    : `<p class="empty">No records match${state.q?` “${esc(state.q)}”`:''}${filt?`${state.q?' in':''} ${esc(filt)}`:''}.</p>`;
  $('#bestFull').innerHTML = state.best.map(bestFullList).join('') + state.newyr.map(newReleaseList).join('');
}
// New Releases: every year from 2020 to this year (a new button is added each January; none are removed)
const NEW_YEARS = () => { const out = []; for (let y = 2020; y <= new Date().getFullYear(); y++) out.push(y); return out; };
// the New Releases and Reissues lists for one year: albums by artists in the collection (from Discographies and the weekly check), yours highlighted
const NR_CACHE = {};
// artists whose albums here are mostly classical (composers, orchestras, Yo-Yo Ma ...): left out of New Releases and Reissues
const CLASS_ARTISTS = (() => { const c = {}, t = {}; ALBUMS.forEach(a => { t[a.artistKey] = (t[a.artistKey] || 0) + 1; c[a.artistKey] = (c[a.artistKey] || 0) + (a.genres.includes('Classical') ? 1 : 0); });
  return new Set(Object.keys(t).filter(k => c[k] && c[k] * 2 >= t[k])); })();
function yearLists(yr){
  yr = +yr; if (NR_CACHE[yr]) return NR_CACHE[yr];
  const k = t => fold(String(t)).replace(/&|\+/g, ' and ').replace(/[^a-z0-9]/g, '');
  const b = t => k(String(t).replace(/\s*[\(\[].*?[\)\]]/g, ''));
  const STOP = new Set(['family', 'friends', 'hisband', 'band', 'orchestra', 'hisorchestra', 'others']);
  const members = n => new Set([k(n), ...fold(n).split(/\s*(?:&|,|\+|\band\b|\bwith\b|\bfeat\.?|\bfeaturing\b)\s*/).map(x => k(x.replace(/^the\s+/, ''))).filter(x => x.length > 2 && !STOP.has(x))]);
  const spOf = (key, title) => { const s = ((ARTISTS[key] || {}).studio_albums || []).find(x => x.sp && (k(x.title) === k(title) || b(x.title) === b(title))); return s ? s.sp : ''; };
  // sources: [{key, artist, title, sp, orig}]; owned: [album, orig]
  function build(sources, owned){
    const rows = [], seen = {};
    sources.forEach(x => {
      const id = x.key + '|' + k(x.title), id2 = x.key + '|' + b(x.title), r = seen[id] || seen[id2];
      if (r){ if (!r.sp && x.sp) r.sp = x.sp; if (!r.orig && x.orig) r.orig = x.orig; return; }
      const row = { key:x.key, artist:x.artist, title:x.title, sp:x.sp || '', orig:x.orig || 0, own:null }; rows.push(row); seen[id] = seen[id2] = row;
    });
    owned.forEach(([a, orig]) => {
      const want = DISCO_SAME[a.id] || a.title;
      // a different album with a similar name (Untitled (Black Is) / Untitled (Rise), I/O Bright-Side / Dark-Side Mixes) gets its own row
      const loose = seen[a.artistKey + '|' + b(want)];
      let r = seen[a.artistKey + '|' + k(want)] || (loose && (!loose.own || k(loose.own.title) === k(a.title)) ? loose : null);
      if (r && r.own && k(r.own.title) !== k(a.title)) r = null;
      if (!r){ r = { key:a.artistKey, artist:a.artist, title:a.title, sp:'', orig:0, own:null }; rows.push(r); seen[a.artistKey + '|' + k(a.title)] = r; }
      if (!r.own) r.own = a; r.artist = r.own.artist; if (orig && !r.orig) r.orig = orig;
    });
    // the same album listed under several names for one artist ("Willie Nelson", "Willie Nelson & Family", "Willie Nelson & Ray Price";
    // "Neil Young" / "Neil Young & Crazy Horse") becomes one row, owned if any of them is in the collection
    const groups = {}, merged = [];
    rows.forEach(r => (groups[k(r.title)] = groups[k(r.title)] || []).push(r));
    Object.values(groups).forEach(list => {
      const sets = list.map(r => ({ rows:[r], m:members(r.artist) }));
      for (let i = 0; i < sets.length; i++) for (let j = i + 1; j < sets.length; j++){
        if (!sets[i] || !sets[j] || ![...sets[j].m].some(x => sets[i].m.has(x))) continue;
        sets[i].rows.push(...sets[j].rows); sets[j].m.forEach(x => sets[i].m.add(x)); sets[j] = null; j = i;
      }
      sets.filter(Boolean).forEach(g => {
        if (g.rows.length === 1) return merged.push(g.rows[0]);
        const own = g.rows.find(r => r.own), sp = (g.rows.find(r => r.sp) || {}).sp || '', orig = (g.rows.find(r => r.orig) || {}).orig || 0;
        // the name to show: yours if you own it, else the artist the names share ("Willie Nelson"), else the shortest
        const common = [...g.rows.map(r => members(r.artist)).reduce((x, y) => new Set([...x].filter(v => y.has(v))))];
        const named = g.rows.find(r => common.includes(k(r.artist))) || Object.values(ARTISTS).map(a => ({ artist:a.name || '' })).find(a => a.artist && common.includes(k(a.artist)));
        const artist = own ? own.artist : named ? named.artist : g.rows.map(r => r.artist).sort((x, y) => x.length - y.length)[0];
        const title = own ? own.title : g.rows.map(r => r.title).sort((x, y) => x.length - y.length)[0];
        merged.push({ ...(own || g.rows[0]), artist, title, sp:(own && own.sp) || sp, orig:(own && own.orig) || orig, own:own ? own.own : null });
      });
    });
    return merged.sort((x, y) => fold(x.artist.replace(/^the\s+/i, '')).localeCompare(fold(y.artist.replace(/^the\s+/i, ''))) || x.title.localeCompare(y.title));
  }
  const nameOf = key => (ARTISTS[key] || {}).name || key;
  // left out: classical works and composers/orchestras, and archival releases (old recordings put out now)
  const ARCH = /\b(unreleased|outtakes?|rarities|from the vaults?|the vaults?|archives?|archival|broadcasts?|bbc sessions|radio sessions|bootleg series|demos?|lost (?:\w+ )?(?:tapes|recordings|sessions|album|reels|concerts?|broadcasts?)|previously unissued)\b|\bcomplete\b.*\bsessions?\b/i;
  const LIVEISH = /\b(live|sessions?|concerts?|recordings?|tour|at the|in concert)\b/i;
  const CLASSICAL = /\b(symphon(y|ies|ic)|concertos?|sonatas?|op\.\s?\d|opus \d|bwv|requiem|cantatas?|string quartets?|oratorio|beethoven|mozart|bach|chopin|brahms|vivaldi|tchaikovsky|dvo[rř][aá]k|debussy|handel|schubert|mahler|haydn|rachmaninoff|stravinsky)\b/i;
  const archival = t => ARCH.test(t) || ((String(t).match(/\b(19\d\d|20\d\d)\b/g) || []).some(y => +y <= yr - 10) && LIVEISH.test(t));
  const keep = (key, title) => !CLASS_ARTISTS.has(key) && !CLASSICAL.test(title) && !archival(title);
  // New Releases: studio and live albums first released this year
  const fresh = build([
    ...Object.entries(ARTISTS).flatMap(([key, art]) => (art.studio_albums || []).filter(s => +s.year === yr && !s.archival && keep(key, s.title)).map(s => ({ key, artist:art.name || key, title:s.title, sp:s.sp }))),
    ...Object.entries(NEWREL.albums || {}).flatMap(([key, list]) => list.filter(n => +n.year === yr && !n.archival && keep(key, n.title)).map(n => ({ key, artist:nameOf(key), title:n.title, sp:n.sp })))
  ], ALBUMS.filter(a => +a.year === yr && !CLASS_ARTISTS.has(a.artistKey) && !archival(a.title)).map(a => [a, 0]));   // your own albums stay unless the artist is classical (Symphony Of Lungs stays)
  // Reissues: vinyl (incl. colored vinyl) reissues this year of albums first released in an earlier year
  const reYear = a => [a.reissue, ...(a.versions || []).map(v => v.reissue)].map(x => parseInt(String(x || '').slice(0, 4), 10)).filter(Boolean);
  const reissues = build(
    Object.entries(NEWREL.reissues || {}).flatMap(([key, list]) => list.filter(n => +n.year === yr && +n.orig < yr && !n.archival && keep(key, n.title)).map(n => ({ key, artist:nameOf(key), title:n.title, sp:spOf(key, n.title), orig:+n.orig }))),
    ALBUMS.filter(a => hasVinyl(a) && +a.year && +a.year < yr && reYear(a).includes(yr) && !CLASS_ARTISTS.has(a.artistKey) && !archival(a.title)).map(a => [a, +a.year])
  ).filter(r => r.orig && r.orig < yr);
  // a reissue isn't a new release: drop it from New Releases (unless it's an album of yours first released this year)
  const same = (x, y) => (k(x.title) === k(y.title) || b(x.title) === b(y.title)) && [...members(x.artist)].some(m => members(y.artist).has(m));
  const freshOut = fresh.filter(f => (f.own && +f.own.year === yr) || !reissues.some(r => same(f, r)));
  return (NR_CACHE[yr] = { fresh:freshOut, reissues });
}
function yearSection(title, rows, note){
  const own = rows.filter(r => r.own).length;
  return `<section class="bestfull"><h2>${title}</h2>
    <p class="sub">In the collection: <b>${own}</b> of ${rows.length}</p>
    ${rows.length ? `<ol>${rows.map((r, i) => { const extra = note ? ` <span class="xt">${esc(note(r))}</span>` : '';
      return `<li class="${r.own ? 'own' : ''}"><span class="n">${i + 1}</span>${r.own
      ? `<span><a href="#${esc(r.own.id)}">${esc(r.artist)} · ${esc(r.title)}</a>${extra}</span>`
      : `<span><span class="a">${esc(r.artist)}</span> · ${esc(r.title)}${extra}</span>`}${bestPlay(r)}</li>`; }).join('')}</ol>`
      : `<p class="sub">None found yet; the weekly check adds them as it finds them.</p>`}</section>`;
}
function newReleaseList(yr){
  const L = yearLists(yr);
  return yearSection(`New releases in ${yr}: every album by artists in the collection`, L.fresh)
    + yearSection(`Reissues in ${yr}: vinyl reissues of earlier albums by artists in the collection`, L.reissues, r => `(Reissue of ${r.orig} Album)`);
}
// the complete list (e.g. Rolling Stone #1-#200) shown under the albums; the ones in the collection are highlighted and link to their page
function bestFullList(key){
  const L = BEST_LISTS.find(x => x.key === key);
  // #1 first; Pitchfork by score (highest first); Grammy by year (newest first)
  const rows = [...(BEST_FULL[key] || [])].sort((x, y) => key === 'pitchfork' ? y.score - x.score || x.rank - y.rank : key === 'grammy' ? y.rank - x.rank : x.rank - y.rank);
  const own = rows.filter(r => r.own).length;
  const num = r => key === 'pitchfork' ? Number(r.score).toFixed(1) : key === 'grammy' ? String(r.rank) : '#' + r.rank;
  return `<section class="bestfull"><h2>${esc(L.name)}: the full list</h2>
    <p class="sub">In the collection: <b>${own}</b> of ${rows.length}</p>
    <ol>${rows.map(r => `<li class="${r.own ? 'own' : ''}"><span class="n">${esc(num(r))}</span>${r.own
      ? `<a href="#${esc(r.own.id)}">${esc(r.artist)} · ${esc(r.title)}</a>`
      : `<span><span class="a">${esc(r.artist)}</span> · ${esc(r.title)}</span>`}${bestPlay(r)}</li>`).join('')}</ol></section>`;
}
// play button at the end of each row: an album you own plays its own songs from track 1 (orange); any other album plays from Spotify (black)
function bestPlay(r){
  const uri = r.own ? playUri(r.own) : (r.sp ? `spotify:album:${r.sp}` : '');
  if (!uri) return '<span></span>';
  return `<button class="mini-play${r.own ? ' mine' : ''}" type="button" ${r.own ? `data-album="${esc(r.own.id)}" ` : ''}data-uri="${esc(uri)}" data-label="${esc(r.title)}" aria-label="Play ${esc(r.title)}" title="Play ${esc(r.title)}"><svg viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0v12l10-6z" fill="currentColor"/></svg></button>`;
}

const ICON = {
  spotify:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 9.5c3.5-1 7-.6 10 1M7.6 12.6c2.9-.8 5.8-.4 8.3 1M8.2 15.5c2.3-.6 4.5-.3 6.5.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
  ext:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
};

function sideGroups(tracks){
  const groups = [];
  tracks.forEach(t => {
    const m = /^(\d+)-/.exec(t.p); const s = /^([A-H])/.exec(t.p);
    const name = m ? `Disc ${m[1]}` : s ? `Side ${s[1]}` : 'Tracks';
    let g = groups.find(x => x.name === name); if (!g) groups.push(g = {name, tracks:[]});
    g.tracks.push(t);
  });
  return groups;
}

// albums whose title on the label differs from Wikipedia's (so they don't appear twice in a Discography)
const DISCO_SAME = { ALB0249:'Exotica Volume III', ALB0408:'Exotica Vol. 2', ALB0412:'Al Green Explores Your Mind', ALB0570:'Rejuvenation',
  ALB0702:'Uh Oh... No Breaks!', ALB0976:'Cowboy Carter', ALB1092:'Game, Dames and Guitar Thangs', ALB0302:'Untitled' };
function discography(a){
  const art = ARTISTS[a.artistKey]; if (!art || !art.studio_albums || !art.studio_albums.length) return '';
  const mine = ALBUMS.filter(x => x.artistKey === a.artistKey);
  const dk = t => titleKey(String(t).replace(/\s*&\s*/g, ' and ').replace(/\s*\+\s*/g, ' and '));   // "Amyl & The Sniffers" = "Amyl and the Sniffers"
  const bare = t => dk(String(t).replace(/\s*[\(\[].*?[\)\]]/g, ''));   // "The Beatles (White Album)" ~ "The Beatles"
  const rows = art.studio_albums.map(s => ({ year:s.year, title:s.title, extra:'', id:null, cur:false, sp:s.sp || '' }));
  const extras = [];
  mine.forEach(x => {
    const want = DISCO_SAME[x.id] || x.title;
    let row = rows.find(r => dk(r.title) === dk(want));
    if (!row) { const c = rows.filter(r => bare(r.title) === bare(want)); row = c.length === 1 ? c[0] : c.find(r => +r.year === +x.year) || null; }   // four "Peter Gabriel"s: the one from the same year
    if (!row) extras.push(row = { year:x.year || 0, title:x.title, extra:x.type || '', id:null, cur:false });
    row.id = x.id; if (x === a) row.cur = true;
  });
  // live albums, compilations, EPs etc. in the collection join the list at their original release year
  const list = [...rows, ...extras].sort((x,y) => x.year - y.year || (x.extra ? 1 : 0) - (y.extra ? 1 : 0)).map(s => {
    const name = !s.cur && s.id ? `<a href="#${s.id}">${esc(s.title)}</a>` : esc(s.title);
    // play button: an album in the collection plays its own songs; any other album plays from Spotify
    const own = s.id && ALBUMS.find(x => x.id === s.id), uri = own ? playUri(own) : (s.sp ? `spotify:album:${s.sp}` : '');
    const btn = uri ? `<button class="mini-play${own ? ' mine' : ''}" type="button" ${own ? `data-album="${own.id}" ` : ''}data-uri="${esc(uri)}" data-label="${esc(s.title)}" aria-label="Play ${esc(s.title)}" title="Play ${esc(s.title)}"><svg viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0v12l10-6z" fill="currentColor"/></svg></button>` : '<span></span>';
    return `<li class="${s.cur?'current':s.id?'owned':''}"><span class="yr">${s.year||''}</span><span>${name}${s.extra?` <span class="xt">${esc(s.extra)}</span>`:''}</span>${btn}</li>`; }).join('');
  return `<div class="disco"><h3>Discography</h3><ol>${list}</ol></div>`;
}
function wikiSection(a){
  const art = ARTISTS[a.artistKey] || {};
  const artistBlock = art.summary ? `<p>${esc(art.summary)}</p>${art.wiki_url
      ? `<a class="more" href="${esc(art.wiki_url)}" target="_blank" rel="noopener">Read more on Wikipedia ↗</a>`
      : art.source_url ? `<a class="more" href="${esc(art.source_url)}" target="_blank" rel="noopener">Source: artist's Bandcamp page ↗</a>` : ''}`
    : `<p class="missing">No Wikipedia article for this artist yet.</p>`;
  const albumBlock = a.about ? `<p>${esc(a.about)}</p><a class="more" href="${esc(a.wiki)}" target="_blank" rel="noopener">Read more on Wikipedia ↗</a>`
    : `<p class="missing">No Wikipedia article for this ${/single|ep/i.test(a.type)?'release':'album'} yet.</p>`;
  return `<section class="wiki">
    <div><div class="label">The artist</div><h3>${esc(art.name || a.artist)}</h3>${artistBlock}</div>
    <div><div class="label">The album</div><h3>${esc(a.title)}</h3>${albumBlock}</div>
  </section>`;
}
// Play Album: same look as Shuffle Play, sits under the cover, plays the album in order from track 1
function playBtn(a){
  const uri = playUri(a); if (!uri) return '';
  const n = albumQueue(a).length || a.tracks.length;
  return `<div class="playalb-row"><button class="shuffle" type="button" data-album="${a.id}" data-uri="${esc(uri)}" data-label="${esc(a.title)}"><span class="ic"><svg viewBox="0 0 10 12" aria-hidden="true" style="width:12px;height:12px;margin-left:2px"><path d="M0 0v12l10-6z" fill="currentColor"/></svg></span><span class="tx"><b>Play Album</b><span class="label">${num(n)} song${n===1?'':'s'}</span></span></button></div>`;
}
// each name in a credit links to every album in the collection that credits that person
function personLinks(n){
  const names = creditNames(n + ' – ');
  if (!names.length) return esc(n);
  let out = esc(n);
  names.forEach(x => { const k = pkeyA(x), c = personOf(k).ids.size;
    out = out.replace(esc(x), `<a class="person" href="#person=${encodeURIComponent(k)}" title="${c > 1 ? `${c} albums in the collection` : 'Only this album so far'}">${esc(x)}</a>`); });
  return out;
}
// small cover under the Previous / Next links (part of the same link)
const pagerCover = a => a.cover ? `<img class="pg-cover" src="${esc(BASE + a.cover)}" alt="" loading="lazy">` : '';
// an album you own more than one copy of: one page, each copy's catalog # links to its Discogs pressing
function versionFacts(a, total){
  const vs = a.versions, uniq = xs => [...new Set(xs.filter(Boolean))];
  const copies = uniq(vs.map(v => v.edition === 'Reissue' && v.reissue ? `${v.reissue} Reissue` : v.edition === 'Original' ? 'Original pressing' : ''));
  const cats = [], seen = new Set();
  vs.forEach(v => { if (!v.catno || seen.has(v.catno)) return; seen.add(v.catno);
    cats.push(v.discogs ? `<a href="${esc(v.discogs)}" target="_blank" rel="noopener" title="This pressing on Discogs">${esc(v.catno)}</a>` : esc(v.catno)); });
  const years = uniq(vs.map(v => String(v.acquired || '').slice(0, 4))).sort();
  const labels = uniq(vs.map(v => v.label));
  return `
    ${a.year?`<dt>Released</dt><dd>${fmtRelease(a.released || String(a.year))}${copies.some(c => /Reissue/.test(c))?`<span style="display:block;color:var(--muted)">These copies: ${esc(copies.join(' & '))}</span>`:''}</dd>`:''}
    <dt>Media</dt><dd>${mediaLabel(a)}</dd>
    ${labels.length?`<dt>Label</dt><dd>${esc(labels.join(' & '))}</dd>`:''}
    ${cats.length?`<dt>Catalog #</dt><dd class="mono cats">${cats.join(' &amp; ')}</dd>`:''}
    ${years.length?`<dt>Acquired</dt><dd>${years.join(' & ')}</dd>`:''}
    ${total?`<dt>Running time</dt><dd class="mono">${mmss(total)}</dd>`:''}`;
}
function renderAlbum(a){
  setShuffleList([a], `${a.artist} · ${a.title}`);
  const order = sorted(ALBUMS); const i = order.indexOf(a);
  const prev = order[(i-1+order.length)%order.length], next = order[(i+1)%order.length];
  const term = encodeURIComponent(`${a.artist} ${a.title}`.replace(/[:.]+/g,' '));
  const disc = a.discs ? a.discs.split(';').map(s=>s.trim()) : [];
  const groups = sideGroups(a.tracks);
  const total = a.tracks.every(t=>secs(t.d)!=null) && a.tracks.length ? a.tracks.reduce((n,t)=>n+secs(t.d),0) : null;
  const others = ALBUMS.filter(x => x.aslug===a.aslug && x!==a);
  $('#view').innerHTML = `
    <a class="back" href="#shelf">← The Collection</a>
    <article class="album">
      <div class="cover-col">${sleeve(a)}${playBtn(a)}</div>
      <div class="side-col">
        <div>
          <div class="label">${a.year?`${a.year} · `:''}${esc(a.type || 'Album')}</div>
          <h2>${esc(a.title)}</h2>
          <div class="by"><a href="#artist-${a.aslug}">${esc(a.artist)}</a></div>
        </div>
        <div class="pills">
          <span class="pill ed">${!hasVinyl(a) ? 'CD' : a.edition==='Reissue' ? `${esc(a.reissue)} Reissue` : a.edition ? 'Original pressing' : 'Vinyl'}</span>
          ${a.genres.map(g=>`<a class="pill" href="#genre=${encodeURIComponent(g)}" title="See all ${esc(g)} albums">${tagLabel(g)}</a>`).join('')}${a.styles.filter(x => !a.genres.includes(x)).slice(0, Math.max(0, MAX_TAGS - a.genres.length)).map(g=>`<a class="pill" href="#style=${encodeURIComponent(g)}" title="See all ${esc(g)} albums">${esc(g)}</a>`).join('')}
        </div>
        <div class="listen">
          <a class="btn" href="${a.spAlbum ? `https://open.spotify.com/album/${esc(a.spAlbum)}` : `https://open.spotify.com/search/${term}`}" target="_blank" rel="noopener">${ICON.spotify}Spotify</a>
          <a class="btn" href="https://music.youtube.com/search?q=${term}" target="_blank" rel="noopener">${ICON.play}YouTube Music</a>
        </div>
        <div class="info">
        <dl class="facts">
          ${a.versions ? versionFacts(a, total) : `
          ${a.year?`<dt>Released</dt><dd>${fmtRelease(a.released || String(a.year))}${a.edition==='Reissue'&&a.reissue?`<span style="display:block;color:var(--muted)">This copy: ${a.reissue} Reissue</span>`:''}</dd>`:''}
          <dt>Media</dt><dd>${mediaLabel(a)}</dd>
          ${a.label?`<dt>Label</dt><dd>${esc(a.label)}</dd>`:''}
          ${a.catno?`<dt>Catalog #</dt><dd class="mono">${esc(a.catno)}</dd>`:''}
          ${a.acquired?`<dt>Acquired</dt><dd>${a.acquired.slice(0,4)}</dd>`:''}
          ${total?`<dt>Running time</dt><dd class="mono">${mmss(total)}</dd>`:''}
          ${a.discogs?`<dt>Discogs</dt><dd><a href="${esc(a.discogs)}" target="_blank" rel="noopener">${hasVinyl(a) ? 'View this pressing' : 'View this CD release'} ↗</a></dd>`:''}`}
        </dl>
        ${discography(a)}
        </div>
        ${a.best.length?`<div class="best-row"><div class="best-lab">Best of</div><div class="best-links">${a.best.map(b=>{ const L=BEST_LISTS.find(x=>x.key===b.list);
            return `<span style="display:block"><a href="${esc(bestUrl(b))}" target="_blank" rel="noopener">${esc(bestText(b).line)} ↗</a></span>`; }).join('')}</div>
            <div class="awards">${a.best.map(b=>{ const t=bestText(b);
              return `<a class="award${b.list==='grammy'?' aoty':''}" href="${esc(bestUrl(b))}" target="_blank" rel="noopener" title="${esc(t.line)}"><div class="nm">${esc(t.name)}</div><div class="d"><div><b>${esc(t.top)}</b><small>${esc(t.val)}</small></div></div><div class="r"><i></i><i></i></div></a>`; }).join('')}</div></div>`:''}
      </div>
      <div class="track-col">
        <h3>Tracklist</h3>
        <div class="sides">
          ${groups.map((g,gi)=>{ const ts=g.tracks.map(t=>secs(t.d)); const st=ts.every(x=>x!=null)?ts.reduce((n,x)=>n+x,0):null;
            const sub = g.name.startsWith('Disc') && disc[gi] ? disc[gi].replace(/^Disc \d+:\s*/,'') : '';
            return `<div class="side"><h4><span class="label">${esc(g.name)}${sub?` · ${esc(sub)}`:''}</span><span>${st?mmss(st):''}</span></h4><ol>
              ${g.tracks.map(t=>`<li data-sp="${esc(t.sp||'')}"><span class="p">${esc(t.p)}</span>${t.sp ? `<button class="song" type="button" data-album="${a.id}" data-uri="spotify:track:${esc(t.sp)}" data-label="${esc(t.t)}" aria-label="Play ${esc(t.t)} on Spotify"><span class="ic">▶</span><span>${esc(t.t)}</span></button>` : `<span>${esc(t.t)}</span>`}<span class="d"><span class="len">${esc(t.d)}</span><span class="rec-spin${hasVinyl(a)?'':' cd'}" aria-hidden="true"></span></span></li>`).join('')}
            </ol></div>`; }).join('')}
        </div>
        <div class="pers">${a.personnel.length?`<h3>Personnel</h3><ul class="credits">${a.personnel.map(p=>{ const [n,...r]=p.split(' – '); return `<li>${personLinks(n)}${r.length?` <span class="role">— ${esc(r.join(' – '))}</span>`:''}</li>`; }).join('')}</ul>`:''}</div>
      </div>
    </article>
    ${others.length?`<section class="more-by"><h3>More albums by <a href="#artist-${a.aslug}">${esc(a.artist)}</a></h3><div class="more-row">${others.map(card).join('')}</div></section>`:''}
    ${wikiSection(a)}
    <nav class="pager" aria-label="Browse records">
      <a href="#${prev.id}"><div class="label">Previous</div><span>${esc(prev.artist)} — ${esc(prev.title)}</span>${pagerCover(prev)}</a>
      <a href="#${next.id}" class="nx"><div class="label">Next</div><span>${esc(next.artist)} — ${esc(next.title)}</span>${pagerCover(next)}</a>
    </nav>`;
}

function renderArtist(s){
  const list = sorted(ALBUMS.filter(a=>a.aslug===s)).sort((x,y)=>(x.year||0)-(y.year||0));
  if (!list.length) return renderShelf();
  setShuffleList(list, artistName[s]);
  $('#view').innerHTML = `<a class="back" href="#shelf">← The Collection</a>
    <div class="artist-head"><div class="label">${list.length} record${list.length>1?'s':''} in the collection</div><h2>${esc(artistName[s])}</h2></div>
    <div class="grid">${list.map(card).join('')}</div>`;
}

// ---- Spotify player (official embed, controlled through Spotify's iFrame API) ----
const Player = { api:null, ctrl:null, loading:false, failed:false, pending:null,
  queue:[], idx:0, albumId:null, current:null, lastPos:0, lastDur:0, advanced:false };
function showPlayer(label, sub){ const sv = $('#saveSp'); if (sv) sv.hidden = !(SPX.owner() && Player.queue.length > 1); $('#player').hidden=false; STAGE().classList.add('has-player'); $('#nowTitle').textContent=label;
  // the album name links to its page, so you can look at the record while it plays
  const cur = Player.queue[Player.idx], al = ALBUMS.find(x => x.id === ((Player.queue.length && cur && cur.albumId) || Player.albumId));
  if (al) $('#nowSub').innerHTML = `${esc(al.artist)} · <a href="#${al.id}" title="Go to this album">${esc(al.title)}</a>`; else $('#nowSub').textContent = sub || '';
  $('#nowLabel').textContent = Player.shuffle ? `Shuffle · ${Player.idx+1} of ${num(Player.queue.length)}` : 'Now playing';
  const many = Player.queue.length > 1; $('#prevSong').hidden = !many; $('#nextSong').hidden = !many; }
function playerFallback(uri){
  const [, kind, id] = uri.split(':');
  $('#embedWrap').hidden = true; const m = $('#playerMsg'); m.hidden = false;
  m.innerHTML = `Songs play right here once The Collection is on mrjonessf.com; this preview can't load Spotify's player. <a href="https://open.spotify.com/${kind}/${esc(id)}" target="_blank" rel="noopener">Open in Spotify ↗</a>`;
}
// highlight the current song (orange title, spinning record) and the album's play button
function refreshHighlight(){
  const uri = Player.current || '';
  ROOT.querySelectorAll('.side li').forEach(li => li.classList.toggle('playing', !!li.dataset.sp && uri.endsWith(':'+li.dataset.sp)));
  ROOT.querySelectorAll('.mini-play').forEach(b => b.classList.toggle('on', !!uri && (b.dataset.album === Player.albumId || b.dataset.uri === uri)));
  const sh = $('#shuffle'); if (sh) sh.classList.toggle('on', !!uri && !!Player.shuffle);
}
function setLive(live, paused){
  STAGE().classList.toggle('sp-live', live);
  STAGE().classList.toggle('sp-paused', live && paused);
}
// keeps the page counted as "playing sound" between songs (a 15 Hz tone at -34 dB: below human hearing, loud enough for Chrome to count),
// so the browser doesn't put the page to sleep when it's in the background
const KeepAwake = {
  ctx:null,
  start(){
    try {
      if (!this.ctx){
        const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
        this.ctx = new C(); const o = this.ctx.createOscillator(), g = this.ctx.createGain();
        o.frequency.value = 15; g.gain.value = 0.02; o.connect(g); g.connect(this.ctx.destination); o.start();
      }
      if (this.ctx.state === 'suspended') this.ctx.resume();
    } catch (e) {}
  },
  stop(){ try { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); } catch (e) {} }
};
function play(uri, label, sub){
  KeepAwake.start();
  Player.current = uri; Player.nowURI = ''; Player.lastPos = 0; Player.lastDur = 0; Player.advanced = false;
  showPlayer(label, sub); refreshHighlight(); setLive(false, false);
  if (Player.failed) return playerFallback(uri);
  $('#playHere').hidden = false;
  if (Player.ctrl){ Player.ctrl.loadUri(uri); Player.ctrl.play(); Player.loadedAt = Date.now(); return; }
  Player.pending = uri;
  if (Player.api) return makeController();
  if (Player.loading) return;
  Player.loading = true;
  window.onSpotifyIframeApiReady = api => { Player.api = api; makeController(); };
  const s = document.createElement('script'); s.src = 'https://open.spotify.com/embed/iframe-api/v1'; s.async = true;
  s.onerror = () => { Player.failed = true; playerFallback(Player.pending); };
  document.head.appendChild(s);
  setTimeout(() => { if (!Player.api && !Player.failed){ Player.failed = true; playerFallback(Player.pending); } }, 6000);
}
// play a list of songs in order; each song's record spins while it plays, then the next one starts
function startQueue(queue, idx, albumId, shuffle){
  Player.queue = queue; Player.shuffle = !!shuffle; Player.albumId = albumId;
  playAt(idx);
}
function playAt(i){
  const s = Player.queue[i]; if (!s) return;
  Player.idx = i; if (s.albumId) Player.albumId = s.albumId;
  $('#resumeBtn').hidden = true; $('#embedWrap').hidden = false;
  play(s.uri, s.label, s.sub);
  saveSpot(0, true);
  // in the background Spotify may send no updates at all for the new song: use its known length to move on
  clearTimeout(Player.endTimer);
  if (document.hidden && s.dur){
    const uri = s.uri;
    Player.endTimer = setTimeout(() => {
      if (Player.current !== uri || Player.advanced) return;
      if (Date.now() - (Player.lastPlayingAt || 0) < 1500) return;
      Player.advanced = true; nextInQueue();
    }, s.dur * 1000 + 2500);
  }
}
// ---- Save to Spotify: makes a playlist in the site owner's Spotify account (Spotify's sign-in for websites, no password ever reaches this page) ----
// Only the owner sees the button: visit mrjonessf.com/music#owner once in a browser to turn it on there.
const SPX = (() => {
  const CLIENT = '1f5b18de18ec48b9b3fdb677f3b83c82', REDIRECT = 'https://mrjonessf.com/music';
  const ls = { get:k => { try { return JSON.parse(localStorage.getItem(k)); } catch(e) { return null; } },
               set:(k, v) => { try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch(e) {} } };
  const toast = (html, keep) => {
    let el = ROOT.querySelector('.sp-toast'); if (el) el.remove();
    el = document.createElement('div'); el.className = 'sp-toast'; el.setAttribute('role', 'status');
    el.innerHTML = html + '<button type="button" aria-label="Close">×</button>'; STAGE().appendChild(el);
    el.querySelector('button').onclick = () => el.remove();
    if (!keep) setTimeout(() => el.remove(), 9000);
  };
  const b64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const rand = n => b64(crypto.getRandomValues(new Uint8Array(n)));
  async function tokenCall(params){
    const r = await fetch('https://accounts.spotify.com/api/token', { method:'POST', headers:{ 'Content-Type':'application/x-www-form-urlencoded' },
      body:new URLSearchParams({ client_id:CLIENT, ...params }) });
    const d = await r.json(); if (!r.ok) throw new Error(d.error_description || d.error || r.status);
    const old = ls.get('collection-sp-auth') || {};
    ls.set('collection-sp-auth', { access:d.access_token, refresh:d.refresh_token || old.refresh, until:Date.now() + (d.expires_in - 60) * 1000 });
  }
  async function token(){
    const a = ls.get('collection-sp-auth');
    if (a && a.access && a.until > Date.now()) return a.access;
    if (a && a.refresh){ try { await tokenCall({ grant_type:'refresh_token', refresh_token:a.refresh }); return ls.get('collection-sp-auth').access; } catch(e) {} }
    return null;
  }
  async function signIn(){
    const verifier = rand(48), st = rand(12);
    const challenge = b64(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier)));
    ls.set('collection-sp-pkce', { verifier, st });
    location.href = 'https://accounts.spotify.com/authorize?' + new URLSearchParams({ client_id:CLIENT, response_type:'code', redirect_uri:REDIRECT,
      code_challenge_method:'S256', code_challenge:challenge, state:st, scope:'playlist-modify-private playlist-modify-public' });
  }
  async function api(path, body){
    const r = await fetch('https://api.spotify.com/v1' + path, { method:'POST', headers:{ Authorization:'Bearer ' + await token(), 'Content-Type':'application/json' }, body:JSON.stringify(body) });
    const d = await r.json().catch(() => ({})); if (!r.ok) { const e = new Error((d.error && d.error.message) || r.status); e.status = r.status; throw e; }
    return d;
  }
  async function make(req, win){
    toast(`Sending ${num(req.uris.length)} songs to Spotify…`, true);
    try {
      const pl = await api('/me/playlists', { name:req.name, public:false, description:'Made from The Collection at mrjonessf.com/music' });
      for (let i = 0; i < req.uris.length; i += 100){
        const chunk = { uris:req.uris.slice(i, i + 100) };
        try { await api(`/playlists/${pl.id}/items`, chunk); }
        catch(e){ if (e.status === 404 || e.status === 410) await api(`/playlists/${pl.id}/tracks`, chunk); else throw e; }
      }
      // hand the music over: stop the player here and open the new playlist
      if (Player.ctrl){ try { Player.ctrl.pause(); } catch(e) {} }
      const web = pl.external_urls.spotify;
      if (win && !win.closed) win.location.href = web;
      toast(`“${esc(req.name)}” is in your Spotify (${num(req.uris.length)} songs, current song first). Turn Spotify's own shuffle off to keep this order.<br>`
        + `<a href="spotify:playlist:${esc(pl.id)}">Open in the Spotify app</a> · <a href="${esc(web)}" target="_blank" rel="noopener">Open in the web player ↗</a>`, true);
    } catch(e){
      if (win && !win.closed) win.close();
      toast(`Spotify didn't make the playlist (${esc(e.message)}).`
        + (e.status === 403 ? ' Check that your account is on the app\'s User Management list in the Spotify developer dashboard.' : '')
        + (e.status === 429 ? ' Spotify is limiting requests from this app right now (the same limit that pauses the lookups); try again later.' : ''), true);
    }
  }
  const MAX = 2500;   // about a week of nonstop listening; keeps the trip to Spotify quick
  async function save(){
    if (!Player.queue.length) return;
    const d = new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric', hour:'numeric', minute:'2-digit' });
    // the same list in the same order, starting with the song playing now (songs before it go at the end)
    const q = Player.queue, i = Math.max(0, Player.idx || 0);
    const req = { name:`The Collection · ${Player.listName || (Player.shuffle ? 'Shuffle' : 'Songs')} · ${d}`.slice(0, 100),
                  uris:q.slice(i).concat(q.slice(0, i)).slice(0, MAX).map(s => s.uri) };
    // open the tab now, while it still counts as your click, so the browser doesn't block it; it fills in when the playlist is ready
    if (await token()){ let w = null; try { w = window.open('', '_blank'); if (w) w.document.title = 'Opening Spotify…'; } catch(e) {} return make(req, w); }
    ls.set('collection-sp-pending', req);       // carried across the trip to Spotify's sign-in page
    signIn();
  }
  // back from Spotify's sign-in page with a code
  async function finish(){
    const q = new URLSearchParams(location.search), code = q.get('code'), err = q.get('error');
    if (!code && !err) return;
    const pk = ls.get('collection-sp-pkce'); if (!pk || q.get('state') !== pk.st) return;
    history.replaceState(null, '', location.pathname + location.hash);
    ls.set('collection-sp-pkce', null);
    if (err){ toast("Spotify sign-in was cancelled, so nothing was saved."); return; }
    try { await tokenCall({ grant_type:'authorization_code', code, redirect_uri:REDIRECT, code_verifier:pk.verifier }); }
    catch(e){ toast(`Spotify sign-in didn't work (${esc(e.message)}).`, true); return; }
    ls.set('collection-sp-owner', true);
    const req = ls.get('collection-sp-pending'); ls.set('collection-sp-pending', null);
    if (req) make(req);
  }
  const owner = () => !!ls.get('collection-sp-owner');
  if (location.hash === '#owner'){ ls.set('collection-sp-owner', true); history.replaceState(null, '', location.pathname + '#shelf'); }
  return { save, finish, owner };
})();
// ---- after a reload: offer to carry on with the same list from the same song (browsers need one click to start sound) ----
const SPOT_KEY = 'collection-player';
function saveSpot(pos, force){
  if (!Player.queue.length) return;
  const now = Date.now();
  if (!force && now - (Player.savedAt || 0) < 4000) return;
  Player.savedAt = now;
  try {
    if (force || !Player.savedQueue){
      localStorage.setItem(SPOT_KEY + '-q', JSON.stringify(Player.queue.map(s => [s.uri.split(':').pop(), s.albumId || ''])));
      Player.savedQueue = true;
    }
    localStorage.setItem(SPOT_KEY, JSON.stringify({ idx:Player.idx, pos:Math.floor((pos || 0) / 1000), shuffle:!!Player.shuffle, at:now }));
  } catch(e) {}
}
function clearSpot(){ try { localStorage.removeItem(SPOT_KEY); localStorage.removeItem(SPOT_KEY + '-q'); } catch(e) {} }
function offerResume(){
  let spot, q;
  try { spot = JSON.parse(localStorage.getItem(SPOT_KEY)); q = JSON.parse(localStorage.getItem(SPOT_KEY + '-q')); } catch(e) { return; }
  if (!spot || !q || !q.length || Date.now() - spot.at > 14 * 864e5) return;    // forget after two weeks
  const byId = Object.fromEntries(ALBUMS.map(a => [a.id, a]));
  const queue = q.map(([sp, id]) => { const a = byId[id]; const t = a && a.tracks.find(x => x.sp === sp);
    return { uri:`spotify:track:${sp}`, label:t ? t.t : 'Song', sub:a ? `${a.artist} · ${a.title}` : '', albumId:id }; });
  const s = queue[spot.idx]; if (!s) return;
  Player.queue = queue; Player.idx = spot.idx; Player.shuffle = spot.shuffle; Player.albumId = s.albumId;
  showPlayer(s.label, s.sub);
  $('#nowLabel').textContent = `Continue ${spot.shuffle ? 'shuffle' : 'listening'} · song ${spot.idx + 1} of ${num(queue.length)}`;
  $('#embedWrap').hidden = true; $('#resumeBtn').hidden = false;
  $('#resumeBtn').onclick = () => { Player.resumeAt = spot.pos > 5 ? spot.pos - 2 : 0; Player.savedQueue = true; playAt(spot.idx); };
}
function nextInQueue(){
  if (Player.idx + 1 < Player.queue.length) playAt(Player.idx + 1);
  else setLive(false, false);
}
// ---- Shuffle Play: every song (with a Spotify match) on the albums currently showing, in random order ----
let SHUFFLE_LIST = [];
const songsOf = list => list.flatMap(a => a.tracks.filter(t => t.sp).map(t => ({ uri:`spotify:track:${t.sp}`, label:t.t, sub:`${a.artist} · ${a.title}`, albumId:a.id, dur:secs(t.d) || 0 })));
let SHUFFLE_LABEL = '';
function setShuffleList(list, label){
  SHUFFLE_LIST = list; SHUFFLE_LABEL = label || '';
  const b = $('#shuffle'); if (!b) return;
  const n = songsOf(list).length;
  $('#shuffleCount').textContent = n ? `${num(list.length)} album${list.length===1?'':'s'} · ${num(n)} song${n===1?'':'s'}` : 'No songs to play';
  b.disabled = !n;
}
function shufflePlay(){
  const q = songsOf(SHUFFLE_LIST);
  for (let i = q.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [q[i], q[j]] = [q[j], q[i]]; }
  Player.listName = SHUFFLE_LABEL;
  if (q.length) startQueue(q, 0, null, true);
}
function onPlayback(d){
  if (!d) return;
  const pos = d.position || 0, dur = d.duration || 0;
  if (dur > 0 && !d.isBuffering) setLive(true, !!d.isPaused);
  if (!d.isPaused && dur > 0){ Player.lastPos = pos; Player.lastDur = dur; saveSpot(pos); }
  if (!Player.queue.length && d.playingURI && d.playingURI !== Player.nowURI){   // album play: show which song Spotify is on
    Player.nowURI = d.playingURI;
    const al = ALBUMS.find(x => x.id === Player.albumId), id = d.playingURI.split(':').pop();
    const t = al && al.tracks.find(x => x.sp === id);
    if (t) $('#nowTitle').textContent = t.t;
    ROOT.querySelectorAll('.side li').forEach(li => li.classList.toggle('playing', !!li.dataset.sp && li.dataset.sp === id));
  }
  if (Player.resumeAt && dur > 0 && !d.isPaused && Player.ctrl){ const s = Player.resumeAt; Player.resumeAt = 0; try { Player.ctrl.seek(s); } catch(e) {} }
  // a song has finished when playback stops at (or snaps back from) its end
  const atEnd = Player.lastDur > 0 && Player.lastPos >= Player.lastDur - 1500;
  if (d.isPaused && atEnd && !Player.advanced && Player.queue.length){ Player.advanced = true; nextInQueue(); }
  // in a background tab the browser may not let a new song start once the music has stopped,
  // so there the next song is started in the last second of this one, while it is still playing
  else if (document.hidden && !d.isPaused && dur > 0 && pos >= dur - 3000 && !Player.advanced && Player.queue.length){ Player.advanced = true; nextInQueue(); }
  if (!d.isPaused && dur > 0) Player.lastPlayingAt = Date.now();
  // Spotify's player stops sending updates while the page is in the background, so the end of a song can go
  // unnoticed. A timer set for when this song should end moves on anyway; each new update resets it.
  clearTimeout(Player.endTimer);
  if (!d.isPaused && dur > 0 && Player.queue.length){
    const uri = Player.current, left = Math.max(0, dur - pos);
    Player.endTimer = setTimeout(() => {
      if (Player.current !== uri || Player.advanced) return;
      if (Date.now() - (Player.lastPlayingAt || 0) < 1500) return;   // still getting updates: the normal end-of-song check will handle it
      Player.advanced = true; nextInQueue();
    }, left + 1200);
  }
}
// background safety net: if the next song was loaded but hasn't started within a few seconds, nudge it
setInterval(() => {
  if (!Player.ctrl || !Player.current || !Player.queue.length || !document.hidden) return;
  if (Player.loadedAt && Date.now() - Player.loadedAt > 4000 && (Player.lastPlayingAt || 0) < Player.loadedAt){
    try { Player.ctrl.play(); } catch (e) {}
    Player.loadedAt = Date.now();
  }
}, 2000);
document.addEventListener('visibilitychange', () => { if (document.hidden && Player.current) KeepAwake.start(); });
function makeController(){
  Player.api.createController($('#embed'), { uri: Player.pending, width:'100%', height: 80 }, ctrl => {
    Player.ctrl = ctrl;
    ctrl.addListener('playback_update', e => onPlayback(e && e.data));
    ctrl.play();
  });
}
const albumQueue = a => a ? a.tracks.filter(t => t.sp).map(t => ({ uri:`spotify:track:${t.sp}`, label:t.t, sub:`${a.artist} · ${a.title}`, albumId:a.id, dur:secs(t.d) || 0 })) : [];
$('#shuffle').addEventListener('click', shufflePlay);
$('#saveSp').addEventListener('click', () => SPX.save());
$('#playHere').addEventListener('click', () => {
  if (!Player.current || !Player.api) return;
  try { if (Player.ctrl) Player.ctrl.destroy(); } catch(e) {}
  Player.ctrl = null;
  $('#embedWrap').innerHTML = '<div id="embed"></div>';
  Player.resumeAt = Player.lastPos > 5000 ? Math.floor(Player.lastPos / 1000) : 0;
  Player.pending = Player.current; Player.lastPos = 0; Player.lastDur = 0; Player.advanced = false;
  makeController();
});
offerResume();
$('#nextSong').addEventListener('click', () => nextInQueue());
$('#prevSong').addEventListener('click', () => { if (Player.queue.length) playAt(Math.max(0, Player.idx - 1)); });
// ---- big cover view ----
let ZOOM = null;
function openZoom(a){
  if (!a || !a.cover || ZOOM) return;
  // The big cover goes on the page itself (outside The Collection's box) and above everything,
  // including the mrjonessf.com header, so the whole cover is always on screen.
  const z = ZOOM = document.createElement('div');
  z.setAttribute('role', 'dialog'); z.setAttribute('aria-label', `Cover of ${a.title}`); z.tabIndex = -1;
  Object.assign(z.style, { position:'fixed', inset:'0', zIndex:'2147483000', display:'grid', placeItems:'center', cursor:'zoom-out',
    background:'rgba(10,10,10,.9)', WebkitBackdropFilter:'blur(4px)', backdropFilter:'blur(4px)', outline:'none' });
  const img = document.createElement('img');
  img.src = BASE + a.cover; img.alt = `Cover of ${a.title} by ${a.artist}`;
  Object.assign(img.style, { width:'min(75vw,75vh)', height:'min(75vw,75vh)', objectFit:'contain', boxShadow:'0 20px 60px rgba(0,0,0,.6)', display:'block' });
  const cap = document.createElement('div'); cap.textContent = `${a.artist} · ${a.title}`;
  Object.assign(cap.style, { position:'absolute', left:'0', right:'0', bottom:'max(14px,3vh)', textAlign:'center', color:'#ddd',
    font:'400 13px/1.4 Poppins, system-ui, sans-serif', letterSpacing:'.04em' });
  z.append(img, cap);
  if (a.coverHi){       // show the stored cover at once, then switch to the large version when it has loaded
    const hi = new Image(); hi.onload = () => { img.src = a.coverHi; }; hi.src = a.coverHi;
  }
  const html = document.documentElement, prev = html.style.overflow;
  html.style.overflow = 'hidden';                                   // the page behind can't scroll while the cover is open
  const close = ev => { if (ev) { ev.preventDefault(); ev.stopPropagation(); } z.remove(); ZOOM = null; html.style.overflow = prev; document.removeEventListener('keydown', key, true); };
  const key = ev => { if (ev.key === 'Escape' || ev.key === 'Enter' || ev.key === ' ') close(ev); else if (ev.key === 'Tab') ev.preventDefault(); };
  z.addEventListener('click', close); z.addEventListener('wheel', ev => ev.preventDefault(), { passive:false }); z.addEventListener('touchmove', ev => ev.preventDefault(), { passive:false });
  document.addEventListener('keydown', key, true);
  document.body.appendChild(z); z.focus();
  try { z.animate([{ opacity:0 }, { opacity:1 }], { duration:250, easing:'ease' });
        img.animate([{ transform:'scale(.6)', opacity:0 }, { transform:'none', opacity:1 }], { duration:300, easing:'cubic-bezier(.2,.7,.2,1)' }); } catch (e) {}
}
ROOT.addEventListener('click', e => {
  const cv = e.target.closest('.album .cover-col .sleeve');
  if (cv) { const h = location.hash.slice(1); return openZoom(ALBUMS.find(x => x.id === h) || ALBUMS.find(x => (x.alsoIds || []).includes(h))); }
});
ROOT.addEventListener('click', e => {
  const b = e.target.closest('[data-uri]'); if (!b) return;
  const albumId = b.dataset.album || null;
  const q = albumQueue(ALBUMS.find(x => x.id === albumId));
  if (b.classList.contains('song') && q.length){
    const i = q.findIndex(x => x.uri === b.dataset.uri);
    return startQueue(q, Math.max(0, i), albumId);
  }
  const al = ALBUMS.find(x => x.id === albumId);
  // Play Album: hand Spotify the whole album, so Spotify itself moves from song to song.
  // That keeps playing when the page is in the background (Chrome won't let a page start a new song there).
  if (al && al.spAlbum){
    clearTimeout(Player.endTimer);
    Player.queue = []; Player.idx = 0; Player.shuffle = false; Player.albumId = albumId; Player.listName = `${al.artist} · ${al.title}`;
    return play(`spotify:album:${al.spAlbum}`, al.title, `${al.artist} · ${al.title}`);
  }
  if (q.length){ Player.listName = al ? `${al.artist} · ${al.title}` : ''; return startQueue(q, 0, albumId); }   // no Spotify album link: play its songs one by one
  Player.queue = []; Player.shuffle = false; Player.albumId = albumId;   // album with no song IDs: let Spotify play the album
  play(b.dataset.uri, b.dataset.label || '');
});
$('#closePlayer').addEventListener('click', () => {
  clearTimeout(Player.endTimer);
  if (Player.ctrl) { try { Player.ctrl.pause(); } catch(err) {} }
  $('#player').hidden = true; STAGE().classList.remove('has-player');
  Player.current = null; Player.queue = []; Player.albumId = null; Player.shuffle = false;
  KeepAwake.stop(); clearSpot(); $('#resumeBtn').hidden = true; $('#embedWrap').hidden = false; $('#playHere').hidden = true;
  refreshHighlight(); setLive(false, false);
});

function route(){
  const h = location.hash.slice(1);
  const a = ALBUMS.find(x => x.id === h) || ALBUMS.find(x => (x.alsoIds || []).includes(h));   // old links to a combined copy still work
  STAGE().classList.toggle('home', !a && !h.startsWith('artist-'));
  STAGE().classList.toggle('albumpg', !!a);
  STAGE().classList.toggle('photo', !a && !h.startsWith('artist-'));   // the photo banner shows on the home page only
  const f = /^(genre|style|person)=(.+)$/.exec(h);
  if (f){   // a genre or style box on an album page: show the whole collection filtered to it
    Object.assign(state, { q:'', format:[], decade:[], genre:[], style:'', person:'', best:[], newyr:[] }); const v = decodeURIComponent(f[2]); state[f[1]] = f[1] === 'genre' ? [v] : f[1] === 'person' ? pkeyA(v) : v;
    renderShelf(); toTop(); refreshHighlight(); return;
  }
  if (a) renderAlbum(a);
  else if (h.startsWith('artist-')) renderArtist(h.slice(7));
  else renderShelf();
  if (a || h.startsWith('artist-')) toTop();
  refreshHighlight();
}
STAGE().style.setProperty('--banner', `url("${BASE}images/receiver-full.jpg")`);
STAGE().style.setProperty('--banner-sm', `url("${BASE}images/receiver-1400.jpg")`);
window.addEventListener('hashchange', route);
route();
SPX.finish();

    })();
  }).catch(function (e) { root.innerHTML = '<p style="font-family:sans-serif">The Collection could not load (' + e + ').</p>'; });
})();
