import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            WENS<span>.</span>
          </Link>

          <p>
            Premium barbering for modern gentlemen.
            Sharp cuts. Clean fades. Good energy.
          </p>

          <Link to="/booking" className="footer-book">
            Book Your Chair →
          </Link>
        </div>


        <div className="footer-column">
          <p className="footer-heading">EXPLORE</p>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/booking">Booking</Link>
        </div>


        <div className="footer-column">
          <p className="footer-heading">VISIT US</p>

          <p>123 Main Street</p>
          <p>Johannesburg</p>
          <p>Gauteng, South Africa</p>

          <a href="tel:+27110000000">
            +27 11 000 0000
          </a>

          <a href="mailto:hello@wensbarbershop.co.za">
            hello@wensbarbershop.co.za
          </a>
        </div>


        <div className="footer-column">
          <p className="footer-heading">OPENING HOURS</p>

          <p>Mon — Fri</p>
          <strong>09:00 — 18:00</strong>

          <p>Saturday</p>
          <strong>09:00 — 16:00</strong>

          <p>Sunday</p>
          <strong>Closed</strong>
        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 WENS Barbershop. All rights reserved.
        </p>

        <div className="footer-links">
          <Link to="/terms">Terms & Conditions</Link>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;