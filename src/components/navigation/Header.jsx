import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../ui/Logo.jsx";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="header">
      <div className="container headerRow">
        <Link 
          to="/" 
          className="brandBtn" 
          onClick={closeMobileMenu}
          aria-label="Bhuviona Home"
        >
          <Logo />
          <div>
            <div className="brandName">Bhuviona</div>
            <div className="brandTagline">Expanding Intelligence</div>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobileMenuBtn"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Products
          </NavLink>
          {/*<NavLink 
            to="/pricing" 
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Pricing
          </NavLink>*/}
          {/*<NavLink 
            to="/blog" 
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Blog
          </NavLink>*/}
          <NavLink 
            to="/about" 
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobileMenuOverlay" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
