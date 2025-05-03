import React from 'react';
import './AchievementsSection.css';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Regulatory Affairs Certification (RAC)",
      issuer: "Regulatory Affairs Professionals Society (RAPS)",
      year: "2019",
      description: "Specialized certification demonstrating expertise in medical device regulatory frameworks across multiple markets."
    },
    {
      id: 2,
      title: "ISO 13485 Lead Auditor Certification",
      issuer: "Quality Management Institute",
      year: "2018",
      description: "Certification in leading quality management system audits for medical device manufacturers."
    },
    {
      id: 3,
      title: "Medical Device Innovation Award",
      issuer: "Healthcare Technology Association",
      year: "2021",
      description: "Recognized for contributions to a groundbreaking medical device that improved patient outcomes by 35%."
    },
    {
      id: 4,
      title: "Six Sigma Green Belt",
      issuer: "American Society for Quality (ASQ)",
      year: "2017",
      description: "Certification in process improvement methodologies and quality management principles."
    },
    {
      id: 5,
      title: "MDR Compliance Leadership Recognition",
      issuer: "European Medical Device Industry Council",
      year: "2022",
      description: "Recognition for successful leadership in transitioning medical device portfolio to EU MDR compliance."
    },
    {
      id: 6,
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      year: "2020",
      description: "Globally recognized certification in project management principles and practices."
    }
  ];

  return (
    <section id="achievements" className="achievements-section section">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>
        
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-year">{achievement.year}</div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <div className="achievement-issuer">{achievement.issuer}</div>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
