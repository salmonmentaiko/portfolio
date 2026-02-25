import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "C++", "SQL"]
    },
    {
      category: "Frontend",
      skills: ["React", "HTML", "CSS"]
    },
    {
      category: "Backend",
      skills: ["REST APIs"]
    },
    {
      category: "Tools & Other",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
