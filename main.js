(() => {
  "use strict";
  document.documentElement.classList.add("js-ready");
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  const cfg = window.SITE_CONFIG || {};
  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];

  // Config links
  const email = $("#emailLink");
  const behance = $("#behanceLink");
  const linkedin = $("#linkedinLink");
  const resume = $("#resumeBtn");
  if (email) email.href = cfg.email && !cfg.email.includes("example.com") ? `mailto:${cfg.email}` : "#contact";
  if (behance) behance.href = cfg.behance || "#";
  if (linkedin) linkedin.href = cfg.linkedin && cfg.linkedin !== "YOUR_LINKEDIN_URL" ? cfg.linkedin : "#";
  if (resume) {
    resume.href = cfg.resume || "#";
    if (!cfg.resume || cfg.resume.endsWith("Resume.pdf") === false) resume.setAttribute("download","");
    resume.addEventListener("click", e => {
      if (!cfg.resume || cfg.resume === "assets/Subhash-Dubey-Resume.pdf") {
        // Allow the browser to try the path; README explains how to activate it.
      }
    });
  }

  // Showreel
  const showreelMount = $("#showreelMount");
  if (showreelMount) {
    if (cfg.showreel) {
      showreelMount.innerHTML = `<video class="showreel-video" controls playsinline preload="metadata" poster="${cfg.showreelPoster || ""}"><source src="${cfg.showreel}" type="video/mp4"></video>`;
    } else {
      showreelMount.innerHTML = `<div class="showreel-placeholder"><strong>SHOWREEL<span style="color:#ff6a2a">.</span></strong><p>ADD YOUR SHOWREEL IN config.js</p><a class="btn btn-primary" href="#work">EXPLORE SELECTED WORK ↘</a></div>`;
    }
  }

  // Filters
  const filters = $("#filters");
  const categories = ["ALL", ...new Set(projects.map(p => p.category).filter(Boolean))];
  let activeCategory = "ALL";
  let filtered = projects.slice();
  if (filters) {
    filters.innerHTML = categories.map((c,i) => `<button class="filter-btn ${i===0?"active":""}" data-filter="${escapeAttr(c)}" role="tab">${escapeHtml(c)}</button>`).join("");
    filters.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeCategory = btn.dataset.filter;
      $$(".filter-btn", filters).forEach(b => b.classList.toggle("active", b === btn));
      filtered = activeCategory === "ALL" ? projects.slice() : projects.filter(p => p.category === activeCategory);
      renderProjects(filtered);
    });
  }

  function mediaBlock(p) {
    const poster = p.thumbnail ? `<img loading="lazy" src="${escapeAttr(p.thumbnail)}" alt="${escapeAttr(p.title || "Project")}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">` : "";
    const fallback = `<div class="media-fallback" style="${poster ? "display:none" : ""}">SUBHASH DUBEY / PROJECT</div>`;
    const video = p.video ? `<video class="project-preview" muted loop playsinline preload="none" poster="${escapeAttr(p.thumbnail || "")}" data-src="${escapeAttr(p.video)}" aria-hidden="true"></video>` : "";
    return `${poster}${fallback}${video}`;
  }

  function renderProjects(list) {
    const grid = $("#projectGrid");
    if (!grid) return;
    grid.innerHTML = list.map((p, i) => `
      <article class="project-card reveal" data-id="${p.id}" tabindex="0" aria-label="Open ${escapeAttr(p.title || "project")}">
        <div class="project-media">${mediaBlock(p)}
          <div class="project-overlay">
            <div><div class="project-num">${String(p.id).padStart(2,"0")}</div><div class="project-title">${escapeHtml(p.title || "Project")}</div><div class="project-cat">${escapeHtml(p.category || "")}</div></div>
            <div class="view-pill">VIEW ↗</div>
          </div>
        </div>
      </article>`).join("");
    $$(".project-card", grid).forEach(card => {
      card.addEventListener("click", () => openProject(Number(card.dataset.id)));
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(Number(card.dataset.id)); }});
      const v = $(".project-preview", card);
      if (v) {
        card.addEventListener("mouseenter", () => {
          if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.load(); }
          v.play().catch(()=>{});
        });
        card.addEventListener("mouseleave", () => v.pause());
      }
    });
    observeReveals();
  }

  renderProjects(projects);

  // Modal
  const modal = $("#projectModal"), modalMedia = $("#modalMedia"), modalTitle = $("#modalTitle"),
        modalCategory = $("#modalCategory"), modalDescription = $("#modalDescription"),
        modalApproach = $("#modalApproach"), modalTools = $("#modalTools"),
        modalGallery = $("#modalGallery"), modalCount = $("#modalCount");
  let currentIndex = 0;
  function openProject(id) {
    currentIndex = Math.max(0, projects.findIndex(p => p.id === id));
    const p = projects[currentIndex];
    if (!p || !modal) return;
    modalCategory.textContent = `${String(p.id).padStart(2,"0")} / ${p.category || ""} / ${p.year || ""}`;
    modalTitle.textContent = p.title || "Project";
    modalDescription.textContent = p.description || "";
    modalApproach.textContent = p.creativeApproach || "";
    modalTools.innerHTML = (p.tools || []).map(t => `<span>${escapeHtml(t)}</span>`).join("");
    modalCount.textContent = `${String(currentIndex+1).padStart(2,"0")} / ${String(projects.length).padStart(2,"0")}`;
    modalMedia.innerHTML = p.video
      ? `<video controls autoplay playsinline preload="metadata" poster="${escapeAttr(p.thumbnail || "")}"><source src="${escapeAttr(p.video)}" type="video/mp4"></video>`
      : `<img src="${escapeAttr(p.thumbnail || "")}" alt="${escapeAttr(p.title || "")}">`;
    const gallery = (p.gallery || []).filter(Boolean);
    const vids = (p.additionalVideos || []).filter(Boolean);
    modalGallery.innerHTML = [
      ...gallery.map(src => `<img loading="lazy" src="${escapeAttr(src)}" alt="${escapeAttr(p.title || "Project image")}">`),
      ...vids.map(src => `<video controls playsinline preload="metadata"><source src="${escapeAttr(src)}" type="video/mp4"></video>`)
    ].join("");
    modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
    $(".modal-close")?.focus();
  }
  function closeModal(){ if(!modal)return; modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow=""; modalMedia.innerHTML=""; modalGallery.innerHTML=""; }
  function moveProject(delta){ currentIndex=(currentIndex+delta+projects.length)%projects.length; openProject(projects[currentIndex].id); }
  $(".modal-close")?.addEventListener("click",closeModal);
  $(".modal-backdrop")?.addEventListener("click",closeModal);
  $("#prevProject")?.addEventListener("click",()=>moveProject(-1));
  $("#nextProject")?.addEventListener("click",()=>moveProject(1));
  document.addEventListener("keydown",e=>{if(!modal?.classList.contains("open"))return;if(e.key==="Escape")closeModal();if(e.key==="ArrowLeft")moveProject(-1);if(e.key==="ArrowRight")moveProject(1)});

  // Mobile menu
  const menuBtn=$(".menu-btn"), mobileMenu=$(".mobile-menu");
  menuBtn?.addEventListener("click",()=>{const open=mobileMenu.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(open));});
  $$(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));

  // Scroll reveals
  let observer;
  function observeReveals(){
    if(!("IntersectionObserver" in window)){ $$(".reveal").forEach(x=>x.classList.add("visible")); return; }
    if(!observer){ observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12}); }
    $$(".reveal").forEach(el=>{if(!el.classList.contains("visible"))observer.observe(el)});
  }
  observeReveals();

  // Pause/play previews efficiently
  if("IntersectionObserver" in window){
    const videoObserver=new IntersectionObserver(entries=>entries.forEach(e=>{const v=e.target;if(!e.isIntersecting)v.pause()}),{threshold:.1});
    $$(".project-preview").forEach(v=>videoObserver.observe(v));
  }

  // Cursor
  if(matchMedia("(pointer:fine)").matches){
    const dot=$(".cursor-dot"), ring=$(".cursor-ring");
    let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
    addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
    function cursorLoop(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;dot.style.left=mx+"px";dot.style.top=my+"px";ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(cursorLoop)}
    cursorLoop();
    document.addEventListener("mouseover",e=>{const t=e.target.closest("[data-cursor],a,button,.project-card");if(t){ring.style.width="48px";ring.style.height="48px";ring.style.borderColor="#ff6a2a"}});
    document.addEventListener("mouseout",e=>{if(e.target.closest("[data-cursor],a,button,.project-card")){ring.style.width="28px";ring.style.height="28px";ring.style.borderColor="rgba(255,255,255,.6)"}});
  }

  // Magnetic buttons
  if(matchMedia("(pointer:fine)").matches){
    $$(".magnetic").forEach(el=>el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.12;el.style.transform=`translate(${x}px,${y}px)`}));
    $$(".magnetic").forEach(el=>el.addEventListener("mouseleave",()=>el.style.transform=""));
  }

  function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
  function escapeAttr(v){return escapeHtml(v)}
})();