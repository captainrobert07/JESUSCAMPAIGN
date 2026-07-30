"use client";

import type { PointerEvent } from "react";

const restingValues = {
  "--hero-shift-x": "0px",
  "--hero-shift-y": "0px",
  "--hero-reverse-x": "0px",
  "--hero-reverse-y": "0px",
  "--hero-glow-x": "54%",
  "--hero-glow-y": "50%",
};

export function HeroTitle() {
  function moveTitle(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") {
      return;
    }

    const stage = event.currentTarget;
    const bounds = stage.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    stage.style.setProperty("--hero-shift-x", `${(x * 7).toFixed(2)}px`);
    stage.style.setProperty("--hero-shift-y", `${(y * 5).toFixed(2)}px`);
    stage.style.setProperty("--hero-reverse-x", `${(x * -10).toFixed(2)}px`);
    stage.style.setProperty("--hero-reverse-y", `${(y * -7).toFixed(2)}px`);
    stage.style.setProperty("--hero-glow-x", `${54 + x * 10}%`);
    stage.style.setProperty("--hero-glow-y", `${50 + y * 14}%`);
  }

  function resetTitle(event: PointerEvent<HTMLDivElement>) {
    const stage = event.currentTarget;

    Object.entries(restingValues).forEach(([property, value]) => {
      stage.style.setProperty(property, value);
    });
  }

  return (
    <div
      className="hero-title-stage"
      onPointerMove={moveTitle}
      onPointerLeave={resetTitle}
    >
      <span className="hero-title-glow" aria-hidden="true" />
      <h1 id="hero-title" aria-label="Jesus Campaign">
        <span className="screen-reader-text">JESUS CAMPAIGN</span>
        <span className="hero-logo-title" aria-hidden="true">
          <img src="/jesus-campaign-logo.png" alt="" />
        </span>
      </h1>
    </div>
  );
}
