(function () {
  "use strict";

  var C = window.IBOZ_CONTENT || {};
  var root = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");

  /* ---------- Helpers ---------- */
  function $(id) { return document.getElementById(id); }

  // Création d'éléments sans innerHTML : aucun contenu n'est interprété comme du code.
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function safeUrl(url) {
    try {
      var u = new URL(url);
      return u.protocol === "https:" ? u : null;
    } catch (e) { return null; }
  }

  function extLink(node, url) {
    node.href = url;
    node.target = "_blank";
    node.rel = "noopener noreferrer";
    return node;
  }

  /* ---------- Langue ---------- */
  var lang = "fr";
  try { lang = localStorage.getItem("iboz-lang") || ""; } catch (e) { lang = ""; }
  if (lang !== "fr" && lang !== "en") {
    lang = (navigator.language || "fr").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  }

  function t(key) { return (C.t && C.t[lang] && C.t[lang][key]) || key; }
  function L(v) { return v && typeof v === "object" ? (v[lang] || v.fr || "") : (v || ""); }

  /* ---------- Lecteurs intégrés (hôtes autorisés uniquement) ---------- */
  function toEmbed(url) {
    var u = safeUrl(url);
    if (!u) return null;
    var h = u.hostname.replace(/^www\./, "");
    var m;
    if (h === "open.spotify.com") {
      m = u.pathname.match(/^\/(?:intl-[a-z]{2}\/)?(track|album|playlist|artist)\/([A-Za-z0-9]+)/);
      if (m) return { kind: "audio", src: "https://open.spotify.com/embed/" + m[1] + "/" + m[2], height: m[1] === "track" ? 80 : 152 };
    }
    if (h === "music.apple.com") {
      return { kind: "audio", src: "https://embed.music.apple.com" + u.pathname + u.search, height: 175 };
    }
    if (h === "deezer.com") {
      m = u.pathname.match(/^\/(?:[a-z]{2}\/)?(track|album|playlist)\/(\d+)/);
      if (m) return { kind: "audio", src: "https://widget.deezer.com/widget/dark/" + m[1] + "/" + m[2], height: 150 };
    }
    var id = null;
    if (h === "youtu.be") id = u.pathname.slice(1);
    if (h === "youtube.com" || h === "m.youtube.com" || h === "music.youtube.com") {
      id = u.searchParams.get("v");
      m = u.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]{11})/);
      if (m) id = m[1];
    }
    if (id && /^[\w-]{11}$/.test(id)) {
      return { kind: "video", id: id, src: "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0" };
    }
    return null;
  }

  function frame(src, title) {
    var f = document.createElement("iframe");
    f.src = src;
    f.title = title;
    f.loading = "lazy";
    f.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
    f.referrerPolicy = "strict-origin-when-cross-origin";
    // Le lecteur ne peut ni rediriger la page ni accéder au site.
    f.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-presentation");
    return f;
  }

  var dock = $("dock"), dockFrame = $("dockFrame"), dockTitle = $("dockTitle");
  function play(embed, title) {
    dockFrame.replaceChildren();
    dockTitle.textContent = title;
    if (embed) {
      var f = frame(embed.src, title);
      f.height = embed.height;
      dockFrame.appendChild(f);
    } else {
      dockFrame.appendChild(el("span", "dock__soon", t("soon")));
    }
    dock.hidden = false;
    document.body.classList.add("has-dock");
  }
  $("dockClose").addEventListener("click", function () {
    dockFrame.replaceChildren();
    dock.hidden = true;
    document.body.classList.remove("has-dock");
  });

  var modal = $("modal"), modalFrame = $("modalFrame");
  function watch(embed, title) {
    modalFrame.replaceChildren(frame(embed.src, title));
    modal.showModal();
  }
  modal.addEventListener("close", function () { modalFrame.replaceChildren(); });
  $("modalClose").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });

  /* ---------- Rendu des sections ---------- */
  function badge(item) {
    return item.exemple ? el("span", "badge", t("badge.example")) : null;
  }

  function renderReleases() {
    var box = $("releases");
    box.replaceChildren();
    (C.releases || []).forEach(function (r, i) {
      var title = L(r.title);
      var card = el("article", "release reveal");
      var cover = el("div", "release__cover cover--" + (i % 4 + 1));
      if (r.cover) {
        var img = el("img");
        img.src = r.cover; img.alt = title; img.loading = "lazy";
        cover.appendChild(img);
      } else {
        cover.appendChild(el("span", "release__mono", "IBOZ"));
      }
      var btn = el("button", "release__play");
      btn.type = "button";
      btn.setAttribute("aria-label", t("play") + " — " + title);
      btn.addEventListener("click", function () { play(toEmbed(r.listen), title); });
      cover.appendChild(btn);
      var b = badge(r);
      if (b) cover.appendChild(b);
      card.appendChild(cover);
      card.appendChild(el("h3", "release__title", title));
      card.appendChild(el("p", "release__meta", [L(r.type), r.year].filter(Boolean).join(" · ")));
      box.appendChild(card);
    });
  }

  function renderChips() {
    var box = $("platforms");
    box.replaceChildren();
    (C.platforms || []).forEach(function (p) {
      var u = safeUrl(p.url);
      var chip = u ? extLink(el("a", "chip", p.label + " ↗"), u.href) : el("span", "chip chip--off", p.label);
      if (!u) chip.title = t("badge.todo");
      box.appendChild(chip);
    });
  }

  function renderVideos() {
    var box = $("videoList");
    box.replaceChildren();
    (C.videos || []).forEach(function (v, i) {
      var title = L(v.title);
      var embed = toEmbed(v.url);
      var card = el("button", "video reveal cover--" + ((i + 1) % 4 + 1));
      card.type = "button";
      if (embed && embed.kind === "video") {
        var img = el("img");
        img.src = "https://i.ytimg.com/vi/" + embed.id + "/hqdefault.jpg";
        img.alt = ""; img.loading = "lazy";
        card.appendChild(img);
        card.addEventListener("click", function () { watch(embed, title); });
      } else {
        card.disabled = true;
      }
      card.appendChild(el("span", "video__play"));
      card.appendChild(el("span", "video__title", title));
      var b = badge(v);
      if (b) card.appendChild(b);
      box.appendChild(card);
    });
  }

  function renderAbout() {
    var facts = $("facts");
    facts.replaceChildren();
    (C.facts || []).forEach(function (f) {
      var li = el("li");
      li.appendChild(el("span", null, L(f.label)));
      li.appendChild(el("strong", null, L(f.value)));
      facts.appendChild(li);
    });
    var p = $("portrait");
    if (C.portrait && !p.querySelector("img")) {
      var img = el("img");
      img.src = C.portrait; img.alt = "Iboz"; img.loading = "lazy";
      p.replaceChildren(img);
    }
  }

  function renderTimeline() {
    var box = $("timeline");
    box.replaceChildren();
    (C.timeline || []).forEach(function (s) {
      var li = el("li", "step reveal");
      li.appendChild(el("span", "step__year", s.year));
      var body = el("div", "step__body");
      var h = el("h3", null, L(s.title));
      var b = badge(s);
      if (b) h.appendChild(b);
      body.appendChild(h);
      body.appendChild(el("p", null, L(s.text)));
      li.appendChild(body);
      box.appendChild(li);
    });
  }

  function renderPress() {
    var box = $("pressList");
    box.replaceChildren();
    (C.press || []).forEach(function (p) {
      var u = safeUrl(p.url);
      var card = u ? extLink(el("a", "article reveal"), u.href) : el("div", "article reveal");
      card.appendChild(el("span", "article__kind", [L(p.kind), p.date].filter(Boolean).join(" · ")));
      card.appendChild(el("h3", null, L(p.title)));
      card.appendChild(el("span", "article__media", L(p.media)));
      card.appendChild(el("span", "article__go", u ? t("read") + " ↗" : t("badge.todo")));
      var b = badge(p);
      if (b) card.appendChild(b);
      box.appendChild(card);
    });
  }

  function renderVentures() {
    var box = $("ventureList");
    box.replaceChildren();
    (C.ventures || []).forEach(function (v) {
      var u = safeUrl(v.url);
      var card = u ? extLink(el("a", "article reveal"), u.href) : el("div", "article reveal");
      card.appendChild(el("span", "article__kind", [L(v.role), v.year].filter(Boolean).join(" · ")));
      card.appendChild(el("h3", null, L(v.name)));
      card.appendChild(el("span", "article__media", L(v.text)));
      if (u) card.appendChild(el("span", "article__go", t("discover") + " ↗"));
      box.appendChild(card);
    });
  }

  function renderSocials() {
    var box = $("socials");
    box.replaceChildren();
    (C.socials || []).forEach(function (s) {
      var u = safeUrl(s.url);
      var li = el("li", "reveal");
      var a = u ? extLink(el("a", "social"), u.href) : el("span", "social social--off");
      a.appendChild(el("span", "social__name", s.label));
      a.appendChild(el("span", "social__handle", u ? (s.handle || "") : t("badge.todo")));
      a.appendChild(el("span", "social__arrow", "↗"));
      li.appendChild(a);
      box.appendChild(li);
    });
  }

  function renderMarquee() {
    var box = $("marquee");
    box.replaceChildren();
    var words = (C.marquee && C.marquee[lang]) || [];
    // Deux copies identiques : la boucle est sans raccord.
    for (var k = 0; k < 2; k++) {
      var group = el("div", "marquee__group");
      for (var r = 0; r < 3; r++) {
        words.forEach(function (w) { group.appendChild(el("span", null, w)); });
      }
      box.appendChild(group);
    }
  }

  /* ---------- Apparition au défilement ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 }) : null;

  function observe() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach(function (n, i) {
      if (!io) { n.classList.add("is-in"); return; }
      n.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(n);
    });
  }

  function applyLang() {
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = t(n.getAttribute("data-i18n"));
    });
    $("lang").textContent = lang === "fr" ? "EN" : "FR";
    renderMarquee(); renderReleases(); renderChips(); renderVideos();
    renderAbout(); renderTimeline(); renderVentures(); renderPress(); renderSocials();
    observe();
  }

  $("lang").addEventListener("click", function () {
    lang = lang === "fr" ? "en" : "fr";
    try { localStorage.setItem("iboz-lang", lang); } catch (e) { /* stockage indisponible */ }
    applyLang();
  });

  /* ---------- Navigation ---------- */
  var nav = $("nav"), burger = $("burger"), menu = $("menu");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  }
  burger.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  window.addEventListener("scroll", function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive: true });

  /* ---------- Halo qui suit la souris ---------- */
  var glow = document.querySelector(".glow");
  if (glow && !reduced && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", function (e) {
      glow.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
      glow.classList.add("is-on");
    }, { passive: true });
  }

  /* ---------- Ondes animées de l'accueil ---------- */
  (function waves() {
    var cv = $("waves");
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext("2d");
    var w = 0, h = 0, mx = 0.5, raf = 0, visible = true;
    var colors = ["#e9b44c", "#e4572e", "#c2185b", "#e9b44c", "#e4572e"];

    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(time) {
      var tt = time / 1000;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < colors.length; i++) {
        ctx.beginPath();
        var amp = h * (0.05 + i * 0.018) * (0.7 + mx * 0.6);
        var base = h * (0.58 + i * 0.055);
        for (var x = 0; x <= w; x += 8) {
          var y = base
            + Math.sin(x * 0.0035 + tt * (0.5 + i * 0.11) + i) * amp
            + Math.sin(x * 0.011 - tt * 0.8 + i * 2) * amp * 0.35;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = colors[i];
        ctx.globalAlpha = 0.55 - i * 0.07;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      if (!reduced && visible) raf = requestAnimationFrame(draw);
    }

    size();
    window.addEventListener("resize", function () { size(); if (reduced) draw(0); });
    window.addEventListener("pointermove", function (e) { mx = e.clientX / window.innerWidth; }, { passive: true });
    // L'animation s'arrête quand l'accueil n'est plus à l'écran (batterie, fluidité).
    if (io) new IntersectionObserver(function (en) {
      visible = en[0].isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduced) raf = requestAnimationFrame(draw);
    }).observe(cv);
    draw(0);
  })();

  /* ---------- Formulaires ---------- */
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var status = form.querySelector(".form__status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      status.className = "form__status";
      status.textContent = "…";
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        status.textContent = t("form.ok");
        status.classList.add("is-ok");
        form.reset();
      }).catch(function () {
        status.textContent = t("form.err");
        status.classList.add("is-err");
      }).then(function () { btn.disabled = false; });
    });
  });

  $("year").textContent = String(new Date().getFullYear());
  applyLang();
  root.classList.add("is-ready");
})();
