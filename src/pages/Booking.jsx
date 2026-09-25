import { useState } from "react";

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

  // Get available appointment times based on the selected day
  function getAvailableTimes() {
    if (!formData.date) {
      return [];
    }

    const selectedDate = new Date(`${formData.date}T00:00:00`);
    const day = selectedDate.getDay();

    // Sunday — CLOSED
    if (day === 0) {
      return [];
    }

    // Saturday — shop closes at 16:00
    // Last 1-hour appointment starts at 15:00
    if (day === 6) {
      return [
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
      ];
    }

    // Monday-Friday
    // Shop closes at 18:00
    // Last 1-hour appointment starts at 17:00
    return [
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
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,

      // Clear the selected time when the date changes
      ...(name === "date" && {
        time: "",
      }),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Extra validation to make sure a valid time is selected
    const availableTimes = getAvailableTimes();

    if (!availableTimes.includes(formData.time)) {
      alert("Please select a valid appointment time.");
      return;
    }

    setSubmitted(true);
  }

  function createCalendarDetails() {
    const start = new Date(`${formData.date}T${formData.time}:00`);

    const end = new Date(start);

    // Appointment duration = 60 minutes
    end.setMinutes(end.getMinutes() + 60);

    function formatCalendarDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      return `${year}${month}${day}T${hours}${minutes}${seconds}`;
    }

    const startDate = formatCalendarDate(start);
    const endDate = formatCalendarDate(end);

    const title = `${formData.service} at WENS Barbershop`;

    const details = [
      `Service: ${formData.service}`,
      `Barber: ${formData.barber}`,
      `Customer: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
    ].join("\n");

    const location =
      "123 Main Street, Johannesburg, Gauteng, South Africa";

    return {
      title,
      startDate,
      endDate,
      details,
      location,
    };
  }

  // Google Calendar
  function addToGoogleCalendar() {
    const calendar = createCalendarDetails();

    const url = new URL(
      "https://calendar.google.com/calendar/render"
    );

    url.searchParams.set("action", "TEMPLATE");

    url.searchParams.set("text", calendar.title);

    url.searchParams.set(
      "dates",
      `${calendar.startDate}/${calendar.endDate}`
    );

    url.searchParams.set(
      "details",
      calendar.details
    );

    url.searchParams.set(
      "location",
      calendar.location
    );

    window.open(url.toString(), "_blank");
  }

  // Apple Calendar / iCalendar
  function downloadAppleCalendar() {
    const calendar = createCalendarDetails();

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//WENS Barbershop//Booking//EN",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@wensbarbershop`,
      `DTSTART:${calendar.startDate}`,
      `DTEND:${calendar.endDate}`,
      `SUMMARY:${calendar.title}`,
      `DESCRIPTION:${calendar.details.replace(/\n/g, "\\n")}`,
      `LOCATION:${calendar.location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "wens-barbershop-appointment.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (
    <main className="booking-page">

      {/* HERO */}
      <section className="page-hero booking-hero">
        <p className="section-label">
          RESERVE YOUR CHAIR
        </p>

        <h1>
          BOOK AN APPOINTMENT
        </h1>

        <p>
          Choose your service, barber, date and time.
          We'll take care of the rest.
        </p>
      </section>


      {/* BOOKING SECTION */}
      <section className="booking-section">

        <div className="booking-container">

          {/* INTRO */}
          <div className="booking-intro">

            <p className="section-label">
              YOUR NEXT LOOK
            </p>

            <h2>
              LET'S GET
              <br />
              YOU FRESH.
            </h2>

            <p>
              Complete the form and select a time that works
              for you. Your appointment details will be shown
              before confirmation.
            </p>

          </div>


          {/* FORM / SUCCESS */}
          <div className="booking-form-wrapper">

            {!submitted ? (

              <form
                onSubmit={handleSubmit}
                className="booking-form"
              >

                {/* SERVICE */}
                <div className="form-group">

                  <label htmlFor="service">
                    SERVICE
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}

                  </select>

                </div>


                {/* BARBER */}
                <div className="form-group">

                  <label htmlFor="barber">
                    BARBER
                  </label>

                  <select
                    id="barber"
                    name="barber"
                    value={formData.barber}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a barber
                    </option>

                    {barbers.map((barber) => (
                      <option
                        key={barber}
                        value={barber}
                      >
                        {barber}
                      </option>
                    ))}

                  </select>

                </div>


                {/* DATE + TIME */}
                <div className="form-row">

                  {/* DATE */}
                  <div className="form-group">

                    <label htmlFor="date">
                      DATE
                    </label>

                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  {/* TIME */}
                  <div className="form-group">

                    <label htmlFor="time">
                      TIME
                    </label>

                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      disabled={
                        !formData.date ||
                        getAvailableTimes().length === 0
                      }
                    >

                      <option value="">
                        {!formData.date
                          ? "Select a date first"
                          : getAvailableTimes().length === 0
                            ? "Closed on Sunday"
                            : "Select time"}
                      </option>

                      {getAvailableTimes().map((time) => (
                        <option
                          key={time}
                          value={time}
                        >
                          {time}
                        </option>
                      ))}

                    </select>

                  </div>

                </div>


                {/* DETAILS DIVIDER */}
                <div className="form-divider">
                  YOUR DETAILS
                </div>


                {/* NAME */}
                <div className="form-group">

                  <label htmlFor="name">
                    FULL NAME
                  </label>

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


                {/* EMAIL + PHONE */}
                <div className="form-row">

                  {/* EMAIL */}
                  <div className="form-group">

                    <label htmlFor="email">
                      EMAIL
                    </label>

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


                  {/* PHONE */}
                  <div className="form-group">

                    <label htmlFor="phone">
                      PHONE
                    </label>

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


                {/* SUBMIT */}
                <button
                  type="submit"
                  className="btn btn-primary booking-button"
                >
                  Confirm Appointment
                </button>

              </form>

            ) : (

              /* SUCCESS */
              <div className="booking-success">

                <p className="section-label">
                  APPOINTMENT REQUEST
                </p>

                <h2>
                  YOU'RE BOOKED.
                </h2>

                <p>
                  Your appointment details have been
                  captured successfully.
                </p>


                {/* SUMMARY */}
                <div className="booking-summary">

                  <div>
                    <span>
                      SERVICE
                    </span>

                    <strong>
                      {formData.service}
                    </strong>
                  </div>


                  <div>
                    <span>
                      BARBER
                    </span>

                    <strong>
                      {formData.barber}
                    </strong>
                  </div>


                  <div>
                    <span>
                      DATE
                    </span>

                    <strong>
                      {formData.date}
                    </strong>
                  </div>


                  <div>
                    <span>
                      TIME
                    </span>

                    <strong>
                      {formData.time}
                    </strong>
                  </div>


                  <div>
                    <span>
                      CLIENT
                    </span>

                    <strong>
                      {formData.name}
                    </strong>
                  </div>

                </div>


                {/* CALENDAR BUTTONS */}
                <div className="calendar-actions">

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addToGoogleCalendar}
                  >
                    Add to Google Calendar
                  </button>


                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={downloadAppleCalendar}
                  >
                    Add to Apple Calendar
                  </button>

                </div>


                {/* NEW BOOKING */}
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                  }}
                >
                  Make Another Booking
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Booking;