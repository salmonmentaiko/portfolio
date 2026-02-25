import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate Artificial Intelligence student with a love for creating innovative 
            solutions and learning new technologies. My journey in programming started 
            in 2021, and since then, I've been constantly expanding my knowledge, working on projects and 
            keeping myself updated with the latest trends in AI and technology.
          </p>
          <div className="about-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
