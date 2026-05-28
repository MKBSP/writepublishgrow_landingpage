"use client";

import { useEffect } from "react";

/* ── Helpers ────────────────────────────────────────────── */

function countUp(el: HTMLElement) {
  const raw = el.textContent?.trim() ?? "";
  const m = raw.match(/([\d,]+)/);
  if (!m) return;
  const numStr = m[1];
  const target = parseInt(numStr.replace(/,/g, ""), 10);
  if (!target) return;
  const idx = raw.indexOf(numStr);
  const pre = raw.slice(0, idx);
  const suf = raw.slice(idx + numStr.length);
  const comma = numStr.indexOf(",") > -1;
  const dur = target > 100 ? 1400 : target > 10 ? 900 : 500;
  const t0 = performance.now();
  el.textContent = pre + "0" + suf;

  function tick(now: number) {
    const p = Math.min((now - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    const v = Math.round(target * e);
    el.textContent = pre + (comma ? v.toLocaleString() : String(v)) + suf;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function once(
  nodeList: NodeListOf<Element> | Element[],
  opts: IntersectionObserverInit,
  fn: (el: Element) => void
) {
  if (!nodeList || !(nodeList as NodeListOf<Element>).length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        fn(e.target);
        obs.unobserve(e.target);
      }
    });
  }, opts);
  (nodeList as NodeListOf<Element>).forEach((el) => obs.observe(el));
}

/* ── Component ──────────────────────────────────────────── */

export default function ScrollAnimations() {
  useEffect(() => {
    /* ❶ General scroll reveals */
    const sel =
      ".section-head,.sea-quote,.sea-visual,.step-cell,.case,.feat," +
      ".ch-cell,.price-col,.rm-col,.manual-note,.credits-note," +
      ".cta-section h2,.cta-section p,.cta-section .hero-cta";
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add("scroll-hide");
    });

    // Stagger siblings
    [
      ".sea-points .pt",
      ".steps .step-cell",
      ".cases .case",
      ".channels .ch-cell",
      ".feats .feat",
      ".roadmap .rm-col",
    ].forEach((s) => {
      document.querySelectorAll(s).forEach((el, i) => {
        if (!el.classList.contains("scroll-hide")) el.classList.add("scroll-hide");
        (el as HTMLElement).style.setProperty("--reveal-delay", i * 120 + "ms");
      });
    });

    // Individual points
    document.querySelectorAll(".sea-points .pt").forEach((el, i) => {
      el.classList.add("scroll-hide");
      (el as HTMLElement).style.setProperty("--reveal-delay", i * 140 + "ms");
    });

    // Single observer for all reveals
    once(
      document.querySelectorAll(".scroll-hide"),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      (el) => el.classList.add("in-view")
    );

    /* ❷ Hero schematic cascade */
    const sch = document.querySelector(".schematic");
    if (sch) {
      once([sch], { threshold: 0.15 }, () => {
        const src = sch.querySelector(".sch-source");
        const arr = sch.querySelector(".sch-arrows");
        const posts = sch.querySelectorAll(".sch-post");
        const foot = sch.querySelector(".sch-foot");

        if (src) setTimeout(() => src.classList.add("anim-in"), 80);
        if (src) setTimeout(() => src.classList.add("reading"), 500);
        if (arr) setTimeout(() => arr.classList.add("anim-in"), 900);
        posts.forEach((p, i) => {
          setTimeout(() => p.classList.add("anim-in"), 1150 + i * 200);
        });
        if (foot) setTimeout(() => foot.classList.add("anim-in"), 1800);
      });
    }

    /* ❸ Strikethrough draw */
    const strike = document.querySelector(".sea-quote .strike");
    if (strike) {
      once([strike], { threshold: 0.5 }, () => {
        setTimeout(() => strike.classList.add("draw"), 300);
      });
    }

    /* ❹ Chart SVG line draw */
    document.querySelectorAll(".chart").forEach((chart) => {
      const svg = chart.querySelector("svg");
      if (!svg) return;
      const polys = svg.querySelectorAll("polyline");
      const paths = svg.querySelectorAll("path");
      const circle = svg.querySelector("circle");

      if (polys[1]) {
        try {
          const len = (polys[1] as SVGGeometryElement).getTotalLength();
          (polys[1] as SVGElement).style.strokeDasharray = String(len);
          (polys[1] as SVGElement).style.strokeDashoffset = String(len);
        } catch {
          /* not rendered yet */
        }
      }
      if (paths.length > 1) (paths[1] as SVGElement).style.opacity = "0";
      if (circle) (circle as SVGElement).style.opacity = "0";
    });

    once(
      document.querySelectorAll(".chart"),
      { threshold: 0.25 },
      (chart) => {
        const svg = chart.querySelector("svg");
        if (!svg) return;
        const polys = svg.querySelectorAll("polyline");
        const paths = svg.querySelectorAll("path");
        const circle = svg.querySelector("circle");

        if (polys[1]) {
          setTimeout(() => {
            (polys[1] as SVGElement).style.transition =
              "stroke-dashoffset 1400ms cubic-bezier(0.22,1,0.36,1)";
            (polys[1] as SVGElement).style.strokeDashoffset = "0";
          }, 300);
        }
        if (paths.length > 1) {
          const origOp = paths[1].getAttribute("opacity") || "0.08";
          setTimeout(() => {
            (paths[1] as SVGElement).style.transition = "opacity 800ms ease";
            (paths[1] as SVGElement).style.opacity = origOp;
          }, 500);
        }
        if (circle) {
          setTimeout(() => {
            (circle as SVGElement).style.transition = "opacity 300ms ease";
            (circle as SVGElement).style.opacity = "1";
          }, 1700);
        }
      }
    );

    /* ❺ Counter animations */
    once(
      document.querySelectorAll(".case .delta .to, .mn-stat .v"),
      { threshold: 0.5 },
      (el) => countUp(el as HTMLElement)
    );

    /* ❻ Feature bar chart grow */
    document.querySelectorAll(".viz-chart").forEach((c) => {
      c.querySelectorAll(".bar").forEach((b) => {
        const htmlB = b as HTMLElement;
        htmlB.dataset.h = htmlB.style.height;
        htmlB.style.height = "0";
      });
    });
    once(
      document.querySelectorAll(".viz-chart"),
      { threshold: 0.25 },
      (c) => {
        c.querySelectorAll(".bar").forEach((b, i) => {
          const htmlB = b as HTMLElement;
          setTimeout(() => {
            htmlB.style.transition =
              "height 700ms cubic-bezier(0.22,1,0.36,1)";
            htmlB.style.height = htmlB.dataset.h || "";
          }, i * 50);
        });
      }
    );

    /* ❼ Agent card cascade */
    document.querySelectorAll(".viz-agents").forEach((w) => {
      w.querySelectorAll(".agent").forEach((a) => {
        a.classList.add("scroll-hide");
      });
    });
    once(
      document.querySelectorAll(".viz-agents"),
      { threshold: 0.3 },
      (w) => {
        w.querySelectorAll(".agent").forEach((a, i) => {
          (a as HTMLElement).style.setProperty(
            "--reveal-delay",
            i * 80 + "ms"
          );
          a.classList.add("in-view");
        });
      }
    );

    /* ❽ Credit balance counter */
    const bal = document.querySelector(".viz-credit .balance");
    if (bal) {
      once([bal], { threshold: 0.5 }, () => {
        const dur = 1400;
        const t0 = performance.now();
        function tick(now: number) {
          const p = Math.min((now - t0) / dur, 1);
          bal!.textContent =
            "$" + (24.8 * (1 - Math.pow(1 - p, 3))).toFixed(2);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
  }, []);

  return null;
}
