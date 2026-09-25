import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PromoPopup() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("wensPromoSeen");

    if (hasSeenPopup) {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("wensPromoSeen", "true");
  };

  const handleBooking = () => {
    closePopup();
    navigate("/booking");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="promo-overlay"
      onClick={closePopup}
      role="presentation"
    >
      <div
        className="promo-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="promo-close"
          onClick={closePopup}
          aria-label="Close promotion"
        >
          ×
        </button>

        <p className="section-label">WELCOME TO WENS</p>

        <h2 id="promo-title">
          YOUR FIRST CUT
          <br />
          <span>IS ON US.</span>
        </h2>

        <p className="promo-text">
          First time at WENS? Enjoy <strong>10% off</strong> your first
          appointment.
        </p>

        <button
          type="button"
          className="btn btn-primary promo-book"
          onClick={handleBooking}
        >
          BOOK YOUR FIRST CUT →
        </button>

        <button
          type="button"
          className="promo-later"
          onClick={closePopup}
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}

export default PromoPopup;