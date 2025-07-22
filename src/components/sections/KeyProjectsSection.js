import React from 'react';
import './KeyProjectsSection.css';

const KeyProjectsSection = () => {
  // Key Projects from RAC Certificate Program
  const keyProjects = [
    {
      id: 1,
      description: (
        <>
          Authored <a href="https://drive.google.com/file/d/1soQ3FGSUrH-3yWkW2YEIn6XBuigFSYLb/view" target="_blank" rel="noopener noreferrer">510(k) submission</a> including substantial equivalence and performance data, <a href="https://drive.google.com/file/d/1Yr-CIBpucceXdVM9O6BujMk6yEojB8ed/view?usp=sharing" target="_blank" rel="noopener noreferrer">technical documentation</a>, <a href="https://drive.google.com/file/d/1LXCxHCiZxF0G0wb_GWKgByZ5j7RnaaGo/view?usp=sharing" target="_blank" rel="noopener noreferrer">CEP</a>, CER, <a href="https://drive.google.com/file/d/1jxf5nGuysSC14y-CJ0CxdCFBm8_0z7Jd/view?usp=sharing" target="_blank" rel="noopener noreferrer">PMS Plan</a> and <a href="https://drive.google.com/file/d/13qtfnw1LQhF8WFA19W3ow27ODZVkejEu/view?usp=sharing" target="_blank" rel="noopener noreferrer">PMS report</a>, and labels for a <a href="https://drive.google.com/file/d/1Yr-CIBpucceXdVM9O6BujMk6yEojB8ed/view" target="_blank" rel="noopener noreferrer">flexible bronchoscope</a> per EU-MDR
        </>
      )
    },
    {
      id: 2,
      description: (
        <>
          Developed <a href="https://drive.google.com/file/d/19gHxJA2TmtPljxhy6YEdAA1zuCqqj07i/view?usp=sharing" target="_blank" rel="noopener noreferrer">regulatory strategy</a> for U.S., EU, and Canadian markets, <a href="https://drive.google.com/file/d/1aIhn8BXeaBi48X0N8IaeKNcbd0QuNPOs/view?usp=sharing" target="_blank" rel="noopener noreferrer">design control file</a> and <a href="https://drive.google.com/file/d/1Z9UIShFuOek8sqOjretk1UY5A4_y9Xuq/view?usp=sharing" target="_blank" rel="noopener noreferrer">process validation plan</a> for a <a href="https://drive.google.com/file/d/1aIhn8BXeaBi48X0N8IaeKNcbd0QuNPOs/view" target="_blank" rel="noopener noreferrer">digital stethoscope</a>
        </>
      )
    },
    {
      id: 3,
      description: (
        <>
          Authored <a href="https://drive.google.com/file/d/1QPidkwcbrLIzI5xcQ-BkfGd1rJld_NWM/view" target="_blank" rel="noopener noreferrer">FDA Warning letter</a> related to design control deficiencies for a medical device firm and authored <a href="https://drive.google.com/file/d/1geCabqvFprJBascRf9miibRdRPlZSBec/view?usp=sharing" target="_blank" rel="noopener noreferrer">Noncompliance findings</a> for another medical device firm
        </>
      )
    }
  ];

  return (
    <section id="key-projects" className="key-projects-section section">
      <div className="container">
        <h2 className="section-title">KEY PROJECTS</h2>
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
