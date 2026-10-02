import React from 'react'

const About = () => {
   const socialLinks = [
    {
      icon: "bi bi-github",
      title: "GitHub",
      text: "Projects & Code",
      link: "https://github.com/vamsinaidana",
    },
    {
      icon: "bi bi-linkedin",
      title: "LinkedIn",
      text: "Professional Network",
      link: "https://www.linkedin.com/in/vamsinaidana/?isSelfProfile=true",
    },
    {
      icon: "bi bi-youtube",
      title: "YouTube",
      text: "Development Content",
      link: "https://www.youtube.com/@admin_vamsi",
    },
    {
      icon: "bi bi-envelope-fill",
      title: "Email",
      text: "Let's Connect",
      link: "mailto:vamsinaidana@gmail.com",
    },
    {
      icon: "bi bi-whatsapp",
      title: "WhatsApp",
      text: "Quick Contact",
      link: "https://wa.me/917416409117",
    },
  ];

  const highlights = [
    {
      icon: "bi bi-code-slash",
      title: "Web Development",
      text: "Building modern, responsive and scalable web applications.",
    },
    {
      icon: "bi bi-palette2",
      title: "UI & Frontend",
      text: "Creating clean interfaces with strong visual experiences.",
    },
    {
      icon: "bi bi-briefcase-fill",
      title: "Freelance Work",
      text: "Working with clients to transform ideas into digital products.",
    },
    {
      icon: "bi bi-rocket-takeoff-fill",
      title: "Continuous Learning",
      text: "Exploring modern technologies and improving development skills.",
    },
  ];
  return (
    <div>
        <section className="about-section projects-heading-new scroll-reveal reveal-bottom" id="about">
      <div className="about-bg-glow about-glow-one"></div>
      <div className="about-bg-glow about-glow-two"></div>

      <div className="container">

        {/* Section Heading */}
        <div className="about-heading text-center">
          <span className="about-eyebrow">
            <i className="bi bi-person-circle"></i>
            GET TO KNOW ME
          </span>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            A passionate developer focused on creating meaningful digital
            experiences through code, creativity and continuous learning.
          </p>
        </div>

        {/* Main About Content */}
        <div className="row align-items-center g-5 about-main">

          {/* Left Profile Card */}
          <div className="col-lg-5">
            <div className="about-profile-card">

              <div className="profile-image-wrapper">
                <div className="profile-image-ring"></div>

                <img
                  src="/head.jpeg"
                  alt="Vamsi Naidana"
                  className="about-profile-image"
                />
              </div>

              <div className="about-profile-content">
                <span className="profile-status">
                  <span></span>
                  Available for Opportunities
                </span>

                <h3>Vamsi Naidana</h3>

                <p className="profile-role">
                  Frontend Developer
                </p>

                <p className="profile-location">
                  <i className="bi bi-geo-alt-fill"></i>
                  Visakhapatnam, Andhra Pradesh, India
                </p>
              </div>

              <div className="profile-divider"></div>

              <div className="profile-mini-stats">
                <div>
                  <strong>2025</strong>
                  <span>Development</span>
                </div>

                <div>
                  <strong>1+</strong>
                  <span>Years Freelance</span>
                </div>

                <div>
                  <strong>15+</strong>
                  <span>Projects</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-7">
            <div className="about-content">

              <span className="about-small-title projects-title scroll-reveal reveal-left">
                <i className="bi bi-stars"></i>
                WHO I AM
              </span>

              <h3>
                Turning ideas into
                <span> digital experiences.</span>
              </h3>

              <p  className="projects-description scroll-reveal reveal-right">
                I'm <strong>Vamsi Naidana</strong>, a passionate Frontend Developer from Visakhapatnam, Andhra Pradesh. I enjoy
                designing and developing modern websites and web applications
                that combine clean code, responsive layouts and engaging user
                experiences.
              </p>

              <p  className="projects-description scroll-reveal reveal-right">
                My development journey includes working with technologies such
                as <strong>HTML, CSS, JavaScript, React, Bootstrap,Tailwind CSS 
                </strong>. I continuously
                explore new tools and technologies to improve my development
                workflow and build better digital products.
              </p>

              <p  className="projects-description scroll-reveal reveal-right">
                Alongside development, I also work on <strong>freelance
                projects</strong>, helping businesses and individuals turn
                their ideas into professional websites and digital solutions.
              </p>

              {/* Personal Info */}
              <div className="about-info-grid">

                <div className="about-info-item">
                  <i className="bi bi-person-badge"></i>
                  <div  className="project-categories scroll-reveal reveal-bottom">
                    <span>Name</span>
                    <strong>Vamsi Naidana</strong>
                  </div>
                </div>

                <div className="about-info-item">
                  <i className="bi bi-code-square"></i>
                  <div  className="project-categories scroll-reveal reveal-bottom">
                    <span>Role</span>
                    <strong>Frontend Developer</strong>
                  </div>
                </div>

                <div className="about-info-item">
                  <i className="bi bi-mortarboard-fill"></i>
                  <div  className="project-categories scroll-reveal reveal-bottom">
                    <span>Education</span>
                    <strong>MCA · 2024–2026</strong>
                  </div>
                </div>

                <div className="about-info-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div  className="project-categories scroll-reveal reveal-bottom">
                    <span>Location</span>
                    <strong>Visakhapatnam, India</strong>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="about-highlights">

          <div className="row g-4">

            {highlights.map((item, index) => (
              <div className="col-md-6 col-xl-3" key={index}>
                <div className="about-highlight-card project-categories scroll-reveal reveal-bottom">

                  <div className="highlight-icon">
                    <i className={item.icon}></i>
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* VGWD Freelance Section */}
        <div className="vgwd-section projects-heading-new scroll-reveal reveal-bottom">

          <div className="vgwd-glow"></div>

          <div className="row align-items-center g-4">

            <div className="col-lg-8">

              <div className="vgwd-label projects-heading-new scroll-reveal reveal-bottom project-categories scroll-reveal reveal-bottom">
                <i className="bi bi-buildings-fill"></i>
                FREELANCE & DIGITAL SERVICES
              </div>

              <h3>
                Building with
                <span> VGWD.</span>
              </h3>

              <p>
                <strong>Vamsi Group of Web Development (VGWD)</strong> is my
                freelance-focused initiative where I work on modern websites,
                web applications, landing pages and digital experiences.
              </p>

              <p>
                Through VGWD, I focus on creating professional and responsive
                solutions for individuals, startups and businesses — from
                concept and UI design to frontend development and deployment.
              </p>

              <div className="vgwd-services">

                <span>
                  <i className="bi bi-check-circle-fill"></i>
                  Website Development
                </span>

                <span>
                  <i className="bi bi-check-circle-fill"></i>
                  React Applications
                </span>

                <span>
                  <i className="bi bi-check-circle-fill"></i>
                  Landing Pages
                </span>

                <span>
                  <i className="bi bi-check-circle-fill"></i>
                  Responsive UI
                </span>

              </div>

            </div>

            <div className="col-lg-4">
              <div className="vgwd-brand-card">

                <div className="vgwd-logo">
                  VGWD
                </div>

                <h4>Vamsi Group of Web Development</h4>

                <p>
                  Websites · Applications · Digital Experiences
                </p>

                <a href="https://vgwd.vercel.app/" className="vgwd-button">
                  Start a Project
                  <i className="bi bi-arrow-up-right"></i>
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Social Section */}
        <div className="about-connect">

          <div className="connect-heading">
            <span>
              <i className="bi bi-link-45deg"></i>
              CONNECT WITH ME
            </span>

            <h3>
              Let's build something
              <span> meaningful.</span>
            </h3>

            <p>
              Find me across my development, professional and social
              platforms.
            </p>
          </div>

          <div className="social-grid">

            {socialLinks.map((social, index) => (
              <a
                href={social.link}
                key={index}
                className="about-social-card project-categories scroll-reveal reveal-bottom"
                target={
                  social.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  social.link.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
              >
                <div className="social-icon">
                  <i className={social.icon}></i>
                </div>

                <div className="social-text">
                  <strong>{social.title}</strong>
                  <span>{social.text}</span>
                </div>

                <i className="bi bi-arrow-up-right social-arrow"></i>
              </a>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="about-cta project-categories scroll-reveal reveal-bottom">

          <div>
            <span>READY TO CREATE?</span>
            <h3>
              Have an idea? Let's turn it into reality.
            </h3>
          </div>

          <a href="#contact" className="about-cta-button">
            Let's Work Together
            <i className="bi bi-arrow-right"></i>
          </a>

        </div>

      </div>
    </section>

    </div>
  )
}

export default About
