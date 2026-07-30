import type { Metadata } from "next";
import Link from "next/link";
import { HouseOfWorshipRegistrationForm } from "./registration-form";

export const metadata: Metadata = {
  title: "House of Worship Registration",
  description:
    "Register free for House of Worship, a 12-hour continuous worship gathering on August 29 from 10 AM to 10 PM at Pattom, Trivandrum.",
  openGraph: {
    title: "House of Worship | August 29",
    description:
      "A 12-hour continuous worship gathering at Pattom, Trivandrum. Register free with Jesus Campaign Church.",
    images: [
      {
        url: "/images/house-of-worship-logo.png",
        width: 1249,
        height: 1249,
        alt: "House of Worship logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Worship | August 29",
    description:
      "A 12-hour continuous worship gathering at Pattom, Trivandrum. Register free.",
    images: ["/images/house-of-worship-logo.png"],
  },
};

export default function HouseOfWorshipPage() {
  return (
    <main className="event-page">
      <header className="event-header">
        <Link className="event-wordmark" href="/" aria-label="Jesus Campaign Church home">
          <img src="/jesus-campaign-logo.png" alt="" />
          <span>Jesus Campaign</span>
        </Link>
        <Link className="event-back" href="/">
          Back to church site <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="event-hero" aria-labelledby="event-title">
        <div className="event-logo-panel">
          <img
            src="/images/house-of-worship-logo.png"
            alt="House of Worship logo"
          />
        </div>
        <div className="event-copy">
          <p className="eyebrow light">Jesus Campaign Youth presents</p>
          <h1 id="event-title">
            House of
            <br />
            Worship
          </h1>
          <p className="event-summary">
            Twelve hours of continuous worship, prayer, and the Word with
            worship leaders gathering in Pattom, Trivandrum.
          </p>
          <div className="event-meta-grid" aria-label="Event details">
            <span>August 29</span>
            <span>10 AM-10 PM</span>
            <span>Pattom, Trivandrum</span>
            <span>Free registration</span>
          </div>
        </div>
      </section>

      <section className="event-register" aria-labelledby="register-title">
        <div>
          <p className="section-kicker light">Register free</p>
          <h2 id="register-title">
            Make room
            <br />
            for worship.
          </h2>
          <p>
            Add your details and we will keep your place noted for House of
            Worship. Come ready for a full day of praise, prayer, and
            encounter.
          </p>
        </div>
        <HouseOfWorshipRegistrationForm />
      </section>
    </main>
  );
}
