"use client";

import { useEffect, useState } from "react";

const registrationUrl = "https://forms.gle/QP52v2ANrQe6PvCA6";

export function HouseOfWorshipPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("houseOfWorshipPopupDismissed") === "true") {
      return;
    }

    const timer = window.setTimeout(() => setIsOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  function closePopup() {
    sessionStorage.setItem("houseOfWorshipPopupDismissed", "true");
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="how-popup-backdrop">
      <section
        className="how-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="how-popup-title"
      >
        <button
          className="how-popup-close"
          type="button"
          aria-label="Close House of Worship invitation"
          onClick={closePopup}
        >
          Close
        </button>
        <p className="section-kicker light">House of Worship is here 🔥🙌</p>
        <h2 id="how-popup-title">A day set apart for His presence.</h2>
        <p>
          House of Worship, a worship series #01 by ABIDE Youth Collective,
          happens Saturday, August 22, 2026 from 10 AM to 5 PM at Jesus
          Campaign Church, Basement Floor, Pattom.
        </p>
        <div className="how-popup-actions">
          <a
            className="button button-light"
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closePopup}
          >
            Register free <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-ghost-dark" href="/house-of-worship" onClick={closePopup}>
            Event details
          </a>
        </div>
      </section>
    </div>
  );
}
