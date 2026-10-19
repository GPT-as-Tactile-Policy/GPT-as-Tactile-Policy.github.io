"use strict";
(() => {
  const data = window.PROJECT_DATA;
  if (!data) return;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const safeUrl = (value) => {
    if (!value || typeof value !== "string") return "";
    try {
      const url = new URL(value, document.baseURI);
      return ["https:", "http:", "file:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  };
  const percent = (value) => typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 100;
  const methodName = (id) => data.methods.find(method => method.id === id)?.name || id;
  const format = (value) => Number.isInteger(value) ? String(value) : value.toFixed(1);

  const toggle = $(".menu-toggle");
  const nav = $("#primary-nav");
  const closeMenu = () => { nav?.classList.remove("is-open"); toggle?.setAttribute("aria-expanded", "false"); };
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  $$("a", nav || document.createElement("nav")).forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  const desktopQuery = window.matchMedia("(min-width: 761px)");
  desktopQuery.addEventListener("change", event => { if (event.matches) closeMenu(); });

  if (data.paper.title) {
    $$("[data-paper-title]").forEach(node => { node.textContent = data.paper.title; });
    const title = $("[data-paper-title]")?.previousElementSibling;
    if (title) title.textContent = "Research paper";
    if (!location.pathname.endsWith("gallery.html")) document.title = data.paper.title + " · GPT-as-Tactile-Policy";
  }
  if (data.paper.authors) $$("[data-paper-authors]").forEach(node => {
    node.textContent = data.paper.authors + (data.paper.affiliations ? " · " + data.paper.affiliations : "");
  });
  $$("[data-resource]").forEach(node => {
    const href = safeUrl(data.links[node.dataset.resource]);
    if (!href) return;
    const link = el("a", node.className.replace("is-unavailable", ""));
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(document.createTextNode(node.firstChild.textContent.trim()));
    link.append(el("span", "", " ↗"));
    node.replaceWith(link);
  });
  $$("[data-protocol]").forEach(node => {
    const value = data.protocol[node.dataset.protocol];
    if (value) node.textContent = value;
  });

  function createVideo(media) {
    const video = el("video");
    video.src = safeUrl(media.src);
    video.controls = true;
    video.playsInline = true;
    video.preload = "none";
    if (safeUrl(media.poster)) video.poster = safeUrl(media.poster);
    video.setAttribute("aria-label", media.title || media.caption || "Project recording");
    if (safeUrl(media.captions)) {
      const track = el("track");
      track.kind = "captions"; track.srclang = "en"; track.label = "English";
      track.src = safeUrl(media.captions); video.append(track);
    }
    return video;
  }
  $$("[data-video-slot]").forEach(node => {
    const media = data.videos[node.dataset.videoSlot];
    if (!media || !safeUrl(media.src)) return;
    node.replaceChildren(createVideo(media)); node.classList.add("has-media");
    const caption = [media.caption, media.speed ? "Playback: " + media.speed : ""].filter(Boolean).join(" · ");
    if (caption) node.append(el("p", "media-caption", caption));
    const badge = node.closest("section")?.querySelector(".section-heading .tag");
    if (badge && badge.textContent.includes("forthcoming")) badge.textContent = "Project video";
  });
  $$("[data-figure-slot]").forEach(node => {
    const figure = data.figures[node.dataset.figureSlot];
    if (!figure || !safeUrl(figure.src)) return;
    const wrapper = el("figure", "published-figure");
    const image = el("img");
    image.src = safeUrl(figure.src); image.alt = figure.alt || "Research figure";
    image.loading = "lazy"; wrapper.append(image);
    if (figure.caption) wrapper.append(el("figcaption", "fine-print", figure.caption));
    node.replaceWith(wrapper);
  });

  const resultsBody = $("#results-body");
  if (resultsBody) {
    resultsBody.replaceChildren();
    for (const result of data.results) {
      const row = el("tr", result.method === "ours" ? "highlight-row" : "");
      const name = el("th", "", methodName(result.method)); name.scope = "row"; row.append(name);
      const values = data.tasks.map((_, index) => result.values[index]);
      const derivedMean = values.length && values.every(percent) ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
      const mean = percent(result.mean) ? result.mean : derivedMean;
      for (const value of [...values, mean]) {
        const valid = percent(value);
        const cell = el("td", valid ? "" : "placeholder-value", valid ? format(value) : "—");
        if (!valid) cell.setAttribute("aria-label", "Not yet reported");
        row.append(cell);
      }
      resultsBody.append(row);
      if (result.method === "ours" && percent(mean)) {
        $("[data-overall-result]").textContent = mean.toFixed(1) + "%";
        $("[data-overall-status]").textContent = "Reported mean";
        $("#overall-note").textContent = "See the table and evaluation context for the comparison conditions.";
        $("#results .section-heading .tag").textContent = "Benchmark results";
      }
    }
  }

  const icons = {
    bottle: ["M45 10h20v13l10 13v45H35V36l10-13Z", "M45 17h20M35 41h40M35 65h40", "M22 38v26h9M88 38v26h-9"],
    key: ["M28 32a13 13 0 1 0 0 26 13 13 0 0 0 0-26Z", "M41 45h47v10H77v9H66V54H41", "M22 40h6"],
    can: ["M36 25c0-10 42-10 42 0v48c0 10-42 10-42 0Z", "M36 25c0 10 42 10 42 0M36 65c0 10 42 10 42 0", "M47 22h19"],
    shelf: ["M17 13v70h85V13M17 48h85M17 81h85", "M47 22h13v7l7 8v10H40V37l7-8ZM38 81V65h31v16"],
    hole: ["M20 60l39-15 39 15-39 15Z", "M20 60v11l39 15 39-15V60", "M48 59c0-5 22-5 22 0s-22 5-22 0", "M54 10h10v39c0 4-10 4-10 0Z", "M46 27h-9M73 27h9M59 6v-4"],
    connector: ["M27 22h58l-8 27H35Z", "M38 28h36l-4 14H42Z", "M46 49v21h19V49M55 70v17", "M35 64H18v17h21M77 64h23v17H73"],
    tube: ["M46 12c0-5 24-5 24 0v47c0 6-24 6-24 0Z", "M46 12c0 5 24 5 24 0", "M26 69l33-11 33 11v13l-33 9-33-9Z", "M48 69c0-4 22-4 22 0s-22 4-22 0"],
    shapes: ["M17 64l18-34 18 34Z", "M63 30h31v34H63Z", "M39 85a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M23 17h65M55 11v10"]
  };
  function taskArt(task) {
    const art = el("div", "task-art"); art.style.setProperty("--task-bg", task.color || "#eaf0e4");
    art.append(el("span", "small-label", "UniVTAC / Task"));
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 115 100"); svg.setAttribute("aria-hidden", "true");
    for (const definition of icons[task.icon] || icons.shapes) {
      const path = document.createElementNS(svg.namespaceURI, "path"); path.setAttribute("d", definition); svg.append(path);
    }
    art.append(svg, el("span", "task-state", "VIDEO PENDING")); return art;
  }
  function taskCard(task, home = false) {
    const card = el("article", "task-card");
    card.append(taskArt(task));
    const content = el("div", "task-content");
    content.append(el("h3", "", task.name), el("p", "", task.description));
    if (home) {
      const link = el("a", "task-link", "View task slot");
      link.href = "gallery.html?task=" + encodeURIComponent(task.id);
      link.setAttribute("aria-label", "View " + task.name + " in the video gallery");
      link.append(el("span", "", "↗")); content.append(link);
    } else {
      const labels = el("div", "task-labels");
      labels.append(el("span", "tag", task.category), el("span", "tag", "Recording forthcoming"));
      content.append(labels);
    }
    card.append(content); return card;
  }
  function recordingCard(recording) {
    const task = data.tasks.find(item => item.id === recording.task);
    const card = el("article", "task-card");
    card.append(createVideo(recording));
    const content = el("div", "task-content");
    content.append(el("h3", "", recording.title || task?.name || "Recording"));
    const labels = el("div", "task-labels");
    labels.append(el("span", "tag", methodName(recording.method)));
    const outcome = recording.outcome === "success" ? "Success" : recording.outcome === "failure" ? "Failure" : "Outcome not reported";
    labels.append(el("span", "tag", outcome)); content.append(labels);
    if (recording.caption) content.append(el("p", "", recording.caption));
    content.append(el("p", "task-media-caption", recording.speed ? "Playback: " + recording.speed : "Playback speed not specified"));
    if (safeUrl(recording.notesUrl)) {
      const link = el("a", "task-link", "Execution record ↗");
      link.href = safeUrl(recording.notesUrl); content.append(link);
    }
    card.append(content); return card;
  }
  const homeGrid = $("#home-task-grid");
  if (homeGrid) for (const task of data.tasks) homeGrid.append(taskCard(task, true));
  const filterForm = $("#gallery-filters");
  if (filterForm) {
    const taskFilter = $("#task-filter"), methodFilter = $("#method-filter"), outcomeFilter = $("#outcome-filter"), search = $("#task-search");
    for (const task of data.tasks) { const option = el("option", "", task.name); option.value = task.id; taskFilter.append(option); }
    for (const method of data.methods) { const option = el("option", "", method.name); option.value = method.id; methodFilter.append(option); }
    const initialTask = new URLSearchParams(location.search).get("task");
    if (data.tasks.some(task => task.id === initialTask)) taskFilter.value = initialTask;
    function renderGallery() {
      const query = search.value.trim().toLowerCase();
      const taskMatches = task => (taskFilter.value === "all" || task.id === taskFilter.value) && (!query || (task.name + " " + task.description + " " + task.keywords).toLowerCase().includes(query));
      const visibleTasks = data.tasks.filter(taskMatches);
      const records = data.recordings.filter(record => visibleTasks.some(task => task.id === record.task) && safeUrl(record.src) && (methodFilter.value === "all" || record.method === methodFilter.value) && (outcomeFilter.value === "all" || record.outcome === outcomeFilter.value));
      const slots = methodFilter.value === "all" && outcomeFilter.value === "all" ? visibleTasks.filter(task => !records.some(record => record.task === task.id)) : [];
      const grid = $("#gallery-grid"); grid.replaceChildren();
      for (const record of records) grid.append(recordingCard(record));
      for (const task of slots) grid.append(taskCard(task));
      $("#gallery-empty").hidden = records.length + slots.length > 0;
      $("#gallery-count").textContent = records.length + (records.length === 1 ? " recording" : " recordings") + " · " + slots.length + (slots.length === 1 ? " task slot awaiting media" : " task slots awaiting media");
    }
    filterForm.addEventListener("submit", event => event.preventDefault());
    filterForm.addEventListener("input", renderGallery); filterForm.addEventListener("change", renderGallery);
    filterForm.addEventListener("reset", () => setTimeout(renderGallery, 0));
    $("#empty-reset").addEventListener("click", () => filterForm.reset());
    renderGallery();
  }
  const stageButtons = $$("[data-stage]");
  function activateStage(index, focus = false) {
    const stage = data.stages[index]; if (!stage) return;
    stageButtons.forEach((button, buttonIndex) => {
      const active = buttonIndex === index; button.setAttribute("aria-selected", String(active)); button.tabIndex = active ? 0 : -1;
      if (active && focus) button.focus();
    });
    $("#stage-detail").setAttribute("aria-labelledby", "stage-tab-" + index);
    $("#stage-kicker").textContent = "Stage " + String(index + 1).padStart(2, "0") + " / " + stage.label;
    $("#stage-title").textContent = stage.title; $("#stage-description").textContent = stage.description;
    $("#stage-rms").textContent = typeof stage.rms === "number" && Number.isFinite(stage.rms) && stage.rms >= 0 ? stage.rms.toFixed(2) + " px" : "—";
    const marker = $("#stage-marker"); marker.replaceChildren();
    if (safeUrl(stage.markerSrc)) {
      const image = el("img"); image.src = safeUrl(stage.markerSrc); image.alt = stage.markerAlt || "Marker increments for " + stage.label;
      image.style.maxWidth = "130px"; marker.append(image);
    } else marker.textContent = "Pending";
  }
  stageButtons.forEach((button, index) => {
    button.addEventListener("click", () => activateStage(index));
    button.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % stageButtons.length;
      if (event.key === "ArrowLeft") next = (index + stageButtons.length - 1) % stageButtons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = stageButtons.length - 1;
      if (next !== undefined) { event.preventDefault(); activateStage(next, true); }
    });
  });
  if (stageButtons.length) activateStage(0);
  const copyButton = $("#copy-citation");
  if (copyButton && data.paper.bibtex) {
    copyButton.disabled = false; copyButton.textContent = "Copy BibTeX";
    $("#citation-text").textContent = data.paper.bibtex;
    $("#citation-message").textContent = "Use the citation provided with the paper.";
    copyButton.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(data.paper.bibtex); $("#citation-message").textContent = "BibTeX copied."; }
      catch {
        const range = document.createRange(); range.selectNodeContents($("#citation-text"));
        const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
        $("#citation-message").textContent = "Citation selected. Press Ctrl+C or Command+C to copy.";
      }
    });
  }
})();
