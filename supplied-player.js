(() => {
  'use strict';
  let active;
  const time = value => value.toFixed(1) + ' s';

  for (const card of document.querySelectorAll('.supplied-player')) {
    const q = selector => card.querySelector(selector);
    const video = q('video');
    const {duration, moments} = JSON.parse(q('script').textContent);
    const play = q('.play');
    const seek = q('input[type=range]');
    const readout = q('output');
    const jump = q('.jump');
    const expand = q('.expand');
    const warning = q('.warning');
    const tiles = Array.from(card.querySelectorAll('canvas'), canvas => {
      const [x, y, w, h] = canvas.dataset.crop.split(',').map(Number);
      return { canvas, ctx: canvas.getContext('2d'), x, y, w, h };
    });
    let hasFrame = false; card.dataset.presentedFrames = '0'; let lastSample=-1; const sample=document.createElement('canvas');sample.width=32;sample.height=20;const sampleContext=sample.getContext('2d',{willReadFrequently:true});
    let stopAt;
    let scrubbing = false;

    function paint(image, width, height) {
      for (const {canvas, ctx, x, y, w, h} of tiles) {
        ctx.drawImage(image, x * width / 960, y * height / 570, w * width / 960, h * height / 570, 0, 0, canvas.width, canvas.height);
      }
    }

    function update(timeNow) {
      if (!scrubbing) seek.value = timeNow;
      readout.value = time(timeNow) + ' / ' + time(duration);
    }

    function frame() {
      if (video.readyState >= 2 && tiles.length) {
        paint(video, video.videoWidth, video.videoHeight);
        hasFrame = true; card.dataset.presentedFrames = String(Number(card.dataset.presentedFrames) + 1); card.dataset.lastPaintedTime = String(video.currentTime); if(Math.abs(video.currentTime-lastSample)>.5){sampleContext.drawImage(tiles[0].canvas,0,0,32,20);const bytes=sampleContext.getImageData(0,0,32,20).data;let lo=255,hi=0,sum=0;for(let i=0;i<bytes.length;i+=4){lo=Math.min(lo,bytes[i]);hi=Math.max(hi,bytes[i]);sum+=bytes[i];}card.dataset.frameRange=String(hi-lo);card.dataset.frameSignature=String(sum);lastSample=video.currentTime;}
      }
      update(video.currentTime);
      if (stopAt !== undefined && video.currentTime >= stopAt) {
        stopAt = undefined;
        video.pause();
      }
    }

    if (tiles.length) {
      const poster = new Image();
      poster.onload = () => { if (!hasFrame) paint(poster, poster.naturalWidth, poster.naturalHeight); };
      poster.src = video.poster;
      if (video.requestVideoFrameCallback) {
        const onFrame = () => {
          frame();
          video.requestVideoFrameCallback(onFrame);
        };
        video.requestVideoFrameCallback(onFrame);
      } else { const tick = () => { if (!video.paused) frame(); requestAnimationFrame(tick); }; requestAnimationFrame(tick); }
    }

    function start() {
      if (active && active !== video) active.pause();
      active = video;
      warning.hidden = true;
      video.play().catch(error => {
        if (error.name === 'AbortError') return;
        warning.textContent = 'Playback could not start in this browser.';
        warning.hidden = false;
      });
    }
    function move(target) {
      video.currentTime = Math.max(0, Math.min(duration, target));
      update(video.currentTime);
    }

    function addJump(label, at, end) {
      const option = document.createElement('option');
      option.textContent = label;
      option.value = String(at);
      if (end !== undefined) option.dataset.end = end;
      jump.append(option);
    }
    if (moments.length) {
      for (const moment of moments) addJump(...moment);
    } else {
      addJump('Start', 0);
      addJump('Midpoint', duration / 2);
      addJump('Final seconds', Math.max(duration / 2, duration - 2));
    }

    seek.max = duration;
    seek.addEventListener('input', () => {
      scrubbing = true;
      stopAt = undefined;
      move(Number(seek.value));
    });
    seek.addEventListener('change', () => { scrubbing = false; });
    play.addEventListener('click', () => {
      stopAt = undefined;
      if (video.paused) {
        if (video.ended) move(0);
        start();
      } else video.pause();
    });
    q('.restart').addEventListener('click', () => { stopAt = undefined; move(0); start(); });
    q('.speed select').addEventListener('change', event => { video.playbackRate = Number(event.target.value); });
    jump.addEventListener('change', () => {
      const item = jump.selectedOptions[0];
      if (item.value === '') return;
      stopAt = item.dataset.end === undefined ? undefined : Number(item.dataset.end);
      move(Number(item.value));
      if (stopAt !== undefined) start();
      jump.selectedIndex = 0;
    });
    for (const event of ['seeked','loadeddata','timeupdate','canplay']) video.addEventListener(event, frame);
    for (const event of ['play','pause','ended']) {
      video.addEventListener(event, () => { play.textContent = video.paused ? 'Play' : 'Pause'; });
    }
    expand.addEventListener('click', async () => {
      if (card.classList.contains('is-expanded')) { card.classList.remove('is-expanded'); expand.textContent='Fullscreen'; if(document.fullscreenElement) await document.exitFullscreen().catch(()=>{}); return; }
      card.classList.add('is-expanded'); expand.textContent='Exit fullscreen';
      if(card.requestFullscreen) await card.requestFullscreen().catch(()=>{});
    });
    document.addEventListener('keydown',event=>{if(event.key==='Escape'){card.classList.remove('is-expanded');expand.textContent='Fullscreen';}});
    document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement){card.classList.remove('is-expanded');expand.textContent='Fullscreen';}});

    video.controls = false;
    if (tiles.length) {
      video.setAttribute('aria-hidden','true');
      video.tabIndex = -1;
    }
    update(0);
    card.classList.add('ready');
  }
})();