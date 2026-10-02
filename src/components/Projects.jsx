import React, { useState } from "react";
const projects = [
   {
    id: 1,
    category: "Freelancing",
    title: "Focus40 Academy",
    description:
      "The Focus40 Academy website is developed by VGWD (Vamsi Group of Web Development) with a focus on modern UI design, responsive layouts, smooth navigation, and an accessible digital learning experience across desktop, tablet, and mobile devices.",
    image: "/focus40.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://focus40.netlify.app/",
   },
    
    {
    id: 2,
    category: "Freelancing",
    title: "Think Plus",
    description:
      "Developed Think Plus – A modern educational platform designed for smarter learning and growth.",
    image: "/think.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://vgwdvn.netlify.app/",
   },
    {
    id: 3,
    category: "Freelancing",
    title: "Carola",
    description:
      "Developed Carola – A modern car rental platform for easy and convenient vehicle booking.",
    image: "/carola.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://carola-vgwd-2026.netlify.app/",
   },
    {
    id: 4,
    category: "Freelancing",
    title: "Charitics",
    description:
      "Developed Charitics – A modern charity platform connecting people with meaningful causes and community support.",
    image: "/charitics.png",
   technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://charitics-vgwd.netlify.app/",
   },
    {
    id: 5,
    category: "Freelancing",
    title: "Tech Shed UI",
    description:
      "Developed Tech Shed – A modern technology platform for exploring tech solutions, resources, and innovation..",
    image: "/techshed.png",
   technologies: [ "HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://tech-shed-ecommerce.netlify.app/",
   },

  {
    id: 6,
    title: "VGWD Website",
    category: "Freelancing",
    image: "/vgwd.png",
    description:
      "A professional startup website for Vamsi Group of Web Development showcasing services, projects and digital solutions.",
    technologies: ["React", "Bootstrap", "JavaScript", "CSS"],
     live: "https://vgwd.vercel.app/",
  },
    {
    id: 7,
    category: "Freelancing",
    title: "Pro-Active",
    description:
      "A modern and responsive Proactive Landing Page built using HTML, CSS, JavaScript, and Bootstrap. This project is designed to showcase a clean UI, smooth user experience, and mobile-first responsive…",
    image: "/pro.png",
    technologies: ["HTML", "CSS", "JavaScript","Bootstrap"],
    live: "https://vmc-vgwd.netlify.app/",
   },
    {
    id: 8,
    title: "Taste Bite",
    category: "Dynamic",
    image: "/tastebite.png",
    description:
      "A responsive food ordering web application designed to provide a smooth food browsing and ordering experience.",
    technologies: ["React", "JavaScript", "Bootstrap", "CSS"],
    github: "https://github.com/vamsinaidana/Taste-Bite",
    live: "https://taste-bite-vgwd-2026.netlify.app/",
  },
 {
    id: 9,
    category: "Dynamic",
    title: "Quiz-App",
    description:
      "Developed Quiz-App – A modern platform designed for creating and taking quizzes.",
    image: "/quiz.png",
    technologies: [ "HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://quiz-web-application-vgwd.netlify.app/",
     
  },
     {
    id: 10,
    category: "Dynamic",
    title: "Dashboard",
    description:
      "Developed Dashboard – A modern and responsive dashboard for managing data, analytics, and key insights.",
    image: "/dash.png",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://vamsin.netlify.app/",
     
  },
    {
    id: 11,
    category: "Freelancing",
    title: "Focus40-CAT [MBA]",
    description:
      "Developed focus40 CAT and MBA entrance Info landing page",
    image: "/fcat.png",
    technologies: ["HTML", "CSS", "JavaScript","Bootstrap"],
    live: "https://focus40-cat-2025.netlify.ap",
   },
    {
    id: 12,
    title: "DevKit",
    category: "React",
    image: "/devkit.png",
    description:
      "A complete developer toolkit that provides resources, cheatsheets, commands, tools and learning roadmaps for developers.",
    technologies: ["React", "Bootstrap", "JavaScript", "CSS"],
     
    live: "https://devkit-rho.vercel.app/",
  },

   {
    id: 13,
    category: "React",
    title: "Textlume",
    description:
      "Developed TextLume – A modern platform designed for creative content, writing, and digital expression.",
    image: "/textlume.png",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"],
    live: "https://vamsi-article.lovable.app/",
     
  },
  
  {
    id: 14,
    category: "React",
    title: "Fruitkha-SPA ",
    description:
      "Developed **FRUITKHA UI**, a responsive fruit shopping interface using React.js. ",
    image: "/fruitkkha.png",
    technologies: ["React", "CSS", "Bootstrap"],
    live: "https://productcars.vercel.app/",
   },
  {
    id: 15,
    category: "React",
    title: "Mind Nest",
    description:
      "A clean and modern technology blog interface designed for publishing development articles.",
    image: "/blog-2.png",
    technologies: ["React", "CSS", "JavaScript"],
    live: "https://blog-app-topaz-tau.vercel.app/",
   },
 {
    id: 16,
    category: "React",
    title: "Profile Card",
    description:
      "Developed Profile Card – A clean and responsive profile card UI showcasing personal details, skills, and social links.",
    image: "profie.png",
    technologies: ["React", "Html", "Css", "JavaScript"],
    live: "https://profilecard-eight-iota.vercel.app/",
   },  


  {
    id: 5,
    title: "Python Web Application",
    // category: "Python",
    image: "/python-project.png",
    description:
      "A Python-based web application developed to demonstrate backend development concepts and application workflow.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/vamsinaidana",
    live: "#",
  },

  {
    id: 6,
    title: "Full Stack Application",
    // category: "Fullstack",
    image: "/fullstack.png",
    description:
      "A full-stack application combining frontend and backend technologies with a structured application architecture.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/vamsinaidana",
    live: "#",
  },
   

 
];

const categories = [
  {
    name: "React",
    icon: "bi bi-react",
  },
  {
    name: "Dynamic",
    icon: "bi bi-lightning-charge-fill",
  },
  {
    name: "Freelancing",
    icon: "bi bi-briefcase-fill",
  },
  {
    name: "Python",
    icon: "bi bi-code-slash",
  },
  {
    name: "Fullstack",
    icon: "bi bi-stack",
  },
];

const Projects = () => {

 const [activeCategory, setActiveCategory] = useState("React");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  
  
  return (
    <div>
      <section className="projects-section" id="projects">

      {/* Heading */} 
      <div className="container">

        <div className="projects-heading">

          <span className="projects-eyebrow">
            <i className="bi bi-grid-3x3-gap-fill"></i>
            MY WORK
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A collection of projects I've built using modern technologies,
            creative UI design and practical development solutions.
          </p>

        </div>


        {/* Category Buttons */}
        <div className="project-filters">

          {categories.map((category) => (
            <button
              key={category.name}
              className={`project-filter-btn ${
                activeCategory === category.name ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}

        </div>


        {/* Projects */}
        <div className="row g-4 projects-grid">

          {filteredProjects.map((project) => (

            <div
              className="col-lg-4 col-md-6"
              key={project.id}
            >

              <article
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >

                {/* Image */}
                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-image-overlay">
                    <span>
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </div>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>


                {/* Content */}
                <div className="project-content">

                  <div className="project-top">

                    <h3>{project.title}</h3>

                    <div className="project-arrow">
                      <i className="bi bi-arrow-up-right"></i>
                    </div>

                  </div>

                  <p>{project.description}</p>


                  {/* Technologies */}
                  <div className="project-tech">

                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}

                  </div>

                </div>

              </article>

            </div>

          ))}

        </div>


        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="project-empty">

            <i className="bi bi-folder-x"></i>

            <h3>No Projects Yet</h3>

            <p>
              Projects from this category will be added soon.
            </p>

          </div>
        )}

      </div>


      {/* Project Modal */}
      {selectedProject && (

        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <i className="bi bi-x-lg"></i>
            </button>


            {/* Modal Image */}
            <div className="project-modal-image">

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
              />

            </div>


            {/* Modal Content */}
            <div className="project-modal-content">

              <span className="modal-category">
                {selectedProject.category} Project
              </span>

              <h2>{selectedProject.title}</h2>

              <p>
                {selectedProject.description}
              </p>


              <div className="modal-tech">

                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>


              <div className="modal-actions">

               

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-live"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
      
    </div>
  )
}

export default Projects
