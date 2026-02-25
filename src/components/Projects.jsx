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
      title: "Cat and Dog Classifier",
      description: "Classify Cats and Dogs using a CNN model built with TensorFlow and deployed as an Android Application. Demo included in slides.",
      technologies: ["Python", "Tensorflow", "Android Studio"],
      slides: "https://www.canva.com/design/DAF8kwMhlHo/No_7dZVpI-AJqKonZKAWEw/edit?utm_content=DAF8kwMhlHo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      demo: null
    },
    {
      title: "Stock buy/sell program using C++",
      description: "This program allows users to trade stocks and simulate their trade using stock data from a CSV. The trade prediction is simulated using linear regression. ",
      technologies: ["C++", "CSV"],
      slides: "https://docs.google.com/document/d/1l_dKtP8-1vT-lmEJmtmOM8-D9zvXkxs0NJXsVnq4FJE/edit?usp=sharing",
      github: "https://github.com/salmonmentaiko/stock-sim-cpp",
      demo: "https://youtu.be/_F39l7vyKTw"
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
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              )}
              {project.slides && (
                <a href={project.slides} target="_blank" rel="noopener noreferrer" className="project-link">
                  Slides/Docu
                </a>
              )}
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
