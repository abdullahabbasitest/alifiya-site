import React from 'react';
import './KeyProjectsSection.css';

const KeyProjectsSection = () => {
  // Key Projects from RAC Certificate Program
  const keyProjects = [
    {
      id: 1,
      description: (
        <>
          Authored <a href="https://drive.google.com/file/d/1soQ3FGSUrH-3yWkW2YEIn6XBuigFSYLb/view" target="_blank" rel="noopener noreferrer">510(k) submission</a> including substantial equivalence and performance data, technical documentation, CEP, CER, PMS Plan and PMS report, and labels for a <a href="https://drive.google.com/file/d/1Yr-CIBpucceXdVM9O6BujMk6yEojB8ed/view" target="_blank" rel="noopener noreferrer">flexible bronchoscope</a> per EU-MDR
        </>
      )
    },
    {
      id: 2,
      description: (
        <>
          Developed regulatory strategy for U.S., EU, and Canadian markets, design control file and process validation plan for a <a href="https://drive.google.com/file/d/1aIhn8BXeaBi48X0N8IaeKNcbd0QuNPOs/view" target="_blank" rel="noopener noreferrer">digital stethoscope</a>
        </>
      )
    },
    {
      id: 3,
      description: (
        <>
          Authored <a href="https://drive.google.com/file/d/1QPidkwcbrLIzI5xcQ-BkfGd1rJld_NWM/view" target="_blank" rel="noopener noreferrer">FDA Warning letter</a> related to design control deficiencies for a medical device firm and authored Noncompliance findings for another medical device firm
        </>
      )
    }
  ];

  return (
    <section id="key-projects" className="key-projects-section section">
      <div className="container">
        <h2 className="section-title">KEY PROJECTS</h2>
        <h3 className="section-subtitle">completed as part of RAC CERTIFICATE PROGRAM at UCSC, Silicon Valley, USA</h3>
        <ul className="key-projects-list">
          {keyProjects.map((project) => (
            <li key={project.id} className="key-project-item">
              {project.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeyProjectsSection;
