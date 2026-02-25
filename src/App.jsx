import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
