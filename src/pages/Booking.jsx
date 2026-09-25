import { useState } from "react";
import Navbar from "../components/Navbar";

const services = [
  "Classic Cut",
  "Skin Fade",
  "Beard Trim",
  "Full Groom",
  "Kids Cut",
  "Cut & Beard",
];

const barbers = [
  "Thabo",
  "Lebo",
  "Mandla",
];

const times = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

function Booking() {
  const [formData, setFormData] = useState({
    service: "",
    barber: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="booking-page">
        <section className="page-hero booking-hero">
          <p className="section-label">RESERVE YOUR CHAIR</p>

          <h1>BOOK AN APPOINTMENT</h1>

          <p>
            Choose your service, barber, date and time.
            We'll take care of the rest.
          </p>
        </section>

        <section className="booking-section">
          <div className="booking-container">
            <div className="booking-intro">
              <p className="section-label">YOUR NEXT LOOK</p>

              <h2>
                LET'S GET
                <br />
                YOU FRESH.
              </h2>

              <p>
                Complete the form and select a time that works for you.
                Your appointment details will be shown before confirmation.
              </p>
            </div>

            <div className="booking-form-wrapper">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-group">
                    <label htmlFor="service">SERVICE</label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="barber">BARBER</label>

                    <select
                      id="barber"
                      name="barber"
                      value={formData.barber}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a barber</option>

                      {barbers.map((barber) => (
                        <option key={barber} value={barber}>
                          {barber}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">DATE</label>

                      <input
                        id="date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="time">TIME</label>

                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select time</option>

                        {times.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-divider">
                    YOUR DETAILS
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">FULL NAME</label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">EMAIL</label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">PHONE</label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary booking-button">
                    Confirm Appointment
                  </button>
                </form>
              ) : (
                <div className="booking-success">
                  <p className="section-label">APPOINTMENT REQUEST</p>

                  <h2>YOU'RE BOOKED.</h2>

                  <p>
                    Your appointment details have been captured successfully.
                  </p>

                  <div className="booking-summary">
                    <div>
                      <span>SERVICE</span>
                      <strong>{formData.service}</strong>
                    </div>

                    <div>
                      <span>BARBER</span>
                      <strong>{formData.barber}</strong>
                    </div>

                    <div>
                      <span>DATE</span>
                      <strong>{formData.date}</strong>
                    </div>

                    <div>
                      <span>TIME</span>
                      <strong>{formData.time}</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Make Another Booking
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Booking;