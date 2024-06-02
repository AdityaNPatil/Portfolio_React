import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, imageSrc, link }) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
}

export default ProjectCard;
