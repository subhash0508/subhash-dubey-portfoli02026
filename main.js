(() => {
  "use strict";
  const root = document.documentElement;
  root.classList.add("js");

  const cfg = window.SITE_CONFIG || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = v => String(v ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]));
  const pad = n => String(n).padStart(2, "0");
  const finePointer = matchMedia("(pointer: fine)").matches;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let io, idx = 0, lastFocus = null;

  // Only show projects that have real content (placeholder titles start with "[")
  const allProjects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const projects = allProjects.filter(p => p && p.title && !String(p.title).trim().startsWith("[") && p.hidden !== true);

  requestAnimationFrame(() => setTimeout(() => root.classList.add("loaded"), 80));

  /* ---------------- Config-driven links ---------------- */
  $$('a[href$="Subhash-Dubey-Resume.pdf"]').forEach(a => { if (cfg.resume) a.href = cfg.resume; });

  /* ---------------- Showreel ---------------- */
  const reel = $("#showreelMount");
  if (reel) {
    // No showreel set in config.js → hide the section (featured project already leads the Work grid)
    const src = cfg.showreel;
    const poster = cfg.showreelPoster || "";
    if (!src) reel.closest("section").hidden = true;
    if (src) {
      const title = "Showreel " + new Date().getFullYear();
      const sub = "Motion · Video · Design · AI";
      reel.innerHTML = `
        <video playsinline preload="none" poster="${esc(poster)}" src="${esc(src)}"></video>
        <div class="reel-cover">
          <div class="reel-meta"><small>${esc(sub)}</small><h3>${esc(title)}</h3></div>
          <button class="play-btn" aria-label="Play video">▶</button>
        </div>`;
      const v = $("video", reel);
      const start = () => { reel.classList.add("playing"); v.controls = true; v.play().catch(() => {}); };
      reel.addEventListener("click", e => { if (!reel.classList.contains("playing")) { e.preventDefault(); start(); } });
      v.addEventListener("ended", () => { reel.classList.remove("playing"); v.controls = false; });
    }
  }

  /* ---------------- Work grid ---------------- */
  const grid = $("#projectGrid");
  const filters = $("#filters");
  let visible = projects.slice();

  function card(p, i, list) {
    const feature = i === 0 && list.length % 2 === 1;
    const thumb = p.thumbnail
      ? `<img loading="lazy" src="${esc(p.thumbnail)}" alt="${esc(p.title)}" onerror="this.remove()">`
      : "";
    const preview = p.previewVideo || p.video;
    const vid = preview ? `<video muted loop playsinline preload="none" data-src="${esc(preview)}" aria-hidden="true"></video>` : "";
    return `
      <article class="project-card reveal${feature ? " feature" : ""}" data-id="${p.id}" tabindex="0" role="button" aria-label="Open project: ${esc(p.title)}" data-cursor="View">
        <div class="project-media">
          <div class="media-fallback">SUBHASH DUBEY / ${pad(p.id)}</div>
          ${thumb}${vid}
          <span class="project-badge${p.video ? " play" : ""}">${esc(p.category || "Project")}</span>
          <span class="project-view" aria-hidden="true">↗</span>
        </div>
        <div class="project-info">
          <div><h3>${esc(p.title)}</h3><p>${esc(p.role || "")}</p></div>
          <span class="yr">${esc(p.year || "")}</span>
        </div>
      </article>`;
  }

  function extraCards(list) {
    const rest = list.length % 2 === 1 ? list.length - 1 : list.length; // cards after the full-width feature
    const behance = cfg.behance || "https://www.behance.net/subhashdubey";
    const cards = [`
      <a class="more-card reveal" href="${esc(behance)}" target="_blank" rel="noopener" data-cursor="Behance">
        <span class="label"><span>+</span> More work</span>
        <div><h3>See the full<br>archive on <em>Behance.</em></h3></div>
        <span class="arrow">↗</span>
      </a>`];
    // keep the grid balanced on wide screens
    if (rest % 2 === 0) cards.push(`
      <a class="more-card solid reveal" href="#contact" data-cursor="Talk">
        <span class="label"><span>→</span> Your project</span>
        <div><h3>Got a story<br>that needs to <em>move?</em></h3><p>Let's build it together.</p></div>
        <span class="arrow">↗</span>
      </a>`);
    return cards.join("");
  }

  function render(list) {
    if (!grid) return;
    grid.innerHTML = list.map((p, i) => card(p, i, list)).join("") + extraCards(list);
    $$(".project-card", grid).forEach(el => {
      const id = Number(el.dataset.id);
      el.addEventListener("click", () => openProject(id));
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(id); } });
      const v = $("video", el);
      if (v && finePointer) {
        el.addEventListener("mouseenter", () => {
          if (!v.src) { v.src = v.dataset.src; v.addEventListener("canplay", () => v.classList.add("ready"), { once: true }); }
          v.play().catch(() => {});
        });
        el.addEventListener("mouseleave", () => v.pause());
      }
    });
    observeReveals();
    bindCursorTargets();
  }

  if (filters) {
    const cats = [...new Set(projects.map(p => p.category).filter(Boolean))];
    if (cats.length > 1) {
      filters.innerHTML = ["All", ...cats].map((c, i) => {
        const n = i === 0 ? projects.length : projects.filter(p => p.category === c).length;
        return `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${esc(c)}" role="tab" aria-selected="${i === 0}">${esc(c)}<sup>${n}</sup></button>`;
      }).join("");
      filters.addEventListener("click", e => {
        const b = e.target.closest(".filter-btn"); if (!b) return;
        $$(".filter-btn", filters).forEach(x => { x.classList.toggle("active", x === b); x.setAttribute("aria-selected", String(x === b)); });
        visible = b.dataset.filter === "All" ? projects.slice() : projects.filter(p => p.category === b.dataset.filter);
        render(visible);
      });
    }
  }

  /* ---------------- Modal ---------------- */
  const modal = $("#projectModal");
  function openProject(id) {
    idx = Math.max(0, visible.findIndex(p => p.id === id));
    const p = visible[idx]; if (!p || !modal) return;
    lastFocus = document.activeElement;
    $("#modalCategory").innerHTML = `<span>${pad(p.id)}</span> ${esc(p.category || "")} · ${esc(p.year || "")}`;
    $("#modalTitle").textContent = p.title;
    $("#modalRole").textContent = p.role || "";
    $("#modalDescription").textContent = p.description || "";
    $("#modalApproach").textContent = p.creativeApproach || "";
    $(".modal-sub").style.display = p.creativeApproach ? "" : "none";
    $("#modalTools").innerHTML = (p.tools || []).map(t => `<span>${esc(t)}</span>`).join("");
    $("#modalCount").textContent = `${pad(idx + 1)} / ${pad(visible.length)}`;
    $("#prevProject").disabled = $("#nextProject").disabled = visible.length < 2;
    $("#modalMedia").innerHTML = p.video
      ? `<video controls autoplay playsinline preload="metadata" poster="${esc(p.thumbnail || "")}" src="${esc(p.video)}"></video>`
      : `<img src="${esc(p.thumbnail || "")}" alt="${esc(p.title)}">`;
    $("#modalGallery").innerHTML = [
      ...(p.gallery || []).filter(Boolean).map(s => `<img loading="lazy" src="${esc(s)}" alt="${esc(p.title)}" onerror="this.remove()">`),
      ...(p.additionalVideos || []).filter(Boolean).map(s => `<video controls playsinline preload="metadata" src="${esc(s)}" onerror="this.remove()"></video>`)
    ].join("");
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal-panel", modal).scrollTop = 0;
    $(".modal-close", modal).focus();
  }
  function closeModal() {
    if (!modal?.classList.contains("open")) return;
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => { $("#modalMedia").innerHTML = ""; $("#modalGallery").innerHTML = ""; }, 300);
    lastFocus?.focus?.();
  }
  const move = d => { if (visible.length < 2) return; idx = (idx + d + visible.length) % visible.length; openProject(visible[idx].id); };
  $(".modal-close")?.addEventListener("click", closeModal);
  $(".modal-backdrop")?.addEventListener("click", closeModal);
  $("#prevProject")?.addEventListener("click", () => move(-1));
  $("#nextProject")?.addEventListener("click", () => move(1));
  document.addEventListener("keydown", e => {
    if (!modal?.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") move(-1);
    if (e.key === "ArrowRight") move(1);
  });

  /* ---------------- Mobile menu ---------------- */
  const menuBtn = $(".menu-btn"), menu = $(".mobile-menu");
  const setMenu = open => {
    menu.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  menuBtn?.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  $$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));

  /* ---------------- Reveal on scroll ---------------- */
  function observeReveals() {
    if (!("IntersectionObserver" in window) || reduceMotion) { $$(".reveal").forEach(x => x.classList.add("visible")); return; }
    io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal:not(.visible)").forEach(el => io.observe(el));
  }
  observeReveals();

  /* ---------------- Counters ---------------- */
  if ("IntersectionObserver" in window && !reduceMotion) {
    const co = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, to = Number(el.dataset.count), t0 = performance.now(), dur = 1400;
      const tick = t => { const k = Math.min(1, (t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick); co.unobserve(el);
    }), { threshold: .6 });
    $$("[data-count]").forEach(el => { el.textContent = "0"; co.observe(el); });
  }

  /* ---------------- Nav: hide on scroll down, active link, progress ---------------- */
  const navWrap = $(".nav-wrap"), bar = $(".progress span");
  let lastY = scrollY;
  addEventListener("scroll", () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    if (!menu?.classList.contains("open")) navWrap.classList.toggle("hide", y > lastY && y > 400);
    lastY = y;
  }, { passive: true });
  if ("IntersectionObserver" in window) {
    const links = $$(".nav-links a");
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    ["work", "about", "services", "experience", "contact"].forEach(id => { const s = document.getElementById(id); if (s) so.observe(s); });
  }

  /* ---------------- Copy email ---------------- */
  $$("[data-copy]").forEach(btn => btn.addEventListener("click", async () => {
    const text = btn.dataset.copy, state = $(".copy-state", btn);
    try { await navigator.clipboard.writeText(text); btn.classList.add("copied"); if (state) state.textContent = "Copied ✓"; }
    catch { location.href = "mailto:" + text; return; }
    setTimeout(() => { btn.classList.remove("copied"); if (state) state.textContent = "Copy"; }, 2000);
  }));

  /* ---------------- Footer: year + local time ---------------- */
  const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
  const lt = $("#localTime");
  if (lt) {
    const upd = () => { try { lt.textContent = "Bhopal · " + new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" }) + " IST"; } catch {} };
    upd(); setInterval(upd, 30000);
  }

  /* ---------------- Custom cursor ---------------- */
  const cur = $(".cursor"), curLabel = $(".cursor-label");
  function bindCursorTargets() {
    if (!finePointer || !cur) return;
    $$("[data-cursor]:not([data-cb]), a:not([data-cb]), button:not([data-cb]), summary:not([data-cb])").forEach(el => {
      el.dataset.cb = "1";
      el.addEventListener("mouseenter", () => {
        if (el.dataset.cursor) { curLabel.textContent = el.dataset.cursor; cur.classList.add("big"); }
        else cur.classList.add("link");
      });
      el.addEventListener("mouseleave", () => cur.classList.remove("big", "link"));
    });
  }
  if (finePointer && cur && !reduceMotion) {
    let mx = -100, my = -100, x = mx, y = my;
    addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; cur.classList.add("on"); }, { passive: true });
    document.addEventListener("mouseleave", () => cur.classList.remove("on"));
    (function loop() { x += (mx - x) * .2; y += (my - y) * .2; cur.style.transform = `translate3d(${x}px, ${y}px, 0)`; requestAnimationFrame(loop); })();
    bindCursorTargets();

    // magnetic buttons
    $$(".btn, .nav-cta, .play-btn, .spin-badge").forEach(el => {
      el.addEventListener("mousemove", e => { const r = el.getBoundingClientRect(); el.style.translate = `${(e.clientX - r.left - r.width / 2) * .15}px ${(e.clientY - r.top - r.height / 2) * .2}px`; });
      el.addEventListener("mouseleave", () => { el.style.translate = ""; });
    });
  }
  render(visible);
})();
