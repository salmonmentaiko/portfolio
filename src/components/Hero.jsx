import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Ariel</span></h1>
        <p className="hero-subtitle">Artificial Intelligence Student</p>
        <p className="hero-description">
          I build programmes that work hand in hand with humans to solve problems and make life easier. I'm passionate about creating innovative solutions and learning new technologies. Welcome to my portfolio!
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
