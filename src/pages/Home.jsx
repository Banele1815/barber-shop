import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <p className="section-label">EST. 2026 · JOHANNESBURG</p>

          <h1>
            LOOK SHARP.
            <br />
            FEEL FRESH.
          </h1>

          <p className="hero-text">
            Premium barbering for modern gentlemen.
            Classic cuts, sharp fades and precision grooming.
          </p>

          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">
              Book Your Chair
            </Link>

            <Link to="/services" className="btn btn-outline">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="home-intro section">
        <div>
          <p className="section-label">WELCOME TO WENS</p>

          <h2>
            MORE THAN
            <br />
            A HAIRCUT.
          </h2>
        </div>

        <div className="intro-text">
          <p>
            WENS Barbershop is built around great cuts, good conversation
            and an experience worth coming back for.
          </p>

          <p>
            Whether you want a clean fade, a classic cut or a complete
            grooming experience, our barbers are here to make sure you
            leave looking your best.
          </p>

          <Link to="/about" className="text-link">
            Discover WENS →
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="home-services section">
        <div className="section-heading">
          <p className="section-label">WHAT WE DO</p>

          <h2>OUR SERVICES</h2>
        </div>

        <div className="service-preview-grid">

          <article className="service-preview">
            <span>01</span>
            <h3>Classic Cut</h3>
            <p>Clean, timeless and tailored to you.</p>
            <strong>R180</strong>
          </article>

          <article className="service-preview">
            <span>02</span>
            <h3>Skin Fade</h3>
            <p>Sharp fades with a precise finish.</p>
            <strong>R220</strong>
          </article>

          <article className="service-preview">
            <span>03</span>
            <h3>Beard Trim</h3>
            <p>Shape, line-up and finish your beard.</p>
            <strong>R120</strong>
          </article>

          <article className="service-preview">
            <span>04</span>
            <h3>Full Groom</h3>
            <p>The complete WENS grooming experience.</p>
            <strong>R300</strong>
          </article>

        </div>

        <div className="center-button">
          <Link to="/services" className="btn btn-outline">
            See All Services
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div>
          <p className="section-label">YOUR CHAIR IS WAITING</p>

          <h2>READY FOR A FRESH CUT?</h2>

          <Link to="/booking" className="btn btn-primary">
            Book an Appointment
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;