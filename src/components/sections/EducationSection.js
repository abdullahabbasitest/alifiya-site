import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
  const educations = [
    {
      id: 1,
      degree: "Master of Science in Biomedical Engineering",
      institution: "Stanford University",
      period: "2013 - 2015",
      description: "Specialized in Medical Device Development and Regulatory Affairs with focus on innovative design and quality systems implementation."
    },
    {
      id: 2,
      degree: "Bachelor of Engineering in Biomedical Engineering",
      institution: "University of California, San Diego",
      period: "2009 - 2013",
      description: "Graduated with honors. Coursework included biomaterials, medical device design, and clinical applications of medical technology."
    },
    {
      id: 3,
      degree: "Certificate in Regulatory Affairs for Medical Devices",
      institution: "Regulatory Affairs Professionals Society",
      period: "2016",
      description: "Intensive program covering FDA regulations, submission strategies, and international regulatory requirements for medical devices."
    }
  ];

  return (
    <section id="education" className="education-section section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-container">
          {educations.map(education => (
            <div key={education.id} className="education-item">
              <div className="education-period">{education.period}</div>
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
