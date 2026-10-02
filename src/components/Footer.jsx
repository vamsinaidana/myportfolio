import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
     <footer className="portfolio-footer projects-title scroll-reveal reveal-left">

      {/* Top Footer */}
      <div className="container">
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand projects-title scroll-reveal reveal-left">
            <a href="#home" className="footer-logo">
               Vamsi<span>.Dev</span> 
            </a>

            <p>
              Full-Stack Web Developer crafting modern, responsive and
              meaningful digital experiences.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/vamsinaidana"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="#"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>

              <a
                href="https://wa.me/917416409117"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href="mailto:vamsinaidana@gmail.com"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div className="footer-column projects-title scroll-reveal reveal-left">
            <h4>Quick Links</h4>

            <a href="#home">
              <i className="bi bi-chevron-right"></i>
              Home
            </a>

            <a href="#about">
              <i className="bi bi-chevron-right"></i>
              About
            </a>

            <a href="#skills">
              <i className="bi bi-chevron-right"></i>
              Skills
            </a>

            <a href="#resume">
              <i className="bi bi-chevron-right"></i>
              Resume
            </a>
          </div>


          {/* Explore */}
          <div className="footer-column projects-title scroll-reveal reveal-left">
            <h4>Explore</h4>

            <a href="#projects">
              <i className="bi bi-chevron-right"></i>
              Projects
            </a>

            <a href="#testimonials">
              <i className="bi bi-chevron-right"></i>
              Testimonials
            </a>

            <a href="#contact">
              <i className="bi bi-chevron-right"></i>
              Contact
            </a>

            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <i className="bi bi-chevron-right"></i>
              View Resume
            </a>
          </div>


          {/* Contact */}
          <div className="footer-column footer-contact projects-title scroll-reveal reveal-left">
            <h4>Let's Connect</h4>

            <a href="mailto:vamsinaidana@gmail.com">
              <i className="bi bi-envelope"></i>
              <span>vamsinaidana@gmail.com</span>
            </a>

            <a href="tel:+917416409117">
              <i className="bi bi-telephone"></i>
              <span>+91 74164 09117</span>
            </a>

            <div className="footer-location">
              <i className="bi bi-geo-alt"></i>
              <span>Visakhapatnam, India</span>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} <strong>Vamsi Naidana</strong>. All rights reserved.
          </p>

          <p className="footer-credit">
            Designed &amp; Developed by{" "}
            <a
              href="#"
              className="vgwd-link"
              target="_blank"
              rel="noreferrer"
            >
              VGWD
            </a>
          </p>

        </div>

      </div>


      {/* Back To Top */}
      <a
        href="#home"
        className="footer-top-btn"
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>

    </footer>
    </div>
  )
}

export default Footer
