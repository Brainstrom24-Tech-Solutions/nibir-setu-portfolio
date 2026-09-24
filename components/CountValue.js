"use client";

import { useEffect, useRef } from "react";

export default function CountValue({ value, duration = 2800 }) {
  const numberRef = useRef(null);
  const digits = value.match(/^\d+(?:\.\d+)?/)?.[0] ?? "0";
  const suffix = value.slice(digits.length);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return;
    const target = Number(digits);
    const decimals = digits.split(".")[1]?.length ?? 0;
    const format = (number) => number.toFixed(decimals).padStart(digits.startsWith("0") ? digits.length : 1, "0");
    let frame;
    let observer;

    // Always derive the target from the prop, never from animated DOM text.
    // This also keeps React Strict Mode's setup/cleanup cycle repeatable.
    element.textContent = digits;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)) return;

    element.textContent = format(0);
    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let startedAt;
      const tick = (time) => {
        startedAt ??= time;
        const progress = Math.min((time - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 2);
        element.textContent = progress === 1 ? digits : format(target * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.25, rootMargin: "0px 0px -8% 0px" });
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame !== undefined) cancelAnimationFrame(frame);
      element.textContent = digits;
    };
  }, [digits, duration]);

  return (
    <span className="count-value">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        <span ref={numberRef} className="count-digits">{digits}</span>
        <span className="count-suffix">{suffix}</span>
      </span>
    </span>
  );
}
