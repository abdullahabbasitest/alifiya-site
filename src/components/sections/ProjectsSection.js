import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  // Projects data based on the image provided and links
  const projects = [
    {
      id: 1,
      title: "Gap Analysis",
      description: "Conducted gap analysis and documented a comprehensive compliance roadmap for a medical device firm with regulatory requirements.",
      link: "https://docs.google.com/presentation/d/1higKgAy4Xv4I02skzdPMe9SXY8Fr2XxI/edit#slide=id.p2"
    },
    {
      id: 2,
      title: "510(k) Premarket Notification",
      description: "Authored and submitted 510(k) premarket notification for a flexible bronchoscope, including device specifications, verification, validation, and performance data.",
      link: "https://drive.google.com/file/d/1soQ3FGSUrH-3yWkW2YEIn6XBuigFSYLb/view"
    },
    {
      id: 3,
      title: "Design Control File",
      description: "Created and organized the Design Control Files for a digital stethoscope, covering design inputs, outputs, verification, validation, and transfer.",
      link: "https://drive.google.com/file/d/1aIhn8BXeaBi48X0N8IaeKNcbd0QuNPOs/view"
    },
    {
      id: 4,
      title: "Process Validation",
      description: "Developed a comprehensive process validation plan for the manufacturing of a digital stethoscope.",
      link: "https://drive.google.com/file/d/1Z9UIShFuOek8sqOjretk1UY5A4_y9Xuq/view"
    },
    {
      id: 5,
      title: "Orthopedic Implant Documentation",
      description: "Prepared technical documentation including the Clinical Evaluation Plan (CEP), Clinical Evaluation Report (CER), Post-Market Surveillance (PMS) Plan and Report, and product labeling for an orthopedic implant."
    },
    {
      id: 6,
      title: "Regulatory Strategy",
      description: "Prepared regulatory strategy for launching digital bronchoscopes to US, EU and Canada markets.",
      link: "https://drive.google.com/file/d/19gHxJA2TmtPljxhy6YEdAA1zuCqqj07i/view"
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        
        <table className="projects-table">
          <thead>
            <tr>
              <th>Projects</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="project-title">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </td>
                <td>{project.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProjectsSection;
