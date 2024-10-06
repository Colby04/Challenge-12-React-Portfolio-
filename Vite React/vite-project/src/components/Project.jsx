import React from 'react';

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <a href={deployedLink}>Deployed Application</a>
      <a href={repoLink}>GitHub Repository</a>
    </div>
  );
}

export default Project;