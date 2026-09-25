import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      number: "01",
      name: "Classic Cut",
      description:
        "A clean, timeless haircut finished to suit your style and face shape.",
      price: "R180",
    },
    {
      number: "02",
      name: "Skin Fade",
      description:
        "A sharp skin fade with a smooth blend and precise finishing.",
      price: "R220",
    },
    {
      number: "03",
      name: "Fade & Beard",
      description:
        "A complete haircut and beard shape-up for a fresh, polished look.",
      price: "R280",
    },
    {
      number: "04",
      name: "Beard Trim",
      description:
        "Shape, line-up and detail your beard for a clean finish.",
      price: "R120",
    },
    {
      number: "05",
      name: "Kids Cut",
      description:
        "A fresh, comfortable haircut for younger clients.",
      price: "R150",
    },
    {
      number: "06",
      name: "Full Groom",
      description:
        "The complete WENS experience — haircut, beard and finishing touches.",
      price: "R320",
    },
  ];

  return (
    <main className="services-page">

      <section className="page-hero services-hero">
        <div>
          <p className="section-label">WHAT WE OFFER</p>

          <h1>OUR SERVICES</h1>

          <p>
            Precision cuts, clean fades and professional grooming.
          </p>
        </div>
      </section>

      <section className="services-list section">

        <div className="section-heading">
          <p className="section-label">THE WENS MENU</p>

          <h2>CHOOSE YOUR CUT.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <strong>{service.price}</strong>
              </div>

              <h3>{service.name}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>

      </section>

      <section className="services-booking-cta">
        <p className="section-label">READY WHEN YOU ARE</p>

        <h2>BOOK YOUR CHAIR.</h2>

        <Link to="/booking" className="btn btn-primary">
          Book an Appointment
        </Link>
      </section>

    </main>
  );
}

export default Services;