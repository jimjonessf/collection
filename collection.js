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
    var f = document.createElement('link'); f.rel = 'stylesheet'; f.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap"; f.setAttribute('data-collection-fonts', ''); document.head.appendChild(f);
  }
  var root = host.attachShadow({ mode: 'open' });
  root.innerHTML = '<style>' + "\n/* Layout: matches mrjonessf.com \u2014 Manrope headings, Poppins text, the site's five-step grey palette, square outlined buttons and underline fields.\n   Cover wall up front; each album opens to a \"back of the sleeve\" page. The logo's octopus orange is the only accent. */\n:host{\n  --paper:#ffffff; --panel:#f3f3f3; --line:#d4d4d4; --muted:#6e6e6e; --ink:#000000; --accent:#d96a34; --on-ink:#ffffff;\n  --sleeve-shadow:rgba(0,0,0,.22); --shadow-near:rgba(0,0,0,.32); --sleeve-light:rgba(255,255,255,.24); --sleeve-dark:rgba(0,0,0,.20); --vinyl:#151515; --vinyl-hi:#5a5a5a;\n  --f-head:\"Manrope\",ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;\n  --f-body:\"Poppins\",ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;\n}\n\n*{box-sizing:border-box}\n:host{display:block;background:var(--paper);color:var(--ink);font-family:var(--f-body);font-weight:400;font-size:16px;line-height:1.6;text-align:left}\n:host *{box-sizing:border-box}\n\na{color:inherit}\n:focus-visible{outline:2px solid var(--accent);outline-offset:3px}\n.wrap{max-width:1180px;margin:0 auto}\n.label{font:600 11px/1.4 var(--f-body);text-transform:uppercase;letter-spacing:.14em;color:var(--muted)}\n\n/* stand-in for the mrjonessf.com Squarespace header */\n.site{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 28px;padding-block:18px;border-bottom:1px solid var(--line)}\n.site img{height:58px;width:auto;display:block}\n.site nav{display:flex;flex-wrap:wrap;gap:6px 22px;font-size:14px}\n.site nav a{text-decoration:none;padding-bottom:2px}\n.site nav a[aria-current]{border-bottom:2px solid var(--accent)}\n\n/* page title */\n.mast{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 28px;padding-block:44px 22px}\n.mast h1{font:600 clamp(36px,6vw,60px)/1 var(--f-head);letter-spacing:-.025em;margin:6px 0 0}\n.mast h1 a{text-decoration:none}\n.stats{display:flex;flex-wrap:wrap;gap:10px 28px}\n.stats span{display:flex;flex-direction:column;align-items:center;text-align:center}\n.stats .label{padding-left:.14em}   /* balances the letter-spacing after the last letter so the label sits truly centered */\n.stats b{padding-right:.02em}\n.stats b{font:600 28px/1.1 var(--f-head);letter-spacing:-.02em;font-variant-numeric:tabular-nums}\n/* Shuffle Play: plays every song on the albums the home page is showing right now, in random order */\n.shuffle{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:10px;align-self:center;\n  border:1.5px solid var(--ink);padding:7px 14px 7px 10px;color:var(--ink);background:transparent}\n.shuffle .ic{width:30px;height:30px;flex:none;border-radius:50%;background:var(--ink);color:var(--on-ink);display:grid;place-items:center}\n.shuffle .ic svg{width:16px;height:16px}\n.stats .shuffle span.tx{display:flex;flex-direction:column;align-items:flex-start;text-align:left}\n.shuffle .tx b{font:600 15px/1.2 var(--f-head);letter-spacing:-.005em;padding:0}\n.shuffle .tx .label{padding-left:0;letter-spacing:.1em;white-space:nowrap}\n.shuffle:hover,.shuffle.on{border-color:var(--accent)}\n.shuffle:hover .ic,.shuffle.on .ic{background:var(--accent);color:#fff}\n.shuffle:focus-visible{outline:2px solid var(--accent);outline-offset:3px}\n.shuffle[disabled]{opacity:.4;cursor:default}\n@media (max-width:620px){.shuffle{flex:1 1 100%}}\n.player .skip{all:unset;cursor:pointer;flex:none;width:30px;height:30px;display:grid;place-items:center;border:1.5px solid var(--ink);color:var(--ink)}\n.player .skip svg{width:14px;height:14px}\n.player .skip:hover{background:var(--accent);border-color:var(--accent);color:#fff}\n.player .skip[hidden]{display:none}\n.player .now .sub{display:block;font-size:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n\n/* toolbar: underline fields like the site's forms */\n.tools{display:flex;flex-wrap:wrap;gap:14px 24px;align-items:flex-end;padding-block:8px 18px;border-top:1px solid var(--line)}\n.field{display:flex;flex-direction:column;gap:2px;min-width:0}\n.field.grow{flex:1 1 260px}\n.field input,.field select{font:400 15px var(--f-body);color:var(--ink);background:transparent;border:0;border-bottom:1.5px solid var(--muted);border-radius:0;padding:8px 0;width:100%}\n.field select{padding-right:22px;cursor:pointer}\n.field input:focus,.field select:focus{outline:none;border-bottom-color:var(--ink)}\n.filters{display:flex;flex-direction:column;gap:12px;padding-bottom:32px}\n.filter-row{display:grid;grid-template-columns:5.5em minmax(0,1fr);gap:10px;align-items:start}\n.filter-row > .label{min-height:35px;display:flex;align-items:center}\n.chips{display:flex;flex-wrap:wrap;gap:8px}\n.chip:disabled{opacity:.35;cursor:default;background:transparent}\n@media (max-width:520px){.filter-row{grid-template-columns:minmax(0,1fr);gap:6px}.filter-row > .label{min-height:0}}\n.chip{text-align:center;font:500 13px/20px var(--f-body);border:1.5px solid var(--ink);background:transparent;color:var(--ink);padding:6px 14px;border-radius:0;cursor:pointer}\n.chip:hover{background:var(--panel)}\n.chip[aria-pressed=\"true\"]{background:var(--ink);color:var(--on-ink)}\n.chip small{margin-left:6px;opacity:.6;font-size:11px}\n\n/* cover wall */\n.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:34px 22px}\n.rec{display:flex;flex-direction:column;gap:10px;min-width:0}\n.rec a{text-decoration:none}\n.rec .cover{display:block}\n.rec .meta-row{display:flex;gap:10px;align-items:flex-start;justify-content:space-between;min-width:0}\n.rec .meta-row .meta{flex:1}\n.mini-play{all:unset;box-sizing:border-box;flex:none;width:14px;height:14px;margin-top:2px;border:1px solid var(--ink);position:relative;color:var(--ink);display:grid;place-items:center;cursor:pointer}\n.mini-play svg{width:6px;height:6px;margin-left:1px}\n.mini-play::after{content:\"\";position:absolute;inset:-10px}\n.mini-play:hover{background:var(--accent);border-color:var(--accent);color:#fff}\n.mini-play:focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n.mini-play.on{background:var(--accent);border-color:var(--accent);color:#fff}\n.sleeve{position:relative;aspect-ratio:1;max-width:100%;background:var(--panel)}\n.sleeve img{width:100%;height:100%;object-fit:cover;display:block;position:relative;z-index:1;\n  box-shadow:0 2px 3px var(--shadow-near),0 6px 12px var(--sleeve-shadow),0 18px 34px var(--sleeve-shadow)}\n/* light falling from the top left across the sleeve, with a faint edge, so covers read as card stock */\n.sleeve:has(img)::after{content:\"\";position:absolute;inset:0;z-index:2;pointer-events:none;\n  background:linear-gradient(135deg,var(--sleeve-light) 0%,transparent 42%,transparent 55%,var(--sleeve-dark) 100%);\n  box-shadow:inset 1px 1px 0 var(--sleeve-light),inset -1px -1px 0 var(--sleeve-dark)}\n.disc{position:absolute;inset:3%;border-radius:50%;z-index:0;\n  background:#151515;transition:transform .35s ease}\n.rec:hover .disc,.rec:focus-within .disc{transform:translateX(16%)}\n.rec .meta{min-width:0;display:flex;flex-direction:column}\n.rec .t{font-weight:500;font-size:14px;line-height:1.3}\n.rec .a{font-size:13px;color:var(--muted);line-height:1.4}\n.rec .y{font-size:11px;color:var(--muted);letter-spacing:.04em;margin-top:2px}\n.rec .ty{font-size:11px;color:var(--muted);letter-spacing:.04em;line-height:1.4}\n.blank{position:absolute;inset:0;z-index:1;display:flex;flex-direction:column;justify-content:flex-end;padding:14px;gap:2px;background:var(--panel);border:1.5px solid var(--line)}\n.blank span{font:600 18px/1.15 var(--f-head);letter-spacing:-.01em}\n.blank em{font-style:normal;font-size:12px;color:var(--muted)}\n.empty{padding:40px 0;color:var(--muted)}\n\n/* album page */\n.back{display:inline-block;font-size:14px;text-decoration:none;color:var(--muted);padding-block:26px 18px}\n.back:hover{color:var(--ink)}\n.album{display:grid;grid-template-columns:minmax(0,440px) minmax(0,1fr);gap:48px;align-items:start}\n.album .sleeve img{box-shadow:0 3px 5px var(--shadow-near),0 10px 20px var(--sleeve-shadow),0 32px 58px var(--sleeve-shadow)}\n.album .sleeve{width:85%}\n.album .disc{transform:translateX(17%);animation:slideOut 1.1s cubic-bezier(.2,.7,.2,1) .3s both}\n@keyframes slideOut{from{transform:translateX(0)}}\n.side-col{display:flex;flex-direction:column;gap:24px;min-width:0}\n.album h2{font:600 clamp(32px,4.6vw,50px)/1.05 var(--f-head);letter-spacing:-.025em;margin:8px 0 8px;text-wrap:balance}\n.album .by{font-size:18px;font-weight:400}\n.album .by a{text-decoration:none;border-bottom:2px solid var(--accent)}\n.pills{display:flex;flex-wrap:wrap;gap:6px}\n.pill{font:500 12px var(--f-body);padding:4px 10px;background:var(--panel)}\n.pill.ed{background:var(--ink);color:var(--on-ink)}\na.pill{text-decoration:none;color:inherit}\na.pill:hover,a.pill:focus-visible{background:var(--accent);color:#fff}\n.listen{display:flex;flex-wrap:wrap;gap:10px}\n.btn{display:inline-flex;align-items:center;gap:9px;font:500 14px var(--f-body);padding:11px 20px;text-decoration:none;border:2px solid var(--ink);background:transparent;color:var(--ink)}\n.btn:hover{background:var(--ink);color:var(--on-ink)}\n.btn svg{width:16px;height:16px;flex:none}\n.notes{border-left:2px solid var(--accent);padding:2px 0 2px 18px;max-width:60ch;font-weight:300;font-size:16px}\n.notes p{margin:0}\n.notes.placeholder{color:var(--muted);border-left-style:dashed;font-size:14px}\n.facts{display:grid;grid-template-columns:max-content minmax(0,1fr);gap:8px 22px;margin:0;font-size:14px;padding-top:20px;border-top:1px solid var(--line)}\n.facts dt{color:var(--muted)}\n.facts dd{margin:0;min-width:0;font-variant-numeric:tabular-nums}\n.facts a{text-decoration:none;border-bottom:1px solid var(--accent)}\n\n/* back of the sleeve */\n.back-sleeve{margin-top:56px;display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:44px;background:var(--panel);padding:32px max(16px,3vw)}\n.back-sleeve h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:0 0 14px}\n.sides{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px 32px}\n.side h4{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin:0 0 4px;padding-bottom:6px;border-bottom:1.5px solid var(--ink)}\n.side h4 .label{color:var(--ink)}\n.side h4 span:last-child{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}\n.side ol{list-style:none;margin:0;padding:0}\n.side li{display:grid;grid-template-columns:2.4em minmax(0,1fr) auto;gap:10px;padding:6px 0;border-bottom:1px solid var(--line);font-size:14px;line-height:1.4}\n.side li .p{font-size:12px;color:var(--muted);padding-top:1px}\n.side li .d{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums;padding-top:1px}\n.credits{list-style:none;margin:0;padding:0;font-size:14px;display:flex;flex-direction:column;gap:8px;line-height:1.45}\n.credits .role{color:var(--muted)}\n.pager{display:flex;justify-content:space-between;gap:16px;margin-top:40px;padding-top:18px;border-top:1px solid var(--line);font-size:14px}\n.pager a{text-decoration:none;max-width:48%;min-width:0}\n.pager a:hover span{border-bottom:1px solid var(--accent)}\n\n/* playable songs + Spotify player bar */\n.side li .song{all:unset;cursor:pointer;display:flex;gap:8px;align-items:baseline;min-width:0}\n.side li .song:focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n.side li .song .ic{width:10px;flex:none;color:var(--muted);font-size:10px;transform:translateY(-1px)}\n.side li .song:hover,.side li.playing .song{color:var(--accent)}\n.side li .song:hover .ic,.side li.playing .ic{color:var(--accent)}\n.side li.playing{font-weight:500}\n.side li .d{display:flex;justify-content:flex-end;align-items:center;min-height:19px}\n/* spinning record: replaces the song length while that song is actually playing (1.8 s per turn = 33\u2153 rpm) */\n.rec-spin{display:none;width:16px;height:16px;border-radius:50%;flex:none;\n  background:\n    radial-gradient(circle, var(--paper) 0 7%, var(--accent) 8% 30%, transparent 31%),\n    repeating-radial-gradient(circle, transparent 0 1px, rgba(255,255,255,.07) 1px 1.6px),\n    conic-gradient(var(--vinyl) 0 8%, var(--vinyl-hi) 13%, var(--vinyl) 20% 58%, var(--vinyl-hi) 63%, var(--vinyl) 70%);\n  box-shadow:0 0 0 1px rgba(0,0,0,.15);animation:spin 1.8s linear infinite}\n.rec-spin.cd{background:radial-gradient(circle,var(--paper) 0 9%,rgba(255,255,255,.65) 10% 28%,transparent 30%),\n  conic-gradient(rgba(255,80,160,.35),rgba(255,210,60,.35),rgba(60,230,170,.35),rgba(60,140,255,.35),rgba(190,80,255,.35),rgba(255,80,160,.35)),\n  conic-gradient(#cfd2d6,#f4f5f7 25%,#b3b7bd 50%,#eceef1 75%,#cfd2d6);animation-duration:1s}\n.wrap.sp-live .side li.playing .len{display:none}\n.wrap.sp-live .side li.playing .rec-spin{display:block}\n.wrap.sp-paused .side li.playing .rec-spin{animation-play-state:paused}\n@keyframes spin{to{transform:rotate(360deg)}}\n.player{position:fixed;left:0;right:0;bottom:0;z-index:20;background:var(--paper);border-top:2px solid var(--ink);\n  padding:10px max(16px,env(safe-area-inset-right,0px)) calc(10px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px))}\n.player .in{max-width:1180px;margin:0 auto;display:flex;gap:14px;align-items:center}\n.player .now{flex:none;width:170px;min-width:0}\n.player .now b{display:block;font:600 14px/1.3 var(--f-head);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.player .embed{flex:1;min-width:0;min-height:80px}\n.player .embed iframe{display:block;border:0;width:100%}\n.player .msg{font-size:14px;color:var(--muted);flex:1}\n.player .msg a{color:var(--ink)}\n.player .x{all:unset;cursor:pointer;font-size:20px;line-height:1;padding:4px 8px;color:var(--muted)}\n.player .x:hover{color:var(--ink)}\n.wrap.has-player{padding-bottom:120px}\n@media (max-width:620px){.player .now{display:none}}\n/* facts + discography */\n.info{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px;padding-top:20px;border-top:1px solid var(--line)}\n.info .facts{padding-top:0;border-top:0;align-content:start}\n.disco h3{font:600 15px/1.2 var(--f-head);margin:0 0 10px;letter-spacing:-.005em}\n.disco ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px;font-size:14px;line-height:1.35}\n.disco li{display:grid;grid-template-columns:3em minmax(0,1fr);gap:8px}\n.disco .yr{color:var(--muted);font-variant-numeric:tabular-nums}\n.disco li.owned{font-weight:600}\n.disco li.owned a{text-decoration:none;border-bottom:1.5px solid var(--line)}\n.disco li.owned a:hover,.disco li.owned a:focus-visible{border-bottom-color:var(--accent);color:var(--accent)}\n.disco li.current{font-weight:600;color:var(--accent)}\n.disco li.current .yr{color:var(--accent)}\n.disco .xt{font-weight:400;font-size:12px;color:var(--muted);white-space:nowrap}\n.disco .note{font-size:12px;color:var(--muted);margin:10px 0 0}\n/* award medals for best-of lists (original design: gold medal, orange ribbons) */\n.best-row{display:grid;grid-template-columns:max-content max-content 1fr;gap:8px 18px;align-items:start;font-size:14px;margin-top:18px;padding-top:16px;border-top:1px solid var(--line)}\n.best-lab{color:var(--muted);min-width:6.7em}\n.best-links a{text-decoration:none;border-bottom:1px solid var(--accent);line-height:1.9}\n.best-row .awards{margin-top:-2px}\n@media (max-width:620px){.best-row{grid-template-columns:max-content 1fr}.best-row .awards{grid-column:1/-1}}\n.awards{display:flex;flex-wrap:wrap;gap:2px}\n.award{width:58px;text-align:center;text-decoration:none;color:var(--ink);display:block;border:0!important}\n.award .nm{font:600 8.5px/1.15 var(--f-body);margin-bottom:4px;min-height:2.3em;display:flex;align-items:flex-end;justify-content:center}\n.award .d{width:54px;height:54px;margin:0 auto;border-radius:50%;display:grid;place-items:center;position:relative;z-index:1;color:#3d2a05;\n  background:radial-gradient(circle at 32% 28%,#fff6cf 0 6%,#f2d36b 22%,#c99a2e 58%,#8f6512 100%);\n  box-shadow:inset 0 0 0 3px rgba(255,255,255,.35),inset 0 0 0 5px rgba(120,80,10,.45),0 2px 6px rgba(0,0,0,.25);transition:transform .2s}\n.award .d b{font:800 7.5px/1.05 var(--f-head);display:block;letter-spacing:0;text-transform:uppercase;white-space:nowrap}\n.award .d small{font:700 8.5px/1.1 var(--f-head);display:block;margin-top:2px;opacity:.85}\n.award .r{display:flex;justify-content:center;gap:3px;height:26px;margin-top:-10px}\n.award .r i{width:13px;height:26px;background:linear-gradient(90deg,#b8501f,#e47a44 50%,#b8501f);clip-path:polygon(0 0,100% 0,100% 100%,50% 76%,0 100%)}\n.award .r i:first-child{transform:rotate(12deg)} .award .r i:last-child{transform:rotate(-12deg)}\n.award.aoty .d b{font-size:6px;line-height:1.12;white-space:normal;max-width:30px;margin:0 auto}\n.award.aoty .d small{font-size:7.5px;margin-top:1px}\n.award:hover .d,.award:focus-visible .d{transform:scale(1.06)}\n/* wikipedia columns */\n.wiki{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:44px;margin-top:28px;padding-top:24px;border-top:2px solid var(--ink)}\n.wiki h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:4px 0 10px}\n.wiki p{margin:0 0 12px;max-width:62ch;font-size:15px}\n.wiki p.missing{color:var(--muted);font-size:14px}\n.wiki a.more{font-size:14px;text-decoration:none;border-bottom:1px solid var(--accent)}\n/* artist page */\n.artist-head{padding-block:4px 26px;margin-bottom:30px;border-bottom:1px solid var(--line)}\n.artist-head h2{font:600 clamp(36px,6vw,58px)/1.05 var(--f-head);letter-spacing:-.025em;margin:8px 0 0}\nfooter{margin-top:64px;padding-top:16px;border-top:1px solid var(--line);font-size:12px;color:var(--muted);display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:space-between}\n\n@media (max-width:760px){\n  .album,.back-sleeve,.wiki{grid-template-columns:minmax(0,1fr)}\n  .wiki{gap:28px}\n  .album{gap:28px}\n  .album .sleeve{max-width:380px}\n  .grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:26px 14px}\n  .site img{height:46px}\n}\n@media (max-width:1000px){.info{grid-template-columns:minmax(0,1fr)}}\n@media (prefers-reduced-motion:reduce){.disc{transition:none}.album .disc{animation:none}.rec-spin{animation:none}}\n" + '</style>' + "<div class=\"wrap\">\n  <div class=\"mast\">\n    <div><h1><a href=\"#shelf\">The Collection</a></h1></div>\n    <div class=\"stats\" id=\"stats\"></div>\n  </div>\n  <main id=\"view\"></main>\n  <div class=\"player\" id=\"player\" hidden>\n    <div class=\"in\">\n      <div class=\"now\"><div class=\"label\" id=\"nowLabel\">Now playing</div><b id=\"nowTitle\"></b><span class=\"sub\" id=\"nowSub\"></span></div>\n      <button class=\"skip\" id=\"prevSong\" type=\"button\" aria-label=\"Previous song\" title=\"Previous song\" hidden><svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1h2v12H2zM13 1v12L5 7z\" fill=\"currentColor\"/></svg></button>\n      <div class=\"embed\" id=\"embedWrap\"><div id=\"embed\"></div></div>\n      <button class=\"skip\" id=\"nextSong\" type=\"button\" aria-label=\"Next song\" title=\"Next song\" hidden><svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M10 1h2v12h-2zM1 1v12l8-6z\" fill=\"currentColor\"/></svg></button>\n      <div class=\"msg\" id=\"playerMsg\" hidden></div>\n      <button class=\"x\" id=\"closePlayer\" type=\"button\" aria-label=\"Close player\">\u00d7</button>\n    </div>\n  </div>\n</div>\n\n";
  var get = function (name) { return fetch(BASE + 'data/' + name + '.json?v=20261104210804').then(function (r) { return r.json(); }); };
  Promise.all([get('albums'), get('artists'), get('bestof')]).then(function (d) {
    window.__COLLECTION_ROOT = root; window.__COLLECTION_BASE = BASE;
    window.__COLLECTION_DATA = { data: d[0], artists: d[1], bestof: d[2] };
    (function () {

// Works two ways: as this stand-alone page (data in the script tags below), or embedded on Squarespace by collection.js,
// which renders into a shadow root and passes the data, the root and the GitHub address in through window.__COLLECTION_*
const ROOT = window.__COLLECTION_ROOT || document;
const BASE = window.__COLLECTION_BASE || '';
const readJSON = id => window.__COLLECTION_DATA ? window.__COLLECTION_DATA[id] : JSON.parse(document.getElementById(id).textContent);
const ALBUMS = readJSON('data');
const ARTISTS = readJSON('artists');
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
// Share genres and styles across an artist's albums, so every album by a band carries the band's full range
// (Yacht Rock and the style-only tags such as Children's stay with the album they belong to).
(() => {
  const pool = {};
  ALBUMS.forEach(a => { const p = pool[a.artistKey] ??= { g:[], s:[] };
    // Punk, Rap and Disco come from an album's own styles, so they stay with that album and don't spread to the artist
    a.genres.forEach(x => { if (!['Yacht Rock', ...ALWAYS_GENRES].includes(x) && !p.g.includes(x)) p.g.push(x); });
    a.styles.forEach(x => { if (!STYLE_ONLY.includes(x) && !PUNK_STYLES.test(x) && !RAP_STYLES.test(x) && !DISCO_STYLES.test(x) && !p.s.includes(x)) p.s.push(x); }); });
  ALBUMS.forEach(a => { const p = pool[a.artistKey];
    a.genres = [...a.genres, ...p.g.filter(x => !a.genres.includes(x))];
    a.styles = [...a.styles, ...p.s.filter(x => !a.styles.includes(x))]; });
})();
const num = n => Math.round(n).toLocaleString('en-US');   // whole numbers with commas: 1,234
const artistName = {}; ALBUMS.forEach(a => artistName[a.aslug] ??= a.artist);
// "Best of" lists: an album is on a list when the artist and the title match (ignoring "The", punctuation and bracketed extras)
// link to the list's own page about the album
const ordinal = n => n + (['th','st','nd','rd'][(n % 100 - 20) % 10] || ['th','st','nd','rd'][n % 100] || 'th');
const bestUrl = b => b.list === 'rs' ? `https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/${b.slug}/`
  : b.list === 'apple' ? `https://100best.music.apple.com/us/album/${b.rank}`
  : b.list === 'acclaimed' ? `https://www.acclaimedmusic.net/album/A${b.slug}.htm`
  : b.list === 'grammy' ? `https://en.wikipedia.org/wiki/${ordinal(b.rank - 1958)}_Annual_Grammy_Awards`
  : `https://pitchfork.com/reviews/albums/${b.slug}/`;
// what each list shows: the line in the Best of links, and the big/small text on the medal
const bestText = b => { const L = BEST_LISTS.find(x => x.key === b.list);
  if (b.list === 'grammy') return { line:`Grammy Album of the Year · ${b.rank}`, name:'Grammy', top:'Album of the Year', val:String(b.rank) };
  const val = b.list === 'pitchfork' ? Number(b.score).toFixed(1) : '#' + b.rank;
  return { line:`${L.short} · ${val}`, name:L.name.replace(/ Top \d+$/, ''), top:L.name.replace(/^.*?(Top \d+)$/, '$1'), val }; };
const BEST_LISTS = [
  { key:'rs', name:'Rolling Stone Top 200', short:'Rolling Stone 200' },
  { key:'apple', name:'Apple Music Top 100', short:'Apple Music 100' },
  { key:'pitchfork', name:'Pitchfork Top 200', short:'Pitchfork 200' },
  { key:'acclaimed', name:'Acclaimed Music Top 200', short:'Acclaimed Music 200' },
  { key:'grammy', name:'Grammy Album of the Year', short:'Grammy Album of the Year' }];
(() => {
  const data = readJSON('bestof');
  const artistK = s => titleKey(String(s).replace(/\s+(&|and)\s+/gi, ' '));
  const bare = s => titleKey(String(s).replace(/\s*[\(\[].*?[\)\]]/g, ''));
  ALBUMS.forEach(a => { a.best = []; });
  BEST_LISTS.forEach(L => (data[L.key] || []).forEach(([artist, title, rank, x, y]) => {
    const score = L.key === 'pitchfork' ? x : null, slug = L.key === 'pitchfork' ? y : x;
    ALBUMS.forEach(a => {
      if (artistK(a.artist) !== artistK(artist)) return;
      if (titleKey(a.title) !== titleKey(title) && bare(a.title) !== bare(title)) return;
      if (!a.best.some(b => b.list === L.key)) a.best.push({ list:L.key, rank, score, slug });
    });
  }));
})();

// format / genre / decade / best hold the selected buttons of each row (empty = All); several can be on at once, and albums must match all of them
const state = { q:'', format:[], genre:[], decade:[], style:'', best:[], sort:'acquired', expanded:false };
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
          ${genreList(genres).map(([g,n])=>`<button class="chip" data-v="${esc(g)}" aria-pressed="${state.genre.includes(g)}"${n?'':' disabled'}>${tagLabel(g)}<small>${n}</small></button>`).join('')}
          <button class="chip more" id="genreMore" type="button" aria-expanded="${state.expanded}">${state.expanded ? '...CONTRACT...' : '...EXPAND...'}</button>
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
      ${state.style ? `<div class="filter-row"><span class="label">Style</span>
        <div class="chips"><button class="chip" id="clearStyle" aria-pressed="true" title="Show all styles">${esc(state.style)}<small>${ALBUMS.filter(a=>a.styles.includes(state.style)).length}</small> ×</button></div></div>` : ''}
    </div>
    <div class="grid" id="grid"></div>`;
  $('#sort').value = state.sort;
  $('#q').addEventListener('input', e => { state.q = e.target.value; fillGrid(); });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; savePrefs(); fillGrid(); });
  ROOT.querySelectorAll('.chips[data-kind]').forEach(group => group.querySelectorAll('.chip[data-v]').forEach(b => b.addEventListener('click', () => {
    // All clears the row; any other button toggles on/off, and turning the last one off goes back to All
    const k = group.dataset.kind, v = b.dataset.v;
    // Media and Decade pick one at a time (a new button replaces the old); Genre and Best Of can combine
    const single = k === 'format' || k === 'decade';
    state[k] = !v ? [] : state[k].includes(v) ? state[k].filter(x => x !== v) : single ? [v] : [...state[k], v];
    if (location.hash !== '#shelf' && location.hash) history.replaceState(null, '', '#shelf');
    if (k === 'genre' && !state.expanded) return renderShelf();   // e.g. All drops a style added after ...CONTRACT...
    group.querySelectorAll('.chip[data-v]').forEach(c => c.setAttribute('aria-pressed', c.dataset.v ? state[k].includes(c.dataset.v) : !state[k].length)); fillGrid(); })));
  equalizeChips(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(equalizeChips);
  $('#genreMore').addEventListener('click', () => { state.expanded = !state.expanded; renderShelf(); });
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
  const q = state.q.trim().toLowerCase();
  // an album must match EVERY selected button, in the same row or different rows (Rock + 70s = rock albums from the 70s)
  const fmtOk = f => f==='CD' ? isCD : f==='Colored Vinyl' ? isColored : hasVinyl;
  const list = sorted(ALBUMS.filter(a => state.format.every(f => fmtOk(f)(a)) &&
    state.genre.every(g => a.genres.includes(g) || a.styles.includes(g)) && state.decade.every(d => a.decade === d) && (!state.style || a.styles.includes(state.style)) && state.best.every(k => a.best.some(b => b.list === k)) &&
    (!q || [a.artist,a.title,a.label,a.catno,a.year,decadeWords(a),...a.genres,...a.styles,...a.tracks.map(t=>t.t),...a.personnel].join(' ').toLowerCase().includes(q))));
  const filt = [state.format.join(' + '), state.genre.join(' + '), state.decade.join(' + '), state.style, state.best.map(k => (BEST_LISTS.find(L => L.key === k) || {}).name).join(' + ')].filter(Boolean).join(' · ');
  setShuffleList(list);
  $('#grid').innerHTML = list.length ? list.map(card).join('')
    : `<p class="empty">No records match${state.q?` “${esc(state.q)}”`:''}${filt?`${state.q?' in':''} ${esc(filt)}`:''}.</p>`;
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

function discography(a){
  const art = ARTISTS[a.artistKey]; if (!art || !art.studio_albums || !art.studio_albums.length) return '';
  const mine = ALBUMS.filter(x => x.artistKey === a.artistKey);
  const bare = t => titleKey(String(t).replace(/\s*[\(\[].*?[\)\]]/g, ''));   // "The Beatles (White Album)" ~ "The Beatles"
  const rows = art.studio_albums.map(s => ({ year:s.year, title:s.title, extra:'', id:null, cur:false }));
  const extras = [];
  mine.forEach(x => {
    let row = rows.find(r => titleKey(r.title) === titleKey(x.title));
    if (!row) { const c = rows.filter(r => bare(r.title) === bare(x.title)); row = c.length === 1 ? c[0] : null; }
    if (!row) extras.push(row = { year:x.year || 0, title:x.title, extra:x.type || '', id:null, cur:false });
    row.id = x.id; if (x === a) row.cur = true;
  });
  // live albums, compilations, EPs etc. in the collection join the list at their original release year
  const list = [...rows, ...extras].sort((x,y) => x.year - y.year || (x.extra ? 1 : 0) - (y.extra ? 1 : 0)).map(s => {
    const name = !s.cur && s.id ? `<a href="#${s.id}">${esc(s.title)}</a>` : esc(s.title);
    return `<li class="${s.cur?'current':s.id?'owned':''}"><span class="yr">${s.year||''}</span><span>${name}${s.extra?` <span class="xt">${esc(s.extra)}</span>`:''}</span></li>`; }).join('');
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
function renderAlbum(a){
  setShuffleList([a]);
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
      ${sleeve(a)}
      <div class="side-col">
        <div>
          <div class="label">${a.year?`${a.year} · `:''}${esc(a.type || 'Album')}</div>
          <h2>${esc(a.title)}</h2>
          <div class="by"><a href="#artist-${a.aslug}">${esc(a.artist)}</a></div>
        </div>
        <div class="pills">
          <span class="pill ed">${!hasVinyl(a) ? 'CD' : a.edition==='Reissue' ? `${esc(a.reissue)} Reissue` : a.edition ? 'Original pressing' : 'Single'}</span>
          ${a.genres.map(g=>`<a class="pill" href="#genre=${encodeURIComponent(g)}" title="See all ${esc(g)} albums">${tagLabel(g)}</a>`).join('')}${a.styles.filter(x => !a.genres.includes(x)).slice(0, Math.max(0, MAX_TAGS - a.genres.length)).map(g=>`<a class="pill" href="#style=${encodeURIComponent(g)}" title="See all ${esc(g)} albums">${esc(g)}</a>`).join('')}
        </div>
        <div class="listen">
          ${a.spAlbum ? `<button class="btn" type="button" data-album="${a.id}" data-uri="spotify:album:${esc(a.spAlbum)}" data-label="${esc(a.title)}">${ICON.play}Play album</button>` : ''}
          <a class="btn" href="${a.spAlbum ? `https://open.spotify.com/album/${esc(a.spAlbum)}` : `https://open.spotify.com/search/${term}`}" target="_blank" rel="noopener">${ICON.spotify}Spotify</a>
          <a class="btn" href="https://music.youtube.com/search?q=${term}" target="_blank" rel="noopener">${ICON.play}YouTube Music</a>
        </div>
        <div class="info">
        <dl class="facts">
          ${a.year?`<dt>Released</dt><dd>${fmtRelease(a.released || String(a.year))}${a.edition==='Reissue'&&a.reissue?`<span style="display:block;color:var(--muted)">This copy: ${a.reissue} Reissue</span>`:''}</dd>`:''}
          <dt>Media</dt><dd>${mediaLabel(a)}</dd>
          ${a.label?`<dt>Label</dt><dd>${esc(a.label)}</dd>`:''}
          ${a.catno?`<dt>Catalog #</dt><dd class="mono">${esc(a.catno)}</dd>`:''}
          ${a.acquired?`<dt>Acquired</dt><dd>${a.acquired.slice(0,4)}</dd>`:''}
          ${total?`<dt>Running time</dt><dd class="mono">${mmss(total)}</dd>`:''}
          ${a.discogs?`<dt>Discogs</dt><dd><a href="${esc(a.discogs)}" target="_blank" rel="noopener">${hasVinyl(a) ? 'View this pressing' : 'View this CD release'} ↗</a></dd>`:''}
        </dl>
        ${discography(a)}
        </div>
        ${a.best.length?`<div class="best-row"><div class="best-lab">Best of</div><div class="best-links">${a.best.map(b=>{ const L=BEST_LISTS.find(x=>x.key===b.list);
            return `<span style="display:block"><a href="${esc(bestUrl(b))}" target="_blank" rel="noopener">${esc(bestText(b).line)} ↗</a></span>`; }).join('')}</div>
            <div class="awards">${a.best.map(b=>{ const t=bestText(b);
              return `<a class="award${b.list==='grammy'?' aoty':''}" href="${esc(bestUrl(b))}" target="_blank" rel="noopener" title="${esc(t.line)}"><div class="nm">${esc(t.name)}</div><div class="d"><div><b>${esc(t.top)}</b><small>${esc(t.val)}</small></div></div><div class="r"><i></i><i></i></div></a>`; }).join('')}</div></div>`:''}
      </div>
    </article>
    <section class="back-sleeve">
      <div>
        <h3>Tracklist</h3>
        <div class="sides">
          ${groups.map((g,gi)=>{ const ts=g.tracks.map(t=>secs(t.d)); const st=ts.every(x=>x!=null)?ts.reduce((n,x)=>n+x,0):null;
            const sub = g.name.startsWith('Disc') && disc[gi] ? disc[gi].replace(/^Disc \d+:\s*/,'') : '';
            return `<div class="side"><h4><span class="label">${esc(g.name)}${sub?` · ${esc(sub)}`:''}</span><span>${st?mmss(st):''}</span></h4><ol>
              ${g.tracks.map(t=>`<li data-sp="${esc(t.sp||'')}"><span class="p">${esc(t.p)}</span>${t.sp ? `<button class="song" type="button" data-album="${a.id}" data-uri="spotify:track:${esc(t.sp)}" data-label="${esc(t.t)}" aria-label="Play ${esc(t.t)} on Spotify"><span class="ic">▶</span><span>${esc(t.t)}</span></button>` : `<span>${esc(t.t)}</span>`}<span class="d"><span class="len">${esc(t.d)}</span><span class="rec-spin${hasVinyl(a)?'':' cd'}" aria-hidden="true"></span></span></li>`).join('')}
            </ol></div>`; }).join('')}
        </div>
      </div>
      <div>
        ${a.personnel.length?`<h3>Personnel</h3><ul class="credits">${a.personnel.map(p=>{ const [n,...r]=p.split(' – '); return `<li>${esc(n)}${r.length?` <span class="role">— ${esc(r.join(' – '))}</span>`:''}</li>`; }).join('')}</ul>`:''}
        ${others.length?`<h3 style="margin-top:30px">More by ${esc(a.artist)}</h3><div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(120px,1fr))">${others.map(card).join('')}</div>`:''}
      </div>
    </section>
    ${wikiSection(a)}
    <nav class="pager" aria-label="Browse records">
      <a href="#${prev.id}"><div class="label">Previous</div><span>${esc(prev.artist)} — ${esc(prev.title)}</span></a>
      <a href="#${next.id}" style="text-align:right"><div class="label">Next</div><span>${esc(next.artist)} — ${esc(next.title)}</span></a>
    </nav>`;
}

function renderArtist(s){
  const list = sorted(ALBUMS.filter(a=>a.aslug===s)).sort((x,y)=>(x.year||0)-(y.year||0));
  if (!list.length) return renderShelf();
  setShuffleList(list);
  $('#view').innerHTML = `<a class="back" href="#shelf">← The Collection</a>
    <div class="artist-head"><div class="label">${list.length} record${list.length>1?'s':''} in the collection</div><h2>${esc(artistName[s])}</h2></div>
    <div class="grid">${list.map(card).join('')}</div>`;
}

// ---- Spotify player (official embed, controlled through Spotify's iFrame API) ----
const Player = { api:null, ctrl:null, loading:false, failed:false, pending:null,
  queue:[], idx:0, albumId:null, current:null, lastPos:0, lastDur:0, advanced:false };
function showPlayer(label, sub){ $('#player').hidden=false; STAGE().classList.add('has-player'); $('#nowTitle').textContent=label; $('#nowSub').textContent=sub||'';
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
function play(uri, label, sub){
  Player.current = uri; Player.lastPos = 0; Player.lastDur = 0; Player.advanced = false;
  showPlayer(label, sub); refreshHighlight(); setLive(false, false);
  if (Player.failed) return playerFallback(uri);
  if (Player.ctrl){ Player.ctrl.loadUri(uri); Player.ctrl.play(); return; }
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
  play(s.uri, s.label, s.sub);
}
function nextInQueue(){
  if (Player.idx + 1 < Player.queue.length) playAt(Player.idx + 1);
  else setLive(false, false);
}
// ---- Shuffle Play: every song (with a Spotify match) on the albums currently showing, in random order ----
let SHUFFLE_LIST = [];
const songsOf = list => list.flatMap(a => a.tracks.filter(t => t.sp).map(t => ({ uri:`spotify:track:${t.sp}`, label:t.t, sub:`${a.artist} · ${a.title}`, albumId:a.id })));
function setShuffleList(list){
  SHUFFLE_LIST = list;
  const b = $('#shuffle'); if (!b) return;
  const n = songsOf(list).length;
  $('#shuffleCount').textContent = n ? `${num(list.length)} album${list.length===1?'':'s'} · ${num(n)} song${n===1?'':'s'}` : 'No songs to play';
  b.disabled = !n;
}
function shufflePlay(){
  const q = songsOf(SHUFFLE_LIST);
  for (let i = q.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [q[i], q[j]] = [q[j], q[i]]; }
  if (q.length) startQueue(q, 0, null, true);
}
function onPlayback(d){
  if (!d) return;
  const pos = d.position || 0, dur = d.duration || 0;
  if (dur > 0 && !d.isBuffering) setLive(true, !!d.isPaused);
  if (!d.isPaused && dur > 0){ Player.lastPos = pos; Player.lastDur = dur; }
  // a song has finished when playback stops at (or snaps back from) its end
  const atEnd = Player.lastDur > 0 && Player.lastPos >= Player.lastDur - 1500;
  if (d.isPaused && atEnd && !Player.advanced && Player.queue.length){ Player.advanced = true; nextInQueue(); }
}
function makeController(){
  Player.api.createController($('#embed'), { uri: Player.pending, width:'100%', height: 80 }, ctrl => {
    Player.ctrl = ctrl;
    ctrl.addListener('playback_update', e => onPlayback(e && e.data));
    ctrl.play();
  });
}
const albumQueue = a => a ? a.tracks.filter(t => t.sp).map(t => ({ uri:`spotify:track:${t.sp}`, label:t.t, sub:`${a.artist} · ${a.title}`, albumId:a.id })) : [];
$('#shuffle').addEventListener('click', shufflePlay);
$('#nextSong').addEventListener('click', () => nextInQueue());
$('#prevSong').addEventListener('click', () => { if (Player.queue.length) playAt(Math.max(0, Player.idx - 1)); });
ROOT.addEventListener('click', e => {
  const b = e.target.closest('[data-uri]'); if (!b) return;
  const albumId = b.dataset.album || null;
  const q = albumQueue(ALBUMS.find(x => x.id === albumId));
  if (b.classList.contains('song') && q.length){
    const i = q.findIndex(x => x.uri === b.dataset.uri);
    return startQueue(q, Math.max(0, i), albumId);
  }
  if (q.length) return startQueue(q, 0, albumId);          // Play album / cover play button
  Player.queue = []; Player.shuffle = false; Player.albumId = albumId;   // album with no song IDs: let Spotify play the album
  play(b.dataset.uri, b.dataset.label || '');
});
$('#closePlayer').addEventListener('click', () => {
  if (Player.ctrl) { try { Player.ctrl.pause(); } catch(err) {} }
  $('#player').hidden = true; STAGE().classList.remove('has-player');
  Player.current = null; Player.queue = []; Player.albumId = null; Player.shuffle = false;
  refreshHighlight(); setLive(false, false);
});

function route(){
  const h = location.hash.slice(1);
  const a = ALBUMS.find(x => x.id === h);
  const f = /^(genre|style)=(.+)$/.exec(h);
  if (f){   // a genre or style box on an album page: show the whole collection filtered to it
    Object.assign(state, { q:'', format:[], decade:[], genre:[], style:'', best:[] }); const v = decodeURIComponent(f[2]); state[f[1]] = f[1] === 'style' ? v : [v];
    renderShelf(); toTop(); refreshHighlight(); return;
  }
  if (a) renderAlbum(a);
  else if (h.startsWith('artist-')) renderArtist(h.slice(7));
  else renderShelf();
  if (a || h.startsWith('artist-')) toTop();
  refreshHighlight();
}
window.addEventListener('hashchange', route);
route();

    })();
  }).catch(function (e) { root.innerHTML = '<p style="font-family:sans-serif">The Collection could not load (' + e + ').</p>'; });
})();
