import React from 'react';

const projects = [
  {
    title: "GE Healthcare UI Redesign",
    description: "Modernized legacy web apps using JS/HTML/CSS: added pagination, image hover labels, table formatting, etc.",
    tech: "JavaScript, HTML, CSS",
  },
  {
    title: "React Product Dashboard",
    description: "Built a dynamic dashboard with filters, API integration, and responsive design.",
    tech: "React, REST API",
  },
];

function Projects() {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <small><b>Tech:</b> {project.tech}</small>
        </div>
      ))}
    </section>
  );
}

export default Projects;