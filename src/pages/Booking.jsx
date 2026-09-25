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

const weekdayTimes = [
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

const saturdayTimes = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
];

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getAvailableTimes(date) {
  if (!date) {
    return [];
  }

  const selectedDate = new Date(`${date}T00:00:00`);
  const day = selectedDate.getDay();

  // Sunday — CLOSED
  if (day === 0) {
    return [];
  }

  let availableTimes;

  // Saturday — closes at 16:00
  if (day === 6) {
    availableTimes = saturdayTimes;
  } else {
    // Monday-Friday — closes at 18:00
    availableTimes = weekdayTimes;
  }

  // If the selected date is today,
  // remove appointment times that have already passed.
  if (date === getTodayDate()) {
    const now = new Date();

    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();

    return availableTimes.filter((time) => {
      const [hour, minutes] = time.split(":").map(Number);

      return (
        hour > currentHour ||
        (hour === currentHour && minutes > currentMinutes)
      );
    });
  }

  return availableTimes;
}

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
  const [showConfirmation, setShowConfirmation] = useState(false);

  const today = getTodayDate();
  const availableTimes = getAvailableTimes(formData.date);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,

      // Reset time whenever the date changes
      ...(name === "date" && {
        time: "",
      }),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Make sure the selected time is still available.
    const currentAvailableTimes = getAvailableTimes(formData.date);

    if (!currentAvailableTimes.includes(formData.time)) {
      alert("Please select a valid available appointment time.");
      return;
    }

    setShowConfirmation(true);
  }

  function handleConfirmBooking() {
    setShowConfirmation(false);
    setSubmitted(true);
  }

  function handleCancelConfirmation() {
    setShowConfirmation(false);
  }

  function formatDisplayDate(date) {
    if (!date) {
      return "";
    }

    const selectedDate = new Date(`${date}T00:00:00`);

    return new Intl.DateTimeFormat("en-ZA", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(selectedDate);
  }

  function createCalendarDetails() {
    const start = new Date(
      `${formData.date}T${formData.time}:00`
    );

    const end = new Date(start);

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
    url.searchParams.set("details", calendar.details);
    url.searchParams.set("location", calendar.location);

    window.open(url.toString(), "_blank");
  }

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
              Complete the form and select a time that works
              for you. Your appointment details will be shown
              before confirmation.
            </p>
          </div>

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
                      min={today}
                      required
                    />
                  </div>


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
                        availableTimes.length === 0
                      }
                    >

                      <option value="">
                        {!formData.date
                          ? "Select a date first"
                          : availableTimes.length === 0
                            ? "No times available"
                            : "Select time"}
                      </option>

                      {availableTimes.map((time) => (
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


                {/* YOUR DETAILS */}

                <div className="form-divider">
                  YOUR DETAILS
                </div>


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


                <div className="form-row">

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


                <div className="booking-summary">

                  <div>
                    <span>SERVICE</span>
                    <strong>
                      {formData.service}
                    </strong>
                  </div>

                  <div>
                    <span>BARBER</span>
                    <strong>
                      {formData.barber}
                    </strong>
                  </div>

                  <div>
                    <span>DATE</span>
                    <strong>
                      {formData.date}
                    </strong>
                  </div>

                  <div>
                    <span>TIME</span>
                    <strong>
                      {formData.time}
                    </strong>
                  </div>

                  <div>
                    <span>CLIENT</span>
                    <strong>
                      {formData.name}
                    </strong>
                  </div>

                </div>


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


                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      service: "",
                      barber: "",
                      date: "",
                      time: "",
                      name: "",
                      email: "",
                      phone: "",
                    });
                  }}
                >
                  Make Another Booking
                </button>

              </div>
            )}

          </div>
        </div>
      </section>


      {/* CONFIRMATION MODAL */}

      {showConfirmation && (
        <div
          className="booking-modal-overlay"
          onClick={handleCancelConfirmation}
        >

          <div
            className="booking-modal"
            role="dialog"
            aria-modal="true"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <p className="section-label">
              REVIEW YOUR APPOINTMENT
            </p>

            <h2>
              READY TO BOOK?
            </h2>

            <p className="booking-modal-text">
              Please check your appointment details
              before confirming.
            </p>


            <div className="booking-modal-details">

              <div>
                <span>SERVICE</span>

                <strong>
                  {formData.service}
                </strong>
              </div>


              <div>
                <span>BARBER</span>

                <strong>
                  {formData.barber}
                </strong>
              </div>


              <div>
                <span>DATE</span>

                <strong>
                  {formatDisplayDate(formData.date)}
                </strong>
              </div>


              <div>
                <span>TIME</span>

                <strong>
                  {formData.time}
                </strong>
              </div>


              <div>
                <span>CLIENT</span>

                <strong>
                  {formData.name}
                </strong>
              </div>

            </div>


            <div className="booking-modal-actions">

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConfirmBooking}
              >
                Confirm Booking
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={handleCancelConfirmation}
              >
                Go Back
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default Booking;