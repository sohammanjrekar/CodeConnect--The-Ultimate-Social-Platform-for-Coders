import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h2>Showcase Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
