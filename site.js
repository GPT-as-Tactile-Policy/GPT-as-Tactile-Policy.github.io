/* Standalone website: data lives in project-data.js. No dependencies. */
(() => {
  'use strict';
  const data = window.PROJECT_DATA;
  if (!data) return;
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const el = (tag, className, content) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  };
  const setText = (selector, text) => { if (text && $(selector)) $(selector).textContent = text; };
  const url = value => {
    if (typeof value !== 'string' || !value.trim()) return '';
    const clean = value.trim();
    if (/^(https?:\/\/|\.\/|\.\.\/|\/|assets\/)/i.test(clean) && !/^\/\//.test(clean)) return clean;
    return '';
  };
  const percent = value => typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 100;
  const formatPercent = value => percent(value) ? `${value.toFixed(1)}%` : '—';
  setText('#paper-title', data.paper.title);
  setText('#authors', data.paper.authors);
  setText('#affiliations', data.paper.affiliations);
  setText('#abstract-text', data.paper.abstract);
  if (data.tactileAblation) {
    const study = data.tactileAblation;
    const gain = study.withTouch - study.withoutTouch;
    setText('#ablation-with', `${study.withTouch}%`);
    setText('#ablation-without', `${study.withoutTouch}%`);
    setText('#ablation-gain', `+${gain} percentage points`);
    if ($('#bar-with')) $('#bar-with').style.width = `${study.withTouch}%`;
    if ($('#bar-without')) $('#bar-without').style.width = `${study.withoutTouch}%`;
  }
  if (data.paper.title) document.title = `${data.paper.title} · GPT-as-Tactile-Policy`;
  $$('.resource[data-resource]').forEach(link => {
    const href = url(data.links[link.dataset.resource]);
    if (!href) { link.setAttribute('role', 'link'); return; }
    link.href = href;
    link.removeAttribute('aria-disabled');
    link.querySelector('small')?.remove();
  });
  Object.entries(data.protocol).forEach(([key, value]) => setText(`#protocol-${key}`, value));
  $$('[data-figure]').forEach(figure => {
    const item = data.figures[figure.dataset.figure];
    const src = url(item?.src);
    if (!src) return;
    figure.querySelector('img').src = src;
    figure.querySelector('img').alt = item.alt || 'Research figure';
    figure.querySelector('img').loading = 'lazy';
    figure.querySelector('figcaption').textContent = item.caption || '';
    figure.hidden = false;
    if (figure.dataset.figure === 'caseStudy') $('.figure-note')?.remove();
  });
  function video(item, title) {
    const player = el('video');
    player.controls = true;
    player.preload = 'metadata';
    player.playsInline = true;
    player.setAttribute('aria-label', title);
    player.src = url(item.src);
    if (url(item.poster)) player.poster = url(item.poster);
    if (url(item.captions)) {
      const track = el('track');
      track.kind = 'captions'; track.label = 'English'; track.srclang = 'en'; track.src = url(item.captions);
      player.append(track);
    }
    const fallback = el('a', '', 'Download video'); fallback.href = url(item.src); player.append(fallback);
    return player;
  }
  $$('[data-video]').forEach(slot => {
    const item = data.videos[slot.dataset.video];
    if (!url(item?.src)) return;
    const title = slot.dataset.video === 'teaser' ? 'Project overview' : 'Insert Hole recording';
    slot.replaceChildren(video(item, title)); slot.classList.add('has-video'); slot.hidden = false;
    if (item.caption || item.speed) slot.append(el('p', 'media-meta', [item.caption, item.speed && `Playback: ${item.speed}`].filter(Boolean).join(' · ')));
    if (slot.dataset.video === 'teaser') $('.film-header .pending-label')?.remove();
  });
  function activateTabs(buttons, onSelect) {
    const select = (index, focus = false) => {
      buttons.forEach((button, i) => { button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1; });
      onSelect(index);
      if (focus) buttons[index].focus();
    };
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => select(index));
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
        if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = buttons.length - 1;
        if (next !== undefined) { event.preventDefault(); select(next, true); }
      });
    });
  }
  const paths = {
    bottle: '<path d="M45 15h10v15l10 14v35H35V44l10-14z M44 15v-5h12v5 M35 55h30 M42 62h16 M46 22h8"/><path d="M25 82h50 M50 3v-8"/>',
    key: '<circle cx="32" cy="45" r="14"/><circle cx="32" cy="45" r="5"/><path d="M46 45h35v10H69v-7h-8v7H50 M65 22v12m-4-4 4 4 4-4"/>',
    can: '<ellipse cx="50" cy="22" rx="22" ry="8"/><path d="M28 22v50c0 11 44 11 44 0V22 M29 61c8 9 34 9 42 0"/><ellipse cx="50" cy="22" rx="8" ry="3"/><path d="M39 42h22 M39 48h16 M20 84h60"/>',
    shelf: '<path d="M13 24h75v58H13z M13 64h75 M13 34h75 M43 43h9v9l7 7v16H36V59l7-7z M20 19v68 M81 19v68"/>',
    hole: '<path d="m18 62 32-13 34 13-32 16z M18 62v15l34 14 32-14V62 M52 78v13"/><ellipse cx="51" cy="63" rx="9" ry="4"/><path d="M46 5h10v38H46z M51 44v10m-5-4 5 5 5-5"/>',
    connector: '<path d="M27 19h46v23l-8 9H35l-8-9z M35 26h30v10H35z M42 19V8 M58 19V8 M23 69h54v17H23z M34 74h32 M50 51v11m-4-4 4 4 4-4"/>',
    tube: '<ellipse cx="50" cy="19" rx="10" ry="4"/><path d="M40 19v38 M60 19v38 M40 57c0 5 20 5 20 0 M21 69h58v18H21z M50 60v9"/><ellipse cx="50" cy="73" rx="12" ry="4"/><path d="M24 31v24m-4-5 4 5 4-5"/>',
    shapes: '<path d="m17 35 14-8 14 8-14 8z M17 35v17l14 8 14-8V35 M31 43v17"/><circle cx="70" cy="43" r="15"/><path d="m39 82 13-23 13 23z M17 89h67"/>'
  };
  function taskArt(task, index) {
    const art = el('div', 'task-art'); art.setAttribute('aria-hidden', 'true');
    const holder = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); holder.setAttribute('viewBox', '0 0 100 100');
    // Only fixed, authored path markup is used here; project data never becomes HTML.
    holder.innerHTML = paths[task.icon] || paths.hole;
    art.append(el('span', 'task-number', String(index + 1).padStart(2, '0')), holder, el('span', 'task-media-note', 'SCHEMATIC · VIDEO PENDING'));
    return art;
  }
  if ($('#task-grid')) data.tasks.forEach((task, index) => {
    const item = el('a', 'task-item'); item.href = `gallery.html?task=${encodeURIComponent(task.id)}`;
    item.append(taskArt(task, index), el('h4', '', task.name), el('p', '', task.category)); $('#task-grid').append(item);
  });
  if ($('#results-table')) {
    const header = el('tr');
    ['Method', ...data.tasks.map(task => task.name), 'Mean'].forEach(label => { const th = el('th', '', label); th.scope = 'col'; header.append(th); });
    $('#results-table thead').append(header);
    data.results.forEach(row => {
      const tr = el('tr', row.method === 'ours' ? 'ours' : '');
      const method = data.methods.find(item => item.id === row.method);
      const th = el('th', '', method?.name || row.method); th.scope = 'row'; tr.append(th);
      const values = data.tasks.map((_, i) => row.values[i]);
      const mean = percent(row.mean) ? row.mean : values.every(percent) ? values.reduce((sum, v) => sum + v, 0) / values.length : null;
      [...values, mean].forEach(value => { const cell = el('td', percent(value) ? 'has-result' : '', formatPercent(value)); if (!percent(value)) cell.setAttribute('aria-label', 'Result pending'); tr.append(cell); });
      $('#results-table tbody').append(tr);
    });
  }
  if ($('#stage-tabs')) {
    data.stages.forEach((stage, index) => {
      const button = el('button'); button.id = `stage-${index}`; button.type = 'button'; button.setAttribute('role', 'tab'); button.setAttribute('aria-controls', 'stage-panel');
      button.append(el('span', '', String(index + 1).padStart(2, '0')), document.createTextNode(stage.label)); $('#stage-tabs').append(button);
    });
    const renderStage = index => {
      const item = data.stages[index]; $('#stage-panel').setAttribute('aria-labelledby', `stage-${index}`);
      setText('#stage-index', `${data.stageLabel || 'Stage'} ${String(index + 1).padStart(2, '0')}`); setText('#stage-title', item.title); setText('#stage-description', item.description);
      const hasRms = typeof item.rms === 'number' && Number.isFinite(item.rms) && item.rms >= 0;
      setText('#rms-readout', hasRms ? `RMS displacement: ${item.rms.toFixed(2)} px` : 'Marker-displacement fields: figure forthcoming');
      const oldImage = $('#marker-slot img'); if (oldImage) oldImage.remove();
      $('.marker-pair').hidden = Boolean(url(item.markerSrc));
      if (url(item.markerSrc)) { const img = el('img'); img.src = url(item.markerSrc); img.alt = item.markerAlt || `Tactile marker increments for ${item.label}`; $('#marker-slot').insertBefore(img, $('#rms-readout')); }
      $('#marker-slot>small').hidden = Boolean(url(item.markerSrc));
    };
    const buttons = $$('#stage-tabs button'); activateTabs(buttons, renderStage);
    buttons.forEach((button, i) => { button.setAttribute('aria-selected', String(i === 0)); button.tabIndex = i === 0 ? 0 : -1; }); renderStage(0);
  }
  if ($('#bibtex') && data.paper.bibtex) {
    setText('#bibtex', data.paper.bibtex); $('#copy-bibtex').disabled = false;
    $('#copy-bibtex').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(data.paper.bibtex); setText('#copy-status', 'BibTeX copied.'); }
      catch { setText('#copy-status', 'Select and copy the citation text above.'); }
    });
  }
  if ($('#gallery-form')) {
    const initialTask = new URLSearchParams(location.search).get('task');
    const initial = data.tasks.find(task => task.id === initialTask);
    if (initial) $('#gallery-search').value = initial.name;
    data.methods.forEach(method => { const option = el('option', '', method.name); option.value = method.id; $('#gallery-method').append(option); });
    const recordings = data.recordings.filter(item => url(item.src));
    if (!recordings.length) { $('#gallery-method').disabled = true; $('#gallery-outcome').disabled = true; }
    function renderGallery() {
      const query = $('#gallery-search').value.trim().toLowerCase();
      const method = $('#gallery-method').value, outcome = $('#gallery-outcome').value;
      const matches = task => `${task.name} ${task.category} ${task.keywords}`.toLowerCase().includes(query);
      const grid = $('#recording-grid'); grid.replaceChildren();
      let shown = 0;
      if (recordings.length) recordings.forEach(item => {
        const task = data.tasks.find(t => t.id === item.task); if (!task || !matches(task) || (method !== 'all' && method !== item.method) || (outcome !== 'all' && outcome !== item.outcome)) return;
        const card = el('article', 'recording-item'); card.append(video(item, item.title || task.name), el('h2', '', item.title || task.name), el('p', '', item.caption || task.description));
        const methodName = data.methods.find(m => m.id === item.method)?.name || item.method;
        card.append(el('p', 'recording-meta', [methodName, item.outcome, item.speed && `Playback: ${item.speed}`].filter(Boolean).join(' · ')));
        if (url(item.notesUrl)) { const link = el('a', '', 'Execution notes ↗'); link.href = url(item.notesUrl); card.append(link); }
        grid.append(card); shown++;
      });
      else data.tasks.forEach((task, index) => {
        if (!matches(task)) return;
        const card = el('article', 'recording-item'); card.append(taskArt(task, index), el('h2', '', task.name), el('p', '', task.description), el('p', 'recording-meta', `${task.category} · Recording forthcoming`)); grid.append(card); shown++;
      });
      setText('#gallery-count', recordings.length ? `${shown} recording${shown === 1 ? '' : 's'}` : `${shown} task${shown === 1 ? '' : 's'} · 0 recordings available`);
      $('#gallery-empty').hidden = shown > 0;
    }
    $('#gallery-form').addEventListener('submit', event => event.preventDefault());
    $('#gallery-search').addEventListener('input', renderGallery); $('#gallery-method').addEventListener('change', renderGallery); $('#gallery-outcome').addEventListener('change', renderGallery);
    $('#gallery-form').addEventListener('reset', () => { $('#gallery-search').value = ''; $('#gallery-method').value = 'all'; $('#gallery-outcome').value = 'all'; renderGallery(); });
    renderGallery();
  }
})();
