import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Regulatory Affairs Specialist",
      company: "MedTech Innovations",
      period: "2020 - Present",
      description: [
        "Lead regulatory strategy for Class II and Class III medical devices",
        "Managed successful FDA 510(k) and CE mark submissions for innovative medical devices",
        "Developed and implemented regulatory compliance strategies across product lifecycle",
        "Collaborated with cross-functional teams to ensure regulatory requirements are met",
        "Conducted regulatory risk assessments and implemented mitigation strategies"
      ]
    },
    {
      id: 2,
      role: "Quality Assurance Engineer",
      company: "Healthcare Solutions Inc.",
      period: "2017 - 2020",
      description: [
        "Ensured compliance with ISO 13485 and FDA QSR regulations",
        "Led internal quality audits and supported external regulatory inspections",
        "Developed and maintained quality management documentation",
        "Implemented CAPA (Corrective and Preventive Action) processes",
        "Collaborated with R&D to integrate quality considerations into device design"
      ]
    },
    {
      id: 3,
      role: "Medical Device Research Associate",
      company: "BioMed Research Lab",
      period: "2015 - 2017",
      description: [
        "Contributed to the development of innovative medical device technologies",
        "Conducted laboratory testing and validation studies",
        "Assisted in preparing technical documentation for regulatory submissions",
        "Collaborated with clinical teams to gather user requirements",
        "Participated in design review meetings and product improvement initiatives"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-period">{exp.period}</p>
                </div>
                <div className="experience-description">
                  <ul>
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
