import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "AI Assisted Card Design Generation",
      description: "This project aims to leverage Generative AI to automate the chip and card design process based on text descriptions while ensuring compliance with functional design rules.",
      technologies: ["ComfyUI"],
      slides: "https://www.canva.com/design/DAGetDDUOVU/deZ3MFKl2jbGonL_mgSdjg/edit?utm_content=DAGetDDUOVU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      demo: "https://youtu.be/RSYeboi0s3U"
    },
    {
      title: "Project Two",
      description: "Description of your second project. Highlight the key features and your role in the development.",
      technologies: ["Python", "Flask", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      demo: null
    },
    {
      title: "Project Three",
      description: "Another amazing project you've built. Mention any challenges you overcame or interesting implementations.",
      technologies: ["JavaScript", "Express", "MySQL"],
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
