import React from 'react'

function ProjectCard({ title, tech, description}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span>{tech}</span>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard