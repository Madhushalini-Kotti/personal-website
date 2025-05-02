import React from 'react'
import './ProjectCard.css'

function ProjectCard({ title, techUsed, description, imageUrl, links, reverse }) {
  return (
    <div className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="project-content">
        <h2 className="project-title">{title}</h2>

        <div className="project-description">{description}</div>
              
              <div className="tech-used">
          {techUsed.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProjectCard
