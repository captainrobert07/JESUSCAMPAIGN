import { ContactForm } from "./contact-form";
import { HouseOfWorshipPopup } from "./house-of-worship-popup";
import { HeroTitle } from "./hero-title";
import { ScrollEffects } from "./scroll-effects";

const whatsappTiming =
  "https://wa.me/919048065353?text=Hello%20Jesus%20Campaign%20Church%2C%20I%20would%20like%20to%20know%20the%20current%20service%20timings.";
const pattomDirections =
  "https://www.google.com/maps/search/?api=1&query=F+Square+Building+Lekshmi+Nagar+Pattom+Trivandrum+Kerala+695004";
const abideInstagram =
  "https://www.instagram.com/abide.youth.collective?igsh=bmUyZjd4eGZ4a3M0";
const abideFacebook = "https://www.facebook.com/share/1Hd77sPhWo/";

const galleryImages = [
  {
    src: "/images/youth-bassist.png",
    alt: "Young musician playing bass during a Jesus Campaign gathering",
    label: "Worship",
  },
  {
    src: "/images/pastor-message.png",
    alt: "Pastor sharing the Word at Jesus Campaign Church",
    label: "The Word",
  },
  {
    src: "/images/worship-circle.png",
    alt: "Jesus Campaign church family gathered closely for worship",
    label: "Together",
  },
  {
    src: "/images/bassist-white.png",
    alt: "Bass player serving on the Jesus Campaign worship team",
    label: "Serve",
  },
  {
    src: "/images/speaker-woman.png",
    alt: "Woman speaking at a Jesus Campaign Church gathering",
    label: "Testimony",
  },
  {
    src: "/images/community-group.png",
    alt: "Young people sharing and learning together",
    label: "Community",
  },
  {
    src: "/images/pastor-stage.png",
    alt: "Pastor teaching from the stage at Jesus Campaign Church",
    label: "Teaching",
  },
  {
    src: "/images/worship-duo.png",
    alt: "Worship leaders singing and playing keyboard",
    label: "Praise",
  },
  {
    src: "/images/testimony-night.png",
    alt: "Woman sharing during an evening church gathering",
    label: "Faith",
  },
  {
    src: "/images/community-notes.png",
    alt: "Young people writing notes and sharing conversation",
    label: "Belong",
  },
  {
    src: "/images/worship-prayer.png",
    alt: "Church leaders praying together during worship",
    label: "Prayer",
  },
  {
    src: "/images/youth-gathering-wide.png",
    alt: "Young people gathered for a Jesus Campaign Youth meeting",
    label: "Youth",
  },
  {
    src: "/images/hero-worship.png",
    alt: "Jesus Campaign congregation worshipping with raised hands",
    label: "Encounter",
  },
  {
    src: "/images/worship-team.png",
    alt: "Jesus Campaign worship team leading the congregation",
    label: "Worship team",
  },
  {
    src: "/images/youth-testimony.png",
    alt: "Young woman sharing a testimony with the church",
    label: "Stories",
  },
  {
    src: "/images/pattom-hall.png",
    alt: "Jesus Campaign Church congregation gathered at Pattom",
    label: "Pattom",
  },
  {
    src: "/images/youth-retreat-speaker.png",
    alt: "Speaker addressing a Jesus Campaign youth retreat",
    label: "Youth retreat",
  },
  {
    src: "/images/house-of-worship-youth.png",
    alt: "Young people attending a House of Worship gathering",
    label: "House of Worship",
  },
  {
    src: "/images/sound-desk-prayer.png",
    alt: "Congregation praying during a worship gathering",
    label: "Presence",
  },
  {
    src: "/images/church-service.png",
    alt: "Jesus Campaign church family gathered for a service",
    label: "Church family",
  },
];

const houseOfWorshipPosters = [
  {
    src: "/images/house-of-worship-2026/blue-main-poster.png",
    alt: "House of Worship August 22 2026 blue event poster",
  },
  {
    src: "/images/house-of-worship-2026/join-us-poster.png",
    alt: "Join us for House of Worship August 22 2026 poster",
  },
  {
    src: "/images/house-of-worship-2026/make-room-poster.png",
    alt: "Make room for His presence House of Worship poster",
  },
];

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <HouseOfWorshipPopup />

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jesus Campaign Church home">
          <span className="wordmark-logo">
            <img src="/jesus-campaign-logo.png" alt="" />
          </span>
          <small>Jesus Campaign</small>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
          <a href="#ministries">Ministries</a>
          <a href="#gallery">Gallery</a>
          <a href="/house-of-worship">House of Worship</a>
          <a className="nav-cta" href="#visit">
            Plan a visit
          </a>
        </nav>

        <details className="mobile-menu">
          <summary>
            <span>Menu</span>
            <span className="menu-lines" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a>
            <a href="#locations">Locations</a>
            <a href="#ministries">Ministries</a>
            <a href="#gallery">Gallery</a>
            <a href="/house-of-worship">House of Worship</a>
            <a href="#visit">Plan a visit</a>
          </nav>
        </details>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow light">Trivandrum · Wayanad</p>
            <HeroTitle />
          </div>

          <div className="hero-media">
            <img
              className="hero-image"
              src="/images/hero-worship.png"
              alt="Jesus Campaign church community gathered for worship"
            />
            <div className="hero-shade" aria-hidden="true" />
            <div className="hero-bottom">
              <p>
                A church family growing in the presence of God, rooted in His
                Word, and living to make Jesus known.
              </p>
              <div className="button-row">
                <a className="button button-light" href="#visit">
                  Plan your visit <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-ghost-light" href="#about">
                  Discover our church
                </a>
              </div>
            </div>

            <a className="location-tag" href="#locations">
              <span>
                <small>Main location</small>
                <strong>Pattom</strong>
              </span>
              <span>Trivandrum, Kerala</span>
            </a>
          </div>

          <span className="scroll-note">Scroll to explore ↓</span>
        </section>

        <div className="marquee" aria-label="Our values">
          <div className="marquee-track">
            {[0, 1].map((set) => (
              <span className="marquee-set" key={set} aria-hidden={set === 1}>
                <b>Jesus is our message</b>
                <i>✦</i>
                <b>People are our heart</b>
                <i>✦</i>
                <b>Worship is our response</b>
                <i>✦</i>
                <b>Mission is our movement</b>
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        <section className="section about" id="about">
          <div className="section-kicker" data-reveal>
            01 — About us
          </div>

          <div className="about-intro">
            <h2 data-reveal>
              Come as
              <br />
              you are.
            </h2>
            <div className="about-copy" data-reveal>
              <p className="lede">There is room for you.</p>
              <p>
                Church is more than a Sunday gathering. It is a community
                learning to follow Jesus together.
              </p>
              <p>
                At Jesus Campaign Church, we gather to worship, receive the
                Word, pray for one another, and carry the hope of Christ into
                our homes, workplaces, schools, and cities.
              </p>
              <a className="button button-outline" href="#ministries">
                Find your next step <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <div className="story-images" data-reveal>
            <figure className="image-card image-card-main">
              <img
                src="/images/worship-prayer.png"
                alt="Jesus Campaign worship leaders praying together"
              />
              <figcaption>
                <span>Worship</span>
                <span>Presence over performance.</span>
              </figcaption>
            </figure>
            <figure className="image-card image-card-side">
              <img
                src="/images/community-group.png"
                alt="Young people sharing and learning together at Jesus Campaign Church"
              />
              <figcaption>
                <span>Community</span>
                <span>Faith grows together.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section locations" id="locations">
          <div className="section-kicker light" data-reveal>
            02 — One church, two locations
          </div>
          <div className="locations-intro" data-reveal>
            <h2>
              Find your
              <br />
              place.
            </h2>
            <p>
              Wherever you are in your journey, you are welcome to join us.
            </p>
          </div>

          <div className="location-grid">
            <article className="location-card" data-reveal>
              <div className="location-visual">
                <img
                  src="/images/pattom-hall.png"
                  alt="Jesus Campaign Church gathering in Pattom"
                />
              </div>
              <div className="location-content">
                <div className="location-number">Location 01 · Main campus</div>
                <h3>Pattom</h3>
                <p>
                  Basement Floor, F Square Building,
                  <br />
                  Lekshmi Nagar, Pattom,
                  <br />
                  Trivandrum, Kerala 695004
                </p>
                <p className="service-note">
                  Service timing: Please call before visiting
                </p>
                <a
                  className="location-link"
                  href={pattomDirections}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to Pattom location"
                >
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="location-card reverse" data-reveal>
              <div className="location-visual">
                <img
                  src="/images/church-service.png"
                  alt="Jesus Campaign church congregation gathered for worship"
                />
              </div>
              <div className="location-content">
                <div className="location-number">Location 02 · Branch</div>
                <h3>Wayanad</h3>
                <p>Wayanad, Kerala</p>
                <p className="service-note">
                  Call us for the current address and gathering details
                </p>
                <a
                  className="location-link"
                  href="tel:+919048065353"
                  aria-label="Call for Wayanad branch details"
                >
                  Call for details <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section ministries" id="ministries">
          <div className="section-kicker" data-reveal>
            03 — Take your next step
          </div>
          <div className="ministries-heading" data-reveal>
            <h2>
              More than
              <br />a Sunday.
            </h2>
            <p>Swipe or scroll to find your place in the life of our church.</p>
          </div>

          <div className="ministry-list">
            <article className="ministry-item worship-card" data-reveal>
              <span className="ministry-no">01 / Worship</span>
              <h3>
                Gather.
                <br />
                Encounter.
                <br />
                Respond.
              </h3>
              <p>Make room for God through worship, prayer, and the Word.</p>
            </article>
            <article className="ministry-item youth-card" data-reveal>
              <span className="ministry-no">02 / Youth</span>
              <h3>
                A generation
                <br />
                alive in Jesus.
              </h3>
              <p>Real faith, honest community, and a bold life of purpose.</p>
              <a href="/house-of-worship" aria-label="Explore Jesus Campaign Youth">
                Explore <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article className="ministry-item image-ministry" data-reveal>
              <img
                src="/images/youth-bassist.png"
                alt="Young people attending a Jesus Campaign gathering"
              />
              <span>Young people seeking God together.</span>
            </article>
            <article className="ministry-item prayer-card" data-reveal>
              <span className="ministry-no">03 / Prayer</span>
              <h3>
                We would love
                <br />
                to pray with you.
              </h3>
              <a href="#contact">
                Share a prayer request <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article className="ministry-item community-card" data-reveal>
              <span className="ministry-no">04 / Community</span>
              <h3>
                Find people
                <br />
                to walk with.
              </h3>
              <a href="#contact">
                Get connected <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
          <p className="swipe-note">Swipe →</p>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section-kicker light" data-reveal>
            Gallery — Life together
          </div>
          <div className="gallery-heading" data-reveal>
            <h2>
              Moments of
              <br />
              faith.
            </h2>
            <p>
              Worship, prayer, friendship, teaching, and a generation learning
              to follow Jesus together.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <figure className="gallery-item" data-reveal key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{image.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="house-section" id="house-of-worship">
          <div className="house-frame" data-reveal>
            <img
              src="/images/sound-desk-prayer.png"
              alt="Worship gathering at House of Worship in Pattom"
            />
            <div className="house-overlay" />
            <div className="house-copy">
              <div className="section-kicker light">
                04 — Abide Youth Collective
              </div>
              <div className="event-pill">August 22, 2026 · 10 AM to 5 PM · Pattom</div>
              <p className="house-pretitle">
                A worship series #01
              </p>
              <h2>
                House of
                <br />
                Worship
              </h2>
              <div className="house-footer">
                <p>
                  A day set apart for His presence. Free registration,
                  worship leaders gathering, and hearts making room for Jesus
                  at Pattom, Trivandrum.
                </p>
                <div className="house-actions">
                  <a
                    className="button button-light"
                    href="https://forms.gle/QP52v2ANrQe6PvCA6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Register free <span aria-hidden="true">↗</span>
                  </a>
                  <a className="button button-ghost-dark" href="/house-of-worship">
                    Event details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="house-poster-strip" aria-label="House of Worship event posters">
            {houseOfWorshipPosters.map((poster) => (
              <figure className="house-poster-card" key={poster.src} data-reveal>
                <img src={poster.src} alt={poster.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="section visit" id="visit">
          <div className="section-kicker" data-reveal>
            05 — Plan your visit
          </div>
          <div className="visit-intro" data-reveal>
            <h2>
              Your first
              <br />
              Sunday
              <br />
              starts here.
            </h2>
            <p>
              New to church, returning after a long time, or simply looking
              for a community? Come as you are. We would be glad to welcome
              you.
            </p>
          </div>

          <article className="visit-card" data-reveal>
            <div className="visit-card-brand">
              <span>Jesus Campaign Church</span>
              <strong>Pattom</strong>
              <small>Trivandrum, Kerala</small>
            </div>
            <div className="visit-details">
              <div>
                <p className="mini-label">Address</p>
                <address>
                  Basement Floor, F Square Building,
                  <br />
                  Lekshmi Nagar, Pattom,
                  <br />
                  Trivandrum, Kerala 695004
                </address>
              </div>
              <div>
                <p className="mini-label">Contact</p>
                <a href="tel:+919048065353">+91 90480 65353</a>
              </div>
              <div className="visit-actions">
                <a
                  className="button button-light"
                  href={pattomDirections}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to Pattom"
                >
                  Get directions <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="button button-ghost-light"
                  href={whatsappTiming}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Message Jesus Campaign Church on WhatsApp"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="contact" id="contact">
          <div className="contact-heading" data-reveal>
            <div className="section-kicker light">Connect with us</div>
            <h2>
              Let’s
              <br />
              talk.
            </h2>
            <p>
              Share a prayer request, ask a question, or tell us you are
              planning to visit.
            </p>
            <a href="tel:+919048065353">+91 90480 65353</a>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <span>Jesus</span>
          <span>Campaign</span>
        </div>
        <div className="footer-links">
          <div>
            <h3>Locations</h3>
            <a href="#locations">Pattom</a>
            <a href="#locations">Wayanad</a>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#about">About</a>
            <a href="#ministries">Ministries</a>
            <a href="#gallery">Gallery</a>
            <a href="/house-of-worship">House of Worship</a>
          </div>
          <div>
            <h3>Connect</h3>
            <a href="tel:+919048065353">Call</a>
            <a href={whatsappTiming} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={abideInstagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={abideFacebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jesus Campaign Church. All rights reserved.</span>
          <span>Trivandrum · Wayanad · Kerala</span>
        </div>
      </footer>
    </>
  );
}
