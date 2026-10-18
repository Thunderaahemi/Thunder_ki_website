import React, { useEffect, useRef } from 'react';

export const BackgroundScrollAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const START_FRAME = 1;
    const END_FRAME = 573;
    const TOTAL_FRAMES = END_FRAME + 1;

    /* Multiple fallback paths for frames */
    const candidatePaths = [
      'frames/',
      'website Gif/',
      '../Website/website Gif/',
      '../Website Gif/',
      './',
      '/frames/',
      '/website Gif/'
    ];
    let basePath = candidatePaths[0];

    const pad = (n: number) => String(n).padStart(3, '0');
    const frameUrl = (i: number, base?: string) => `${base || basePath}Final Website Video${pad(i)}.gif`;

    /* State tracking */
    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);
    const isLoaded = new Uint8Array(TOTAL_FRAMES);
    let renderedFrame = -1;
    let targetFrame = 1;
    let currentFrame = 1;
    let animating = false;
    let userHasScrolled = false;
    let hasLoadedAnyDiskFrames = false;
    const DAMPING = 0.085;
    let animationFrameId: number;
    let openingIntroTimer: ReturnType<typeof setInterval> | null = null;

    /* High-DPI resize */
    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      redraw(true);
    }

    function cover(img: HTMLImageElement) {
      if (!ctx || !canvas) return;
      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      if (!iw || !ih) return;
      const s = Math.max(cw / iw, ch / ih);
      const nw = iw * s, nh = ih * s;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - nw) / 2, (ch - nh) / 2, nw, nh);
    }

    function nearest(target: number) {
      if (isLoaded[target]) return target;
      for (let d = 1; d <= END_FRAME; d++) {
        const p = target - d;
        if (p >= START_FRAME && isLoaded[p]) return p;
        const n = target + d;
        if (n <= END_FRAME && isLoaded[n]) return n;
      }
      return -1;
    }

    /* Cinematic Shreyas & Logo Canvas Animation */
    function drawShreyasAndLogoAnimation(frameIdx: number) {
      if (!ctx || !canvas) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const progress = Math.max(0, Math.min(1, frameIdx / END_FRAME));

      // 1. Deep OLED Obsidian Base
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, cw, ch);

      // 2. Atmospheric cold tungsten spotlight synced with current frame
      const lightX = cw * (0.5 + Math.sin(frameIdx * 0.02) * 0.15);
      const lightY = ch * (0.42 + Math.cos(frameIdx * 0.015) * 0.08);
      const spotGrad = ctx.createRadialGradient(
        lightX,
        lightY,
        20,
        lightX,
        lightY,
        cw * 0.65
      );
      spotGrad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      spotGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.03)');
      spotGrad.addColorStop(0.7, 'rgba(10, 10, 15, 0.01)');
      spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = spotGrad;
      ctx.fillRect(0, 0, cw, ch);

      // 3. Central Silhouette & Facial Corridor Area for Shreyas
      ctx.save();
      const centerX = cw * 0.5;
      const centerY = ch * 0.52;
      const headRadius = Math.min(cw, ch) * 0.16;

      // Outer kinetic energetic halo
      ctx.beginPath();
      ctx.arc(centerX, centerY - headRadius * 0.5, headRadius * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.04 + Math.sin(frameIdx * 0.05) * 0.02})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Cinematic Rim Light for Shreyas Profile / Headshot
      const rimGrad = ctx.createLinearGradient(
        centerX - headRadius,
        centerY - headRadius,
        centerX + headRadius,
        centerY + headRadius
      );
      rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
      rimGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.04)');
      rimGrad.addColorStop(1, 'rgba(255, 255, 255, 0.14)');

      ctx.beginPath();
      // Artistic Head & Shoulder Studio Silhouette
      ctx.arc(centerX, centerY - headRadius * 0.6, headRadius * 0.72, 0, Math.PI * 2);
      ctx.fillStyle = '#060608';
      ctx.fill();
      ctx.strokeStyle = rimGrad;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Torso / Camera Operator Contour
      ctx.beginPath();
      ctx.moveTo(centerX - headRadius * 1.6, centerY + headRadius * 2);
      ctx.quadraticCurveTo(
        centerX - headRadius * 0.9,
        centerY + headRadius * 0.4,
        centerX - headRadius * 0.45,
        centerY + headRadius * 0.1
      );
      ctx.lineTo(centerX + headRadius * 0.45, centerY + headRadius * 0.1);
      ctx.quadraticCurveTo(
        centerX + headRadius * 0.9,
        centerY + headRadius * 0.4,
        centerX + headRadius * 1.6,
        centerY + headRadius * 2
      );
      ctx.closePath();
      ctx.fillStyle = '#050507';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 4. Stylized Logo Emblem: Floating Geometric Monogram "THUNDERAAHEMI / SHREYAS"
      const logoY = centerY - headRadius * 1.8;
      ctx.font = `600 ${Math.max(12, Math.floor(cw * 0.013))}px 'Geist', monospace`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '6px';
      ctx.fillText('THUNDERAAHEMI', centerX, logoY);

      // Sub-logo line
      ctx.font = `400 ${Math.max(10, Math.floor(cw * 0.009))}px 'Inter', sans-serif`;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.fillText(`FRAME ${pad(Math.round(frameIdx))} / 573 · SHREYAS CREATIVE ARCHIVE`, centerX, logoY + 22);

      // Subtle logo emblem diamond
      ctx.beginPath();
      ctx.moveTo(centerX, logoY - 26);
      ctx.lineTo(centerX + 12, logoY - 14);
      ctx.lineTo(centerX, logoY - 2);
      ctx.lineTo(centerX - 12, logoY - 14);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 5. Kinetic laser sweep lines across depth
      ctx.lineWidth = 1;
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const yOffset = ch * (0.28 + j * 0.22);
        for (let x = 0; x <= cw; x += 30) {
          const sine = Math.sin((x / cw) * Math.PI * 4 + progress * 6 + j * 1.5);
          const py = yOffset + sine * 20;
          if (x === 0) ctx.moveTo(x, py);
          else ctx.lineTo(x, py);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.025 + j * 0.015})`;
        ctx.stroke();
      }

      ctx.restore();
    }

    function redraw(force: boolean) {
      if (!ctx || !canvas) return;
      const idx = Math.max(START_FRAME, Math.min(END_FRAME, Math.round(currentFrame)));

      if (hasLoadedAnyDiskFrames) {
        const f = isLoaded[idx] ? idx : nearest(idx);
        if (f !== -1) {
          if (f === renderedFrame && !force) return;
          renderedFrame = f;
          const img = images[f];
          if (img && img.complete && img.naturalWidth) {
            cover(img);
            return;
          }
        }
      }

      // Render the Shreyas & Logo canvas animation
      drawShreyasAndLogoAnimation(currentFrame);
      renderedFrame = idx;
    }

    /* Main smooth easing loop */
    function tick() {
      const diff = targetFrame - currentFrame;
      if (Math.abs(diff) > 0.005) {
        currentFrame += diff * DAMPING;
        redraw(false);
        animationFrameId = requestAnimationFrame(tick);
      } else {
        currentFrame = targetFrame;
        redraw(false);
        animating = false;
      }
    }

    /* Calculate scroll progress across the document */
    function onScroll() {
      userHasScrolled = true;
      if (openingIntroTimer) {
        clearInterval(openingIntroTimer);
        openingIntroTimer = null;
      }

      const maxScroll = Math.max(
        1,
        (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight
      );
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;

      /* Map progress seamlessly from frame 1 to 573 */
      targetFrame = Math.round(progress * (END_FRAME - START_FRAME) + START_FRAME);

      /* Hide scroll hint once user initiates scroll */
      const hint = document.getElementById('scroll-hint');
      if (hint) {
        hint.style.opacity = scrollTop > 40 ? '0' : '1';
        hint.style.pointerEvents = 'none';
      }

      if (hasLoadedAnyDiskFrames) {
        prioritise(targetFrame);
      }

      if (!animating) {
        animating = true;
        animationFrameId = requestAnimationFrame(tick);
      }
    }

    /* Preloader with priority window */
    const MAX_CON = 8;
    let active = 0;
    const queue: number[] = [];
    const enqueued = new Uint8Array(TOTAL_FRAMES);

    function load(i: number) {
      if (images[i] || isLoaded[i]) return;
      const img = new Image();
      images[i] = img;
      img.onload = () => {
        isLoaded[i] = 1;
        hasLoadedAnyDiskFrames = true;
        active--;
        const cur = Math.round(currentFrame);
        if (i === cur || renderedFrame === -1) redraw(false);
        pump();
      };
      img.onerror = () => {
        active--;
        pump();
      };
      img.src = frameUrl(i);
    }

    function pump() {
      while (active < MAX_CON && queue.length) {
        const i = queue.shift();
        if (i !== undefined && !isLoaded[i]) {
          active++;
          load(i);
        }
      }
    }

    function enqueue(i: number) {
      if (i < START_FRAME || i > END_FRAME || isLoaded[i] || enqueued[i]) return;
      enqueued[i] = 1;
      queue.push(i);
    }

    function prioritise(center: number) {
      const R = 35, hi: number[] = [];
      for (let r = 0; r <= R; r++) {
        const n = center + r;
        if (n <= END_FRAME && !isLoaded[n]) hi.push(n);
        const p = center - r;
        if (r > 0 && p >= START_FRAME && !isLoaded[p]) hi.push(p);
      }
      for (let i = hi.length - 1; i >= 0; i--) {
        const f = hi[i];
        if (!enqueued[f]) {
          enqueued[f] = 1;
          queue.unshift(f);
        }
      }
      pump();
    }

    function queueAll() {
      for (let i = START_FRAME; i <= END_FRAME; i++) enqueue(i);
      pump();
    }

    /* Auto-playback of opening frames so people see the first few seconds of animation */
    function playOpeningSeconds() {
      let introFrame = 1;
      const introTarget = 85; /* First ~3.5 seconds */
      const fps = 24;

      openingIntroTimer = setInterval(() => {
        if (userHasScrolled) {
          if (openingIntroTimer) clearInterval(openingIntroTimer);
          return;
        }
        introFrame++;
        if (introFrame <= introTarget) {
          targetFrame = introFrame;
          currentFrame = introFrame;
          if (hasLoadedAnyDiskFrames) {
            prioritise(introFrame);
          }
          redraw(false);
        } else {
          if (openingIntroTimer) clearInterval(openingIntroTimer);
        }
      }, 1000 / fps);
    }

    /* Boot sequence */
    function start() {
      resize();
      prioritise(START_FRAME);
      setTimeout(queueAll, 60);
      setTimeout(playOpeningSeconds, 200);
      onScroll();
    }

    /* Path detection for frame files */
    function detectPath(idx: number) {
      if (idx >= candidatePaths.length) {
        basePath = candidatePaths[0];
        start();
        return;
      }
      const c = candidatePaths[idx];
      const t = new Image();
      t.onload = () => {
        basePath = c;
        hasLoadedAnyDiskFrames = true;
        start();
      };
      t.onerror = () => detectPath(idx + 1);
      t.src = frameUrl(START_FRAME, c);
    }

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    detectPath(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (openingIntroTimer) clearInterval(openingIntroTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      id="animation-canvas"
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen z-0 pointer-events-none block bg-black"
      aria-hidden="true"
    />
  );
};
