import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function LogoMark() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 48 48"
      width="30"
      height="30"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22.5" fill="#11100e" stroke="#b9975b" strokeWidth="1.5" />
      <g stroke="#e9e2d5" strokeWidth="2" strokeLinecap="round" fill="none">
        <circle cx="16" cy="16" r="4" />
        <circle cx="16" cy="32" r="4" />
        <line x1="34" y1="12" x2="19.5" y2="26.5" />
        <line x1="24" y1="24" x2="34" y2="34" />
        <line x1="19.5" y1="21.5" x2="24" y2="17" />
      </g>
      <circle cx="24" cy="24" r="1.5" fill="#b9975b" />
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <LogoMark />
        WENS<span>.</span>
      </Link>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/booking" onClick={closeMenu}>
          Contact
        </Link>

        <Link to="/booking" className="nav-book" onClick={closeMenu}>
          Book Now
        </Link>
      </nav>

      <button
        className="mobile-menu"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  );
}

export default Navbar;