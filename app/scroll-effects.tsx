"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const heroMedia = document.querySelector<HTMLElement>(".hero-media");
    let frame = 0;

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateScroll = () => {
      frame = 0;
      const available = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(window.scrollY / available, 1);
      root.style.setProperty("--scroll-progress", progress.toString());

      if (heroMedia && window.scrollY < window.innerHeight * 1.4) {
        const offset = Math.min(window.scrollY * 0.09, 72);
        heroMedia.style.setProperty("--hero-scroll", `${offset}px`);
      }
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      root.classList.remove("motion-ready");
    };
  }, []);

  return <span className="scroll-progress" aria-hidden="true" />;
}
