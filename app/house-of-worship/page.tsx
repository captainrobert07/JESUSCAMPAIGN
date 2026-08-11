import type { Metadata } from "next";
import Link from "next/link";

const registrationUrl = "https://forms.gle/QP52v2ANrQe6PvCA6";
const abideInstagram =
  "https://www.instagram.com/abide.youth.collective?igsh=bmUyZjd4eGZ4a3M0";
const abideFacebook = "https://www.facebook.com/share/1Hd77sPhWo/";

const posters = [
  {
    src: "/images/house-of-worship-2026/blue-main-poster.png",
    alt: "House of Worship August 22 2026 blue main event poster",
    title: "Main invitation",
  },
  {
    src: "/images/house-of-worship-2026/nahoom-abraham.png",
    alt: "House of Worship featuring Nahoom Abraham poster",
    title: "Nahoom Abraham",
  },
  {
    src: "/images/house-of-worship-2026/tanuja-debermma.png",
    alt: "House of Worship featuring Tanuja Debermma poster",
    title: "Tanuja Debermma",
  },
  {
    src: "/images/house-of-worship-2026/samson-sam.png",
    alt: "House of Worship featuring Samson Sam poster",
    title: "Samson Sam",
  },
  {
    src: "/images/house-of-worship-2026/white-info-poster.png",
    alt: "House of Worship white information poster",
    title: "Event details",
  },
  {
    src: "/images/house-of-worship-2026/sign-poster.png",
    alt: "House of Worship sign style poster",
    title: "Come ready",
  },
  {
    src: "/images/house-of-worship-2026/make-room-poster.png",
    alt: "Make room for His presence House of Worship poster",
    title: "Make room",
  },
  {
    src: "/images/house-of-worship-2026/join-us-poster.png",
    alt: "Join us for House of Worship August 22 2026 poster",
    title: "Join us",
  },
];

export const metadata: Metadata = {
  title: "House of Worship | August 22, 2026",
  description:
    "Register free for House of Worship, a worship series #01 by ABIDE Youth Collective on August 22, 2026 from 10 AM to 5 PM at Jesus Campaign Church, Pattom, Trivandrum.",
  openGraph: {
    title: "House of Worship | August 22, 2026",
    description:
      "A day set apart for His presence. Free registration for House of Worship by ABIDE Youth Collective at Jesus Campaign Church, Pattom, Trivandrum.",
    images: [
      {
        url: "/images/house-of-worship-2026/blue-main-poster.png",
        width: 1448,
        height: 2048,
        alt: "House of Worship August 22 2026 event poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Worship | August 22, 2026",
    description:
      "Free registration for House of Worship by ABIDE Youth Collective, 10 AM to 5 PM at Pattom, Trivandrum.",
    images: ["/images/house-of-worship-2026/blue-main-poster.png"],
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
        <figure className="event-photo-panel">
          <img
            src="/images/house-of-worship-2026/blue-main-poster.png"
            alt="House of Worship August 22 2026 event poster"
          />
          <figcaption>ABIDE Youth Collective · Jesus Campaign Church</figcaption>
        </figure>
        <div className="event-copy">
          <p className="eyebrow light">House of Worship is here 🔥🙌</p>
          <h1 id="event-title">
            House of
            <br />
            Worship
          </h1>
          <p className="event-summary">
            A day set apart for His presence. House of Worship, a worship
            series #01 by ABIDE Youth Collective, gathers worship leaders and
            hungry hearts in Pattom, Trivandrum.
          </p>
          <div className="event-meta-grid" aria-label="Event details">
            <span>August 22, 2026</span>
            <span>Saturday</span>
            <span>10 AM to 5 PM</span>
            <span>Free registration</span>
          </div>
          <div className="event-hero-actions">
            <a
              className="button button-light"
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Register here <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-ghost-light" href="tel:+919048065353">
              Call for details
            </a>
            <a
              className="button button-ghost-light"
              href={abideInstagram}
              target="_blank"
              rel="noreferrer"
            >
              Follow ABIDE
            </a>
          </div>
        </div>
      </section>

      <section className="event-register event-info-panel" aria-labelledby="register-title">
        <div>
          <p className="section-kicker light">Free registration</p>
          <h2 id="register-title">
            Come
            <br />
            expectant.
          </h2>
          <p>
            Register through the free Google Form, or scan the QR code on the
            posters. Midday meal is provided. Bring a heart ready to worship.
          </p>
        </div>
        <article className="event-details-card">
          <p className="mini-label">House of Worship</p>
          <h3>A worship series #01</h3>
          <dl>
            <div>
              <dt>Date</dt>
              <dd>August 22, 2026 · Saturday</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>10 AM to 5 PM</dd>
            </div>
            <div>
              <dt>Venue</dt>
              <dd>
                Jesus Campaign Church, Basement Floor, Pattom, Trivandrum
              </dd>
            </div>
            <div>
              <dt>For details</dt>
              <dd>+91 90480 65353</dd>
            </div>
            <div>
              <dt>Follow updates</dt>
              <dd className="event-social-links">
                <a href={abideInstagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href={abideFacebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </dd>
            </div>
          </dl>
          <div className="event-qr-row">
            <img
              src="/images/house-of-worship-2026/registration-qr.png"
              alt="QR code for House of Worship free registration"
            />
            <a
              className="button button-light"
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open registration <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </section>

      <section className="event-poster-section" aria-labelledby="event-posters-title">
        <div className="event-poster-heading">
          <p className="section-kicker light">Event posters</p>
          <h2 id="event-posters-title">Invite someone.</h2>
          <p>
            Share the invitation, scan the QR, and make room for a day in His
            presence.
          </p>
        </div>
        <div className="event-poster-grid">
          {posters.map((poster, index) => (
            <figure className="event-poster-card" key={poster.src}>
              <img src={poster.src} alt={poster.alt} loading="lazy" />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{poster.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
