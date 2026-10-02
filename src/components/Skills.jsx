import React, { useState } from "react";

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      subtitle: "Building modern, responsive & interactive interfaces",
      icon: "bi bi-window-stack",
      skills: [
        {
    name: "HTML5",
    icon: "devicon-html5-plain",
    color: "#E34F26",
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain",
    color: "#1572B6",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    color: "#F7DF1E",
    level: "Advanced",
  },
  {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain",
    color: "#7952B3",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-original",
    color: "#06B6D4",
    level: "Intermediate",
  },
  {
    name: "React.js",
    icon: "devicon-react-original",
    color: "#61DAFB",
    level: "Intermediate",
  },
      ],
    },

    tools: {
      title: "Tools & Workflow",
      subtitle: "Tools I use to build, manage and ship projects",
      icon: "bi bi-tools",
      skills: [
        {
      name: "Git",
      icon: "devicon-git-plain",
      color: "#F05032",
      level: "Advanced",
    },
    {
      name: "GitHub",
      icon: "devicon-github-original",
      color: "#181717",
      level: "Advanced",
    },
    {
      name: "Netlify",
      icon: "devicon-netlify-plain",
      color: "#00C7B7",
      level: "Advanced",
    },
    {
      name: "Vercel",
      icon: "devicon-vercel-original",
      color: "#000000",
      level: "Intermediate",
    },
    {
      name: "VS Code",
      icon: "devicon-vscode-plain",
      color: "#007ACC",
      level: "Advanced",
    },
      ],
    },

    // ============================================
    // FUTURE BACKEND SKILLS
    // Currently hidden from UI.
    // Add skills here in the future.
    // ============================================

    backend: {
      title: "Backend Development",
      subtitle: "Server-side development & database technologies",
      icon: "bi bi-server",
      skills: [
        // Example future skills:
        // {
        //   name: "Python",
        //   icon: "devicon-python-plain",
        //   color: "#3776AB",
        //   level: "Intermediate",
        // },
        // {
        //   name: "Node.js",
        //   icon: "devicon-nodejs-plain",
        //   color: "#339933",
        //   level: "Intermediate",
        // },
        // {
        //   name: "Express.js",
        //   icon: "devicon-express-original",
        //   color: "#000000",
        //   level: "Intermediate",
        // },
        // {
        //   name: "MongoDB",
        //   icon: "devicon-mongodb-plain",
        //   color: "#47A248",
        //   level: "Intermediate",
        // },
      ],
    },
  };

  // Backend false = currently hidden
  const showBackendSkills = false;

  const visibleCategories = showBackendSkills
    ? ["frontend", "tools", "backend"]
    : ["frontend", "tools"];
  return (
    <div>
       <section className="skills-section " id="skills">

      {/* Background */}
      <div className="skills-bg skills-bg-one"></div>
      <div className="skills-bg skills-bg-two"></div>

      <div className="container">

        {/* Heading */}
        <div className="skills-heading text-center">

          <span className="skills-eyebrow">
            <i className="bi bi-lightning-charge-fill "></i>
            MY TECH STACK
          </span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies and tools I use to transform ideas into
            modern, responsive and scalable digital experiences.
          </p>

        </div>

        {/* Category Navigation */}
        <div className="skills-tabs">

          {visibleCategories.map((category) => (
            <button
              key={category}
              className={`skills-tab ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <i className={skillCategories[category].icon}></i>

              <span>
                {category === "frontend"
                  ? "Frontend"
                  : category === "tools"
                  ? "Tools & Deployment"
                  : "Backend"}
              </span>
            </button>
          ))}

        </div>

        {/* Active Category */}
        <div className="skills-content">

          <div className="skills-content-heading ">

            <div className="skills-title-icon ">
              <i className={skillCategories[activeCategory].icon}></i>
            </div>

            <div>
              <h3>
                {skillCategories[activeCategory].title}
              </h3>

              <p>
                {skillCategories[activeCategory].subtitle}
              </p>
            </div>

          </div>

          {/* Skills Grid */}
          <div className="row g-4">

            {skillCategories[activeCategory].skills.map(
              (skill, index) => (

                <div
                  className="col-12 col-sm-6 col-lg-4"
                  key={skill.name}
                >

                  <div
                    className="skill-card "
                    style={{
                      "--skill-color": skill.color,
                      "--skill-index": index,
                    }}
                  >

                    <div className="skill-card-top">

                      <div className="skill-icon-box">
                        <i className={skill.icon}></i>
                      </div>

                      <div className="skill-card-arrow">
                        <i className="bi bi-arrow-up-right"></i>
                      </div>

                    </div>

                    <div className="skill-card-info">

                      <div className="skill-name-row">

                        <h4>{skill.name}</h4>

                        <span>
                          {skill.level}
                        </span>

                      </div>

                      <div className="skill-line">
                        <span></span>
                      </div>

                    </div>

                    <div className="skill-color-glow"></div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

        {/* Bottom Tech Philosophy */}
        <div className="skills-bottom ">

          <div className="skills-bottom-icon">
            <i className="bi bi-code-slash"></i>
          </div>

          <div className="skills-bottom-text">

            <span>
              CURRENT FOCUS
            </span>

            <h3>
              Building better. Learning continuously.
            </h3>

          </div>

          <div className="skills-bottom-tags ">

            <span>Responsive UI</span>
            <span>Clean Code</span>
            <span>Modern UX</span>
            <span>Performance</span>

          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Skills
