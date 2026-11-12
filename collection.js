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
  root.innerHTML = '<style>' + "\n/* Layout: matches mrjonessf.com \u2014 Manrope headings, Poppins text, the site's five-step grey palette, square outlined buttons and underline fields.\n   Cover wall up front; each album opens to a \"back of the sleeve\" page. The logo's octopus orange is the only accent. */\n:host{\n  --paper:#ffffff; --panel:#f3f3f3; --line:#d4d4d4; --muted:#6e6e6e; --ink:#000000; --accent:#d96a34; --on-ink:#ffffff;\n  --sleeve-shadow:rgba(0,0,0,.22); --shadow-near:rgba(0,0,0,.32); --sleeve-light:rgba(255,255,255,.24); --sleeve-dark:rgba(0,0,0,.20); --vinyl:#151515; --vinyl-hi:#5a5a5a;\n  --f-head:\"Manrope\",ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;\n  --f-body:\"Poppins\",ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif;\n}\n\n*{box-sizing:border-box}\n:host{display:block;background:var(--paper);color:var(--ink);font-family:var(--f-body);font-weight:400;font-size:16px;line-height:1.6;text-align:left}\n:host *{box-sizing:border-box}\n\na{color:inherit}\n:focus-visible{outline:2px solid var(--accent);outline-offset:3px}\n.wrap{max-width:1560px;margin:0 auto}\n.label{font:600 11px/1.4 var(--f-body);text-transform:uppercase;letter-spacing:.14em;color:var(--muted)}\n\n/* stand-in for the mrjonessf.com Squarespace header */\n.site{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 28px;padding-block:18px;border-bottom:1px solid var(--line)}\n.site img{height:58px;width:auto;display:block}\n.site nav{display:flex;flex-wrap:wrap;gap:6px 22px;font-size:14px}\n.site nav a{text-decoration:none;padding-bottom:2px}\n.site nav a[aria-current]{border-bottom:2px solid var(--accent)}\n\n/* page title */\n.mast{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 28px;padding-block:44px 22px}\n.mast{container-type:inline-size}\n.mast h1{font:400 clamp(52px,6vw,96px)/1 \"Pinyon Script\",var(--f-head),cursive;font-size:clamp(52px,calc((100cqi - 810px) / 5.2),96px);letter-spacing:0;margin:6px 0 calc(24px - .41em);padding:0}   /* the lowercase letters centered on the Shuffle button's height */\n/* the title shrinks to stay on one line with Shuffle and the counts, its lowercase letters centered on the Shuffle button's height;\n   on narrower screens it sits on its own line above them */\n@container (max-width:1090px){.mast h1{font-size:clamp(52px,8.5cqi,96px);margin-bottom:.06em}}   /* script title, in the spirit of the Marantz \"Stereophonic Receiver\" lettering */\n.mast h1 a{text-decoration:none}\n/* home page banner: the receiver photo (STEREO light and tuning dial), title and counts in white over its darker lower part */\n.wrap.photo .mast{color:#fff;aspect-ratio:8/3;align-content:flex-end;padding:0 40px 34px;background:linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.8)),var(--banner) center 4.6%/cover}   /* bottom quarter of the old 2:1 banner trimmed; same top edge */\n.wrap.photo .mast h1 a,.wrap.photo .mast .stats b,.wrap.photo .mast .stats .label{color:#fff}\n.wrap.photo .mast .shuffle{border-color:#fff;color:#fff}\n.wrap.photo .mast .shuffle .ic{background:#fff;color:#000}\n.wrap.photo .mast .shuffle:hover,.wrap.photo .mast .shuffle.on{border-color:var(--accent)}\n.wrap.photo .mast .shuffle:hover .ic,.wrap.photo .mast .shuffle.on .ic{background:var(--accent);color:#fff}\n/* album pages: no photo and no counters; a larger \"\u2190 The Collection\" link leads back home */\n.wrap.albumpg .mast{display:none}\n.back{font:600 20px/1.2 var(--f-head) !important;letter-spacing:-.01em;color:var(--ink) !important;padding-block:28px 22px !important}   /* the same \"\u2190 The Collection\" on every page */\n.wrap.albumpg .back:hover{color:var(--accent)}\n@media (max-width:620px){.wrap.photo .mast{aspect-ratio:auto;padding:200px 18px 20px;background:linear-gradient(180deg,rgba(0,0,0,0) 30%,rgba(0,0,0,.8)),var(--banner-sm) 72% 0%/cover}}\n.stats{display:flex;flex-wrap:wrap;gap:10px 28px}\n.stats span{display:flex;flex-direction:column;align-items:center;text-align:center}\n.stats .label{padding-left:.14em}   /* balances the letter-spacing after the last letter so the label sits truly centered */\n.stats b{padding-right:.02em}\n.stats b{font:600 28px/1.1 var(--f-head);letter-spacing:-.02em;font-variant-numeric:tabular-nums}\n/* Shuffle Play: plays every song on the albums the home page is showing right now, in random order */\n.shuffle{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:10px;align-self:center;\n  border:1.5px solid var(--ink);padding:7px 14px 7px 10px;color:var(--ink);background:transparent}\n.shuffle .ic{width:30px;height:30px;flex:none;border-radius:50%;background:var(--ink);color:var(--on-ink);display:grid;place-items:center}\n.shuffle .ic svg{width:16px;height:16px}\n.stats .shuffle span.tx{display:flex;flex-direction:column;align-items:flex-start;text-align:left}\n.shuffle .tx b{font:600 15px/1.2 var(--f-head);letter-spacing:-.005em;padding:0}\n.shuffle .tx .label{padding-left:0;letter-spacing:.1em;white-space:nowrap}\n.shuffle:hover,.shuffle.on{border-color:var(--accent)}\n.shuffle:hover .ic,.shuffle.on .ic{background:var(--accent);color:#fff}\n.shuffle:focus-visible{outline:2px solid var(--accent);outline-offset:3px}\n.shuffle[disabled]{opacity:.4;cursor:default}\n@media (max-width:620px){.shuffle{flex:1 1 100%}}\n.player .resume{all:unset;cursor:pointer;flex:none;display:inline-flex;align-items:center;gap:8px;padding:9px 18px;background:var(--accent);color:#fff;font:600 14px/1 var(--f-head)}\n.player .resume svg{width:11px;height:12px}\n.player .resume:hover{background:var(--ink)}\n.player .resume[hidden]{display:none}\n.player .here{all:unset;cursor:pointer;flex:none;font:600 12px/1 var(--f-head);padding:8px 10px;border:1.5px solid var(--line);color:var(--muted);white-space:nowrap}\n.player .here:hover{border-color:var(--accent);color:var(--accent)}\n.player .here[hidden]{display:none}\n/* ---- bigger player: the player grows into a panel over the page (same player, so the music keeps going) ---- */\n.player .lyr-col{display:flex;flex-direction:column;align-items:center;gap:8px;flex:none}\n/* LYRICS and EXPAND as small blue neon signs (SHUFFLE's look), stacked to the height of Spotify's 80 px player */\n.player .pnb.pnb{all:unset;box-sizing:border-box;cursor:pointer;position:relative;display:flex;align-items:center;justify-content:center;gap:4px;width:91px;height:36px;border-radius:5px;overflow:hidden;\n  background:radial-gradient(ellipse 88% 92% at 50% 50%,rgba(46,119,250,.72),rgba(46,119,250,0) 76%),linear-gradient(160deg,#0b2a6e,#03133d);box-shadow:0 2px 7px rgba(0,0,0,.2)}\n.player .pnb::before{content:\"\";position:absolute;inset:3px;border-radius:3.5px;border:1.2px solid #2e77fa;pointer-events:none;\n  box-shadow:0 0 1.5px rgba(46,119,250,1),0 0 4px rgba(46,119,250,.9),0 0 9px rgba(46,119,250,.6),inset 0 0 4px rgba(46,119,250,.7),inset 0 0 9px rgba(46,119,250,.45)}\n.player .pnb::after{content:\"\";position:absolute;inset:3.7px;border-radius:3px;border:.6px solid rgba(255,255,255,.75);pointer-events:none}\n.player .pnb .w{position:relative;font:800 12.6px/1 var(--f-head);letter-spacing:.1em;padding-left:.1em;color:transparent;-webkit-text-stroke:.65px #fff;\n  text-shadow:0 0 1.5px rgba(205,225,255,.95),0 0 4px rgba(205,225,255,.8),0 0 8px rgba(205,225,255,.55),0 0 13px rgba(205,225,255,.35)}\n.player .bigbtn.pnb .w{font-size:10.2px;letter-spacing:.06em;padding-left:.06em}\n.player .pnb .arw{position:relative;width:9.6px;height:8.4px;flex:none;overflow:visible;filter:drop-shadow(0 0 1px rgba(205,225,255,.95)) drop-shadow(0 0 3px rgba(205,225,255,.75)) drop-shadow(0 0 6px rgba(205,225,255,.45))}\n.player .pnb .arw path{fill:none;stroke:#fff;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\n.player .pnb:hover{filter:brightness(1.12);color:inherit;border:0}\n.player .pnb.flick .w,.player .pnb.flick .arw{animation:neonflick .52s steps(1,end)}\n.player .lyr-col:has(.pnb){gap:8px}\n.player .bigbtn{all:unset;cursor:pointer;color:var(--muted);display:grid;place-items:center;padding:3px}\n.player .bigbtn:hover{color:var(--accent)}\n.player .big-cover,.player .big-info,.player .big-x{display:none}\n.big-back{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:2147482999}\n.big-back[hidden]{display:none}\n.player.big{left:50%;right:auto;top:50%;bottom:auto;transform:translate(-50%,-50%);width:min(1100px,76vw);z-index:2147483000;\n  border:2px solid var(--ink);border-radius:12px;padding:32px;box-shadow:0 20px 60px rgba(0,0,0,.35)}\n.player.big .in{display:grid;grid-template-columns:auto 44px minmax(0,1fr) 44px;grid-template-rows:auto auto 1fr auto;column-gap:12px;row-gap:0;align-items:start;max-width:none}\n.player.big .pl-left,.player.big .pl-right,.player.big .pl-mid,.player.big .lyr-col{display:contents}\n.player.big .big-cover{display:block;grid-column:1;grid-row:1/5;width:min(500px,34vw,62vh);height:min(500px,34vw,62vh);object-fit:cover;border-radius:4px;box-shadow:0 10px 30px rgba(0,0,0,.25);margin-right:24px;background:var(--panel)}\n.player.big .big-info{display:block;grid-column:2/5;grid-row:1;padding-right:30px;margin-top:6px;min-width:0}\n.player.big .big-info .lab{font:700 12px/1 var(--f-head);letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}\n.player.big .big-info h3{font:600 38px/1.15 var(--f-head);letter-spacing:-.01em;margin:8px 0 10px;text-wrap:wrap}\n.player.big .big-info h3 .lyr.pnb{vertical-align:middle;margin:-6px 0 0 14px;display:inline-flex;letter-spacing:0}\n.player.big .big-info .who{font-size:17px;line-height:1.5}.player.big .big-info .who b{font-weight:600}\n.player.big .big-info .who a{color:var(--ink);text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:3px}\n.player.big .big-info .yr{color:var(--muted)}\n.player.big .meter{display:none}\n\n.player.big .bigbtn,.player.big .now,.player.big #closePlayer{display:none}\n.player.big #prevSong{grid-column:2;grid-row:4;align-self:end;margin-bottom:23px}\n.player.big #nextSong{grid-column:4;grid-row:4;align-self:end;margin-bottom:23px}\n.player.big #resumeBtn,.player.big #embedWrap,.player.big #playerMsg{grid-column:3;grid-row:4;align-self:end;margin-top:24px}   /* bottom of Spotify's player level with the bottom of the cover */\n.player.big .big-x{display:block;position:absolute;top:10px;right:14px;all:unset;cursor:pointer;font-size:26px;line-height:1;padding:4px 8px;color:var(--ink)}\n.player.big .big-x{position:absolute;top:10px;right:14px}\n@media (max-width:620px){.player .lyr-col{display:none}}\n\n.player a.here{text-decoration:none}\n@media (max-width:620px){.player .lyr{display:none}}\n@media (max-width:620px){.player .here{display:none}}\n.sp-toast{position:fixed;left:50%;bottom:96px;transform:translateX(-50%);z-index:30;background:var(--ink);color:var(--paper);padding:12px 18px;font-size:14px;max-width:min(560px,92vw);box-shadow:0 8px 24px rgba(0,0,0,.25)}\n.sp-toast a{color:var(--accent);font-weight:600}\n.sp-toast button{all:unset;cursor:pointer;margin-left:12px;opacity:.7}\n.player .skip{all:unset;cursor:pointer;flex:none;width:30px;height:30px;display:grid;place-items:center;border:1.5px solid var(--ink);color:var(--ink)}\n.player .skip svg{width:14px;height:14px}\n.player .skip:hover{background:var(--accent);border-color:var(--accent);color:#fff}\n.player .skip[hidden]{display:none}\n/* back / next: small orange neon signs (the chosen-filter orange), in the small and the big player */\n.player .skip.skip{position:relative;overflow:hidden;box-sizing:border-box;width:36px;height:36px;border:0;border-radius:5px;color:#fff;\n background:radial-gradient(ellipse 75% 95% at 50% 50%,#dc6831 0%,#c4561f 45%,#8e3812 85%,#6e2a0b 100%);box-shadow:0 2px 7px rgba(0,0,0,.2)}\n.player .skip.skip::before{content:\"\";position:absolute;inset:3px;border-radius:3.5px;border:1.2px solid #ff9a5e;pointer-events:none;\n box-shadow:0 0 1.5px rgba(220,104,49,1),0 0 4px rgba(220,104,49,.9),0 0 9px rgba(220,104,49,.6),inset 0 0 4px rgba(220,104,49,.7),inset 0 0 9px rgba(220,104,49,.45)}\n.player .skip.skip::after{content:\"\";position:absolute;inset:3.7px;border-radius:3px;border:.6px solid rgba(255,255,255,.75);pointer-events:none}\n.player .skip.skip svg{position:relative;width:13px;height:13px;filter:drop-shadow(0 0 1px rgba(255,226,205,.95)) drop-shadow(0 0 3px rgba(255,226,205,.75)) drop-shadow(0 0 6px rgba(255,226,205,.45))}\n.player .skip.skip:hover{background:radial-gradient(ellipse 75% 95% at 50% 50%,#dc6831 0%,#c4561f 45%,#8e3812 85%,#6e2a0b 100%);color:#fff;filter:brightness(1.12)}\n.player .skip.skip[hidden]{display:none}\n.player .skip.flick svg{animation:neonflick .52s steps(1,end)}\n.player .now .sub{display:block;font-size:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.player .now .sub a{color:inherit;text-decoration:none;border-bottom:1px solid var(--line)}\n.player .now .sub a:hover,.player .now .sub a:focus-visible{color:var(--accent);border-color:var(--accent)}\n\n/* toolbar: underline fields like the site's forms */\n.tools{display:flex;flex-wrap:wrap;gap:14px 24px;align-items:flex-end;padding-block:8px 18px;border-top:1px solid var(--line)}\n.field{display:flex;flex-direction:column;gap:2px;min-width:0}\n.field.grow{flex:0 1 calc((100% - 269px) * .6);min-width:300px}   /* 20% wider than before (was half the space); Sort by stays at the right */\n.qrow{display:flex;align-items:flex-end;gap:8px}\n.qrow input{flex:1;min-width:0}\n.qbox{position:relative;flex:1;min-width:0;display:flex}\n.qbox input{flex:1;min-width:0;padding-right:46px}\n.qbox input::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none;display:none}   /* our own \u00d7 instead (phones' browsers often show none) */\n.qx.nx{position:absolute;right:2px;bottom:2px;display:none}\n.qbox.has .qx{display:grid}\n.qgo{all:unset;cursor:pointer;flex:none;width:30px;height:30px;display:grid;place-items:center;border:1.5px solid var(--muted);color:var(--muted);margin-bottom:3px}\n.qgo:hover,.qgo:focus-visible{border-color:var(--ink);color:var(--ink)}\n/* the search \u21b5 as a small orange neon sign, like the player's back / next */\n.qgo.qgo{position:relative;overflow:hidden;box-sizing:border-box;width:36px;height:36px;margin-bottom:4.5px;border:0;border-radius:5px;color:#fff;\n background:radial-gradient(ellipse 75% 95% at 50% 50%,#dc6831 0%,#c4561f 45%,#8e3812 85%,#6e2a0b 100%);box-shadow:0 2px 7px rgba(0,0,0,.2)}\n.qgo.qgo::before{content:\"\";position:absolute;inset:3px;border-radius:3.5px;border:1.2px solid #ff9a5e;pointer-events:none;\n box-shadow:0 0 1.5px rgba(220,104,49,1),0 0 4px rgba(220,104,49,.9),0 0 9px rgba(220,104,49,.6),inset 0 0 4px rgba(220,104,49,.7),inset 0 0 9px rgba(220,104,49,.45)}\n.qgo.qgo::after{content:\"\";position:absolute;inset:3.7px;border-radius:3px;border:.6px solid rgba(255,255,255,.75);pointer-events:none}\n.qgo.qgo svg{position:relative;width:15px;height:15px;filter:drop-shadow(0 0 1px rgba(255,226,205,.95)) drop-shadow(0 0 3px rgba(255,226,205,.75)) drop-shadow(0 0 6px rgba(255,226,205,.45))}\n.qgo.qgo svg path{stroke-linecap:round;stroke-linejoin:round}\n.qgo.qgo:hover,.qgo.qgo:focus-visible{color:#fff;filter:brightness(1.12)}\n.qgo.flick svg{animation:neonflick .52s steps(1,end)}\n.tools > .field:last-child{margin-left:auto}\n.tools > .live-f{margin-inline:auto}                    /* Live! sits halfway between Search and Sort by */\n.tools > .live-f + .field:last-child{margin-left:0}\n@media (max-width:700px){.field.grow{flex:1 1 100%}.tools > .field:last-child{margin-left:0}}\n.field input,.field select{font:400 15px var(--f-body);color:var(--ink);background:transparent;border:0;border-bottom:1.5px solid var(--muted);border-radius:0;padding:8px 0;width:100%}\n.field select{padding-right:22px;cursor:pointer}\n.field input:focus,.field select:focus{outline:none;border-bottom-color:var(--ink)}\n.filters{display:flex;flex-direction:column;gap:12px;padding-bottom:32px}\n.filter-row{display:grid;grid-template-columns:5.5em minmax(0,1fr);gap:10px;align-items:start}\n.filter-row > .label{min-height:35px;display:flex;align-items:center}\n.chips{display:flex;flex-wrap:wrap;gap:8px}\n.filters{--cw:124px}   /* the standard filter box: 8 across (ALL, EXPAND and six more) on a laptop screen */\n@media (max-width:620px){.filters{--cw:143px}}\n.chips .chip-gap{width:var(--cw);height:34px;flex:none}\n.chips[data-kind]{flex-wrap:nowrap;align-items:flex-start}\n.chips[data-kind] > .nchip,.chips[data-kind] > .chip-gap{flex:none}\n.chips .rest{display:flex;flex-wrap:wrap;gap:8px;min-width:0;flex:0 1 auto;max-width:calc(var(--cw) * 6 + 40px)}\n.chips[data-kind=\"genre\"]:has(.row-more[aria-expanded=\"true\"]) .rest{max-width:calc(var(--cw) * 7 + 48px)}   /* six columns to the right of EXPAND, open or closed; Genre opens to seven */   /* the row's buttons wrap in the columns to the right of EXPAND, under the first one */\n@media (max-width:620px){.chips[data-kind]{flex-wrap:wrap}.chips .rest{display:contents}}   /* phones: two boxes a line, ALL and EXPAND first */   /* Media has no EXPAND: an empty box keeps its buttons in the same columns as the other rows */\n.chips[data-kind] .chip:not(.nchip){white-space:nowrap;overflow:hidden;box-sizing:border-box;height:34px;padding-left:8px;padding-right:8px}\n.chip:disabled{opacity:.35;cursor:default;background:transparent}\n@media (max-width:520px){.filter-row{grid-template-columns:minmax(0,1fr);gap:6px}.filter-row > .label{min-height:0}}\n.chip{text-align:center;font:500 13px/20px var(--f-body);border:1.5px solid var(--ink);background:transparent;color:var(--ink);padding:6px 14px;border-radius:0;cursor:pointer}\n.chip:hover{background:var(--panel)}\n.chip[aria-pressed=\"true\"]{background:var(--ink);color:var(--on-ink)}\n.chip small{margin-left:6px;opacity:.6;font-size:11px}\n.chip.measure{font:500 13px/20px var(--f-body)!important;letter-spacing:normal!important;text-transform:none!important;padding:6px 14px!important;border:1.5px solid!important;height:auto!important}\n.chip.measure small{font-size:11px!important;margin-left:6px!important}\n/* a chosen filter button: same words and colors on a plain background, its outline a glowing orange neon tube (the mrjonessf octopus orange) */\n.chip:not(.nchip)[aria-pressed=\"true\"]{position:relative;background:var(--paper);color:var(--ink);border:2.5px solid #e8743c;padding:5px 13px;\n  box-shadow:0 0 2px rgba(220,104,49,1),0 0 6px rgba(220,104,49,.9),0 0 13px rgba(220,104,49,.55),inset 0 0 4px rgba(220,104,49,.7),inset 0 0 9px rgba(220,104,49,.3)}\n.chip:not(.nchip)[aria-pressed=\"true\"]::after{content:\"\";position:absolute;inset:-1.6px;border:1px solid rgba(255,255,255,.9);pointer-events:none;filter:blur(.2px)}   /* the tube's white-hot core, like LIVE and SHUFFLE */\n.chip:not(.nchip)[aria-pressed=\"true\"]:hover{background:var(--paper);filter:brightness(1.12) saturate(1.15)}\n/* a chosen filter button as a full orange neon sign (SHUFFLE's look in the octopus orange): dark ember wall, orange tube, white neon letters */\n.chip:not(.nchip)[aria-pressed=\"true\"]{border:0;padding:0 10px;border-radius:6px;overflow:hidden;box-sizing:border-box;height:34px;\n  background:radial-gradient(ellipse 75% 95% at 50% 50%,#dc6831 0%,#c4561f 45%,#8e3812 85%,#6e2a0b 100%);\n  box-shadow:0 3px 9px rgba(0,0,0,.18);color:transparent;font:800 12.5px/34px var(--f-head);letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;\n  -webkit-text-stroke:.75px #fff;text-shadow:0 0 2px rgba(255,226,205,.95),0 0 5px rgba(255,226,205,.75),0 0 10px rgba(255,200,170,.45)}\n.chip:not(.nchip)[aria-pressed=\"true\"]::before{content:\"\";position:absolute;inset:3.5px;border-radius:4px;border:1.3px solid #ff9a5e;pointer-events:none;\n  box-shadow:0 0 1.5px rgba(220,104,49,1),0 0 4px rgba(220,104,49,.9),0 0 9px rgba(220,104,49,.55),inset 0 0 4px rgba(220,104,49,.6)}\n.chip:not(.nchip)[aria-pressed=\"true\"]::after{inset:4.2px;border:.7px solid rgba(255,255,255,.75);border-radius:3px;filter:none}\n.chip:not(.nchip)[aria-pressed=\"true\"] .ds{text-transform:none;font-size:.92em;-webkit-text-stroke:.65px #fff}   /* the lowercase s about as tall as the count's numbers */\n.chip:not(.nchip)[aria-pressed=\"true\"] small{opacity:1;font-size:.72em;margin-left:6px;-webkit-text-stroke:.55px #fff}\n.chip:not(.nchip)[aria-pressed=\"true\"]:hover{background:radial-gradient(ellipse 75% 95% at 50% 50%,#dc6831 0%,#c4561f 45%,#8e3812 85%,#6e2a0b 100%);filter:brightness(1.12)}\n/* flicker on click, like LIVE / SHUFFLE / PLAY: the orange tube (or the sign's letters and tube) blinks off twice */\n.chip:not(.nchip).flick{animation:neonflick .52s steps(1,end)}\n.chip:not(.nchip).flick::before,.chip:not(.nchip).flick::after{animation:coreflick .52s steps(1,end)}\n@keyframes chipflick{0%,24%,52%,100%{border-color:#e8743c;box-shadow:0 0 2px rgba(220,104,49,1),0 0 6px rgba(220,104,49,.9),0 0 13px rgba(220,104,49,.55),inset 0 0 4px rgba(220,104,49,.7),inset 0 0 9px rgba(220,104,49,.3)}\n  12%,36%{border-color:#f1c9b2;box-shadow:none}}\n@keyframes coreflick{0%,24%,52%,100%{opacity:1}12%,36%{opacity:0}}\n.chip.nchip.flick .w{animation:neonflick .52s steps(1,end)}\n.chip.nchip.flick::before,.chip.nchip.flick::after{animation:coreflick .52s steps(1,end)}\n/* neon ALL (blue) and EXPAND / CONTRACT (red) signs in the filter rows: lit when chosen, an unlit tube when not */\n.chip.nchip{position:relative;width:var(--cw,143px);min-width:var(--cw,143px);height:34px;padding:0;border:0;border-radius:6px;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;\n  --wall1:#0b2a6e;--wall2:#03133d;--tube:46,119,250;--lg:205,225,255;\n  background:radial-gradient(ellipse 70% 75% at 50% 50%,rgba(var(--tube),.5),rgba(var(--tube),0) 70%),linear-gradient(160deg,var(--wall1),var(--wall2));box-shadow:0 3px 9px rgba(0,0,0,.18)}\n.chip.nchip.red{--wall1:#d0464a;--wall2:#9c2a2f;--tube:248,74,78;--lg:255,235,235;width:var(--cw,143px);min-width:var(--cw,143px);\n  background:radial-gradient(ellipse 70% 75% at 50% 50%,rgba(255,225,225,.55),rgba(255,225,225,0) 70%),linear-gradient(160deg,var(--wall1),var(--wall2))}\n.chip.nchip::before{content:\"\";position:absolute;inset:3.5px;border-radius:4px;border:1.3px solid rgb(var(--tube));\n  box-shadow:0 0 1.5px rgba(var(--tube),1),0 0 4px rgba(var(--tube),.9),0 0 9px rgba(var(--tube),.55),inset 0 0 4px rgba(var(--tube),.6)}\n.chip.nchip.red::before{border-color:#ff5559}\n/* CONTRACT (the genre list is open) lights up like a chosen orange button */\n.chip.nchip.red[aria-expanded=\"true\"]{background:radial-gradient(ellipse 75% 95% at 50% 50%,#dc6831 0%,#c4561f 45%,#8e3812 85%,#6e2a0b 100%);--lg:255,226,205}\n.chip.nchip.red[aria-expanded=\"true\"]::before{border-color:#ff9a5e;box-shadow:0 0 1.5px rgba(220,104,49,1),0 0 4px rgba(220,104,49,.9),0 0 9px rgba(220,104,49,.55),inset 0 0 4px rgba(220,104,49,.6)}\n.chip.nchip::after{content:\"\";position:absolute;inset:4.2px;border-radius:3px;border:.7px solid rgba(255,255,255,.75)}\n.chip.nchip .w{position:relative;font:800 19px/1 var(--f-head);letter-spacing:.22em;padding-left:.22em;color:transparent;-webkit-text-stroke:1.1px #fff;transform:scaleX(1.35);\n  text-shadow:0 0 2px rgba(var(--lg),.95),0 0 5px rgba(var(--lg),.8),0 0 10px rgba(var(--lg),.5)}\n.chip.nchip .w.sm{font-size:12px;letter-spacing:.12em;padding-left:.12em;transform:none}\n/* EXPAND: arrows pointing out; CONTRACT: arrows pointing in (neon lines inside the tube) */\n.chip.nchip .arw{position:relative;width:13px;height:10px;flex:none;margin:0 4px;overflow:visible;filter:drop-shadow(0 0 1px rgba(var(--lg),.95)) drop-shadow(0 0 3px rgba(var(--lg),.7))}\n.chip.nchip .arw path{fill:none;stroke:#fff;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}\n.chip.nchip[aria-expanded=\"false\"] .arw{filter:none}\n.chip.nchip[aria-expanded=\"false\"] .arw path{stroke:#9c9c9c}\n.chip.nchip:hover{background-color:transparent;filter:brightness(1.12)}\n/* unlit: white background, the tubes milky glass with grey edges, no glow */\n.chip.nchip[aria-pressed=\"false\"],.chip.nchip[aria-expanded=\"false\"]{background:#fff;box-shadow:none}\n.chip.nchip[aria-pressed=\"false\"]::before,.chip.nchip[aria-expanded=\"false\"]::before{border:2.2px solid #efede8;box-shadow:0 0 0 .7px #a3a3a3,inset 0 0 0 .7px #a3a3a3}\n.chip.nchip[aria-pressed=\"false\"]::after,.chip.nchip[aria-expanded=\"false\"]::after{display:none}\n.chip.nchip[aria-pressed=\"false\"] .w,.chip.nchip[aria-expanded=\"false\"] .w{color:#f1efea;-webkit-text-stroke:.8px #9c9c9c;text-shadow:none}\n.chip.nchip[aria-pressed=\"false\"]:hover,.chip.nchip[aria-expanded=\"false\"]:hover{filter:none;background:#fafafa}\n\n/* cover wall */\n.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:22px 22px}   /* rows as close as the covers are side by side (was gap:34px 22px) */\n.rec{display:flex;flex-direction:column;gap:10px;min-width:0}\n@media (max-width:620px){.rec{content-visibility:auto;contain-intrinsic-size:auto 260px}}   /* phones: off-screen covers skip layout and painting, so typing and scrolling stay quick (not on laptops: it would clip the record sliding out on hover) */\n.rec a{text-decoration:none}\n.rec .cover{display:block}\n.rec .meta-row{display:flex;gap:10px;align-items:flex-start;justify-content:space-between;min-width:0}\n.rec .meta-row .meta{flex:1}\n.mini-play{all:unset;box-sizing:border-box;flex:none;width:14px;height:14px;margin-top:2px;border:1px solid var(--ink);position:relative;color:var(--ink);display:grid;place-items:center;cursor:pointer}\n.mini-play svg{width:6px;height:6px;margin-left:1px}\n.mini-play::after{content:\"\";position:absolute;inset:-10px}\n.mini-play:hover{background:var(--accent);border-color:var(--accent);color:#fff}\n.mini-play:focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n.mini-play.on{background:var(--accent);border-color:var(--accent);color:#fff}\n.sleeve{position:relative;aspect-ratio:1;max-width:100%;background:var(--panel)}\n.sleeve img{width:100%;height:100%;object-fit:cover;display:block;position:relative;z-index:1;\n  box-shadow:0 2px 3px var(--shadow-near),0 6px 12px var(--sleeve-shadow),0 18px 34px var(--sleeve-shadow)}\n/* light falling from the top left across the sleeve, with a faint edge, so covers read as card stock */\n.sleeve:has(img)::after{content:\"\";position:absolute;inset:0;z-index:2;pointer-events:none;\n  background:linear-gradient(135deg,var(--sleeve-light) 0%,transparent 42%,transparent 55%,var(--sleeve-dark) 100%);\n  box-shadow:inset 1px 1px 0 var(--sleeve-light),inset -1px -1px 0 var(--sleeve-dark)}\n.disc{position:absolute;inset:3%;border-radius:50%;z-index:0;\n  background:#151515;transition:transform .35s ease}\n.rec:hover .disc,.rec:focus-within .disc{transform:translateX(16%)}\n.rec .meta{min-width:0;display:flex;flex-direction:column}\n.rec .t{font-weight:500;font-size:14px;line-height:1.3}\n.rec .a{font-size:13px;color:var(--muted);line-height:1.4}\n.rec .y{font-size:11px;color:var(--muted);letter-spacing:.04em;margin-top:2px}\n.rec .ty{font-size:11px;color:var(--muted);letter-spacing:.04em;line-height:1.4}\n.blank{position:absolute;inset:0;z-index:1;display:flex;flex-direction:column;justify-content:flex-end;padding:14px;gap:2px;background:var(--panel);border:1.5px solid var(--line)}\n.blank span{font:600 18px/1.15 var(--f-head);letter-spacing:-.01em}\n.blank em{font-style:normal;font-size:12px;color:var(--muted)}\n.empty{padding:40px 0;color:var(--muted)}\n\n/* album page */\n.back{display:inline-block;font-size:14px;text-decoration:none;color:var(--muted);padding-block:26px 18px}\n.back:hover{color:var(--ink)}\n.album{display:grid;grid-template-columns:minmax(0,440px) minmax(0,1fr);grid-template-rows:auto 1fr;grid-template-areas:\"cover side\" \"tracks side\";gap:40px 48px;align-items:start}\n.album .cover-col{grid-area:cover}\n.album .side-col{grid-area:side}\n\n/* Live! button on the home page, between Search and Sort by */\n.live-f{flex:none}\n.wrap.livepg .mast{display:none}\n.wrap.artistpg .mast{display:none}   /* artist pages: no script title or counts; SHUFFLE sits beside the artist's name */\n.artist-top{display:flex;align-items:flex-end;justify-content:flex-start;gap:20px 56px;flex-wrap:wrap}\n.artist-top .shuf-f{align-self:flex-end;margin-bottom:6px}\n.live-head{display:flex;align-items:center;gap:56px;flex-wrap:wrap}\n.live-head .shuffle{margin-top:22px}   /* centred on the word Live! (the small count label sits above it) */\n.live-head .shuffle .tx{display:flex;flex-direction:column;align-items:flex-start;text-align:left}\n/* neon LIVE sign (10px scale on every page); a click flickers the letters off and on */\n.neon{font-size:10px;position:relative;display:flex;align-items:center;justify-content:center;width:13.2em;height:5.8em;border-radius:.9em;\n  background:radial-gradient(ellipse 70% 75% at 50% 50%,rgba(255,225,225,.55),rgba(255,225,225,0) 70%),linear-gradient(160deg,#d0464a,#9c2a2f);\n  text-decoration:none;cursor:pointer;overflow:hidden;border:0;padding:0;box-shadow:0 1px 0 rgba(255,255,255,.12) inset,0 .6em 1.8em rgba(0,0,0,.18)}\n.neon::before{content:\"\";position:absolute;inset:.6em;border-radius:.6em;border:.2em solid #ff5559;\n  box-shadow:0 0 .2em rgba(248,74,78,1),0 0 .6em rgba(248,74,78,.9),0 0 1.4em rgba(248,74,78,.6),inset 0 0 .6em rgba(248,74,78,.7),inset 0 0 1.4em rgba(248,74,78,.35)}\n.neon::after{content:\"\";position:absolute;inset:.7em;border-radius:.5em;border:.1em solid rgba(255,255,255,.75);filter:blur(.3px)}\n.neon .w{position:relative;font:800 2.7em/1 var(--f-head);letter-spacing:.08em;padding-left:.08em;color:transparent;-webkit-text-stroke:.06em #fff;\n  text-shadow:0 0 .11em rgba(255,235,235,.95),0 0 .3em rgba(255,235,235,.8),0 0 .6em rgba(255,235,235,.55),0 0 1.04em rgba(255,235,235,.35)}\n.neon .w::after{content:attr(data-t);position:absolute;inset:0;padding-left:.08em;color:transparent;-webkit-text-stroke:.026em #fff;text-shadow:none}\n.neon:hover{filter:brightness(1.12)}\n.neon.flick .w{animation:neonflick .52s steps(1,end)}\n.neon.flick{animation:neondim .52s steps(1,end)}\n@keyframes neonflick{0%{opacity:1}12%{opacity:.06}24%{opacity:1}36%{opacity:.08}52%{opacity:1}100%{opacity:1}}\n@keyframes neondim{12%,36%{background-size:0 0,100% 100%}24%,52%{background-size:100% 100%,100% 100%}}\n/* blue neon SHUFFLE sign (the receiver's meter blues), the count under it */\n.neon.blue{width:auto;padding:0 2.3em;gap:1.2em;background:radial-gradient(ellipse 70% 75% at 50% 50%,rgba(46,119,250,.55),rgba(46,119,250,0) 70%),linear-gradient(160deg,#0b2a6e,#03133d)}\n.neon.blue::before{border-color:#2e77fa;box-shadow:0 0 .2em rgba(46,119,250,1),0 0 .6em rgba(46,119,250,.9),0 0 1.4em rgba(46,119,250,.6),inset 0 0 .6em rgba(46,119,250,.7),inset 0 0 1.4em rgba(46,119,250,.35)}\n.neon.blue .w{font-size:2.7em;letter-spacing:.08em;padding-left:.08em;text-shadow:0 0 .11em rgba(205,225,255,.95),0 0 .3em rgba(205,225,255,.8),0 0 .6em rgba(205,225,255,.55),0 0 1.04em rgba(205,225,255,.35)}\n.neon .lit{position:relative;display:flex;align-items:center;gap:1em}\n.neon.blue svg{width:3em;height:3em;overflow:visible;filter:drop-shadow(0 0 .12em rgba(205,225,255,.95)) drop-shadow(0 0 .35em rgba(205,225,255,.75)) drop-shadow(0 0 .8em rgba(205,225,255,.45))}\n.neon.blue svg path{fill:none;stroke:#fff;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}\n.neon.flick .lit{animation:neonflick .52s steps(1,end)}\n.neon[disabled]{opacity:.4;cursor:default}\n.shuf-f{display:flex;flex-direction:column;align-items:center;gap:6px;align-self:center}\n.stats{align-items:flex-end}\n/* album page: blue neon PLAY sign (same look and size as SHUFFLE), the song count under it */\n.play-f{display:flex;flex-direction:column;align-items:center;gap:8px}\n.neon.play{padding:0 3.2em}   /* the counts' bottoms line up with the bottom of the SHUFFLE sign */\n.stats .shuf-f{align-self:flex-end}\n.live-head .shuf-f .neon{font-size:10px}   /* the same size as on the home page */\n.stats .neon .lit{flex-direction:row;align-items:center}   /* the stats row stacks its spans; the sign's symbol and word stay side by side */\n.stats .neon .w{display:inline-block}\n.shuf-f .shuf-count{color:#4a4a4a;letter-spacing:.14em;white-space:nowrap}\n.wrap.photo .mast .shuf-f .shuf-count,.live-hero .shuf-f .shuf-count{color:#fff}\n.neon-cap{display:flex;justify-content:space-between;width:9.9em;margin:.6em auto 0;font-size:10px}\n.neon-cap span{font:600 11px/1.4 var(--f-body);text-transform:uppercase;color:var(--muted)}\n.live-f{align-items:center;margin-top:8px}\n.live-head .neon{font-size:10px}   /* the same size as on the home page */\n.live-title{display:flex;flex-direction:column;align-items:center}\n/* album page: concerts you've seen by this artist, under the Discogs link */\n.artist-disco{max-width:760px;margin:0 0 44px}\n.artist-disco.two{max-width:none;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px 56px;align-items:start}\n.artist-disco .disco h3{margin-top:0}\n.artist-disco .alb-live{margin-top:0}\n@media (max-width:760px){.artist-disco.two{grid-template-columns:minmax(0,1fr)}.artist-disco .alb-live{margin-top:20px}}\n/* \"THE COLLECTION\" in SHUFFLE's neon block letters, with a back arrow: the link back to the home page */\n.back.neonhome{--nh:10px;font-size:var(--nh)!important;letter-spacing:0;position:relative;display:inline-flex;align-items:center;justify-content:center;height:5.8em;padding:0 2.3em!important;margin:22px 0 26px;border-radius:.9em;overflow:hidden;text-decoration:none;\n  background:radial-gradient(ellipse 70% 75% at 50% 50%,rgba(46,119,250,.55),rgba(46,119,250,0) 70%),linear-gradient(160deg,#0b2a6e,#03133d);box-shadow:0 1px 0 rgba(255,255,255,.12) inset,0 .6em 1.8em rgba(0,0,0,.2)}\n.back.neonhome::before{content:\"\";position:absolute;inset:.6em;border-radius:.6em;border:.2em solid #2e77fa;\n  box-shadow:0 0 .2em rgba(46,119,250,1),0 0 .6em rgba(46,119,250,.9),0 0 1.4em rgba(46,119,250,.6),inset 0 0 .6em rgba(46,119,250,.7),inset 0 0 1.4em rgba(46,119,250,.35)}\n.back.neonhome::after{content:\"\";position:absolute;inset:.7em;border-radius:.5em;border:.1em solid rgba(255,255,255,.75);filter:blur(.3px)}\n.back.neonhome .lit{position:relative;display:flex;align-items:center;gap:1em}\n.back.neonhome svg{width:3em;height:3em;overflow:visible;filter:drop-shadow(0 0 .12em rgba(205,225,255,.95)) drop-shadow(0 0 .35em rgba(205,225,255,.75)) drop-shadow(0 0 .8em rgba(205,225,255,.45))}\n.back.neonhome svg path{fill:none;stroke:#fff;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}\n.back.neonhome .w{position:relative;font:800 2.7em/1 var(--f-head);letter-spacing:.08em;padding-left:.08em;color:transparent;-webkit-text-stroke:.06em #fff;\n  text-shadow:0 0 .11em rgba(205,225,255,.95),0 0 .3em rgba(205,225,255,.8),0 0 .6em rgba(205,225,255,.55),0 0 1.04em rgba(205,225,255,.35)}\n.back.neonhome .w::after{content:attr(data-t);position:absolute;inset:0;padding-left:.08em;color:transparent;-webkit-text-stroke:.026em #fff;text-shadow:none}\n.back.neonhome:hover{filter:brightness(1.12)}\n.back.neonhome.flick .lit{animation:neonflick .52s steps(1,end)}\n.alb-live{margin-top:56px;display:flex;flex-direction:column;align-items:center}\n.alb-shows{list-style:none;margin:18px 0 0;padding:0;width:100%;font-size:14px}\n.alb-shows li{display:grid;grid-template-columns:7.2em minmax(0,1fr);gap:14px;padding:7px 0;border-bottom:1px solid var(--line);align-items:baseline}\n.alb-shows li:first-child{border-top:1px solid var(--line)}\n.alb-shows .d{font-variant-numeric:tabular-nums;color:var(--muted)}\n.alb-shows .v small{display:block;font-size:12.5px;color:var(--muted);line-height:1.35}\n.alb-shows .v small.t{color:var(--ink);font-style:italic;margin-top:2px}\n.alb-shows .v small.o{font-size:12px}\n/* Live! page: your concert video loops behind the heading (16:9 with the bottom 10% trimmed), down to the line above Sort by */\n.live-hero{position:relative;aspect-ratio:1280/648;overflow:hidden;align-content:flex-end;padding:0 clamp(16px,3vw,36px) clamp(18px,3vw,34px);border-bottom:0;background:#000 center/cover}\n.live-hero .live-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;z-index:0}\n.live-hero::after{content:\"\";position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(to bottom,rgba(0,0,0,0) 45%,rgba(0,0,0,.7))}\n.live-hero > :not(video){position:relative;z-index:1}\n.live-hero > .back.neonhome{position:absolute;top:clamp(14px,2.4vw,26px);left:clamp(14px,2.4vw,28px);margin:0;z-index:2}   /* the way home sits in the video's top left */\n.wrap.livepg .live-hero{margin-top:22px}\n.live-hero .label{color:rgba(255,255,255,.85)}\n.live-hero .shuffle{border-color:#fff;color:#fff;background:rgba(0,0,0,.35)}\n.live-hero .shuffle .label{color:rgba(255,255,255,.75)}\n@media (prefers-reduced-motion:reduce){.live-hero .live-bg{display:none}}\n@media (max-width:700px){.live-hero{aspect-ratio:auto;min-height:50.6vw;padding-top:22px}}   /* phone: tall enough for the sign and Shuffle; the video fills it */\n.live-title h2{margin:0}\n/* Live! page */\n.live-sort{display:flex;gap:0;margin:0 0 14px;align-items:center}\n.live-sort .label{margin-right:12px}\n.live-sort button{all:unset;cursor:pointer;font:600 13px/1 var(--f-head);padding:8px 14px;border:1.5px solid var(--line);margin-left:-1.5px;color:var(--muted)}\n.live-sort button[aria-pressed=true]{border-color:var(--ink);background:var(--ink);color:var(--paper);position:relative}\n.shows-wrap{display:grid;grid-template-columns:repeat(var(--cols,1),minmax(0,1fr));gap:0 44px;margin:0 0 56px;align-items:stretch}\n.shows{list-style:none;padding:0}\n.shows-wrap{margin:0 0 56px}\n.shows li.hd-row{border-top:2px solid var(--ink)}\n.shows li.empty{border-bottom:0}\n.shows li{display:grid;grid-template-columns:17em 6.6em minmax(0,1fr);gap:14px;padding:5.5px 0;border-bottom:1px solid var(--line);font-size:15px;align-items:baseline}\n.shows .ar .nm{font:600 16px/1.3 var(--f-head);color:var(--ink);text-decoration:none}      /* headliner */\n.shows li.op .ar .nm{font-weight:400;font-size:15px}                                        /* opening act */\n.shows .ar a.nm{border-bottom:1.5px solid var(--accent)}                                     /* in The Collection */\n.shows .dt{font-variant-numeric:tabular-nums;color:var(--muted);font-size:14px}\n.shows .vn small,.shows .ar small{display:block;color:var(--muted);font-size:12px}\n.shows .ar small{font-weight:400;margin-top:3px;line-height:1.35}   /* the tour name, under the artist */\n.shows .hd{font:600 11px/1 var(--f-head);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);padding:10px 0 8px}\n.live-albums h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:0 0 18px;padding-top:24px;border-top:2px solid var(--ink)}\n@media (max-width:640px){\n  .shows li{grid-template-columns:1fr auto;gap:2px 12px}\n  .shows .vn{grid-column:1 / -1}\n  .shows li.hd-row{display:none}\n}\n/* tracklist and personnel sit under the cover, in the left column */\n.side li .tt{min-width:0}\n.side li .tt .song{display:inline-flex}\n.track-col .tar{font-size:.82em;color:var(--muted,#777);margin-left:.15em}\n.track-col .tar a{color:inherit;text-decoration:underline;text-decoration-color:rgba(0,0,0,.25);text-underline-offset:2px}\n.track-col .tar a:hover{color:var(--ink,#111)}\n.track-col{grid-area:tracks;min-width:0}\n.track-col h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:0 0 14px}\n.track-col .sides{grid-template-columns:minmax(0,1fr)}\n.track-col .pers{margin-top:34px}\n/* more albums by the artist: one row of covers across the page */\n.more-by{margin-top:56px;padding-top:24px;border-top:2px solid var(--ink)}\n.more-by h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:0 0 18px}\n.more-by h3 a{text-decoration:none;border-bottom:2px solid var(--accent)}\n/* (was one sideways-scrolling row: .more-row) \u2014 now wraps into rows like every other album grid */\n.album .sleeve img{box-shadow:0 3px 5px var(--shadow-near),0 10px 20px var(--sleeve-shadow),0 32px 58px var(--sleeve-shadow)}\n.album .sleeve{width:85%}\n.cover-col{min-width:0}\n.playalb-row{width:85%;display:flex;justify-content:center;margin-top:27px}   /* 20% closer to the cover than the old 34px */\n.playalb-row .shuffle{align-self:auto;flex:none!important}\n.playalb-row .shuffle .tx{display:flex;flex-direction:column;align-items:flex-start;text-align:left}\n.album .disc{transform:translateX(17%);animation:slideOut 1.1s cubic-bezier(.2,.7,.2,1) .3s both}\n@keyframes slideOut{from{transform:translateX(0)}}\n.side-col{display:flex;flex-direction:column;gap:24px;min-width:0}\n.album h2{font:600 clamp(32px,4.6vw,50px)/1.05 var(--f-head);letter-spacing:-.025em;margin:8px 0 8px;text-wrap:balance}\n.album .by{font-size:18px;font-weight:400}\n.album .by a{text-decoration:none;border-bottom:2px solid var(--accent)}\n.pills{display:flex;flex-wrap:wrap;gap:6px}\n.pill{font:500 12px var(--f-body);padding:4px 10px;background:var(--panel)}\n.pill.ed{background:var(--ink);color:var(--on-ink)}\na.pill{text-decoration:none;color:inherit}\na.pill:hover,a.pill:focus-visible{background:var(--accent);color:#fff}\n.listen{display:flex;flex-wrap:wrap;gap:10px}\n.btn{display:inline-flex;align-items:center;gap:9px;font:500 14px var(--f-body);padding:11px 20px;text-decoration:none;border:2px solid var(--ink);background:transparent;color:var(--ink)}\n.btn:hover{background:var(--ink);color:var(--on-ink)}\n.btn svg{width:16px;height:16px;flex:none}\n/* Spotify / YouTube Music: an unlit neon sign (milky tube, grey edges) that lights up blue, like SHUFFLE, only while pointed at */\n.btn.btn{position:relative;overflow:hidden;box-sizing:border-box;border:0;border-radius:6px;height:42px;padding:0 20px;gap:10px;font:800 13px/1 var(--f-head);letter-spacing:.09em;text-transform:uppercase;color:#fff;\n background:radial-gradient(ellipse 88% 92% at 50% 50%,rgba(46,119,250,.72),rgba(46,119,250,0) 76%),linear-gradient(160deg,#0b2a6e,#03133d);box-shadow:0 2px 7px rgba(0,0,0,.2)}\n.btn.btn .t{position:relative;color:transparent;-webkit-text-stroke:.75px #fff;text-shadow:0 0 1.5px rgba(205,225,255,.95),0 0 4px rgba(205,225,255,.8),0 0 8px rgba(205,225,255,.55),0 0 13px rgba(205,225,255,.35)}\n.btn.btn::before{content:\"\";position:absolute;inset:3.5px;border-radius:4px;border:1.3px solid #2e77fa;pointer-events:none;\n box-shadow:0 0 1.5px rgba(46,119,250,1),0 0 4px rgba(46,119,250,.9),0 0 9px rgba(46,119,250,.6),inset 0 0 4px rgba(46,119,250,.7),inset 0 0 9px rgba(46,119,250,.45)}\n.btn.btn::after{content:\"\";position:absolute;inset:4.2px;border-radius:3px;border:.7px solid rgba(255,255,255,.75);pointer-events:none}\n.btn.btn svg{position:relative;width:17px;height:17px;color:#fff;filter:drop-shadow(0 0 1px rgba(205,225,255,.95)) drop-shadow(0 0 3px rgba(205,225,255,.75)) drop-shadow(0 0 6px rgba(205,225,255,.45))}\n.btn.btn:hover{color:#fff;filter:brightness(1.12)}\n.btn.btn:not(:hover){background:#fff;box-shadow:none}\n.btn.btn:not(:hover)::before{border:2.2px solid #efede8;box-shadow:0 0 0 .7px #a3a3a3,inset 0 0 0 .7px #a3a3a3}\n.btn.btn:not(:hover)::after{display:none}\n.btn.btn:not(:hover) .t{color:#f1efea;-webkit-text-stroke:.8px #9c9c9c;text-shadow:none}\n.btn.btn:not(:hover) svg{color:#9c9c9c;filter:none}\n.notes{border-left:2px solid var(--accent);padding:2px 0 2px 18px;max-width:60ch;font-weight:300;font-size:16px}\n.notes p{margin:0}\n.notes.placeholder{color:var(--muted);border-left-style:dashed;font-size:14px}\n.facts{display:grid;grid-template-columns:max-content minmax(0,1fr);gap:8px 22px;margin:0;font-size:14px;padding-top:20px;border-top:1px solid var(--line)}\n.facts dt{color:var(--muted)}\n.facts dd{margin:0;min-width:0;font-variant-numeric:tabular-nums}\n.facts a{text-decoration:none;border-bottom:1px solid var(--accent)}\n\n/* back of the sleeve */\n.back-sleeve{margin-top:56px;display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:44px;background:var(--panel);padding:32px max(16px,3vw)}\n.back-sleeve h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:0 0 14px}\n.sides{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px 32px}\n.side h4{display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin:0 0 4px;padding-bottom:6px;border-bottom:1.5px solid var(--ink)}\n.side h4 .label{color:var(--ink)}\n.side h4 span:last-child{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums}\n.side ol{list-style:none;margin:0;padding:0}\n.side li{display:grid;grid-template-columns:2.4em minmax(0,1fr) auto;gap:10px;padding:6px 0;border-bottom:1px solid var(--line);font-size:14px;line-height:1.4}\n.side li .p{font-size:12px;color:var(--muted);padding-top:1px}\n.side li .d{font-size:12px;color:var(--muted);font-variant-numeric:tabular-nums;padding-top:1px}\n.credits{list-style:none;margin:0;padding:0;font-size:14px;display:flex;flex-direction:column;gap:8px;line-height:1.45}\n.credits .role{color:var(--muted)}\n.credits a.person{color:inherit;text-decoration:none;border-bottom:1px solid var(--line)}\n.credits a.person:hover,.credits a.person:focus-visible{color:var(--accent);border-color:var(--accent)}\n.album .cover-col .sleeve{cursor:zoom-in}\n/* the big cover: clicking the album cover shows it at about 3/4 of the screen; any click (or Esc) closes it */\n.zoom{position:fixed;inset:0;z-index:50;display:grid;place-items:center;background:rgba(10,10,10,.86);cursor:zoom-out;\n  animation:zoomBg .25s ease both;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}\n.zoom img{width:min(75vw,75vh);height:min(75vw,75vh);object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,.6);animation:zoomIn .3s cubic-bezier(.2,.7,.2,1) both}\n.zoom .cap{position:absolute;left:0;right:0;bottom:max(14px,3vh);text-align:center;color:#ddd;font-size:13px;letter-spacing:.04em}\n@keyframes zoomBg{from{opacity:0}}\n@keyframes zoomIn{from{transform:scale(.6);opacity:0}}\n.pager{display:flex;justify-content:space-between;gap:16px;margin-top:40px;padding-top:18px;border-top:1px solid var(--line);font-size:14px}\n.pager a{text-decoration:none;max-width:48%;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:4px}\n.pager a.nx{text-align:right;align-items:flex-end}\n.pager .pg-cover{width:120px;aspect-ratio:1;object-fit:cover;margin-top:10px;box-shadow:0 2px 4px var(--shadow-near),0 8px 18px var(--sleeve-shadow);transition:transform .2s}\n.pager a:hover .pg-cover{transform:translateY(-3px)}\n@media (max-width:620px){.pager .pg-cover{width:96px}}\n.pager a:hover span{border-bottom:1px solid var(--accent)}\n\n/* playable songs + Spotify player bar */\n.side li .song{all:unset;cursor:pointer;display:flex;gap:8px;align-items:baseline;min-width:0}\n.side li .song:focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n.side li .song .ic{width:10px;flex:none;color:var(--muted);font-size:10px;transform:translateY(-1px)}\n.side li .song:hover,.side li.playing .song{color:var(--accent)}\n.side li .song:hover .ic,.side li.playing .ic{color:var(--accent)}\n.side li.playing{font-weight:500}\n.side li .d{display:flex;justify-content:flex-end;align-items:center;min-height:19px}\n/* spinning record: replaces the song length while that song is actually playing (1.8 s per turn = 33\u2153 rpm) */\n.rec-spin{display:none;width:16px;height:16px;border-radius:50%;flex:none;\n  background:\n    radial-gradient(circle, var(--paper) 0 7%, var(--accent) 8% 30%, transparent 31%),\n    repeating-radial-gradient(circle, transparent 0 1px, rgba(255,255,255,.07) 1px 1.6px),\n    conic-gradient(var(--vinyl) 0 8%, var(--vinyl-hi) 13%, var(--vinyl) 20% 58%, var(--vinyl-hi) 63%, var(--vinyl) 70%);\n  box-shadow:0 0 0 1px rgba(0,0,0,.15);animation:spin 1.8s linear infinite}\n.rec-spin.cd{background:radial-gradient(circle,var(--paper) 0 9%,rgba(255,255,255,.65) 10% 28%,transparent 30%),\n  conic-gradient(rgba(255,80,160,.35),rgba(255,210,60,.35),rgba(60,230,170,.35),rgba(60,140,255,.35),rgba(190,80,255,.35),rgba(255,80,160,.35)),\n  conic-gradient(#cfd2d6,#f4f5f7 25%,#b3b7bd 50%,#eceef1 75%,#cfd2d6);animation-duration:1s}\n.wrap.sp-live .side li.playing .len{display:none}\n.wrap.sp-live .side li.playing .rec-spin{display:block}\n.wrap.sp-paused .side li.playing .rec-spin{animation-play-state:paused}\n@keyframes spin{to{transform:rotate(360deg)}}\n.player{position:fixed;left:0;right:0;bottom:0;z-index:20;background:var(--paper);border-top:2px solid var(--ink);\n  padding:10px max(16px,env(safe-area-inset-right,0px)) calc(10px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px))}\n.player .in{max-width:1560px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,40%) minmax(0,1fr);gap:16px;align-items:center}\n.player .pl-left,.player .pl-right{display:flex;align-items:center;gap:14px;min-width:0}\n.player .pl-left{justify-content:space-between}\n.player .pl-right .x{margin-left:auto}\n.player .pl-mid{display:flex;align-items:center;justify-content:center;min-width:0}\n.player .pl-mid .embed{width:100%}\n.player .now{flex:1;min-width:0}\n@media (max-width:620px){.player .in{display:flex;gap:10px}.player .pl-left,.player .pl-right{display:contents}.player .pl-mid{flex:1}.player .pl-right .x{margin-left:0}}\n.player .now b{display:block;font:600 14px/1.3 var(--f-head);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.player .embed{flex:1;min-width:0;min-height:80px}   /* Spotify draws an 80 px player; a taller frame only left empty space below it */\n.player .embed iframe{display:block;border:0;width:100%}\n.player .msg{font-size:14px;color:var(--muted);flex:1}\n.player .msg a{color:var(--ink)}\n.player .x{all:unset;cursor:pointer;font-size:20px;line-height:1;padding:4px 8px;color:var(--muted)}\n.player .x:hover{color:var(--ink)}\n.wrap.has-player{padding-bottom:120px}\n/* signal-strength style meter beside the player: blue-lit face, needle swings while music plays */\n.player .pl-right{align-self:stretch}\n.player .meter{flex:none;width:180px;height:80px;align-self:flex-start;line-height:0;filter:drop-shadow(0 0 8px rgba(70,150,255,.4))}\n.player .meter svg{width:100%;height:100%;display:block}   /* same height as Spotify's dark player, tops lined up */\n@media (max-width:1100px){.player .meter{display:none}}\n\n/* quick-scroll bar on the right of album cover pages: shows while scrolling, drag it to move fast through long lists */\n.fastscroll{position:fixed;right:6px;top:14vh;bottom:var(--fs-bottom,24px);width:22px;z-index:19;opacity:0;pointer-events:none;transition:opacity .25s}\n.fastscroll.on{opacity:1;pointer-events:auto}\n.fastscroll::before{content:\"\";position:absolute;left:50%;top:0;bottom:0;width:2px;transform:translateX(-50%);background:rgba(0,0,0,.18)}\n.fastscroll .th{position:absolute;left:0;width:22px;height:54px;border-radius:11px;background:var(--ink);cursor:grab;touch-action:none;box-shadow:0 1px 4px rgba(0,0,0,.25)}\n.fastscroll .th:hover,.fastscroll.drag .th{background:var(--accent)}\n.fastscroll.drag .th{cursor:grabbing}\n.fastscroll .bub{position:absolute;right:32px;transform:translateY(-50%);background:var(--ink);color:#fff;font:600 13px/1.3 var(--f-head);padding:8px 12px;white-space:nowrap;max-width:60vw;overflow:hidden;text-overflow:ellipsis;display:none}\n.fastscroll .bub small{display:block;font-weight:400;opacity:.75;font-size:11px}\n.fastscroll.drag .bub,.fastscroll:hover .bub{display:block}\n@media (hover:none){.fastscroll{width:30px}.fastscroll .th{width:30px;height:60px;border-radius:15px}}\n\n@media (max-width:620px){.player .now{display:none}}\n/* facts + discography */\n.info{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px;padding-top:20px;border-top:1px solid var(--line)}\n.info .facts{padding-top:0;border-top:0;align-content:start}\n.facts .cats a{text-decoration:none;border-bottom:1px solid var(--line)}\n.facts .cats a:hover,.facts .cats a:focus-visible{color:var(--accent);border-color:var(--accent)}\n.disco h3{font:600 15px/1.2 var(--f-head);margin:0 0 10px;letter-spacing:-.005em}\n.disco ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px;font-size:14px;line-height:1.35}\n.disco li{display:grid;grid-template-columns:3em minmax(0,1fr) 14px;gap:8px;align-items:start}\n.disco .mini-play{margin-top:2px}\n.disco .mini-play.mine{color:var(--accent);border-color:var(--accent)}      /* albums in the collection: orange triangle */\n.disco .mini-play.mine:hover,.disco .mini-play.mine.on{color:#fff}\n.disco .yr{color:var(--muted);font-variant-numeric:tabular-nums}\n.disco li.owned{font-weight:600}\n.disco li.owned a{text-decoration:none;border-bottom:1.5px solid var(--line)}\n.disco li.owned a:hover,.disco li.owned a:focus-visible{border-bottom-color:var(--accent);color:var(--accent)}\n.disco li.current{font-weight:600;color:var(--accent)}\n.disco li.current .yr{color:var(--accent)}\n.disco .xt{font-weight:400;font-size:12px;color:var(--muted);white-space:nowrap}\n.disco .note{font-size:12px;color:var(--muted);margin:10px 0 0}\n/* award medals for best-of lists (original design: gold medal, orange ribbons) */\n/* the whole Best Of list under the albums when a Best Of button is on */\n.bestfull{margin-top:64px;padding-top:22px;border-top:2px solid var(--ink)}\n.bestfull+.bestfull{margin-top:48px}\n.bestfull h2{font:600 24px/1.2 var(--f-head);letter-spacing:-.01em;margin:0 0 4px}\n.bestfull .sub{color:var(--muted);font-size:14px;margin:0 0 18px}\n.bestfull .sub b{color:var(--accent);font-weight:600}\n.bestfull ol{list-style:none;margin:0;padding:0;columns:3 280px;column-gap:34px}\n.bestfull li{break-inside:avoid;display:grid;grid-template-columns:3.2em 1fr 14px;align-items:start;gap:8px;padding:5px 6px;font-size:14px;line-height:1.35;border-bottom:1px solid var(--panel);color:var(--muted)}\n.bestfull li .n{font-variant-numeric:tabular-nums;text-align:right;color:var(--muted)}\n.bestfull li .a{color:var(--ink)}\n.bestfull .mini-play{margin-top:2px}\n.bestfull .mini-play.mine{color:var(--accent);border-color:var(--accent)}\n.bestfull .mini-play.mine:hover,.bestfull .mini-play.mine.on{color:#fff}\n.bestfull li.own{background:color-mix(in srgb,var(--accent) 12%,transparent);color:var(--ink)}\n.bestfull li.own .n{color:var(--accent);font-weight:700}\n.bestfull li.own a{color:var(--ink);font-weight:600;text-decoration:none}\n.bestfull li.own a:hover{color:var(--accent);text-decoration:underline}\n.bestfull li.own a::after{content:\" \u2192\";color:var(--accent)}\n.bestfull .xt{font-size:12px;font-weight:400;color:var(--muted);white-space:nowrap}\n.best-row{display:grid;grid-template-columns:max-content max-content 1fr;gap:8px 18px;align-items:start;font-size:14px;margin-top:18px;padding-top:16px;border-top:1px solid var(--line)}\n.best-lab{color:var(--muted);min-width:6.7em}\n.best-links a{text-decoration:none;border-bottom:1px solid var(--accent);line-height:1.9}\n.best-row .awards{margin-top:-2px}\n@media (max-width:620px){.best-row{grid-template-columns:max-content 1fr}.best-row .awards{grid-column:1/-1}}\n.awards{display:flex;flex-wrap:wrap;gap:2px}\n.award{width:58px;text-align:center;text-decoration:none;color:var(--ink);display:block;border:0!important}\n.award .nm{font:600 8.5px/1.15 var(--f-body);margin-bottom:4px;min-height:2.3em;display:flex;align-items:flex-end;justify-content:center}\n.award .d{width:54px;height:54px;margin:0 auto;border-radius:50%;display:grid;place-items:center;position:relative;z-index:1;color:#3d2a05;\n  background:radial-gradient(circle at 32% 28%,#fff6cf 0 6%,#f2d36b 22%,#c99a2e 58%,#8f6512 100%);\n  box-shadow:inset 0 0 0 3px rgba(255,255,255,.35),inset 0 0 0 5px rgba(120,80,10,.45),0 2px 6px rgba(0,0,0,.25);transition:transform .2s}\n.award .d b{font:800 7.5px/1.05 var(--f-head);display:block;letter-spacing:0;text-transform:uppercase;white-space:nowrap}\n.award .d small{font:700 8.5px/1.1 var(--f-head);display:block;margin-top:2px;opacity:.85}\n.award .r{display:flex;justify-content:center;gap:3px;height:26px;margin-top:-10px}\n.award .r i{width:13px;height:26px;background:linear-gradient(90deg,#b8501f,#e47a44 50%,#b8501f);clip-path:polygon(0 0,100% 0,100% 100%,50% 76%,0 100%)}\n.award .r i:first-child{transform:rotate(12deg)} .award .r i:last-child{transform:rotate(-12deg)}\n.award.aoty .d b{font-size:6px;line-height:1.12;white-space:normal;max-width:30px;margin:0 auto}\n.award.aoty .d small{font-size:7.5px;margin-top:1px}\n.award:hover .d,.award:focus-visible .d{transform:scale(1.06)}\n/* wikipedia columns */\n.wiki{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:44px;margin-top:28px;padding-top:24px;border-top:2px solid var(--ink)}\n.wiki h3{font:600 22px/1.2 var(--f-head);letter-spacing:-.015em;margin:4px 0 10px}\n.wiki p{margin:0 0 12px;max-width:62ch;font-size:15px}\n.wiki p.missing{color:var(--muted);font-size:14px}\n.wiki a.more{font-size:14px;text-decoration:none;border-bottom:1px solid var(--accent)}\n/* artist page */\n.artist-head{padding-block:4px 26px;margin-bottom:30px;border-bottom:1px solid var(--line)}\n.artist-head h2{font:600 clamp(36px,6vw,58px)/1.05 var(--f-head);letter-spacing:-.025em;margin:8px 0 0}\nfooter{margin-top:64px;padding-top:16px;border-top:1px solid var(--line);font-size:12px;color:var(--muted);display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:space-between}\n\n@media (max-width:760px){\n  .album,.back-sleeve,.wiki{grid-template-columns:minmax(0,1fr)}\n  /* phones: cover, title and buttons, then tracklist and personnel, then details, discography and Best Of */\n  .album{display:flex;flex-direction:column;gap:24px}\n  .album .side-col{display:contents}\n  .album .cover-col{order:1}.album .side-col > *{order:2}.album .track-col{order:3;margin-top:8px}.album .side-col > .info,.album .side-col > .best-row{order:4}\n  .wiki{gap:28px}\n  .album{gap:28px}\n  .album .sleeve{max-width:380px}\n  .playalb-row{max-width:380px}\n  .grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:14px 14px}   /* was gap:26px 14px */\n  .site img{height:46px}\n}\n@media (max-width:1000px){.info{grid-template-columns:minmax(0,1fr)}}\n@media (prefers-reduced-motion:reduce){.disc{transition:none}.album .disc{animation:none}.rec-spin{animation:none}}\n/* ---- phones only (620 px wide and under): the desktop look is untouched ---- */\n@media (max-width:620px){\n  /* home: the records / CDs / artists / tracks / hours counts a third smaller */\n  .stats{gap:12px 0;justify-content:space-between}\n  .stats > .shuf-f{flex:1 1 100%}\n  .wrap.photo .mast > div:first-child{flex:1 1 100%}\n  .wrap.photo .mast h1{text-align:center}\n  .field input,.field select{font-size:16px}   /* iPhones zoom the whole page in on any box with smaller text when it's tapped, and stay zoomed */\n  #view.searching .live-f,#view.searching .tools .field:not(.grow),#view.searching .filters,#view.searching #bestFull{display:none}\n  .stats > span:not(.shuf-f){flex:0 0 auto}\n  .stats > span:not(.shuf-f) b{font-size:17px}\n  .stats > span:not(.shuf-f) .label{font-size:7px;letter-spacing:.12em}\n  /* Live!: the way home above the video on white; LIVE and SHUFFLE side by side under it, with dark lettering above them */\n  .live-hero{display:grid;grid-template-columns:auto auto;justify-content:center;align-items:end;column-gap:22px;row-gap:16px;aspect-ratio:auto;min-height:0;padding:0;overflow:visible;background:none}\n  .wrap.livepg .live-hero{margin-top:6px}\n  .live-hero::after{display:none}\n  .live-hero > .back.neonhome{position:relative;top:auto;left:auto;grid-column:1/-1;grid-row:1;justify-self:start;--nh:6.4px}\n  .live-hero .live-bg{position:relative;inset:auto;grid-column:1/-1;grid-row:2;width:100%;height:auto;aspect-ratio:1280/648;display:block}\n  .live-hero .live-title,.live-hero .shuf-f{grid-row:3;align-items:center;align-self:stretch;display:flex;flex-direction:column;justify-content:flex-end;margin:0;padding:0}\n  .live-hero .live-title h2{line-height:0;margin:0}\n  .live-head .neon,.live-head .shuf-f .neon{font-size:8.4px}\n  .live-hero .label,.live-hero .shuf-f .shuf-count{color:var(--muted);font-size:9px;letter-spacing:.1em;text-align:center}\n  .live-hero .live-title .label{margin-bottom:6px}\n  .live-head .shuffle{margin-top:0}\n  .wrap.livepg .live-hero{padding-bottom:18px}\n}\n/* the close / clear \u00d7: a small white neon ring on dark grey (search box, the player bar, the big player) */\n.nx.nx.nx{all:unset;box-sizing:border-box;position:relative;width:36px;height:36px;flex:none;border-radius:50%;display:grid;place-items:center;cursor:pointer;overflow:hidden;\n background:radial-gradient(circle at 50% 50%,rgba(225,225,225,.22),rgba(225,225,225,0) 72%),linear-gradient(160deg,#363636,#121212);box-shadow:0 2px 7px rgba(0,0,0,.25)}\n.nx.nx.nx::before{content:\"\";position:absolute;inset:3px;border-radius:50%;border:1.2px solid #eaeaea;pointer-events:none;\n box-shadow:0 0 1.5px rgba(225,225,225,1),0 0 4px rgba(225,225,225,.85),0 0 9px rgba(225,225,225,.5),inset 0 0 4px rgba(225,225,225,.6),inset 0 0 9px rgba(225,225,225,.35)}\n.nx.nx.nx::after{content:\"\";position:absolute;inset:3.7px;border-radius:50%;border:.6px solid rgba(255,255,255,.75);pointer-events:none}\n.nx svg{position:relative;width:12px;height:12px;overflow:visible;filter:drop-shadow(0 0 1px rgba(255,255,255,.95)) drop-shadow(0 0 3px rgba(255,255,255,.75)) drop-shadow(0 0 6px rgba(255,255,255,.45))}\n.nx svg path{fill:none;stroke:#fff;stroke-width:1.9;stroke-linecap:round}\n.nx.nx.nx:hover,.nx.nx.nx:focus-visible{filter:brightness(1.18)}\n.nx.flick svg{animation:neonflick .52s steps(1,end)}\n.qbox .qx.nx{position:absolute;right:2px;bottom:3.5px;display:none}\n.qbox.has .qx.nx{display:grid}\n.player:not(.big) .big-x.nx{display:none}\n.player.big .big-x.nx{display:grid;position:absolute;top:14px;right:16px}\n.player .x.nx[hidden]{display:none}\n\n/* phones: no shuffle and no on-page player; PLAY carries the Spotify logo and opens the Spotify app */\n.neon.play .spl,.play-f .ph-note{display:none}\n@media (max-width:620px){\n  .shuf-f .neon,#view .shuf-f:not(.home-count){display:none}\n  .stats > .shuf-f{text-align:center}\n  .stats > .shuf-f .shuf-count{margin:0}\n  .live-hero{grid-template-columns:auto;justify-content:center}\n  .neon.play .spl{display:block;width:2.6em;height:2.6em;flex:none;filter:drop-shadow(0 0 .1em rgba(205,225,255,.95)) drop-shadow(0 0 .35em rgba(205,225,255,.7))}\n  .neon.play .lit{gap:.9em}\n  .play-f .ph-note{display:block;margin-top:4px;font:600 10.5px/1.3 var(--f-head);letter-spacing:.14em;text-transform:uppercase;color:var(--muted);text-align:center}\n  .player{display:none!important}\n}\n\n/* Cover Art: half-width signs (two fill one standard column); the colours glow in their own colour, B&W like the \u00d7 buttons */\n.chip.nchip.mini{width:calc((var(--cw,124px) - 8px)/2);min-width:0;flex:none}\n.chip.nchip.mini svg.ic{position:relative;width:40px;height:24px;max-width:84%;overflow:visible;fill:none;stroke:#fff;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;\n filter:drop-shadow(0 0 1px rgba(var(--lg),.95)) drop-shadow(0 0 3px rgba(var(--lg),.75)) drop-shadow(0 0 6px rgba(var(--lg),.45))}\n.chip.nchip.mini .L{position:relative;font:800 19px/1 var(--f-head);color:transparent;-webkit-text-stroke:1.2px var(--lc,#fff);letter-spacing:.04em;\n text-shadow:0 0 2px rgba(var(--lg),.95),0 0 5px rgba(var(--lg),.85),0 0 10px rgba(var(--lg),.55)}\n.chip.nchip.mini .L.sm{font-size:14px;letter-spacing:.02em}\n.chip.nchip.mini.cr{--wall1:#5c0d12;--wall2:#260407;--tube:255,64,72;--lg:255,90,96;--lc:#ffd2d4}\n.chip.nchip.mini.co{--wall1:#5e2a08;--wall2:#281003;--tube:255,140,56;--lg:255,150,70;--lc:#ffe2c8}\n.chip.nchip.mini.cy{--wall1:#4d420a;--wall2:#1f1a03;--tube:255,216,64;--lg:255,222,90;--lc:#fff4c4}\n.chip.nchip.mini.cg{--wall1:#0c4a1d;--wall2:#03200a;--tube:64,224,110;--lg:90,232,130;--lc:#d2ffe0}\n.chip.nchip.mini.cb{--lc:#e2edff}\n.chip.nchip.mini.cbw{--tube:234,234,234;--lg:255,255,255;--lc:#fff;background:radial-gradient(circle at 50% 50%,rgba(225,225,225,.22),rgba(225,225,225,0) 72%),linear-gradient(160deg,#363636,#121212)}\n.chip.nchip.mini.cbw::before{border-color:#eaeaea}\n.chip.nchip.mini.cbw[aria-pressed=\"false\"]{background:#fff}\n.chip.nchip.mini[aria-pressed=\"false\"] svg.ic{stroke:#9c9c9c;filter:none}\n.chip.nchip.mini[aria-pressed=\"false\"] .L{-webkit-text-stroke:1px #9c9c9c;text-shadow:none}\n" + '</style>' + "<div class=\"wrap\">\n  <div class=\"mast\">\n    <div><h1><a href=\"#shelf\">The Collection</a></h1></div>\n    <div class=\"stats\" id=\"stats\"></div>\n  </div>\n  <main id=\"view\"></main>\n  <div class=\"big-back\" id=\"bigBack\" hidden></div>\n  <div class=\"player\" id=\"player\" hidden>\n    <div class=\"in\">\n      <!-- left: what's playing, Lyrics (with the bigger-player button under it) and Previous; middle: Spotify's player, centered on the page; right: Next, meter, close.\n           The bigger player is this same player rearranged (so the music never restarts), plus the cover and details below -->\n      <img class=\"big-cover\" id=\"bigCover\" alt=\"\">\n      <div class=\"big-info\"><div class=\"lab\" id=\"bigLabel\"></div><h3><span id=\"bigTitle\"></span></h3><div class=\"who\"><b id=\"bigArtist\"></b><br><span id=\"bigAlbum\"></span> <span class=\"yr\" id=\"bigYear\"></span></div></div>\n      <button class=\"big-x nx\" id=\"bigClose\" type=\"button\" aria-label=\"Back to the small player\" title=\"Back to the small player\"><svg viewBox=\"0 0 12 12\" aria-hidden=\"true\"><path d=\"M2.5 2.5l7 7M9.5 2.5l-7 7\"/></svg></button>\n      <div class=\"pl-left\">\n        <div class=\"now\"><div class=\"label\" id=\"nowLabel\">Now playing</div><b id=\"nowTitle\"></b><span class=\"sub\" id=\"nowSub\"></span></div>\n        <div class=\"lyr-col\">\n          <a class=\"here lyr pnb\" id=\"lyricsBtn\" href=\"https://genius.com/\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Open the lyrics for this song on Genius in a new tab (the music keeps playing)\"><span class=\"w\">LYRICS</span></a>\n          <button class=\"bigbtn pnb\" id=\"bigBtn\" type=\"button\" aria-label=\"Bigger player\" title=\"Bigger player\"><svg class=\"arw\" viewBox=\"0 0 16 12\" aria-hidden=\"true\"><path d=\"M15 6H2M6 2 2 6l4 4\"/></svg><span class=\"w\">EXPAND</span><svg class=\"arw\" viewBox=\"0 0 16 12\" aria-hidden=\"true\"><path d=\"M1 6h13M10 2l4 4-4 4\"/></svg></button>\n        </div>\n        <button class=\"skip\" id=\"prevSong\" type=\"button\" aria-label=\"Previous song\" title=\"Previous song\" hidden><svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1h2v12H2zM13 1v12L5 7z\" fill=\"currentColor\"/></svg></button>\n      </div>\n      <div class=\"pl-mid\">\n        <button class=\"resume\" id=\"resumeBtn\" type=\"button\" hidden><svg viewBox=\"0 0 10 12\" aria-hidden=\"true\"><path d=\"M0 0v12l10-6z\" fill=\"currentColor\"/></svg>Continue</button>\n        <div class=\"embed\" id=\"embedWrap\"><div id=\"embed\"></div></div>\n        <div class=\"msg\" id=\"playerMsg\" hidden></div>\n      </div>\n      <div class=\"pl-right\">\n        <button class=\"skip\" id=\"nextSong\" type=\"button\" aria-label=\"Next song\" title=\"Next song\" hidden><svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M10 1h2v12h-2zM1 1v12l8-6z\" fill=\"currentColor\"/></svg></button>\n        <div class=\"meter\" aria-hidden=\"true\"><svg viewBox=\"0 0 200 89\">\n          <defs>\n            <radialGradient id=\"mGlow\" cx=\"55%\" cy=\"47%\" r=\"62%\">\n              <stop offset=\"0\" stop-color=\"#e6ffff\"/><stop offset=\".14\" stop-color=\"#c6f8fb\"/><stop offset=\".32\" stop-color=\"#7fdcf4\"/>\n              <stop offset=\".5\" stop-color=\"#4fa4ef\"/><stop offset=\".7\" stop-color=\"#3b7ae7\"/><stop offset=\".88\" stop-color=\"#3262de\"/><stop offset=\"1\" stop-color=\"#2d56cb\"/></radialGradient>\n            <linearGradient id=\"mShade\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\".6\" stop-color=\"#14245c\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#14245c\" stop-opacity=\".35\"/></linearGradient>\n            <clipPath id=\"mFace\"><rect x=\"5\" y=\"5\" width=\"190\" height=\"79\" rx=\"3\"/></clipPath>\n          </defs>\n          <rect x=\"1\" y=\"1\" width=\"198\" height=\"87\" rx=\"5\" fill=\"#1b2640\"/>\n          <g clip-path=\"url(#mFace)\">\n            <rect x=\"5\" y=\"5\" width=\"190\" height=\"79\" fill=\"url(#mGlow)\"/>\n            <rect x=\"5\" y=\"5\" width=\"190\" height=\"79\" fill=\"url(#mShade)\"/>\n            <path d=\"M79.84 30.48C80.97 30.48 81.62 29.88 81.62 29.03C81.62 28.16 80.96 27.85 79.97 27.63C79.22 27.45 78.87 27.32 78.87 26.93C78.87 26.6 79.19 26.31 79.67 26.31C80.13 26.31 80.61 26.51 81.03 26.87L81.49 26.23C81.02 25.83 80.45 25.57 79.7 25.57C78.7 25.57 78 26.18 78 27.01C78 27.9 78.68 28.18 79.66 28.41C80.42 28.59 80.76 28.72 80.76 29.11C80.76 29.45 80.45 29.74 79.87 29.74C79.24 29.74 78.74 29.49 78.31 29.1L77.81 29.71C78.33 30.2 79.02 30.48 79.84 30.48ZM86.19 30.4H87.06V25.66H86.19ZM94.01 28.5H95.2V29.35C94.9 29.57 94.51 29.7 94.15 29.7C93.27 29.7 92.52 28.94 92.52 28.03C92.52 27.12 93.27 26.36 94.15 26.36C94.61 26.36 95.12 26.57 95.43 26.92L96.04 26.34C95.58 25.87 94.84 25.58 94.15 25.58C92.79 25.58 91.64 26.69 91.64 28.03C91.64 29.36 92.79 30.48 94.15 30.48C94.84 30.48 95.58 30.19 96.04 29.71V27.79H94.01ZM100.69 30.4H101.55V27.07L104.05 30.4H104.91V25.66H104.05V28.99L101.55 25.66H100.69ZM113.4 30.4H114.36L112.37 25.66H111.42L109.43 30.4H110.39L110.76 29.5H113.03ZM111.06 28.8 111.9 26.8 112.73 28.8ZM119.74 29.61V25.66H118.88V30.4H122.18V29.61Z\" fill=\"#0e1d48\"/>\n            <path d=\"M70.18 39.68C71.31 39.68 71.96 39.08 71.96 38.23C71.96 37.36 71.3 37.05 70.31 36.83C69.56 36.65 69.21 36.52 69.21 36.13C69.21 35.8 69.53 35.51 70.01 35.51C70.47 35.51 70.95 35.71 71.36 36.07L71.83 35.43C71.36 35.03 70.79 34.77 70.04 34.77C69.04 34.77 68.34 35.38 68.34 36.21C68.34 37.1 69.02 37.38 70 37.61C70.76 37.79 71.1 37.92 71.1 38.31C71.1 38.65 70.79 38.94 70.21 38.94C69.58 38.94 69.08 38.69 68.65 38.3L68.15 38.91C68.67 39.4 69.36 39.68 70.18 39.68ZM77.8 39.6H78.67V35.65H80.18V34.86H76.28V35.65H77.8ZM88.57 36.43C88.57 35.51 87.81 34.86 86.8 34.86H84.74V39.6H85.6V38.01H86.36L87.48 39.6H88.46L87.3 37.95C88.06 37.78 88.57 37.2 88.57 36.43ZM85.6 35.65H86.7C87.29 35.65 87.7 35.95 87.7 36.43C87.7 36.92 87.29 37.21 86.7 37.21H85.6ZM96.76 35.65V34.86H93.2V39.6H96.76V38.81H94.06V37.58H96.51V36.79H94.06V35.65ZM101.44 39.6H102.3V36.27L104.8 39.6H105.66V34.86H104.8V38.19L102.3 34.86H101.44ZM112.61 37.7H113.8V38.55C113.5 38.77 113.11 38.9 112.75 38.9C111.87 38.9 111.12 38.14 111.12 37.23C111.12 36.32 111.87 35.56 112.75 35.56C113.21 35.56 113.72 35.77 114.03 36.12L114.64 35.54C114.18 35.07 113.44 34.78 112.75 34.78C111.39 34.78 110.25 35.89 110.25 37.23C110.25 38.56 111.39 39.68 112.75 39.68C113.44 39.68 114.18 39.39 114.64 38.91V36.99H112.61ZM120.56 39.6H121.42V35.65H122.94V34.86H119.04V35.65H120.56ZM130.73 34.86V36.79H128.36V34.86H127.5V39.6H128.36V37.58H130.73V39.6H131.58V34.86Z\" fill=\"#0e1d48\"/>\n            <!-- the scale: a thick dark bar curving down in the middle, a light line along it in 5 segments (strengths 1-5) -->\n            <path d=\"M44 45 A131.69 131.69 0 0 0 156 45\" fill=\"none\" stroke=\"#0e1d48\" stroke-width=\"8.5\" stroke-linecap=\"round\"/>\n            <path d=\"M46.2 45.6 A131.69 131.69 0 0 0 153.8 45.6\" fill=\"none\" stroke=\"#cfe7f7\" stroke-width=\"1.3\" stroke-dasharray=\"182.5 22\" pathLength=\"1000\"/>\n            <path d=\"M66.51 72H67.33V68.97L68.82 71.74L70.32 68.97V72H71.14V67.47H70.32L68.82 70.23L67.33 67.47H66.51ZM77.65 72.08C78.82 72.08 79.65 71.25 79.65 70.07V67.47H78.83V70.04C78.83 70.79 78.33 71.33 77.65 71.33C76.96 71.33 76.46 70.79 76.46 70.04V67.47H75.65V70.07C75.65 71.25 76.47 72.08 77.65 72.08ZM84.98 71.25V67.47H84.15V72H87.31V71.25ZM92.88 72H93.7V68.22H95.15V67.47H91.43V68.22H92.88ZM99.51 72H100.34V67.47H99.51ZM104.93 72H105.76V70.48H106.9C107.87 70.48 108.6 69.86 108.6 68.97C108.6 68.09 107.87 67.47 106.9 67.47H104.93ZM105.76 69.72V68.22H106.8C107.37 68.22 107.76 68.51 107.76 68.97C107.76 69.43 107.37 69.72 106.8 69.72ZM116.49 72H117.41L115.51 67.47H114.6L112.7 72H113.62L113.97 71.14H116.14ZM114.26 70.47 115.05 68.55 115.85 70.47ZM122.95 72H123.77V68.22H125.22V67.47H121.5V68.22H122.95ZM132.67 67.47V69.31H130.41V67.47H129.58V72H130.41V70.07H132.67V72H133.49V67.47Z\" fill=\"#0e1d48\"/>\n            <!-- thin needle hanging from a pivot above the face -->\n            <line class=\"m-needle\" x1=\"100\" y1=\"-40\" x2=\"100\" y2=\"50\" stroke=\"#0e1d48\" stroke-width=\".8\" stroke-linecap=\"round\"/>\n          </g>\n        </svg></div>\n        <button class=\"x nx\" id=\"closePlayer\" type=\"button\" aria-label=\"Close player\" title=\"Close player\"><svg viewBox=\"0 0 12 12\" aria-hidden=\"true\"><path d=\"M2.5 2.5l7 7M9.5 2.5l-7 7\"/></svg></button>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
  var get = function (name) { return fetch(BASE + 'data/' + name + '.json?v=20261112081210').then(function (r) { return r.json(); }); };
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
// Willie Nelson's discography takes in the duet / band-credit lists (they hold his albums with Ray Price, Waylon Jennings, the Family)
(() => {
  const merge = { 'Willie Nelson':['Willie Nelson & Family', 'Willie Nelson & Ray Price'] },
        add = { 'Willie Nelson':[{ year:1980, title:'Honeysuckle Rose', type:'Soundtrack' }] },
        k = t => String(t).toLowerCase().replace(/[^a-z0-9]/g, '');
  Object.entries(merge).forEach(([to, from]) => { const T = ARTISTS[to]; if (!T) return;
    const L = [...(T.studio_albums || [])], seen = new Set(L.map(x => k(x.title)));
    [...from.flatMap(f => (ARTISTS[f] && ARTISTS[f].studio_albums) || []), ...(add[to] || [])].forEach(x => { if (!seen.has(k(x.title))){ seen.add(k(x.title)); L.push(x); } });
    T.studio_albums = L.sort((x, y) => (x.year || 0) - (y.year || 0)); });
})();
// ---- weekly new-release check (weekly/new_releases.json, kept up to date by GitHub every Monday) ----
// albums an artist released recently that their Discography doesn't list yet are added to it
// words in brackets are dropped when matching titles ("The Beatles (White Album)" ~ "The Beatles"),
// except "(Taylor's Version)": a re-recording is its own album, not the original
const PAREN = /\s*[\(\[](?![^\)\]]*taylor)[^\)\]]*[\)\]]/gi;
const NEWREL = (() => { try { return (window.__COLLECTION_DATA && window.__COLLECTION_DATA.newrel) || {}; } catch (e) { return {}; } })();
(() => {
  const k = t => String(t).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&|\+/g, ' and ').replace(/[^a-z0-9]/g, '');
  const b = t => k(String(t).replace(PAREN, ''));
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
const slug = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/^the\s+/,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || (String(s).trim() === '!!!' ? 'chk-chk-chk' : [...String(s).trim()].map(c => c.codePointAt(0).toString(16)).join('-'));   // a name with no letters (!!!) still gets an artist page
const sortName = s => String(s).replace(/^the\s+/i,'').toLowerCase();
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_FULL = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// "1984-02-13" -> "February 13, 1984"; "1974-04" -> "April 1974"; "1974" -> "1974"
const fmtRelease = iso => { if(!iso) return ''; const [y,m,d] = iso.split('-').map(Number);
  return d ? `${MONTHS_FULL[m-1]} ${d}, ${y}` : m ? `${MONTHS_FULL[m-1]} ${y}` : `${y}`; };
// search ignores accents and case: "beyonce" finds Beyoncé
const fold = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const titleKey = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/^the\s+/,'').replace(/[^a-z0-9]+/g,'');
// Spotify albums for albums not in the collection (New Releases, Best Of): "artist|title" -> album id, from spotify_other_lookup.py
const spOther = (artist, title) => { try { return ((readJSON('bestof') || {})._sp || {})[titleKey(artist) + '|' + titleKey(title)] || ''; } catch (e) { return ''; } };
const fmtDate = iso => { if(!iso) return ''; const [y,m,d] = iso.split('-').map(Number); return `${MONTHS[m-1]} ${d}, ${y}`; };
const secs = d => { const m = /^(\d+):(\d\d)$/.exec(d||''); return m ? (+m[1])*60 + (+m[2]) : null; };
const mmss = n => `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;
// Decade always comes from the ORIGINAL release year, never the reissue year.
const DECADES = ['50s','60s','70s','80s','90s','2000s','2010s','2020s'];
function decadeOf(y){
  y = +y; if (!y) return '';
  if (y < 1960) return '50s';   // everything before 1960 is from the 50s
  if (y < 2000) return `${String(Math.floor(y/10)*10).slice(2)}s`;
  return `${Math.floor(y/10)*10}s`;
}
// words a search for the decade should match, e.g. "70s", "1970s", "'70s"
const decadeWords = a => { const d = a.decade; if (!d) return ''; if (d==='50s') return "50s '50s 1950s fifties old";
  const full = d.length===3 ? `19${d}` : d; return `${d} '${d} ${full}`; };

// group artists case-insensitively (e.g. "Death Cab For Cutie" / "Death Cab for Cutie")
// Format: every album is vinyl unless its data says "CD" (set when CDs are loaded separately)
// Media: each album shows once. "medium" is Vinyl (the default), CD, or both; when both are owned,
// the album keeps its vinyl details (pressing, reissue year, catalog #, color).
const mediaOf = a => { const m = String(a.medium || '').toUpperCase();
  const cd = /\bCD\b/.test(m), vinyl = !m.trim() || /VINYL|LP|RECORD/.test(m);
  return { vinyl: vinyl || !cd, cd }; };
const hasVinyl = a => mediaOf(a).vinyl;
// the Media line on an album page: "33⅓ rpm Vinyl", "45 rpm Vinyl & CD", "33⅓ & 45 rpm Vinyl" (speed from Discogs, when known)
const RPM = { '16':'16⅔', '33':'33⅓', '45':'45', '78':'78' };
const mediaFull = a => { const m = mediaOf(a), v = a.rpm ? `${String(a.rpm).split(' & ').map(x => RPM[x] || x).join(' & ')} rpm Vinyl` : 'Vinyl'; return m.vinyl && m.cd ? `${v} & CD` : m.cd ? 'CD' : v; };
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
const tagLabel = g => esc(g.replace(/ \/ /g, '/'));   // Funk/Soul: no spaces, so it fits a standard box
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
// one artist page and one discography for an artist's duets / band credits ("Willie Nelson & Ray Price" -> Willie Nelson)
const ARTIST_GROUP = { 'Willie Nelson & Ray Price':'Willie Nelson', 'Waylon Jennings & Willie Nelson':'Willie Nelson', 'Willie Nelson & Family':'Willie Nelson' };
const groupKey = n => ARTIST_GROUP[n] || n;
ALBUMS.forEach(a => { a.aslug = slug(groupKey(a.artist)); a.decade = decadeOf(a.year); a.type = normType(a.type); normGenres(a); });
// Each album shows only its own genres and styles (from its own Discogs release); nothing is shared across an artist's albums.
const num = n => Math.round(n).toLocaleString('en-US');   // whole numbers with commas: 1,234
const artistName = {}; ALBUMS.forEach(a => artistName[a.aslug] ??= groupKey(a.artist));
// "Best of" lists: an album is on a list when the artist and the title match (ignoring "The", punctuation and bracketed extras)
// link to the list's own page about the album
const ordinal = n => n + (['th','st','nd','rd'][(n % 100 - 20) % 10] || ['th','st','nd','rd'][n % 100] || 'th');
const bestUrl = b => b.list === 'rs' ? `https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/${b.slug}/`
  : b.list === 'apple' ? `https://100best.music.apple.com/us/album/${b.rank}`
  : b.list === 'acclaimed' ? `https://www.acclaimedmusic.net/album/A${b.slug}.htm`
  : b.list === 'grammy' ? `https://en.wikipedia.org/wiki/${ordinal(b.rank - 1958)}_Annual_Grammy_Awards`
  : b.list === 'punk' ? 'https://www.rollingstone.com/music/music-lists/best-punk-albums-1235538842/'
  : b.list === 'p70s' ? 'https://pitchfork.com/features/lists-and-guides/5932-top-100-albums-of-the-1970s/'
  : b.list === 'p80s' ? 'https://pitchfork.com/features/lists-and-guides/the-200-best-albums-of-the-1980s/'
  : b.list === 'p90s' ? 'https://pitchfork.com/features/lists-and-guides/the-best-albums-of-the-1990s/'
  : `https://pitchfork.com/reviews/albums/${b.slug}/`;
// what each list shows: the line in the Best of links, and the big/small text on the medal
const bestText = b => { const L = BEST_LISTS.find(x => x.key === b.list);
  if (b.list === 'grammy') return { line:`Grammy Album of the Year · ${b.rank}`, name:'Grammy', top:'Album of the Year', val:String(b.rank) };
  if (b.list === 'p70s') return { line:`Pitchfork Best 70s 100 · #${b.rank}`, name:'Pitchfork', top:'Best 70s 100', val:'#' + b.rank };
  if (b.list === 'p90s') return { line:`Pitchfork Best 90s 150 · #${b.rank}`, name:'Pitchfork', top:'Best 90s 150', val:'#' + b.rank };
  if (b.list === 'p80s') return { line:`Pitchfork Best 80s 200 · #${b.rank}`, name:'Pitchfork', top:'Best 80s 200', val:'#' + b.rank };
  if (b.list === 'punk') return { line:`Rolling Stone Best Punk 100 · #${b.rank}`, name:'Rolling Stone', top:'Best Punk 100', val:'#' + b.rank };
  const val = b.list === 'pitchfork' ? Number(b.score).toFixed(1) : '#' + b.rank;
  return { line:`${L.short} · ${val}`, name:L.name.replace(/ Top \d+$/, ''), top:L.name.replace(/^.*?(Top \d+)$/, '$1'), val }; };
const BEST_LISTS = [
  { key:'rs', name:'Rolling Stone Top 200', short:'Rolling Stone 200' },
  { key:'apple', name:'Apple Music Top 100', short:'Apple Music 100' },
  { key:'pitchfork', name:'Pitchfork Top 200', short:'Pitchfork 200' },
  { key:'acclaimed', name:'Acclaimed Music Top 200', short:'Acclaimed Music 200' },
  { key:'grammy', name:'Grammy Album of the Year', short:'Grammy Album of the Year' },
  { key:'punk', name:'Rolling Stone Best Punk 100', short:'Rolling Stone Punk 100' },
  { key:'p70s', name:'Pitchfork Best 70s 100', short:'Pitchfork Best 70s 100' },
  { key:'p80s', name:'Pitchfork Best 80s 200', short:'Pitchfork Best 80s 200' },
  { key:'p90s', name:'Pitchfork Best 90s 150', short:'Pitchfork Best 90s 150' }];
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
const PERSON_ALIAS = { 'santana':'carlos santana', 'sinead':'sinead o connor',
  'omd':'orchestral manoeuvres in the dark', 'o m d':'orchestral manoeuvres in the dark', 'orchestral manoeuvres':'orchestral manoeuvres in the dark' };
// other names an artist goes by, so a search for them finds the albums
const ARTIST_AKA = { 'Orchestral Manoeuvres In The Dark':'OMD O.M.D.', '!!!':'Chk Chk Chk Chk-Chk-Chk ChkChkChk' };
const pkeyA = n => { const k = pkey(n); return PERSON_ALIAS[k] || k; };
const creditNames = p => p.split(' – ')[0].split(/\s+&\s+|,\s+/).map(n => n.trim()).filter(n => n && n.length < 60);
const PEOPLE = {};   // person key -> {name, ids:Set}
ALBUMS.forEach(a => (a.personnel || []).forEach(p => creditNames(p).forEach(n => { const k = pkeyA(n); if (!k) return; (PEOPLE[k] = PEOPLE[k] || { name:n, ids:new Set() }).ids.add(a.id); })));
// a person's own albums count too: clicking "Sinéad O'Connor" in a credit also shows the albums released under her name
// compilations: each song's own artists count as credits too, so their names link to every album with them
ALBUMS.forEach(a => (a.tracks || []).forEach(t => (t.ar || []).forEach(n => { const k = pkeyA(n); if (!k) return; (PEOPLE[k] = PEOPLE[k] || { name:n, ids:new Set() }).ids.add(a.id); })));
ALBUMS.forEach(a => [a.artist, a.artistKey].forEach(n => { const k = n && pkeyA(n); if (k && PEOPLE[k]) PEOPLE[k].ids.add(a.id); }));
const personOf = k => PEOPLE[k] || { name:k, ids:new Set() };
// the artist shown for a song: its own artists on a compilation (up to 3), otherwise the album's artist
const songArtist = (a, t) => t && t.ar && t.ar.length ? t.ar.slice(0, 3).join(', ') : a.artist;
// "/ Artist 1, Artist 2, Artist 3" after a compilation song; each name links to the albums with that artist, when there's more than this one
const songArtists = (a, t) => !(t.ar && t.ar.length) ? '' : `<span class="tar"> / ${t.ar.slice(0, 3).map(n => { const k = pkeyA(n), ids = personOf(k).ids;
  return [...ids].some(i => i !== a.id) ? `<a class="person" href="#person=${encodeURIComponent(k)}" title="${ids.size} albums in the collection">${esc(n)}</a>` : esc(n); }).join(', ')}</span>`;
const state = { q:'', format:[], genre:[], decade:[], style:'', person:'', best:[], newyr:[], cover:[], sort:'acquired', expanded:false, exp:{ decade:false, best:false, newyr:false } };
const GENRES_SHOWN = 6;   // genre buttons shown before EXPAND (one per column)
try { const s = JSON.parse(localStorage.getItem('shelf-prefs')||'{}'); if (s.sort) state.sort = s.sort === 'year' ? 'yearAsc' : s.sort; } catch(e) {}
const savePrefs = () => { try { localStorage.setItem('shelf-prefs', JSON.stringify({sort:state.sort})); } catch(e) {} };

$('#stats').innerHTML = `
  <span class="shuf-f"><span class="label shuf-count" id="shuffleCount"></span><button class="neon blue" id="shuffle" type="button" aria-label="Shuffle play these albums"><span class="lit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg><span class="w" data-t="SHUFFLE">SHUFFLE</span></span></button></span>
  <span><b id="stRec">${num(ALBUMS.filter(hasVinyl).length)}</b><span class="label">Records</span></span>
  <span><b id="stCD">${num(ALBUMS.filter(isCD).length)}</b><span class="label" style="text-transform:none">CDs</span></span>
  <span><b id="stArt">${num(Object.keys(artistName).length)}</b><span class="label">Artists</span></span>
  <span><b id="stTrk">${num(ALBUMS.reduce((n,a)=>n+a.tracks.length,0))}</b><span class="label">Tracks</span></span>
  <span title="Total of all known song lengths"><b id="stHrs">${num(ALBUMS.reduce((n,a)=>n+a.tracks.reduce((m,t)=>m+(secs(t.d)||0),0),0)/3600)}</b><span class="label">Hours</span></span>`;
// phones: the five counts follow the filters and search (desktop always shows the whole collection)
function setStats(list){
  const set = (id, v) => { const e = $('#' + id); if (e) e.textContent = num(v); };
  set('stRec', list.filter(hasVinyl).length); set('stCD', list.filter(isCD).length);
  set('stArt', new Set(list.map(a => a.aslug || a.artist)).size);
  set('stTrk', list.reduce((n,a)=>n+a.tracks.length,0));
  set('stHrs', list.reduce((n,a)=>n+a.tracks.reduce((m,t)=>m+(secs(t.d)||0),0),0)/3600);
}

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
    const top = base.slice(0, GENRES_SHOWN);
    state.genre.forEach(sel => { if (!top.some(([g]) => g === sel)) top.push(base.find(([g]) => g === sel) || [sel, ALBUMS.filter(a => a.styles.includes(sel)).length]); });
    return top;
  }
  const all = {...Object.fromEntries(base)};
  ALBUMS.forEach(a => a.styles.forEach(s => { if (!a.genres.includes(s) && !(s in genres)) all[s] = (all[s] || 0) + 1; }));
  return Object.entries(all).sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0]));
}
// phones: while there's text in the search box, everything between it and the albums steps aside and the filters are off (from the next search run);
// emptying the box (or its ×) brings them back as they were
const PHONE = () => matchMedia('(max-width:620px)').matches;
const FILTER_KEYS = ['format','genre','decade','best','newyr','cover','style','person'];
let SEARCH_STASH = null;
function phoneSearchStart(){
  if (SEARCH_STASH || !PHONE()) return;
  SEARCH_STASH = {}; FILTER_KEYS.forEach(k => { SEARCH_STASH[k] = state[k]; state[k] = Array.isArray(state[k]) ? [] : ''; });
  $('#view').classList.add('searching');   // the albums change only when the search is run (Return or the ↵ box)
}
function phoneSearchEnd(){
  if (!SEARCH_STASH) return false;
  const typing = ROOT.activeElement && ROOT.activeElement.id === 'q';
  Object.assign(state, SEARCH_STASH); SEARCH_STASH = null; state.q = '';
  renderShelf(); if (typing) $('#q').focus({ preventScroll:true });
  return true;
}
// the first box of each filter row: EXPAND (shows the rest of the row) / CONTRACT (back to the first six)
const isOpen = k => k === 'genre' ? state.expanded : state.exp[k];
const moreBtn = k => isOpen(k)
  ? `<button class="chip more row-more nchip red" type="button" data-k="${k}" aria-expanded="true"><svg class="arw" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M10 2l4 4-4 4"/></svg><span class="w sm" data-t="CONTRACT">CONTRACT</span><svg class="arw" viewBox="0 0 16 12" aria-hidden="true"><path d="M15 6H2M6 2 2 6l4 4"/></svg></button>`
  : `<button class="chip more row-more nchip red" type="button" data-k="${k}" aria-expanded="false"><svg class="arw" viewBox="0 0 16 12" aria-hidden="true"><path d="M15 6H2M6 2 2 6l4 4"/></svg><span class="w sm" data-t="EXPAND">EXPAND</span><svg class="arw" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6h13M10 2l4 4-4 4"/></svg></button>`;
// Cover Art: what's on the cover (tags from scripts/cover_tags.py). Half-width neon signs, two to a column.
const COVER_ART = [
  ['animal','Animal','<svg class="ic" aria-hidden="true" viewBox="0 0 44 26"><path d="M7 10.5 Q6.2 7.6 8.6 6.6 L10.4 5.8 Q11.6 3.4 12.6 6 L14.2 8.2 Q15.4 10.6 18.4 11 L29.4 11 Q32 11 33.4 9.4 L36.6 5.4"/><path d="M7 10.5 Q4.4 10.9 4.2 12.4 Q5.2 13.6 8.2 13 Q10.6 12.6 11.6 14 Q12.6 16.2 13.6 16.8"/><path d="M13.6 16.8 L13.2 22.4 M17.4 17.6 L17.6 22.4 M13.6 16.8 Q15 17.6 17.4 17.6 L28.2 17.6 Q30.8 17.4 31.2 15.6 L31.8 12 M28.2 17.6 L27.8 22.4 M31.4 16 L32.4 22.4"/><circle cx="9.4" cy="8.8" r=".55" fill="#fff" stroke="none"/></svg>'],
  ['plant','Plant','<svg class="ic" aria-hidden="true" viewBox="0 0 44 26"><path d="M6 22 Q16 17 24 12 Q31 7.6 38 5"/><path d="M14.6 17.6 Q10.8 10.8 15.2 6.4 Q19.4 11.2 14.6 17.6 Z"/><path d="M24 12 Q24.6 4.4 30.6 3.2 Q31 9.8 24 12 Z"/><path d="M21 14 Q25.8 20.8 32.4 19.4 Q30 12.8 21 14 Z"/><path d="M15 15.8 L15.1 9.6 M24.8 11 L28.8 5.8 M23.4 14.6 L29.6 18"/></svg>'],
  ['food','Food','<svg class="ic" aria-hidden="true" viewBox="0 0 44 26"><g transform="translate(22 13.6) rotate(-62) scale(1.12) translate(0 -12.8)"><path d="M-1.6 14.6 L-1.6 24.4 Q0 26.4 1.6 24.4 L1.6 14.6"/><path d="M-1.6 14.6 Q-5 12.4 -5 8 L-5 1.2 Q-5 0 -4.2 0.6 M1.6 14.6 Q5 12.4 5 8 L5 1.2 Q5 0 4.2 0.6"/><path d="M-1.7 9 L-1.7 0.6 M1.7 9 L1.7 0.6"/></g></svg>'],
  ['naked','Naked','<svg class="ic" aria-hidden="true" viewBox="0 0 44 26"><path d="M5.6 4 Q8.4 9.6 7.8 13.2 Q7.2 20.8 13.8 21 Q19.6 21 21.4 15.6 Q22 14.2 22.6 15.6 Q24.4 21 30.2 21 Q36.8 20.8 36.2 13.2 Q35.6 9.6 38.4 4"/></svg>'],
  ['red','Red','<span class="L">R</span>','cr'],['orange','Orange','<span class="L">O</span>','co'],['yellow','Yellow','<span class="L">Y</span>','cy'],
  ['green','Green','<span class="L">G</span>','cg'],['blue','Blue','<span class="L">B</span>','cb'],['black_white','Black & White','<span class="L sm">B&amp;W</span>','cbw']];
// with nothing chosen every sign is lit; once one or more are chosen, only those stay lit
const coverBtn = ([k, name, inner, cls]) => { const n = ALBUMS.filter(a => (a.ct || []).includes(k)).length, on = state.cover.includes(k), lit = on || !state.cover.length;
  return `<button class="chip nchip blue mini ${cls || ''}" data-v="${k}" aria-pressed="${lit}" aria-label="${name}${on ? ' (chosen)' : ''}: ${n} albums" title="${name} · ${n} albums">${inner}</button>`; };
const HIDE_DECADES = ['50s','60s'];
const BEST_SHOWN = ['rs','apple','pitchfork'];
function renderShelf(){
  if (SEARCH_STASH && !state.q.trim()){ Object.assign(state, SEARCH_STASH); SEARCH_STASH = null; }
  const genres = {}; ALBUMS.forEach(a => a.genres.forEach(g => genres[g]=(genres[g]||0)+1));
  const decades = {}; ALBUMS.forEach(a => { if (a.decade) decades[a.decade]=(decades[a.decade]||0)+1; });
  const formats = { Vinyl: ALBUMS.filter(hasVinyl).length, 'Colored Vinyl': ALBUMS.filter(isColored).length, CD: ALBUMS.filter(isCD).length };
  $('#view').innerHTML = `
    <div class="tools">
      <div class="field grow"><label class="label" for="q">Search</label>
        <div class="qrow"><span class="qbox${state.q ? ' has' : ''}"><input id="q" type="search" enterkeyhint="search" placeholder="Artist, album, track, year, genre, style, label or catalog #" value="${esc(state.q)}"><button class="qx nx" id="qX" type="button" aria-label="Clear search" title="Clear search"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 2.5l7 7M9.5 2.5l-7 7"/></svg></button></span><button class="qgo" id="qGo" type="button" aria-label="Search" title="Search (or press Return)"><svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M13 3v5.5a1.5 1.5 0 0 1-1.5 1.5H4M7 6.5 3.5 10 7 13.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="square"/></svg></button></div></div>
      <div class="field live-f"><a class="neon" href="#live" aria-label="Live! Concerts seen"><span class="w" data-t="LIVE">LIVE</span></a><div class="neon-cap" aria-hidden="true"><span>C</span><span>o</span><span>n</span><span>c</span><span>e</span><span>r</span><span>t</span><span>s</span></div></div>
      <div class="field"><label class="label" for="sort">Sort by</label>
      <select id="sort">
        <option value="acquired">Recently acquired</option><option value="artist">Artist A–Z</option>
        <option value="yearAsc">Release Year (Oldest First)</option><option value="yearDesc">Release Year (Newest First)</option><option value="title">Album title</option>
      </select></div>
    </div>
    <div class="filters">
      <div class="filter-row"><span class="label">Media</span>
        <div class="chips" role="group" aria-label="Filter by media" data-kind="format">
          <button class="chip nchip blue" data-v="" aria-pressed="${!state.format.length}" aria-label="All"><span class="w" data-t="ALL">ALL</span></button>
          <span class="chip-gap" aria-hidden="true"></span>
          <div class="rest">
          ${['Vinyl','Colored Vinyl','CD'].map(f => `<button class="chip" data-v="${f}" aria-pressed="${state.format.includes(f)}"${formats[f]?'':' disabled'}>${f}<small>${formats[f]}</small></button>`).join('')}
          </div>
        </div></div>
      <div class="filter-row"><span class="label">Genre</span>
        <div class="chips" role="group" aria-label="Filter by genre" data-kind="genre">
          <button class="chip nchip blue" data-v="" aria-pressed="${!state.genre.length}" aria-label="All"><span class="w" data-t="ALL">ALL</span></button>
          ${moreBtn('genre')}
          <div class="rest">
          ${genreList(genres).map(([g,n])=>`<button class="chip" data-v="${esc(g)}" aria-pressed="${state.genre.includes(g)}"${n?'':' disabled'}>${tagLabel(g)}<small>${n}</small></button>`).join('')}
          ${isOpen('genre') ? moreBtn('genre') : ''}
          </div>
        </div></div>
      <div class="filter-row"><span class="label">Decade</span>
        <div class="chips" role="group" aria-label="Filter by decade" data-kind="decade">
          <button class="chip nchip blue" data-v="" aria-pressed="${!state.decade.length}" aria-label="All"><span class="w" data-t="ALL">ALL</span></button>
          ${moreBtn('decade')}
          <div class="rest">
          ${DECADES.filter(d => isOpen('decade') || !HIDE_DECADES.includes(d) || state.decade.includes(d)).map(d=>{ const n=decades[d]||0; return `<button class="chip" data-v="${d}" aria-pressed="${state.decade.includes(d)}"${n?'':' disabled'}>${decS(d)}<small>${n}</small></button>`; }).join('')}
          </div>
        </div></div>
      <div class="filter-row"><span class="label">Best Of</span>
        <div class="chips" role="group" aria-label="Filter by best-of list" data-kind="best">
          <button class="chip nchip blue" data-v="" aria-pressed="${!state.best.length}" aria-label="All"><span class="w" data-t="ALL">ALL</span></button>
          ${moreBtn('best')}
          <div class="rest">
          ${BEST_LISTS.filter(L => isOpen('best') || BEST_SHOWN.includes(L.key) || state.best.includes(L.key)).map(L=>{ const n=ALBUMS.filter(a=>a.best.some(b=>b.list===L.key)).length; return `<button class="chip" data-v="${L.key}" aria-pressed="${state.best.includes(L.key)}"${n?'':' disabled'}>${decS(L.name)}<small>${n}</small></button>`; }).join('')}
          </div>
        </div></div>
      <div class="filter-row"><span class="label">New Releases</span>
        <div class="chips" role="group" aria-label="Filter by release year" data-kind="newyr">
          <button class="chip nchip blue" data-v="" aria-pressed="${!state.newyr.length}" aria-label="All"><span class="w" data-t="ALL">ALL</span></button>
          ${moreBtn('newyr')}
          <div class="rest">
          ${NEW_YEARS().filter((y, i, all) => isOpen('newyr') || i >= all.length - 6 || state.newyr.includes(String(y))).map(y=>{ const n=ALBUMS.filter(a=>+a.year===y).length; return `<button class="chip" data-v="${y}" aria-pressed="${state.newyr.includes(String(y))}">${y}<small>${n}</small></button>`; }).join('')}
          </div>
        </div></div>
      <div class="filter-row"><span class="label">Cover Art</span>
        <div class="chips" role="group" aria-label="Filter by cover art" data-kind="cover">
          <button class="chip nchip blue" data-v="" aria-pressed="${!state.cover.length}" aria-label="All"><span class="w" data-t="ALL">ALL</span></button>
          <span class="chip-gap" aria-hidden="true"></span>
          <div class="rest">${COVER_ART.map(coverBtn).join('')}</div>
        </div></div>
      ${state.person ? `<div class="filter-row"><span class="label">Personnel</span>
        <div class="chips"><button class="chip" id="clearPerson" aria-pressed="true" title="Show everyone">${esc(personOf(state.person).name)}<small>${personOf(state.person).ids.size}</small> ×</button></div></div>` : ''}
      ${state.style ? `<div class="filter-row"><span class="label">Style</span>
        <div class="chips"><button class="chip" id="clearStyle" aria-pressed="true" title="Show all styles">${esc(state.style)}<small>${ALBUMS.filter(a=>a.styles.includes(state.style)).length}</small> ×</button></div></div>` : ''}
    </div>
    <div class="grid" id="grid"></div>
    <div id="bestFull"></div>`;
  $('#sort').value = state.sort;
  // search runs when Return (or the ↵ box) is pressed, not on every keystroke; clearing the box shows everything again
  const runSearch = () => { const v = $('#q').value; if (v === state.q) return; state.q = v; fillGrid(); };
  $('#q').addEventListener('keydown', e => { if (e.key === 'Enter'){ e.preventDefault(); runSearch(); $('#q').blur(); } });
  $('#q').addEventListener('search', () => { if (!$('#q').value && phoneSearchEnd()) return; runSearch(); });          // the browser's own × clear button in the box
  $('#q').addEventListener('input', e => $('#q').parentNode.classList.toggle('has', !!e.target.value));
  $('#qX').addEventListener('click', () => { const q = $('#q'); q.value = ''; q.focus({ preventScroll:true }); q.dispatchEvent(new Event('input', { bubbles:true })); });   // × empties the box: everything comes back
  $('#q').addEventListener('input', e => { const v = e.target.value;
    if (v.trim()) phoneSearchStart(); else if (phoneSearchEnd()) return;
    if (!v && state.q) runSearch(); });
  $('#view').classList.toggle('searching', !!SEARCH_STASH);
  $('#qGo').addEventListener('click', e => { const b = e.currentTarget; b.classList.remove('flick'); void b.offsetWidth; b.classList.add('flick'); runSearch(); });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; savePrefs(); fillGrid(); });
  ROOT.querySelectorAll('.chips[data-kind]').forEach(group => group.querySelectorAll('.chip[data-v]').forEach(b => b.addEventListener('click', () => {
    // All clears the row; any other button toggles on/off, and turning the last one off goes back to All
    const k = group.dataset.kind, v = b.dataset.v;
    // Decade picks one at a time (a new button replaces the old); Media, Genre and Best Of combine (Vinyl + CD = albums owned in both)
    const single = k === 'decade' || k === 'newyr';
    state[k] = !v ? [] : state[k].includes(v) ? state[k].filter(x => x !== v) : single ? [v] : [...state[k], v];
    if (location.hash !== '#shelf' && location.hash) history.replaceState(null, '', '#shelf');
    // the button that just lit up (or the row's ALL when the row is cleared) flickers like the other neon signs
    FLICK_NEXT = { k, v: state[k].length ? (state[k].includes(v) ? v : null) : '' };
    if (k === 'cover' || (!isOpen(k) && k !== 'format')) return renderShelf();   // Cover Art relights its whole row   // e.g. All drops a button that only shows after EXPAND
    group.querySelectorAll('.chip[data-v]').forEach(c => c.setAttribute('aria-pressed', c.dataset.v ? state[k].includes(c.dataset.v) : !state[k].length)); fitChips(); flickPending(); fillGrid(); })));
  equalizeChips(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(equalizeChips);
  ROOT.querySelectorAll('.row-more').forEach(b => b.addEventListener('click', () => { const k = b.dataset.k; if (k === 'genre') state.expanded = !state.expanded; else state.exp[k] = !state.exp[k]; FLICK_NEXT = { more:k }; renderShelf(); }));
  flickPending();
  const cp = $('#clearPerson');
  if (cp) cp.addEventListener('click', () => { state.person = ''; history.replaceState(null, '', '#shelf'); renderShelf(); });
  const cs = $('#clearStyle');
  if (cs) cs.addEventListener('click', () => { state.style = ''; history.replaceState(null, '', '#shelf'); renderShelf(); });
  fillGrid();
}
// neon flicker for the filter buttons (they are redrawn on click, so the flicker is applied to the new button)
let FLICK_NEXT = null;
function flickPending(){
  const f = FLICK_NEXT; FLICK_NEXT = null; if (!f) return;
  const el = f.more ? ROOT.querySelector(`.row-more[data-k="${f.more}"]`) : f.v === null ? null
    : [...ROOT.querySelectorAll(`.chips[data-kind="${f.k}"] .chip[data-v]`)].find(c => c.dataset.v === f.v);
  if (!el) return;
  el.classList.remove('flick'); void el.offsetWidth; el.classList.add('flick');
  setTimeout(() => el.classList.remove('flick'), 600);
}
// every button in a filter row gets the width of that row's widest button
// the "s" after a decade ("80s", "Best 90s 150") is set apart, so a lit sign can show it as a small lowercase s
const decS = t => esc(t).replace(/(\d)s\b/g, '$1<span class="ds">s</span>');
function fitChips(){
  ROOT.querySelectorAll('.chip:not(.nchip)[aria-pressed="false"]').forEach(c => { c.style.maxWidth = ''; c.style.fontSize = '';
    c.style.maxWidth = c.style.minWidth; let f = 13;   // a long name in a standard box: smaller type rather than a wider box
    while (c.scrollWidth > c.clientWidth + 1 && f > 8){ f -= .5; c.style.fontSize = f + "px"; } });
  ROOT.querySelectorAll('.chip:not(.nchip)[aria-pressed="true"]').forEach(c => { c.style.fontSize = ''; c.style.maxWidth = c.style.minWidth; let f = 12.5;
    while (c.scrollWidth > c.clientWidth + 1 && f > 8){ f -= .5; c.style.fontSize = f + 'px'; } });
}
let CHIP_RW = 0;   // re-fit the filter boxes when a phone turns sideways (or a window crosses the phone width)
addEventListener('resize', () => { const w = innerWidth; if (w === CHIP_RW) return; CHIP_RW = w; if ($('.filters')) equalizeChips(); });
const CHIP_W = () => parseFloat(getComputedStyle($('.filters')).getPropertyValue('--cw')) || 124;   // the standard filter box (set in the CSS: smaller on a laptop, a little bigger on a phone)
function equalizeChips(){
  // phones: two boxes fill the width exactly (half the row each, less the gap)
  const fl = $('.filters'); if (fl){ fl.style.removeProperty('--cw'); if (PHONE()){ const W = fl.querySelector('.chips').getBoundingClientRect().width; fl.style.setProperty('--cw', Math.floor((W - 8) / 2 - .5) + 'px'); } }
  ROOT.querySelectorAll('.chips[data-kind]').forEach(group => {
    const chips = [...group.querySelectorAll('.chip:not(.nchip)')];   // the neon ALL / EXPAND signs keep their own width
    chips.forEach(c => { c.style.minWidth = ''; c.style.maxWidth = ''; c.style.fontSize = ''; c.classList.add('measure'); });   // measured as plain buttons, so a lit sign doesn't widen its row
    const w = group.dataset.kind === 'best' ? CHIP_W() * 2 + 8 : CHIP_W();   // a Best Of box spans two standard columns (and the gap between)
    chips.forEach(c => c.classList.remove('measure'));
    chips.forEach(c => c.style.minWidth = w + 'px');
  });
  fitChips();
}
function fillGrid(){
  const q = fold(state.q.trim());
  // an album must match EVERY selected button, in the same row or different rows (Rock + 70s = rock albums from the 70s)
  const fmtOk = f => f==='CD' ? isCD : f==='Colored Vinyl' ? isColored : hasVinyl;
  const list = sorted(ALBUMS.filter(a => state.format.every(f => fmtOk(f)(a)) &&
    state.genre.every(g => a.genres.includes(g) || a.styles.includes(g)) && state.decade.every(d => a.decade === d) && (!state.style || a.styles.includes(state.style)) && (!state.person || personOf(state.person).ids.has(a.id)) && state.best.every(k => a.best.some(b => b.list === k)) && state.newyr.every(y => +a.year === +y) && state.cover.every(c => (a.ct || []).includes(c)) &&
    (!q || fold([a.artist,ARTIST_AKA[a.artistKey]||'',a.title,a.label,a.catno,a.year,decadeWords(a),...a.genres,...a.styles,...a.tracks.map(t=>t.t),...a.personnel].join(' ')).includes(q))));
  const filt = [state.format.join(' + '), state.genre.join(' + '), state.decade.join(' + '), state.style, state.person ? personOf(state.person).name : '', state.best.map(k => (BEST_LISTS.find(L => L.key === k) || {}).name).join(' + '), state.newyr.map(y => `New releases ${y}`).join(''), state.cover.map(c => COVER_ART.find(x => x[0] === c)[1]).join(' + ')].filter(Boolean).join(' · ');
  setShuffleList(list, [state.q.trim() ? `“${state.q.trim()}”` : '', filt].filter(Boolean).join(' · ') || 'All albums');
  $('#grid').innerHTML = list.length ? list.map(card).join('')
    : `<p class="empty">No records match${state.q?` “${esc(state.q)}”`:''}${filt?`${state.q?' in':''} ${esc(filt)}`:''}.</p>`;
  $('#bestFull').innerHTML = state.best.map(bestFullList).join('') + state.newyr.map(newReleaseList).join('');
}
// New Releases: the last 12 years, ending with this year (each January the newest year is added and the oldest drops off)
const NEW_YEARS = () => { const now = new Date().getFullYear(), out = []; for (let y = now - 11; y <= now; y++) out.push(y); return out; };
// the New Releases and Reissues lists for one year: albums by artists in the collection (from Discographies and the weekly check), yours highlighted
const NR_CACHE = {};
// artists whose albums here are mostly classical (composers, orchestras, Yo-Yo Ma ...): left out of New Releases and Reissues
const CLASS_ARTISTS = (() => { const c = {}, t = {}; ALBUMS.forEach(a => { t[a.artistKey] = (t[a.artistKey] || 0) + 1; c[a.artistKey] = (c[a.artistKey] || 0) + (a.genres.includes('Classical') ? 1 : 0); });
  return new Set(Object.keys(t).filter(k => c[k] && c[k] * 2 >= t[k])); })();
function yearLists(yr){
  yr = +yr; if (NR_CACHE[yr]) return NR_CACHE[yr];
  const k = t => fold(String(t)).replace(/&|\+/g, ' and ').replace(/[^a-z0-9]/g, '');
  const b = t => k(String(t).replace(PAREN, ''));
  const STOP = new Set(['family', 'friends', 'hisband', 'band', 'orchestra', 'hisorchestra', 'others']);
  const members = n => new Set([k(n), ...fold(n).split(/\s*(?:&|,|\+|\band\b|\bwith\b|\bfeat\.?|\bfeaturing\b)\s*/).map(x => k(x.replace(/^the\s+/, ''))).filter(x => x.length > 2 && !STOP.has(x))]);
  const spOf = (key, title) => { const s = ((ARTISTS[key] || {}).studio_albums || []).find(x => x.sp && (k(x.title) === k(title) || b(x.title) === b(title))); return s ? s.sp : ''; };
  // sources: [{key, artist, title, sp, orig}]; owned: [album, orig]
  function build(sources, owned){
    const rows = [], seen = {};
    sources.forEach(x => {
      const id = x.key + '|' + k(x.title), id2 = x.key + '|' + b(x.title), r = seen[id] || seen[id2];
      if (r){ if (!r.sp && x.sp) r.sp = x.sp; if (!r.orig && x.orig) r.orig = x.orig; return; }
      const row = { key:x.key, artist:x.artist, title:x.title, year:x.year || 0, sp:x.sp || '', orig:x.orig || 0, own:null }; rows.push(row); seen[id] = seen[id2] = row;
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
  const EDITION = /anniversary|deluxe|remaster|expanded|\bedition\b|restored|\bremix(es|ed)?\b|reissue/i;   // reissued editions, not new albums
  const CONCERT = /^\d{4}[-‐‑]\d{2}[-‐‑]\d{2}|\b\d{1,2}[-‐./]\d{1,2}[-‐./]\d{2,4}\b|\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.? \d{1,2},? \d{4}|radio (session|concert)|on the air|\bvol\.? ?\d/i;   // one-off dated shows
  const archival = t => ARCH.test(t) || EDITION.test(t) || ((String(t).match(/\b(19\d\d|20\d\d)\b/g) || []).some(y => +y <= yr - 10) && LIVEISH.test(t));
  const keep = (key, title) => !CLASS_ARTISTS.has(key) && !CLASSICAL.test(title) && !archival(title);
  // New Releases: studio and live albums first released this year
  const fresh = build([
    ...Object.entries(ARTISTS).flatMap(([key, art]) => (art.studio_albums || []).filter(s => +s.year === yr && !s.archival && !/^(EP|Compilation|Remixes)$/.test(s.type || '') && keep(key, s.title)).map(s => ({ key, artist:art.name || key, title:s.title, year:+s.year, sp:s.sp || spOther(art.name || key, s.title) }))),
    // live albums count only when they're out on vinyl (MusicBrainz lists thousands of digital-only concert recordings)
    ...Object.entries(NEWREL.albums || {}).flatMap(([key, list]) => list.filter(n => +n.year === yr && !n.archival && keep(key, n.title) && (!n.live || (n.vinyl && !CONCERT.test(n.title)))).map(n => ({ key, artist:nameOf(key), title:n.title, year:+n.year, sp:n.sp || spOther(nameOf(key), n.title) })))
  ], ALBUMS.filter(a => +a.year === yr && !CLASS_ARTISTS.has(a.artistKey) && !archival(a.title)).map(a => [a, 0]));   // your own albums stay unless the artist is classical (Symphony Of Lungs stays)
  // Reissues: vinyl (incl. colored vinyl) reissues this year of albums first released in an earlier year
  const reYear = a => [a.reissue, ...(a.versions || []).map(v => v.reissue)].map(x => parseInt(String(x || '').slice(0, 4), 10)).filter(Boolean);
  const reissues = build(
    Object.entries(NEWREL.reissues || {}).flatMap(([key, list]) => list.filter(n => +n.year === yr && +n.orig <= yr - 3 && !n.archival && keep(key, n.title)).map(n => ({ key, artist:nameOf(key), title:n.title, year:+n.orig, sp:spOf(key, n.title) || spOther(nameOf(key), n.title), orig:+n.orig }))),
    ALBUMS.filter(a => hasVinyl(a) && +a.year && +a.year <= yr - 3 && reYear(a).includes(yr) && !CLASS_ARTISTS.has(a.artistKey) && !archival(a.title)).map(a => [a, +a.year])
  ).filter(r => r.orig && r.orig <= yr - 3);   // a reissue is at least 3 years after the original
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
  return `<button class="mini-play${r.own ? ' mine' : ''}" type="button" ${r.own ? `data-album="${esc(r.own.id)}" ` : ''}data-uri="${esc(uri)}" data-label="${esc(r.title)}" data-artist="${esc(r.artist || '')}" data-year="${esc(r.year || '')}" aria-label="Play ${esc(r.title)}" title="Play ${esc(r.title)}"><svg viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0v12l10-6z" fill="currentColor"/></svg></button>`;
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
function discography(a, onArtistPage){
  const gk = groupKey(a.artistKey), art = ARTISTS[gk]; if (!art || !art.studio_albums || !art.studio_albums.length) return '';
  const mine = ALBUMS.filter(x => groupKey(x.artistKey) === gk);
  const dk = t => titleKey(String(t).replace(/\s*&\s*/g, ' and ').replace(/\s*\+\s*/g, ' and '));   // "Amyl & The Sniffers" = "Amyl and the Sniffers"
  const bare = t => dk(String(t).replace(PAREN, ''));   // "The Beatles (White Album)" ~ "The Beatles"
  const rows = art.studio_albums.map(s => ({ year:s.year, title:s.title, extra:s.type || '', id:null, cur:false, sp:s.sp || spOther(art.name || a.artist, s.title), isNew:!!s.isNew }));   // type: e.g. a live album added by hand
  const extras = [];
  mine.forEach(x => {
    const want = DISCO_SAME[x.id] || x.title;
    let row = [...rows, ...extras].find(r => dk(r.title) === dk(want));   // a second copy of an album joins the first
    if (!row) { const c = rows.filter(r => bare(r.title) === bare(want)); row = c.length === 1 ? c[0] : c.find(r => +r.year === +x.year) || null; }   // four "Peter Gabriel"s: the one from the same year
    if (!row) extras.push(row = { year:x.year || 0, title:x.title, extra:/studio album|debut album/i.test(x.type || '') ? '' : x.type || '', id:null, cur:false });   // a studio album needs no label
    row.id = x.id; if (x === a && !onArtistPage) row.cur = true; if (row.isNew) row.title = x.title;   // an album found by the weekly check shows with your copy's name
  });
  // live albums, compilations, EPs etc. in the collection join the list at their original release year
  const list = [...rows, ...extras].sort((x,y) => x.year - y.year || (x.extra ? 1 : 0) - (y.extra ? 1 : 0)).map(s => {
    const name = !s.cur && s.id ? `<a href="#${s.id}">${esc(s.title)}</a>` : esc(s.title);
    // play button: an album in the collection plays its own songs; any other album plays from Spotify
    const own = s.id && ALBUMS.find(x => x.id === s.id), uri = own ? playUri(own) : (s.sp ? `spotify:album:${s.sp}` : '');
    const btn = uri ? `<button class="mini-play${own ? ' mine' : ''}" type="button" ${own ? `data-album="${own.id}" ` : ''}data-uri="${esc(uri)}" data-label="${esc(s.title)}" data-artist="${esc(art.name || a.artist || '')}" data-year="${esc(s.year || '')}" aria-label="Play ${esc(s.title)}" title="Play ${esc(s.title)}"><svg viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0v12l10-6z" fill="currentColor"/></svg></button>` : '<span></span>';
    return `<li class="${s.cur?'current':s.id?'owned':''}"><span class="yr">${s.year||''}</span><span>${name}${s.extra?` <span class="xt">${esc(s.extra)}</span>`:''}</span>${btn}</li>`; }).join('');
  return `<div class="disco"><h3>Discography</h3><ol>${list}</ol></div>`;
}
function wikiSection(a){
  const art = ARTISTS[a.artistKey] || {};
  // the artist side shows only when the artist has a Wikipedia article; otherwise it stays blank
  const artistWiki = /^https?:\/\/[a-z]+\.wikipedia\.org\/wiki\//.test(art.wiki_url || '') && art.summary;
  // the album side shows only when the album has its own Wikipedia article; otherwise it stays blank
  const hasWiki = /^https?:\/\/[a-z]+\.wikipedia\.org\/wiki\//.test(a.wiki || '') && a.about;
  const albumSide = hasWiki ? `<div class="label">The album</div><h3>${esc(a.title)}</h3><p>${esc(a.about)}</p><a class="more" href="${esc(a.wiki)}" target="_blank" rel="noopener">Read more on Wikipedia ↗</a>` : '';
  if (!artistWiki && !hasWiki) return '';   // nothing from Wikipedia: no section at all
  return `<section class="wiki">
    <div>${artistWiki ? `<div class="label">The artist</div><h3>${esc(art.name || a.artist)}</h3><p>${esc(art.summary)}</p><a class="more" href="${esc(art.wiki_url)}" target="_blank" rel="noopener">Read more on Wikipedia ↗</a>` : ''}</div>
    <div>${albumSide}</div>
  </section>`;
}
// Play Album: same look as Shuffle Play, sits under the cover, plays the album in order from track 1
function playBtn(a){
  const uri = playUri(a); if (!uri) return '';
  const n = albumQueue(a).length || a.tracks.length;
  return `<div class="playalb-row"><span class="play-f"><button class="neon blue play" type="button" data-album="${a.id}" data-uri="${esc(uri)}" data-label="${esc(a.title)}" aria-label="Play ${esc(a.title)}"><span class="lit"><svg class="spl" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.2" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M6.8 9.4c3.6-1 7.6-.6 10.6 1.1M7.4 12.4c3-.8 6.2-.4 8.7 1M8 15.2c2.4-.6 4.8-.3 6.8.8" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg><span class="w" data-t="PLAY">PLAY</span></span></button><span class="label shuf-count">${num(n)} song${n===1?'':'s'}</span><span class="ph-note">Plays in the Spotify app</span></span></div>`;
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
    <dt>Media</dt><dd>${mediaFull(a)}</dd>
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
    <a class="back neonhome" href="#shelf" aria-label="Back to The Collection"><span class="lit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12H4M10 5 3 12l7 7"/></svg><span class="w" data-t="THE COLLECTION">THE COLLECTION</span></span></a>
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
          <a class="btn" href="${a.spAlbum ? `https://open.spotify.com/album/${esc(a.spAlbum)}` : `https://open.spotify.com/search/${term}`}" target="_blank" rel="noopener">${ICON.spotify}<span class="t">Spotify</span></a>
          <a class="btn" href="https://music.youtube.com/search?q=${term}" target="_blank" rel="noopener">${ICON.play}<span class="t">YouTube Music</span></a>
        </div>
        <div class="info">
        <div class="facts-col"><dl class="facts">
          ${a.versions ? versionFacts(a, total) : `
          ${a.year?`<dt>Released</dt><dd>${fmtRelease(a.released || String(a.year))}${a.edition==='Reissue'&&a.reissue?`<span style="display:block;color:var(--muted)">This copy: ${a.reissue} Reissue</span>`:''}</dd>`:''}
          <dt>Media</dt><dd>${mediaFull(a)}</dd>
          ${a.label?`<dt>Label</dt><dd>${esc(a.label)}</dd>`:''}
          ${a.catno?`<dt>Catalog #</dt><dd class="mono">${esc(a.catno)}</dd>`:''}
          ${a.acquired?`<dt>Acquired</dt><dd>${a.acquired.slice(0,4)}</dd>`:''}
          ${total?`<dt>Running time</dt><dd class="mono">${mmss(total)}</dd>`:''}
          ${a.discogs?`<dt>Discogs</dt><dd><a href="${esc(a.discogs)}" target="_blank" rel="noopener">${hasVinyl(a) ? 'View this pressing' : 'View this CD release'} ↗</a></dd>`:''}`}
        </dl>${albumLive(a)}</div>
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
              ${g.tracks.map(t=>`<li data-sp="${esc(t.sp||'')}"><span class="p">${esc(t.p)}</span>${t.sp ? `<span class="tt"><button class="song" type="button" data-album="${a.id}" data-uri="spotify:track:${esc(t.sp)}" data-label="${esc(t.t)}" aria-label="Play ${esc(t.t)} on Spotify"><span class="ic">▶</span><span>${esc(t.t)}</span></button>${songArtists(a, t)}</span>` : `<span>${esc(t.t)}${songArtists(a, t)}</span>`}<span class="d"><span class="len">${esc(t.d)}</span><span class="rec-spin${hasVinyl(a)?'':' cd'}" aria-hidden="true"></span></span></li>`).join('')}
            </ol></div>`; }).join('')}
        </div>
        <div class="pers">${a.personnel.length?`<h3>Personnel</h3><ul class="credits">${a.personnel.map(p=>{ const [n,...r]=p.split(' – '); return `<li>${personLinks(n)}${r.length?` <span class="role">— ${esc(r.join(' – '))}</span>`:''}</li>`; }).join('')}</ul>`:''}</div>
      </div>
    </article>
    ${others.length?`<section class="more-by"><h3>More albums by <a href="#artist-${a.aslug}">${esc(a.artist)}</a></h3><div class="grid">${others.map(card).join('')}</div></section>`:''}
    ${wikiSection(a)}
    <nav class="pager" aria-label="Browse records">
      <a href="#${prev.id}"><div class="label">Previous</div><span>${esc(prev.artist)} — ${esc(prev.title)}</span>${pagerCover(prev)}</a>
      <a href="#${next.id}" class="nx"><div class="label">Next</div><span>${esc(next.artist)} — ${esc(next.title)}</span>${pagerCover(next)}</a>
    </nav>`;
}

// artist page: the same Wikipedia write-up as the album pages' "The artist" side, at the bottom left (nothing when the artist has no article)
function artistWikiSection(list){
  const ok = art => /^https?:\/\/[a-z]+\.wikipedia\.org\/wiki\//.test(art.wiki_url || '') && art.summary;
  const a = list.find(x => x.artist === artistName[x.aslug] && ok(ARTISTS[x.artistKey] || {})) || list.find(x => ok(ARTISTS[x.artistKey] || {}));
  if (!a) return '';
  const art = ARTISTS[a.artistKey];
  return `<section class="wiki"><div><div class="label">The artist</div><h3>${esc(art.name || a.artist)}</h3><p>${esc(art.summary)}</p><a class="more" href="${esc(art.wiki_url)}" target="_blank" rel="noopener">Read more on Wikipedia ↗</a></div><div></div></section>`;
}
function renderArtist(s){
  const list = sorted(ALBUMS.filter(a=>a.aslug===s)).sort((x,y)=>(x.year||0)-(y.year||0));
  if (!list.length) return renderShelf();
  setShuffleList(list, artistName[s]);
  $('#view').innerHTML = `<a class="back neonhome" href="#shelf" aria-label="Back to The Collection"><span class="lit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12H4M10 5 3 12l7 7"/></svg><span class="w" data-t="THE COLLECTION">THE COLLECTION</span></span></a>
    <div class="artist-head artist-top"><div><div class="label">${list.length} record${list.length>1?'s':''} in the collection</div><h2>${esc(artistName[s])}</h2></div>
      ${(() => { const n = songsOf(list).length; return n ? `<span class="shuf-f"><span class="label shuf-count">${num(list.length)} album${list.length===1?'':'s'} · ${num(n)} song${n===1?'':'s'}</span><button class="neon blue" id="artistShuffle" type="button" aria-label="Shuffle play these albums"><span class="lit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg><span class="w" data-t="SHUFFLE">SHUFFLE</span></span></button></span>` : ''; })()}</div>
    ${((d, l) => d || l ? `<div class="artist-disco${d && l ? ' two' : ''}">${d}${l}</div>` : '')(discography(list[0], true), albumLive(list[0]))}
    <div class="grid">${list.map(card).join('')}</div>
    ${artistWikiSection(list)}`;
  const as = $('#artistShuffle'); if (as) as.addEventListener('click', shufflePlay);
}


// ---- Live!: concerts seen, each linked to the artist's page; below them every album by those artists ----
const CONCERTS = (readJSON('bestof').concerts || []);   // concerts seen: {artist, date 'YYYY-MM-DD', venue, city, tour (optional)}; kept in bestof.json under "concerts"
const liveState = { sort:'date' };   // lands sorted by date, newest first
const showDate = d => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
function concertSlug(name){ const k = titleKey(name), sl = slug(name); const a = ALBUMS.find(x => x.artist === name) || ALBUMS.find(x => titleKey(x.artist) === k) || ALBUMS.find(x => x.aslug === sl); return a ? a.aslug : sl; }
const cSlug = c => concertSlug(c.link || c.artist);
// album page: this artist's concerts you've been to, oldest first, under the LIVE sign;
// for shows they headlined, the opening acts in small type under the tour name
function albumLive(a){
  const mine = CONCERTS.filter(c => cSlug(c) === a.aslug).sort((x, y) => x.date.localeCompare(y.date));
  if (!mine.length) return '';
  const isOp = c => /^Opening for /i.test(c.tour || '');
  const openers = c => CONCERTS.filter(o => o !== c && isOp(o) && o.date === c.date && o.venue === c.venue).map(o => o.artist);
  return `<div class="alb-live"><a class="neon" href="#live" aria-label="Live! Concerts seen"><span class="w" data-t="LIVE">LIVE</span></a>
    <ol class="alb-shows">${mine.map(c => { const ops = isOp(c) ? [] : openers(c);
      return `<li><span class="d">${fmtDate(c.date)}</span><span class="v">${esc(c.venue)}<small>${esc(c.city || '')}</small>${c.tour ? `<small class="t">${esc(c.tour)}</small>` : ''}${ops.length ? `<small class="o">With ${ops.map(esc).join(', ')}</small>` : ''}</span></li>`; }).join('')}</ol></div>`;
}   // "link": the artist's name in the collection when the ticket shows it differently (e.g. OMD)
function renderLive(){
  const by = { artist:(x,y)=> sortName(x.artist).localeCompare(sortName(y.artist)) || x.date.localeCompare(y.date),
               date:(x,y)=> y.date.localeCompare(x.date),
               venue:(x,y)=> x.venue.localeCompare(y.venue) || y.date.localeCompare(x.date) };
  const rows = [...CONCERTS].sort(by[liveState.sort]);
  const slugs = new Set(CONCERTS.map(cSlug));
  const albums = ALBUMS.filter(a => slugs.has(a.aslug)).sort((x,y) => sortName(x.artist).localeCompare(sortName(y.artist)) || (x.year||0)-(y.year||0));
  setShuffleList(albums, 'Live!');
  $('#view').innerHTML = `
    <!-- each artist counts once, however many times they were seen -->
    <div class="artist-head live-head live-hero"><video class="live-bg" autoplay muted loop playsinline preload="auto" poster="${BASE}images/live_poster.jpg" aria-hidden="true"><source src="${BASE}images/live_loop_sm.mp4" type="video/mp4" media="(max-width:620px)"><source src="${BASE}images/live_loop.mp4" type="video/mp4"></video><a class="back neonhome" href="#shelf" aria-label="Back to The Collection"><span class="lit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12H4M10 5 3 12l7 7"/></svg><span class="w" data-t="THE COLLECTION">THE COLLECTION</span></span></a><div class="live-title"><div class="label">${(() => { const acts = new Set(CONCERTS.map(c => titleKey(c.link || c.artist))).size;
      return `${num(acts)} artist${acts===1?'':'s'} seen in concert`; })()}</div><h2><button class="neon" type="button" aria-label="Live!"><span class="w" data-t="LIVE">LIVE</span></button></h2></div>
      ${(() => { const n = songsOf(albums).length; return `<span class="shuf-f"><span class="label shuf-count">${num(albums.length)} albums · ${num(n)} songs</span><button class="neon blue" id="liveShuffle" type="button"${n?'':' disabled'} aria-label="Shuffle play these albums"><span class="lit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg><span class="w" data-t="SHUFFLE">SHUFFLE</span></span></button></span>`; })()}</div>
    <div class="live-sort"><span class="label">Sort by</span>${['date','artist','venue'].map(k=>`<button type="button" data-k="${k}" aria-pressed="${liveState.sort===k}">${k[0].toUpperCase()+k.slice(1)}</button>`).join('')}</div>
    ${CONCERTS.length ? '' : '<p class="sub">No concerts added yet.</p>'}
    <ol class="shows-wrap shows" id="showsWrap"></ol>
    <section class="live-albums"><h3>Albums by artists seen live <span class="label" style="margin-left:10px">${albums.length} records</span></h3><div class="grid">${albums.map(card).join('')}</div></section>`;
  // the list runs down 1 or 2 side-by-side sections (each with its own Artist / Date / Venue heading), as the window allows
  // headliners in the larger bold type, opening acts in the smaller plain type; an orange underline marks anyone in The Collection
  const items = rows.map(c=>{ const sl = cSlug(c), has = artistName[sl], op = /^Opening for /.test(c.tour || ''); return `<li class="${op ? 'op' : 'hl'}"><span class="ar">${has ? `<a class="nm" href="#artist-${esc(sl)}">${esc(c.artist)}</a>` : `<span class="nm">${esc(c.artist)}</span>`}${c.tour ? `<small>${esc(c.tour)}</small>` : ''}</span><span class="dt">${showDate(c.date)}</span><span class="vn">${esc(c.venue)}<small>${esc(c.city || '')}</small></span></li>`; });
  const wrap = $('#showsWrap'); let cols = 0;
  // one grid, filled row by row (left section's row, then right section's), so the two rows side by side always share a height
  const lay = () => { const w = wrap.clientWidth, n = w >= 840 ? 2 : 1;   // at most 2 sections, so names and venues rarely wrap
    if (n === cols) return; cols = n;
    const per = Math.ceil(items.length / n) || 0, head = '<li class="hd-row"><span class="hd">Artist</span><span class="hd">Date</span><span class="hd">Venue</span></li>';
    const cells = [];
    for (let r = 0; r < per; r++) for (let i = 0; i < n; i++) cells.push(items[i * per + r] || '<li class="empty"></li>');
    wrap.style.setProperty('--cols', n);
    wrap.innerHTML = items.length ? head.repeat(n) + cells.join('') : ''; };
  lay(); if (window.ResizeObserver) { const ro = new ResizeObserver(() => { if (!wrap.isConnected) return ro.disconnect(); lay(); }); ro.observe(wrap); }
  const ls = $('#liveShuffle'); if (ls) ls.addEventListener('click', shufflePlay);
  $('#view').querySelectorAll('.live-sort button').forEach(b => b.addEventListener('click', () => { liveState.sort = b.dataset.k; renderLive(); }));
}
// ---- Spotify player (official embed, controlled through Spotify's iFrame API) ----
// song / album name and cover art from Spotify's public oEmbed (for albums not in the collection, which have no track list here)
const SP_INFO = new Map();
const spInfo = (kind, id) => {
  const k = kind + ':' + id;
  if (!SP_INFO.has(k)) SP_INFO.set(k, fetch('https://open.spotify.com/oembed?url=' + encodeURIComponent(`https://open.spotify.com/${kind}/${id}`))
    .then(r => r.ok ? r.json() : null).catch(() => null));
  return SP_INFO.get(k);
};
const Player = { api:null, ctrl:null, loading:false, failed:false, pending:null,
  queue:[], idx:0, albumId:null, current:null, lastPos:0, lastDur:0, advanced:false };
function showPlayer(label, sub){ $('#player').hidden=false; STAGE().classList.add('has-player'); $('#nowTitle').textContent=label;
  // the album name links to its page, so you can look at the record while it plays
  const cur = Player.queue[Player.idx], al = ALBUMS.find(x => x.id === ((Player.queue.length && cur && cur.albumId) || Player.albumId));
  if (al) $('#nowSub').innerHTML = `${esc(al.artist)} · <a href="#${al.id}" title="Go to this album">${esc(al.title)}</a>`; else $('#nowSub').textContent = sub || '';
  $('#nowLabel').textContent = Player.shuffle ? `Shuffle · ${Player.idx+1} of ${num(Player.queue.length)}` : 'Now playing';
  const many = Player.queue.length > 1 || albumModeList().length > 1; $('#prevSong').hidden = !many; $('#nextSong').hidden = !many; }
// Whole-album play (Spotify moves through the album itself): the album's songs, so ‹ › can still step to the
// previous / next song. Albums in the collection use their track list; others the song list from spotify_other_lookup.py.
const SPT = () => { try { return (readJSON('bestof') || {})._spt || {}; } catch (e) { return {}; } };
function extQueue(ext){
  const id = (ext.uri || '').split(':').pop();
  return (SPT()[id] || []).map(([sid, name, sec]) => ({ uri:`spotify:track:${sid}`, label:name, sub:ext.artist ? `${ext.artist} · ${ext.album}` : ext.album, albumId:null, dur:sec || 0 }));
}
function albumModeList(){
  if (Player.queue.length) return [];
  try {
    const al = ALBUMS.find(x => x.id === Player.albumId);
    return al ? albumQueue(al) : Player.ext ? extQueue(Player.ext) : [];
  } catch (e) { return []; }   // called before the player code has loaded (restoring a session): no buttons yet
}
// ‹ › during whole-album play: carry on song by song from the song before / after the one Spotify is on
function stepAlbum(dir){
  const list = albumModeList(); if (list.length < 2) return;
  const cur = (Player.nowURI || '').split(':').pop(), i = list.findIndex(x => x.uri.endsWith(':' + cur));
  const to = i < 0 ? (dir > 0 ? 1 : 0) : Math.min(list.length - 1, Math.max(0, i + dir));
  const al = ALBUMS.find(x => x.id === Player.albumId);
  Player.listName = al ? `${al.artist} · ${al.title}` : Player.ext ? `${Player.ext.artist} · ${Player.ext.album}` : '';
  startQueue(list, to, Player.albumId, false, true);
}
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
  KeepAwake.start(); if (typeof Meter !== 'undefined' && Meter.skip) Meter.skip();   // new song: the needle drops to 0 and rests a second
  Player.current = uri; Player.nowURI = ''; Player.lastPos = 0; Player.lastDur = 0; Player.advanced = false;
  showPlayer(label, sub); refreshHighlight(); setLive(false, false);
  if (Player.failed) return playerFallback(uri);
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
function startQueue(queue, idx, albumId, shuffle, keepExt){
  if (!keepExt) Player.ext = null;
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
    return { uri:`spotify:track:${sp}`, label:t ? t.t : 'Song', sub:a ? `${songArtist(a, t)} · ${a.title}` : '', albumId:id }; });
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
const songsOf = list => list.flatMap(a => a.tracks.filter(t => t.sp).map(t => ({ uri:`spotify:track:${t.sp}`, label:t.t, sub:`${songArtist(a, t)} · ${a.title}`, albumId:a.id, dur:secs(t.d) || 0 })));
let SHUFFLE_LABEL = '';
function setShuffleList(list, label){
  SHUFFLE_LIST = list; SHUFFLE_LABEL = label || '';
  const b = $('#shuffle'); if (!b) return;
  if ($('#stats')) setStats(PHONE() ? list : ALBUMS);
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
    if (Player.nowURI && Meter.skip) Meter.skip();   // Spotify moved to the next song of the album
    const al = ALBUMS.find(x => x.id === Player.albumId), id = d.playingURI.split(':').pop();
    // safety net: if the first song Spotify plays isn't one of this album's songs, the Spotify album link is wrong;
    // play the album's own songs one by one instead
    const ids = al ? al.tracks.map(x => x.sp).filter(Boolean) : [];
    if (!Player.nowURI && (Player.current || '').startsWith('spotify:album:') && ids.length >= 3 && !ids.includes(id)){
      const q = albumQueue(al); if (q.length){ Player.listName = `${al.artist} · ${al.title}`; return startQueue(q, 0, al.id); }
    }
    Player.nowURI = d.playingURI;
    const t = al && al.tracks.find(x => x.sp === id);
    if (t) $('#nowTitle').textContent = t.t;
    else { const uriNow = d.playingURI; spInfo('track', id).then(o => { if (o && o.title && Player.nowURI === uriNow) $('#nowTitle').textContent = o.title; }); }
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
const albumQueue = a => a ? a.tracks.filter(t => t.sp).map(t => ({ uri:`spotify:track:${t.sp}`, label:t.t, sub:`${songArtist(a, t)} · ${a.title}`, albumId:a.id, dur:secs(t.d) || 0 })) : [];
$('#shuffle').addEventListener('click', shufflePlay);
// neon LIVE sign: the letters flicker off and on, then (on the home page) the Live! page opens
ROOT.addEventListener('click', e => {
  const n = e.target.closest && e.target.closest('.neon, .neonhome'); if (!n) return;
  e.preventDefault(); n.classList.remove('flick'); void n.offsetWidth; n.classList.add('flick');
  const to = n.getAttribute('href'); if (to) setTimeout(() => { location.hash = to; }, 560);
});
offerResume();
$('#nextSong').addEventListener('click', () => Player.queue.length ? nextInQueue() : stepAlbum(1));

// ---- bigger player ----
const BigPlayer = (() => {
  const P = $('#player'), back = $('#bigBack');
  const sync = () => {
    if (!P.classList.contains('big')) return;
    const q = Player.queue[Player.idx], al = ALBUMS.find(x => x.id === (q && q.albumId || Player.albumId));
    $('#bigLabel').textContent = $('#nowLabel').textContent;
    const t = $('#nowTitle').textContent;
    $('#bigTitle').textContent = t;
    $('#bigTitle').parentNode.style.fontSize = t.length > 60 ? '28px' : t.length > 34 ? '32px' : '';   // long titles a bit smaller, so they take fewer lines
    const sub = $('#nowSub');
    $('#bigArtist').textContent = (sub.textContent || '').split(' · ')[0] || (al ? al.artist : '');
    const link = sub.querySelector('a');
    const ext = !al ? Player.ext : null;   // an album not in the collection
    $('#bigAlbum').innerHTML = link ? link.outerHTML : esc(al ? al.title : ext ? ext.album : '');
    $('#bigYear').textContent = al && al.year ? '· ' + al.year : ext && ext.year ? '· ' + ext.year : '';
    // covers live with the site files (BASE), not on the Squarespace page; show the small one at once, swap in the large one when it arrives
    const small = al && al.cover ? BASE + al.cover : '', src = al ? (al.coverHi || small) : ext ? ext.cover : '';
    const img = $('#bigCover');
    img.style.visibility = src ? '' : 'hidden';   // no cover known (yet): leave the space empty rather than show the last album's
    if (src && img.dataset.src !== src){ img.dataset.src = src; img.src = small || src; if (al && al.coverHi){ const hi = new Image(); hi.onload = () => { if (img.dataset.src === src) img.src = al.coverHi; }; hi.src = al.coverHi; } }
  };
  // the Lyrics button sits right after the song title in the big player, and goes back under its spot in the small one
  const lyr = $('#lyricsBtn'), lyrHome = lyr.parentNode, bigBtn = $('#bigBtn');
  const open = () => { P.classList.add('big'); back.hidden = false; $('#bigTitle').parentNode.appendChild(lyr); sync(); };
  const close = () => { P.classList.remove('big'); back.hidden = true; lyrHome.insertBefore(lyr, bigBtn); };
  $('#bigBtn').addEventListener('click', open);
  $('#bigClose').addEventListener('click', close);
  back.addEventListener('click', close);                       // a click anywhere off the big player shrinks it
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && P.classList.contains('big')) close(); });
  new MutationObserver(sync).observe($('#nowTitle'), { childList:true, characterData:true, subtree:true });
  new MutationObserver(sync).observe($('#nowSub'), { childList:true, characterData:true, subtree:true });
  return { close, sync };
})();
// the neon × buttons flicker when clicked
ROOT.addEventListener('click', e => { const b = e.target.closest('.nx'); if (!b) return; b.classList.remove('flick'); void b.offsetWidth; b.classList.add('flick'); }, true);
// back / next: a click flickers the arrow
ROOT.addEventListener('click', e => { const b = e.target.closest('.skip'); if (!b) return; b.classList.remove('flick'); void b.offsetWidth; b.classList.add('flick'); });
// Lyrics: open the Genius lyrics page for the song playing now (Musixmatch answered every link with 403 Forbidden) (worked out at the moment of the click, so it follows every song change)
$('#lyricsBtn').addEventListener('click', e => {
  const q = Player.queue[Player.idx], al = ALBUMS.find(x => x.id === (q && q.albumId || Player.albumId));
  const title = ($('#nowTitle').textContent || '').replace(/\s+-\s+(\d{4}\s+)?(remaster(ed)?|mono|stereo|live|single|edit|version).*$/i, '').replace(/\s*[\(\[][^\)\]]*(remaster|version|edit|mono|stereo|feat)[^\)\]]*[\)\]]/gi, '').trim();
  const artist = (q && q.sub ? q.sub.split(' · ')[0] : '') || (al ? al.artist : '') || ($('#nowSub').textContent || '').split(' · ')[0];
  // straight to the song's Genius page: DuckDuckGo's "I'm feeling ducky" opens the top Genius result for the song
  e.currentTarget.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(`!ducky site:genius.com ${artist} ${title} lyrics`.replace(/\s+/g, ' ').trim());
});
$('#prevSong').addEventListener('click', () => { if (Player.queue.length) playAt(Math.max(0, Player.idx - 1)); else stepAlbum(-1); });
// ---- quick-scroll bar (album cover pages with more than 6 rows) ----
const FastScroll = (() => {
  const el = document.createElement('div'); el.className = 'fastscroll'; el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<div class="th"></div><div class="bub"></div>';
  (STAGE() || ROOT).appendChild(el);
  const th = el.querySelector('.th'), bub = el.querySelector('.bub');
  let hideT = 0, dragging = false, grabOff = 0;
  const grid = () => { const g = $('#grid'); return g && g.offsetParent !== null && g.children.length ? g : null; };
  const cols = g => getComputedStyle(g).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
  const enough = g => g && g.querySelector('.rec') && Math.ceil(g.querySelectorAll('.rec').length / cols(g)) > 6;
  // the stretch of page the bar covers: from the top of the albums to where the last row is in view
  const range = g => { const r = g.getBoundingClientRect(), top = r.top + scrollY; return { top, end:Math.max(top + 1, top + r.height - innerHeight + 160) }; };
  const trackH = () => el.clientHeight - th.offsetHeight;
  function place(){
    const g = grid(); if (!enough(g)){ el.classList.remove('on'); return null; }
    const R = range(g), f = Math.min(1, Math.max(0, (scrollY - R.top) / (R.end - R.top)));
    th.style.top = (f * trackH()) + 'px'; bub.style.top = (f * trackH() + th.offsetHeight / 2) + 'px';
    // which album is at the top of the screen now
    const recs = g.querySelectorAll('.rec'), c = cols(g), rowH = recs.length > c ? recs[c].getBoundingClientRect().top - recs[0].getBoundingClientRect().top : 300;
    const i = Math.min(recs.length - 1, Math.max(0, Math.floor((140 - g.getBoundingClientRect().top) / rowH) * c));
    const m = recs[i] && recs[i].querySelector('.meta');
    if (m) bub.innerHTML = `${esc(m.querySelector('.a').textContent)} · ${esc(m.querySelector('.t').textContent)}<small>${num(i + 1)} of ${num(recs.length)}</small>`;
    return g;
  }
  function show(){
    const pl = $('#player'); el.style.setProperty('--fs-bottom', (pl && !pl.hidden ? pl.offsetHeight + 16 : 24) + 'px');
    if (!place()) return;
    el.classList.add('on'); clearTimeout(hideT);
    hideT = setTimeout(() => { if (!dragging && !el.matches(':hover')) el.classList.remove('on'); }, 1600);
  }
  addEventListener('scroll', () => { if (scrollY > 40) show(); else if (!dragging) el.classList.remove('on'); }, { passive:true });
  addEventListener('resize', () => { if (el.classList.contains('on')) place(); });
  el.addEventListener('mouseleave', () => { if (!dragging) show(); });
  const go = clientY => {
    const g = grid(); if (!g) return;
    const box = el.getBoundingClientRect(), f = Math.min(1, Math.max(0, (clientY - box.top - grabOff) / trackH())), R = range(g);
    scrollTo(0, R.top + f * (R.end - R.top));
  };
  th.addEventListener('pointerdown', e => { e.preventDefault(); dragging = true; el.classList.add('drag'); grabOff = e.clientY - th.getBoundingClientRect().top; th.setPointerCapture(e.pointerId); });
  th.addEventListener('pointermove', e => { if (dragging) go(e.clientY); });
  const end = () => { if (!dragging) return; dragging = false; el.classList.remove('drag'); show(); };
  th.addEventListener('pointerup', end); th.addEventListener('pointercancel', end);
  // clicking the bar (not the handle) jumps there
  el.addEventListener('pointerdown', e => { if (e.target === el){ grabOff = th.offsetHeight / 2; go(e.clientY); } });
  return { hide(){ el.classList.remove('on'); } };
})();
// ---- the meter's needle: swings to a beat while music plays, settles to the left when paused ----
// (Spotify doesn't let a page hear its audio, so the movement is a lifelike imitation, not a measurement)
const Meter = (() => {
  const el = $('.player .meter'); if (!el) return {};
  const needle = el.querySelector('.m-needle');
  const CX = 100, CY = -74.19, SPAN = 25;   // pivot above the face (the centre of the curved scale); the needle hangs down and swings across it
  const at = (deg, r) => [CX + r * Math.sin(deg * Math.PI / 180), CY + r * Math.cos(deg * Math.PI / 180)];
  let pos = 0, vel = 0, target = 0, nextBeat = 0, beatGap = 500, last = 0, resting = false, restFrom = 0;
  const playing = () => { const w = STAGE(); return w && w.classList.contains('sp-live') && !w.classList.contains('sp-paused') && !$('#player').hidden; };
  function frame(t){
    const dt = Math.min(50, t - (last || t)); last = t;
    // after a song change: fall to 0, stay there 1 second, then pick up the beat again
    if (resting){
      if (!restFrom && pos < .02 && Math.abs(vel) < .0005) restFrom = t;
      if (restFrom && t - restFrom >= 1000){ resting = false; restFrom = 0; nextBeat = t; }
    }
    if (resting) target += (0 - target) * dt / 120;
    else if (playing()){
      if (t >= nextBeat){
        target = .55 + Math.random() * .4;                         // a beat kicks the needle up
        beatGap = Math.max(380, Math.min(640, beatGap + (Math.random() - .5) * 60));
        nextBeat = t + beatGap * (Math.random() < .15 ? .5 : 1);   // now and then an off-beat
      } else target += ((.38 + Math.random() * .08) - target) * dt / 260;   // falls back between beats
    } else target += (0 - target) * dt / 300;
    // a real meter's needle has weight: it overshoots a little and settles
    vel += (target - pos) * dt * .00055; vel *= Math.pow(.86, dt / 16); pos += vel * dt;
    pos = Math.max(-.02, Math.min(1.04, pos));
    const [x, y] = at(-SPAN + pos * SPAN * 2, 138), [x0, y0] = at(-SPAN + pos * SPAN * 2, 76);
    needle.setAttribute('x1', x0.toFixed(2)); needle.setAttribute('y1', y0.toFixed(2));
    needle.setAttribute('x2', x.toFixed(2)); needle.setAttribute('y2', y.toFixed(2));
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  return { skip(){ resting = true; restFrom = 0; } };
})();
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
// phones: Spotify's embedded player only plays 30-second previews in phone browsers, so every play button opens the album or song in the Spotify app instead
ROOT.addEventListener('click', e => {
  if (!PHONE()) return;
  const b = e.target.closest('[data-uri]'); if (!b) return;
  e.preventDefault(); e.stopPropagation();
  const [, kind, sid] = (b.dataset.uri || '').split(':');
  const al = ALBUMS.find(x => x.id === b.dataset.album);
  let url = kind && sid ? `https://open.spotify.com/${kind}/${sid}` : '';
  if (!url && al) url = `https://open.spotify.com/search/${encodeURIComponent(al.artist + ' ' + al.title)}`;
  if (url) window.open(url, '_blank', 'noopener');
}, true);
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
  Player.ext = null;
  if (al && al.spAlbum){
    clearTimeout(Player.endTimer);
    Player.queue = []; Player.idx = 0; Player.shuffle = false; Player.albumId = albumId; Player.listName = `${al.artist} · ${al.title}`;
    return play(`spotify:album:${al.spAlbum}`, al.title, `${al.artist} · ${al.title}`);
  }
  if (q.length){ Player.listName = al ? `${al.artist} · ${al.title}` : ''; return startQueue(q, 0, albumId); }   // no Spotify album link: play its songs one by one
  Player.queue = []; Player.shuffle = false; Player.albumId = albumId;   // album with no song IDs: let Spotify play the album
  // an album not in the collection: keep its artist, title and year for the player, and fetch its cover from Spotify
  const ext = Player.ext = { uri:b.dataset.uri, artist:b.dataset.artist || '', album:b.dataset.label || '', year:b.dataset.year || '', cover:'' };
  const [, kind, sid] = b.dataset.uri.split(':');
  if (kind === 'album') spInfo('album', sid).then(o => { if (o && Player.ext === ext){ ext.cover = o.thumbnail_url || ''; if (!ext.album) ext.album = o.title || ''; if (typeof BigPlayer !== 'undefined') BigPlayer.sync(); } });
  play(b.dataset.uri, b.dataset.label || '', ext.artist ? `${ext.artist} · ${ext.album}` : '');
});
$('#closePlayer').addEventListener('click', () => {
  if (typeof BigPlayer !== 'undefined') BigPlayer.close();
  clearTimeout(Player.endTimer);
  if (Player.ctrl) { try { Player.ctrl.pause(); } catch(err) {} }
  $('#player').hidden = true; STAGE().classList.remove('has-player');
  Player.current = null; Player.queue = []; Player.albumId = null; Player.shuffle = false;
  KeepAwake.stop(); clearSpot(); $('#resumeBtn').hidden = true; $('#embedWrap').hidden = false;
  refreshHighlight(); setLive(false, false);
});

// the "← THE COLLECTION" sign is 2/3 as wide as the album cover (on pages without a cover, 2/3 of the usual cover width)
function sizeHomeSign(){
  const sign = ROOT.querySelector('.back.neonhome'); if (!sign) return;
  const cov = ROOT.querySelector('.cover-col .sleeve'), vw = (ROOT.host || document.documentElement).clientWidth || innerWidth;
  const w = cov ? cov.getBoundingClientRect().width : Math.min(374, vw * .78);
  sign.style.setProperty('--nh', (w * 2 / 3 / 34.6).toFixed(2) + 'px');   // the sign is 34.6 "em" wide
  if (cov && HOME_SIGN_RO && !cov.dataset.ro){ cov.dataset.ro = '1'; HOME_SIGN_RO.observe(cov); }
}
addEventListener('resize', () => requestAnimationFrame(sizeHomeSign));
const HOME_SIGN_RO = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => sizeHomeSign()) : null;   // follows the cover as it settles into place
function route(){
  requestAnimationFrame(sizeHomeSign);
  const h = location.hash.slice(1);
  const a = ALBUMS.find(x => x.id === h) || ALBUMS.find(x => (x.alsoIds || []).includes(h));   // old links to a combined copy still work
  STAGE().classList.toggle('home', !a && !h.startsWith('artist-') && h !== 'live');
  STAGE().classList.toggle('albumpg', !!a);
  STAGE().classList.toggle('photo', !a && !h.startsWith('artist-') && h !== 'live');   // the photo banner shows on the home page only
  const f = /^(genre|style|person)=(.+)$/.exec(h);
  if (f){   // a genre or style box on an album page: show the whole collection filtered to it
    Object.assign(state, { q:'', format:[], decade:[], genre:[], style:'', person:'', best:[], newyr:[] }); const v = decodeURIComponent(f[2]); state[f[1]] = f[1] === 'genre' ? [v] : f[1] === 'person' ? pkeyA(v) : v;
    renderShelf(); toTop(); refreshHighlight(); return;
  }
  STAGE().classList.toggle('livepg', h === 'live');
  STAGE().classList.toggle('artistpg', h.startsWith('artist-'));
  if (a) renderAlbum(a);
  else if (h === 'live') { liveState.sort = 'date'; renderLive(); toTop(); }   // every visit starts in date order
  else if (h.startsWith('artist-')) renderArtist(h.slice(7));
  else renderShelf();
  if (a || h.startsWith('artist-')) toTop();
  refreshHighlight();
}
STAGE().style.setProperty('--banner', `url("${BASE}images/receiver-full.jpg")`);
STAGE().style.setProperty('--banner-sm', `url("${BASE}images/receiver-1400.jpg")`);
window.addEventListener('hashchange', route);
route();


    })();
  }).catch(function (e) { root.innerHTML = '<p style="font-family:sans-serif">The Collection could not load (' + e + ').</p>'; });
})();
