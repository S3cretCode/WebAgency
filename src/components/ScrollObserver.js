"use client";

import { useEffect } from "react";

/**
 * Scroll reveal observer — watches elements with the ".reveal" class
 * and adds ".visible" when they enter the viewport.
 * Uses IntersectionObserver for performant scroll-based animation.
 */
export default function ScrollObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // This component renders nothing
}
