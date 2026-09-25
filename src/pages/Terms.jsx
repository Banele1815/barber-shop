import { Link } from "react-router-dom";

function Terms() {
  return (
    <main className="terms-page">
      {/* PAGE HERO */}
      <section className="page-hero terms-hero">
        <div>
          <p className="section-label">WENS BARBERSHOP</p>
          <h1>TERMS &<br />CONDITIONS</h1>
          <p>
            Please read the following terms before booking an appointment.
          </p>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="terms-section">
        <div className="terms-container">

          <article className="terms-block">
            <span>01</span>
            <div>
              <h2>Appointments</h2>
              <p>
                Appointments are made through the WENS Barbershop booking
                form. Clients are responsible for providing accurate contact
                information and selecting the correct service, barber, date
                and time.
              </p>
            </div>
          </article>

          <article className="terms-block">
            <span>02</span>
            <div>
              <h2>Arrival Time</h2>
              <p>
                Clients are encouraged to arrive a few minutes before their
                scheduled appointment. Arriving late may reduce the amount of
                time available for the selected service.
              </p>
            </div>
          </article>

          <article className="terms-block">
            <span>03</span>
            <div>
              <h2>Cancellations</h2>
              <p>
                If you are unable to attend your appointment, please contact
                WENS Barbershop as soon as possible so that the appointment
                time can be made available to another client.
              </p>
            </div>
          </article>

          <article className="terms-block">
            <span>04</span>
            <div>
              <h2>Services & Pricing</h2>
              <p>
                Service descriptions and prices are displayed on the WENS
                Services page. Prices may change from time to time. Any
                applicable price will be confirmed before the service is
                provided.
              </p>
            </div>
          </article>

          <article className="terms-block">
            <span>05</span>
            <div>
              <h2>Personal Information</h2>
              <p>
                Information submitted through the booking form is used to
                manage appointments and communicate with clients about their
                bookings. Clients should ensure that the information they
                provide is accurate.
              </p>
            </div>
          </article>

          <article className="terms-block">
            <span>06</span>
            <div>
              <h2>Changes to These Terms</h2>
              <p>
                WENS Barbershop may update these terms when necessary.
                Continued use of the booking service after changes have been
                made constitutes acceptance of the updated terms.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* CTA */}
      <section className="terms-cta">
        <p className="section-label">READY FOR YOUR NEXT CUT?</p>
        <h2>BOOK YOUR CHAIR.</h2>

        <Link to="/booking" className="btn btn-primary">
          Book an Appointment
        </Link>
      </section>
    </main>
  );
}

export default Terms;