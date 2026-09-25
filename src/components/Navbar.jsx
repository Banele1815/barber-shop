import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
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