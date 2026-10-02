import React, { useEffect, useState } from "react";

const Hero = () => {
   const [showName, setShowName] = useState(false);
     const roles = [
     
    "React Developer",
    "Freelancer",
    "UI Designer",
    "Frontend Developer",
    "Web Editor",
  ];
 const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);

      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, 450);

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <section className="hero-section " id="home">

      {/* Background Effects */}
      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-glow hero-glow-three"></div>


      <div className="container">
        <div className="row align-items-center hero-row">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="col-lg-7">

            <div className="hero-content">

              {/* Welcome */}
              <div className="hero-welcome">

                <span className="welcome-line"></span>

                <span className="welcome-icon">
                  <i className="bi bi-stars"></i>
                </span>

                <span>
                  Welcome to my portfolio
                </span>

              </div>


              {/* Main Heading */}

              <h1 className="hero-title">

                <span className="hero-title-small">
                  I'm
                </span>

                <span
                  className={`hero-name ${
                    showName ? "name-visible" : ""
                  }`}
                >
                  Vamsi Naidana
                </span>

              <div className="hero-role-wrapper">

  <span className="hero-role-label">
    
  </span>

  <span
    className={`hero-role ${
      roleVisible ? "role-visible" : "role-hidden"
    }`}
    key={roleIndex}
  >
    {roles[roleIndex]}
  </span>

</div>

              </h1>


              {/* Description */}

              <p className="hero-description">
                I design and build modern, responsive and
                high-performance web experiences that turn
                ideas into real digital products.
              </p>


              {/* Freelance Badge */}

              <div className="freelance-badge">

                <span className="freelance-dot"></span>

                <span>
                  Available for Freelance Projects
                </span>

                <i className="bi bi-arrow-up-right"></i>

              </div>


              {/* Buttons */}

              <div className="hero-buttons">

                <a
                  href="#projects"
                  className="hero-primary-btn"
                >
                  <span>Explore My Work</span>

                  <i className="bi bi-arrow-up-right"></i>
                </a>


                <a
                  href="#contact"
                  className="hero-secondary-btn"
                >
                  <i className="bi bi-chat-dots"></i>

                  <span>Let's Talk</span>
                </a>

              </div>


              {/* Socials */}

              <div className="hero-social-area">

                <span className="social-label">
                  Connect with me
                </span>

                <div className="hero-socials">

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
                    href="mailto:vamsinaidana@gmail.com"
                    aria-label="Email"
                  >
                    <i className="bi bi-envelope-fill"></i>
                  </a>

                  <a
                    href="#contact"
                    aria-label="Contact"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="col-lg-5">

            <div className="hero-image-area">

              {/* Decorative rings */}

              <div className="hero-ring hero-ring-one"></div>

              <div className="hero-ring hero-ring-two"></div>


              {/* Main Image */}

              <div className="hero-image-wrapper">

                <div className="hero-image-glow"></div>

                <div className="hero-image-frame">

                  <img
                    src="/about.png"
                    alt="Vamsi Naidana"
                    className="hero-profile-image"
                  />

                </div>

              </div>


              {/* Freelance Floating Card */}

              <div className="floating-freelance-card">

                <div className="floating-icon">
                  <i className="bi bi-code-slash"></i>
                </div>

                <div>
                  <span className="floating-small">
                    Currently
                  </span>

                  <strong>
                    Freelancing
                  </strong>
                </div>

                <span className="floating-status"></span>

              </div>


              {/* Experience Floating Card */}

              <div className="floating-project-card">

                <div className="project-floating-icon">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>

                <div>
                  <strong>
                    Building
                  </strong>

                  <span>
                    Digital Experiences
                  </span>
                </div>

              </div>


              {/* Floating Tech Icons */}

              <div className="floating-tech floating-react">
                <i className="bi bi-braces"></i>
              </div>

              <div className="floating-tech floating-code">
                <i className="bi bi-code-square"></i>
              </div>

              <div className="floating-tech floating-star">
                <i className="bi bi-stars"></i>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* Bottom Scroll Indicator */}

      <a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to about"
      >
        <span>Scroll to explore</span>

        <i className="bi bi-arrow-down"></i>
      </a>

    </section>
    </div>
  )
}

export default Hero
