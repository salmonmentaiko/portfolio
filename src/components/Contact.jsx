import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-text">
          I'm always open to new opportunities and collaborations. 
        </p>
        <div className="contact-info">
          <a href="mailto:arielcheyanne16@gmail.com" className="contact-method">
            <span className="contact-label">Email</span>
            <span className="contact-value">arielcheyanne16@gmail.com</span>
          </a>
          <a href="https://github.com/salmonmentaiko" target="_blank" rel="noopener noreferrer" className="contact-method">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">github.com/salmonmentaiko</span>
          </a>
          <a href="https://www.linkedin.com/in/ariel-cheyanne-tan-4838a923a/" target="_blank" rel="noopener noreferrer" className="contact-method">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/ariel-cheyanne-tan-4838a923a/</span>
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2026</p>
      </footer>
    </section>
  )
}

export default Contact
