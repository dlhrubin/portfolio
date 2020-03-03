import React from 'react';
import projects from '../data';

const Projects = () => {
  const projectCards = projects.map((proj, i) => {
    const stack = proj.stack.map((word) => <span key={word}>{word}</span>);
    return (
      <div key={proj.name} className="card">
        <div className="image-container">
          <a href={proj.live} target="_blank" rel="noopener noreferrer">
            <div className="hover-screen">
              <img src={proj.screencap} alt={proj.name} />
            </div>
          </a>
        </div>
        <div className="info">
          <h2>{proj.name}</h2>
          <div className="details">
            <p>{proj.summary}</p>
            <div>
              <div className="tech">
                {stack}
              </div>
              <div className="links">
                <a className="live-link" href={proj.live} target="_blank" rel="noopener noreferrer">
                  Live
                  <i className="fas fa-desktop" />
                </a>
                <a className="code-link" href={proj.code} target="_blank" rel="noopener noreferrer">
                  Code
                  <i className="fas fa-code" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="projects">
      <div>
        {projectCards}
      </div>
    </section>
  );
};

export default Projects;
