import React from 'react'
import './WorkExperience.css'

const WorkExperience = () => {
    const experiences = [
    {
        title: "Student Intern",
        company: "Synapxe",
        period: "July 2024 - February 2025",
        description: "Developed automation scripts for data processing tasks, including data cleaning, and collaborated with clients to gather product requirements and feedback.",
        achievements: [
        "Built a reusable CSV data-cleaning script to automate preprocessing workflows.",
        "Conducted client meetings to gather user feedback and translate requirements into product improvements."
        ]
    },
    {
        title: "Deep Learning Intern",
        company: "Cynapse",
        period: "February 2025 - September 2025",
        description: "Designed, trained, and evaluated deep learning models including ResNet, YOLO, and EfficientNet using PyTorch and TensorFlow. Performed hyperparameter tuning and comparative benchmarking through Dockerized pipelines integrated with internal tooling.",
        achievements: [
        "Trained and optimized a vehicle detection model for PSA, improving overall detection performance.",
        "Developed a folder organization and preprocessing automation script to standardize dataset structure for model training.",
        "Implemented a false-positive tracking system using the CLIP model to evaluate detector and classifier outputs.",
        "Led an HDB vehicle and barrier detection project; successfully delivered an improved model that was deployed."
        ]
    }
    ];

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <span className="company">{exp.company}</span>
              <span className="period">{exp.period}</span>
            </div>
            <p className="experience-description">{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
