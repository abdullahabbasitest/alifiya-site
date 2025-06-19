import React from 'react';
import './AreasOfInterestSection.css';

const AreasOfInterestSection = () => {
  const interests = [
    {
      title: "Quality Assurance",
      icon: "🔍",
      description: "Implementation of quality management systems, internal audits, and compliance with international standards."
    },
    {
      title: "Regulatory Affairs",
      icon: "📋",
      description: "Strategy development for regulatory submissions, maintaining compliance with FDA, EU MDR, and global regulations."
    },
    {
      title: "Regulatory Operations",
      icon: "⚙️",
      description: "Documentation management, submission coordination, and ensuring adherence to regulatory requirements."
    },
    {
      title: "Program Management",
      icon: "📊",
      description: "Cross-functional leadership, strategic planning, and execution of medical device development projects."
    }
  ];

  return (
    <section id="areas-of-interest" className="areas-of-interest-section section">
      <div className="container">
        <h2 className="section-title">AREAS OF INTEREST</h2>
        
        <div className="interest-intro">
          <p>My professional interests focus on leveraging my expertise in the following areas:</p>
        </div>
        
        <div className="interest-cards">
          {interests.map((interest, index) => (
            <div className="interest-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="interest-icon">{interest.icon}</div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
            </div>
          ))}
        </div>
        
        <div className="interest-footer">
          <p>
            I'm also open to other opportunities that align with my background and skillset in the medical devices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AreasOfInterestSection;
