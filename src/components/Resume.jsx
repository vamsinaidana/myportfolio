import React, { useState } from "react";
const Resume = () => {
   const [activeTab, setActiveTab] = useState("experience");

  const experience = [
    {
      type: "Freelance",
      icon: "bi bi-briefcase-fill",
      period: "2025 — 2026",
      title: "Freelance Web Developer",
      company: "Independent / VGWD",
      location: "Visakhapatnam, India",
      description:
        "Worked on modern websites and landing pages for clients, focusing on responsive UI, frontend development and professional digital experiences.",
      points: [
        "Developed responsive websites and landing pages.",
        "Built modern user interfaces using HTML, CSS and JavaScript.",
        "Worked with React and Bootstrap for interactive web experiences.",
        "Focused on responsive design and cross-device compatibility.",
        "Worked on client requirements and converted ideas into web solutions.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
      ],
    },

    {
      type: "Internship",
      icon: "bi bi-code-square",
      period: "May — June 2025",
      title: "Full-Stack Python Intern",
      company: "Datapro",
      location: "Visakhapatnam, India",
      description:
        "Completed a Full-Stack Python internship involving web development concepts, programming fundamentals and practical development experience.",
      points: [
        "Worked with Python development concepts.",
        "Gained practical exposure to full-stack development.",
        "Worked on web application development fundamentals.",
        "Improved problem-solving and programming skills.",
      ],
      technologies: [
        "Python",
        "Web Development",
        "Full Stack",
      ],
    },
  ];

  const education = [
    {
      type: "Post Graduation",
      icon: "bi bi-mortarboard-fill",
      period: "2024 — 2026",
      title: "Master of Computer Applications",
      institution:
        "Visakha Institute of Engineering Technology",
      affiliation: "Affiliated to JNTUGV",
      location: "Visakhapatnam, Andhra Pradesh",
      result: "Passed with 80.4 %",
      description:
        "Completed post graduation in Master of Computer Applications with a strong foundation in software development, programming and application development skills.",
    },

    {
      type: "Graduation",
      icon: "bi bi-book-half",
      period: "2021 — 2024",
      title: "B.Sc Computer Science",
      institution: "Prism PG & Degree College",
      affiliation: "Affiliated to Andhra University",
      location: "Visakhapatnam, Andhra Pradesh",
      result: "75%",
      description:
        "Completed graduation in Computer Science with a strong foundation in programming, computer science concepts and software development.",
    },
  ];

  const activeData =
    activeTab === "experience"
      ? experience
      : education;
  return (
    <div>
     <section className="resume-section projects-description scroll-reveal reveal-right" id="resume">

      {/* Background */}
      <div className="resume-bg resume-bg-one"></div>
      <div className="resume-bg resume-bg-two"></div>

      <div className="container">

        {/* Heading */}
        <div className="resume-heading text-center">

          <span className="resume-eyebrow">
            <i className="bi bi-file-earmark-person-fill projects-description scroll-reveal reveal-right"></i>
            MY RESUME
          </span>

          <h2>
            Education & <span>Experience</span>
          </h2>

          <p>
            My academic journey, professional experience and
            development journey.
          </p>

        </div>

        {/* Resume Top Card */}
        <div className="resume-profile-bar projects-description scroll-reveal reveal-right">

          <div className="resume-profile-info">

            <div className="resume-avatar">
              <img
                src="/head.jpeg"
                alt="Vamsi Naidana"
              />
            </div>

            <div>
              <span className="resume-profile-label projects-description scroll-reveal reveal-right">
                PROFESSIONAL PROFILE
              </span>

              <h3>Vamsi Naidana</h3>

              <p>
                Full-Stack Web Developer · Freelancer
              </p>
            </div>

          </div>

          <div className="resume-actions projects-description scroll-reveal reveal-right">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-download"
            >
              <i className="bi bi-download"></i>
              View / Download Resume
            </a>

          </div>

        </div>

        {/* Career Summary */}
        <div className="resume-summary projects-description scroll-reveal reveal-right">

          <div className="resume-summary-icon">
            <i className="bi bi-stars"></i>
          </div>

          <div>
            <span>CAREER SUMMARY</span>

            <p>
              Passionate Full-Stack Web Developer with experience
              building responsive websites, modern user interfaces
              and frontend applications. Alongside development,
              I work on freelance projects through VGWD and
              continuously improve my technical skills.
            </p>
          </div>

        </div>

        {/* Tabs */}
        <div className="resume-tabs projects-description scroll-reveal reveal-right">

          <button
            className={
              activeTab === "experience"
                ? "resume-tab active"
                : "resume-tab"
            }
            onClick={() => setActiveTab("experience")}
          >
            <i className="bi bi-briefcase-fill"></i>
            Experience
          </button>

          <button
            className={
              activeTab === "education"
                ? "resume-tab active"
                : "resume-tab"
            }
            onClick={() => setActiveTab("education")}
          >
            <i className="bi bi-mortarboard-fill"></i>
            Education
          </button>

        </div>

        {/* Timeline */}
        <div className="resume-timeline">

          {activeData.map((item, index) => (

            <div
              className="resume-timeline-item"
              key={index}
            >

              {/* Timeline Line */}
              <div className="resume-timeline-line"></div>

              {/* Timeline Dot */}
              <div className="resume-timeline-dot">
                <i className={item.icon}></i>
              </div>

              {/* Card */}
              <div className="resume-card">

                {/* Card Header */}
                <div className="resume-card-header">

                  <div>

                    <span className="resume-card-type">
                      {item.type}
                    </span>

                    <h3>{item.title}</h3>

                    <h4>
                      {activeTab === "experience"
                        ? item.company
                        : item.institution}
                    </h4>

                  </div>

                  <span className="resume-period">
                    <i className="bi bi-calendar3"></i>
                    {item.period}
                  </span>

                </div>

                {/* Meta */}
                <div className="resume-meta">

                  <span>
                    <i className="bi bi-geo-alt-fill"></i>
                    {item.location}
                  </span>

                  {activeTab === "education" && (
                    <>
                      <span>
                        <i className="bi bi-building"></i>
                        {item.affiliation}
                      </span>

                      <span className="resume-result">
                        <i className="bi bi-award-fill"></i>
                        {item.result}
                      </span>
                    </>
                  )}

                </div>

                {/* Description */}
                <p className="resume-description projects-description scroll-reveal reveal-right">
                  {item.description}
                </p>

                {/* Experience Points */}
                {item.points && (
                  <div className="resume-points">

                    {item.points.map(
                      (point, pointIndex) => (

                        <div
                          className="resume-point"
                          key={pointIndex}
                        >
                          <i className="bi bi-check2-circle"></i>
                          <span>{point}</span>
                        </div>

                      )
                    )}

                  </div>
                )}

                {/* Technologies */}
                {item.technologies && (
                  <div className="resume-tech">

                    {item.technologies.map(
                      (tech, techIndex) => (
                        <span key={techIndex}>
                          {tech}
                        </span>
                      )
                    )}

                  </div>
                )}

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Career Card */}
        <div className="resume-bottom-card">

          <div className="resume-bottom-left">

            <div className="resume-bottom-icon">
              <i className="bi bi-rocket-takeoff-fill"></i>
            </div>

            <div>
              <span>WHAT'S NEXT?</span>

              <h3>
                Growing, building & learning continuously.
              </h3>

              <p>
                Currently expanding my skills in modern web
                development and preparing to explore backend
                technologies as part of my full-stack journey.
              </p>
            </div>

          </div>

          <a
            href="#contact"
            className="resume-contact-button"
          >
            Let's Connect
            <i className="bi bi-arrow-up-right"></i>
          </a>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Resume
