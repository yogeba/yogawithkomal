"use client";
import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const els = document.querySelectorAll(".reveal");
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92) el.classList.add("in");
      });
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
      );
      els.forEach((el) => {
        if (!el.classList.contains("in")) io.observe(el);
      });
      return () => io.disconnect();
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  return null;
}
