import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const services = [
  {
    number: "01",
    name: "Classic Haircut",
    description:
      "A clean, timeless haircut tailored to your preferred style and finished with precision.",
    price: "R250",
  },
  {
    number: "02",
    name: "Skin Fade",
    description:
      "A sharp skin fade with seamless blending and detailed finishing around the edges.",
    price: "R280",
  },
  {
    number: "03",
    name: "Beard Trim",
    description:
      "Professional beard shaping, trimming and line-up for a clean, defined finish.",
    price: "R150",
  },
  {
    number: "04",
    name: "Haircut & Beard",
    description:
      "Combine a precision haircut with a complete beard trim for the full grooming experience.",
    price: "R380",
  },
  {
    number: "05",
    name: "Kids Cut",
    description:
      "A comfortable, stylish haircut designed specifically for younger clients.",
    price: "R180",
  },
  {
    number: "06",
    name: "Buzz Cut",
    description:
      "A clean, low-maintenance cut with an even finish and sharp detailing.",
    price: "R180",
  },
];

function Services() {
  return (
    <>
      <Navbar />

      <main className="inner-page">
        <section className="page-hero">
          <div className="page-hero-overlay"></div>

          <div className="page-hero-content">
            <p className="section-label">WHAT WE OFFER</p>

            <h1>OUR SERVICES</h1>

            <p>
              Precision grooming, classic barbering and modern styles.
            </p>
          </div>
        </section>

        <section className="services-list section">
          <div className="section-heading">
            <p className="section-label">THE MENU</p>

            <h2>CHOOSE YOUR LOOK</h2>

            <p>
              Every service is delivered with attention to detail and finished
              to your preference.
            </p>
          </div>

          <div className="services-full-grid">
            {services.map((service) => (
              <article className="service-full-card" key={service.number}>
                <div className="service-number">{service.number}</div>

                <div className="service-info">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-price">
                  <span>{service.price}</span>

                  <Link to="/booking">Book →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="service-cta">
          <div className="service-cta-content">
            <p className="section-label">READY WHEN YOU ARE</p>

            <h2>FIND YOUR NEXT LOOK.</h2>

            <Link to="/booking" className="btn btn-primary">
              Book an Appointment
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;