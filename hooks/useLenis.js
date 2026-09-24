"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

let activeLenis = null;

export const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  if (activeLenis) {
    activeLenis.scrollTo(target);
  } else {
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }
};

export const useLenis = () => {
  useEffect(() => {
    let lenis;
    let rafId;
    let cancelled = false;
    let started = false;

    const startLenis = async () => {
      if (started) return;
      started = true;

      try {
        const Lenis = (await import("lenis")).default;
        if (cancelled) return;

        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
          gestureOrientation: "vertical",
          syncTouch: false,
          touchMultiplier: 1.5,
          anchors: true,
        });
        activeLenis = lenis;
        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (error) {
        // Native scrolling remains available if the lazy-loaded chunk fails.
        console.warn("Lenis could not start; using native scrolling.", error);
      }
    };

    const startOnIntent = () => {
      void startLenis();
    };

    window.addEventListener("wheel", startOnIntent, { once: true, passive: true });
    window.addEventListener("touchstart", startOnIntent, { once: true, passive: true });
    window.addEventListener("keydown", startOnIntent, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("wheel", startOnIntent);
      window.removeEventListener("touchstart", startOnIntent);
      window.removeEventListener("keydown", startOnIntent);
      if (rafId !== undefined) cancelAnimationFrame(rafId);
      if (activeLenis === lenis) activeLenis = null;
      if (lenis) lenis.destroy();
    };
  }, []);
};