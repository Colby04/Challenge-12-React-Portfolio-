import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    // Array of project objects with title, image, deployedLink, and repoLink
  ];

  return (
    <section>
      {projects.map(project => (
        <Project key={project.title} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;