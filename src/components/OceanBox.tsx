"use client";

import { useEffect } from "react";

const AMP = 7;
const PAD = 14;
const STEPS = 28;
const ACCENT = "#5b6cff";

function noise(pos: number, time: number, seed: number) {
  const s = seed * 0.1;
  return (
    Math.sin(pos * 0.7 + time * 0.6 + s) * 0.35 +
    Math.sin(pos * 1.3 + time * 0.9 + s * 2.1) * 0.25 +
    Math.sin(pos * 2.7 + time * 0.4 + s * 0.8 + Math.sin(time * 0.3) * 2) *
      0.25 +
    Math.sin(pos * 5.1 + time * 1.2 + s * 1.7) * 0.15
  );
}

function w(s: number) {
  return Math.sin(s * Math.PI);
}

export default function OceanBox() {
  useEffect(() => {
    const em = document.querySelector(".hero h1 em") as HTMLElement | null;
    if (!em) return;

    em.style.background = "transparent";
    em.style.filter = "none";
    em.style.position = "relative";

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "position:absolute;pointer-events:none;z-index:-1;";
    em.insertBefore(canvas, em.firstChild);

    const ctx = canvas.getContext("2d")!;
    let rw: number, rh: number;
    let amp = AMP,
      targetAmp = AMP;
    let raf: number;

    function resize() {
      rw = em!.offsetWidth;
      rh = em!.offsetHeight;
      const cw = rw + PAD * 2;
      const ch = rh + PAD * 2;
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
      canvas.style.width = cw + "px";
      canvas.style.height = ch + "px";
      canvas.style.top = -PAD + "px";
      canvas.style.left = -PAD + "px";
    }

    resize();

    let ro: ResizeObserver | null = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(resize);
      ro.observe(em);
    } else {
      window.addEventListener("resize", resize);
    }

    const onEnter = () => {
      targetAmp = 0;
    };
    const onLeave = () => {
      targetAmp = AMP;
    };
    em.addEventListener("mouseenter", onEnter);
    em.addEventListener("mouseleave", onLeave);

    function draw() {
      amp += (targetAmp - amp) * 0.07;
      const t = performance.now() / 250;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.beginPath();

      // Top edge
      for (let i = 0; i <= STEPS; i++) {
        const s = i / STEPS;
        const x = PAD + s * rw;
        const d = noise(s * 8, t, 0) * amp * w(s);
        const y = PAD - d;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      // Right edge
      for (let i = 0; i <= STEPS; i++) {
        const s = i / STEPS;
        const d = noise(s * 8, t, 50) * amp * w(s);
        ctx.lineTo(PAD + rw + d, PAD + s * rh);
      }
      // Bottom edge
      for (let i = 0; i <= STEPS; i++) {
        const s = i / STEPS;
        const d = noise(s * 8, t, 100) * amp * w(s);
        ctx.lineTo(PAD + (1 - s) * rw, PAD + rh + d);
      }
      // Left edge
      for (let i = 0; i <= STEPS; i++) {
        const s = i / STEPS;
        const d = noise(s * 8, t, 150) * amp * w(s);
        ctx.lineTo(PAD - d, PAD + (1 - s) * rh);
      }

      ctx.closePath();
      ctx.fillStyle = ACCENT;
      ctx.fill();
      ctx.restore();
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      em!.removeEventListener("mouseenter", onEnter);
      em!.removeEventListener("mouseleave", onLeave);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", resize);
      canvas.remove();
    };
  }, []);

  return null;
}
