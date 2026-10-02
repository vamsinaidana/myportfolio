 import React, { useEffect, useState } from "react";


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
        <nav
      className={`portfolio-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <div className="navbar-inner">

          {/* =================================
              LOGO
          ================================= */}

          <a
            href="#home"
            className="portfolio-logo"
            onClick={closeMenu}
          >
            {/* <span className="logo-bracket">&lt;</span> */}

            <span className="logo-name">Vamsi</span>

            <span className="logo-dot">.</span>

            <span className="logo-name">Dev</span>

            {/* <span className="logo-bracket">/&gt;</span> */}
          </a>


          {/* =================================
              DESKTOP / MOBILE NAVIGATION
          ================================= */}

          <div
            className={`portfolio-nav ${
              menuOpen ? "nav-open" : ""
            }`}
          >

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>

            <a href="#resume" onClick={closeMenu}>
              Resume
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

          </div>


          {/* =================================
              RIGHT SIDE ACTIONS
          ================================= */}

          <div className="navbar-actions">

            {/* Dark / Light Mode */}

            <button
              type="button"
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              <i
                className={
                  darkMode
                    ? "bi bi-sun-fill"
                    : "bi bi-moon-stars-fill"
                }
              ></i>
            </button>


            {/* Hire Me */}

            <a
              href="#contact"
              className="nav-hire-btn"
              onClick={closeMenu}
            >
              <span>Hire Me</span>

              <i className="bi bi-arrow-up-right"></i>
            </a>


            {/* Mobile Menu Button */}

            <button
              type="button"
              className={`mobile-menu-btn ${
                menuOpen ? "active" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>

        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
