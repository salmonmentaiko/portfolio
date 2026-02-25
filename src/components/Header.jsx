import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Ariel Cheyanne</div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
