import { ContactForm } from "./contact-form";

const whatsappTiming =
  "https://wa.me/919048065353?text=Hello%20Jesus%20Campaign%20Church%2C%20I%20would%20like%20to%20know%20the%20current%20service%20timings.";
const pattomDirections =
  "https://www.google.com/maps/search/?api=1&query=F+Square+Building+Lekshmi+Nagar+Pattom+Thiruvananthapuram+Kerala+695004";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jesus Campaign Church home">
          <span>JESUS CAMPAIGN</span>
          <span>CHURCH</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
          <a href="#ministries">Ministries</a>
          <a href="#house-of-worship">House of Worship</a>
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
            <a href="#house-of-worship">House of Worship</a>
            <a href="#visit">Plan a visit</a>
          </nav>
        </details>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/images/house-of-worship.png"
            alt="Jesus Campaign church community gathered for worship"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow light">Thiruvananthapuram • Wayanad</p>
            <h1 id="hero-title">
              <span>JESUS</span>
              <span>CAMPAIGN</span>
            </h1>
            <div className="hero-bottom">
              <p>
                A church family growing in the presence of God, rooted in His
                Word, and living to make Jesus known.
              </p>
              <div className="button-row">
                <a className="button button-light" href="#visit">
                  Plan your visit <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link light-link" href="#about">
                  Discover our church <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
          <a className="location-tag" href="#locations">
            <span>
              <small>Main location</small>
              <strong>Pattom</strong>
            </span>
            <span>Thiruvananthapuram, Kerala</span>
          </a>
          <span className="scroll-note">Scroll to explore</span>
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
          <div className="section-kicker">01 — About us</div>
          <div className="about-heading">
            <h2>
              Come as
              <br />
              <em>you are.</em>
            </h2>
            <p className="lede">There is room for you.</p>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              Church is more than a Sunday gathering. It is a community
              learning to follow Jesus together.
            </p>
            <p>
              At Jesus Campaign Church, we gather to worship, receive the Word,
              pray for one another, and carry the hope of Christ into our
              homes, workplaces, schools, and cities.
            </p>
            <a className="text-link dark-link" href="#ministries">
              Find your next step <span aria-hidden="true">↘</span>
            </a>
          </div>
          <figure className="image-card image-card-main">
            <img
              src="/images/sunday-worship.png"
              alt="Worship gathering at Jesus Campaign Church"
            />
            <figcaption>
              <span>Worship</span>
              <span>Presence over performance.</span>
            </figcaption>
          </figure>
          <figure className="image-card image-card-side">
            <img
              src="/images/worship-circle.jpg"
              alt="Jesus Campaign church community gathered for worship"
            />
            <figcaption>
              <span>Community</span>
              <span>Faith grows together.</span>
            </figcaption>
          </figure>
        </section>

        <section className="section locations" id="locations">
          <div className="section-kicker light">02 — One church, two locations</div>
          <div className="locations-intro">
            <h2>
              Find your
              <br />
              <em>place.</em>
            </h2>
            <p>
              Wherever you are in your journey, you are welcome to join us.
            </p>
          </div>
          <div className="location-grid">
            <article className="location-card featured">
              <div className="location-number">Location 01</div>
              <div>
                <p className="mini-label">Main campus</p>
                <h3>Pattom</h3>
                <p>
                  Basement Floor, F Square Building,
                  <br />
                  Lekshmi Nagar, Pattom,
                  <br />
                  Thiruvananthapuram, Kerala 695004
                </p>
              </div>
              <div className="location-card-footer">
                <p>Service timing: Please call before visiting</p>
                <a
                  href={pattomDirections}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to Pattom location"
                >
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
            <article className="location-card">
              <div className="location-number">Location 02</div>
              <div>
                <p className="mini-label">Branch</p>
                <h3>Wayanad</h3>
                <p>Wayanad, Kerala</p>
              </div>
              <div className="location-card-footer">
                <p>Call us for the current address and gathering details</p>
                <a href="tel:+919048065353" aria-label="Call for Wayanad branch details">
                  Call for details <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section ministries" id="ministries">
          <div className="section-kicker">03 — Take your next step</div>
          <h2>
            More than a
            <br />
            <em>Sunday.</em>
          </h2>
          <div className="ministry-list">
            <article className="ministry-item">
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
            <article className="ministry-item youth-card">
              <span className="ministry-no">02 / Youth</span>
              <h3>
                A generation
                <br />
                alive in Jesus.
              </h3>
              <p>Real faith, honest community, and a bold life of purpose.</p>
              <a href="#house-of-worship" aria-label="Explore Jesus Campaign Youth">
                Explore <span aria-hidden="true">↘</span>
              </a>
            </article>
            <article className="ministry-item image-ministry">
              <img
                src="/images/youth-prayer.jpg"
                alt="Young people attending a Jesus Campaign gathering"
              />
            </article>
            <article className="ministry-item prayer-card">
              <span className="ministry-no">03 / Prayer</span>
              <h3>
                We would love
                <br />
                to pray with you.
              </h3>
              <a href="#contact">
                Share a prayer request <span aria-hidden="true">↘</span>
              </a>
            </article>
            <article className="ministry-item community-card">
              <span className="ministry-no">04 / Community</span>
              <h3>
                Find people
                <br />
                to walk with.
              </h3>
              <a href="#contact">
                Get connected <span aria-hidden="true">↘</span>
              </a>
            </article>
          </div>
        </section>

        <section className="house-section" id="house-of-worship">
          <img
            src="/images/youth-gathering.png"
            alt="House of Worship event by Jesus Campaign Youth"
          />
          <div className="house-overlay" />
          <div className="house-copy">
            <div className="section-kicker light">04 — Jesus Campaign Youth</div>
            <p className="house-pretitle">
              A space for a generation to seek God
            </p>
            <h2>
              House
              <br />
              <em>of worship</em>
            </h2>
            <div className="house-footer">
              <p>
                More than an event. A room filled with prayer, praise, the
                Word, and young people hungry for the presence of God.
              </p>
              <a
                className="button button-light"
                href={whatsappTiming}
                target="_blank"
                rel="noreferrer"
              >
                Ask about the next gathering <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section visit" id="visit">
          <div className="section-kicker">05 — Plan your visit</div>
          <div className="visit-intro">
            <h2>
              Your first
              <br />
              Sunday
              <br />
              <em>starts here.</em>
            </h2>
            <p>
              New to church, returning after a long time, or simply looking
              for a community? Come as you are. We would be glad to welcome
              you.
            </p>
          </div>
          <article className="visit-card">
            <div className="visit-card-brand">
              <span>Jesus Campaign Church</span>
              <strong>Pattom</strong>
            </div>
            <div className="visit-details">
              <div>
                <p className="mini-label">Address</p>
                <address>
                  Basement Floor, F Square Building,
                  <br />
                  Lekshmi Nagar, Pattom,
                  <br />
                  Thiruvananthapuram, Kerala 695004
                </address>
              </div>
              <div>
                <p className="mini-label">Contact</p>
                <a href="tel:+919048065353">+91 90480 65353</a>
              </div>
            </div>
            <div className="visit-actions">
              <a
                className="button button-dark"
                href={pattomDirections}
                target="_blank"
                rel="noreferrer"
                aria-label="Get directions to Pattom"
              >
                Get directions <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-outline"
                href={whatsappTiming}
                target="_blank"
                rel="noreferrer"
                aria-label="Message Jesus Campaign Church on WhatsApp"
              >
                Ask on WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </section>

        <section className="contact" id="contact">
          <div className="contact-heading">
            <div className="section-kicker light">Connect with us</div>
            <h2>
              Let’s
              <br />
              <em>talk.</em>
            </h2>
            <p>
              Share a prayer request, ask a question, or tell us you are
              planning to visit.
            </p>
            <a href="tel:+919048065353">+91 90480 65353</a>
          </div>
          <ContactForm />
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
            <a href="#house-of-worship">House of Worship</a>
          </div>
          <div>
            <h3>Connect</h3>
            <a href="tel:+919048065353">Call</a>
            <a href={whatsappTiming} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Jesus Campaign Church. All rights reserved.</span>
          <span>Thiruvananthapuram · Wayanad · Kerala</span>
        </div>
      </footer>
    </>
  );
}
