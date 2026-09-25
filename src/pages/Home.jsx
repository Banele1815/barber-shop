import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow">THE MODERN BARBER EXPERIENCE</p>

            <h1>
              YOUR STYLE.
              <br />
              YOUR CONFIDENCE.
            </h1>

            <p className="hero-text">
              Precision cuts, timeless style and a barber experience built
              around you.
            </p>

            <div className="hero-buttons">
              <Link to="/booking" className="btn btn-primary">
                Book an Appointment
              </Link>

              <Link to="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-scroll">
            <span />
            Scroll to explore
          </div>
        </section>

        <section className="intro section">
          <div className="intro-image">
            <img
              src="/images/two.jpg"
              alt="Barber giving a client a haircut"
            />
          </div>

          <div className="intro-content">
            <p className="section-label">THE WENS EXPERIENCE</p>

            <h2>
              CLASSIC CRAFT.
              <br />
              MODERN STYLE.
            </h2>

            <p>
              WENS is built around one simple idea: a great haircut should
              leave you looking sharp and feeling confident. Our barbers
              combine classic barbering techniques with modern style.
            </p>

            <Link to="/about" className="text-link">
              Discover Our Story →
            </Link>
          </div>
        </section>

        <section className="services section">
          <div className="section-heading">
            <p className="section-label">WHAT WE DO</p>

            <h2>OUR SERVICES</h2>

            <p>
              From classic cuts to sharp fades, we've got your look covered.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span>01</span>
              <h3>Classic Cut</h3>
              <p>Precision haircut finished to your preference.</p>
              <strong>R250</strong>
            </article>

            <article className="service-card">
              <span>02</span>
              <h3>Skin Fade</h3>
              <p>A clean, detailed fade with a sharp finish.</p>
              <strong>R280</strong>
            </article>

            <article className="service-card">
              <span>03</span>
              <h3>Beard Trim</h3>
              <p>Shape, line-up and detail for a refined beard.</p>
              <strong>R150</strong>
            </article>

            <article className="service-card">
              <span>04</span>
              <h3>Full Groom</h3>
              <p>Haircut and beard treatment for the complete look.</p>
              <strong>R380</strong>
            </article>
          </div>

          <div className="center-button">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </section>

        <section className="image-strip">
          <div>
            <img src="/images/one.jpg" alt="Barber cutting hair" />
          </div>

          <div>
            <img src="/images/three.jpg" alt="Professional barber service" />
          </div>

          <div>
            <img src="/images/four.jpg" alt="Barbershop grooming" />
          </div>
        </section>

        <section className="cta">
          <div className="cta-overlay" />

          <div className="cta-content">
            <p className="section-label">YOUR NEXT LOOK STARTS HERE</p>

            <h2>READY FOR THE CHAIR?</h2>

            <p>
              Choose your service, pick your barber and book your appointment.
            </p>

            <Link to="/booking" className="btn btn-primary">
              Book Your Appointment
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;