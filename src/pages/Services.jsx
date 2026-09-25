import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    name: "Classic Cut",
    description: "A timeless cut tailored to your face shape and personal style.",
    price: "R250",
  },
  {
    number: "02",
    name: "Skin Fade",
    description: "A clean, detailed fade with a sharp and modern finish.",
    price: "R280",
  },
  {
    number: "03",
    name: "Beard Trim",
    description: "Professional shaping, lining and detailing for your beard.",
    price: "R150",
  },
  {
    number: "04",
    name: "Full Groom",
    description: "The complete experience — haircut, beard trim and styling.",
    price: "R380",
  },
  {
    number: "05",
    name: "Kids Cut",
    description: "A comfortable, stylish cut designed for younger clients.",
    price: "R180",
  },
  {
    number: "06",
    name: "Cut & Beard",
    description: "Pair your haircut with a precision beard trim.",
    price: "R350",
  },
];

function Services() {
  return (
    <>
      <main className="services-page">
        <section className="page-hero">
          <p className="section-label">WHAT WE OFFER</p>

          <h1>OUR SERVICES</h1>

          <p>
            Precision grooming, classic barbering and modern style.
            Choose the service that suits you.
          </p>
        </section>

        <section className="services-list section">
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span>{service.number}</span>

                <h2>{service.name}</h2>

                <p>{service.description}</p>

                <strong>{service.price}</strong>
              </article>
            ))}
          </div>

          <div className="center-button">
            <Link to="/booking" className="btn btn-primary">
              Book Your Appointment
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;