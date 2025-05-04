import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
  const educations = [
    {
      id: 1,
      degree: "M.Tech in Biotechnology Engineering",
      institution: "Vellore Institute of Technology",
      period: "2015",
      description: "GPA: 8.51 / 10"
    },
    {
      id: 2,
      degree: "B.E. in Biotechnology Engineering",
      institution: "Gujarat Technological University",
      period: "2013",
      description: "GPA: 7.73 / 10"
    }
  ];

  return (
    <section id="education" className="education-section section">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>
        
        <div className="education-container">
          {educations.map(education => (
            <div key={education.id} className="education-item">
              <div className="education-content">
                <h3 className="education-degree">{education.degree}</h3>
                <div className="education-institution">{education.institution}</div>
                <p className="education-description">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
