import { useState } from "react";
import './styles/Navbar.css'; // Import your CSS file for custom styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/neurobit_ai_logo-removebg-preview (1).png" alt="Logo" className="h-8 w-auto mr-2" style={{transform: "scale(1.3)"}}/>
        <span>Neurobit AI</span>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
      </div>

      {/* Buttons (Hidden on small screens) */}
      <div className="buttons">
        <button className="contact">CONTACT US</button>
        <button className="login">TRY FOR FREE</button>
      </div>
    </nav>
  );
};

export default Navbar;
