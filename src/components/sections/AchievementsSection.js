import React from 'react';
import './AchievementsSection.css';

const AchievementsSection = () => {
  const achievementsData = [
    {
      role: "Organizer, RAC-Devices Global Study Group",
      period: "March 2025–Present",
      description: "Led 30+ member global study group on US, EU, and global medical device regulations. Developed technical content, session agendas, coordinated SMEs, created regulatory quizzes, facilitation and admin."
    },
    {
      role: "Panel Speaker, \"Evolving in Regulatory\" – RAPS SF Chapter, UCSF",
      period: "April 2025",
      description: "Shared professional journey and discussed regulatory education gaps for job seekers."
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "RCC – MDR Certification",
      category: "Certification",
      institution: "Regulatory Affairs Professionals Society (RAPS)",
      year: "2025",
      details: "Successfully cleared the EU-MDR exam",
      image: "/rcc-mdr.png"
    },
    {
      id: 2,
      title: "Regulatory Affairs Certificate Program (RAC)",
      category: "Certificate program",
      institution: "University of California, Santa Cruz – Silicon Valley Extension",
      year: "2024",
      details: "Successfully completed the credits for the certificate program with the coursework:",
      coursework: [
        "Quality Management Systems: ISO 13485 & FDA Requirements",
        "Design Control for Medical Devices & IVDs",
        "Medical Device Process Validation",
        "EU-MDR: Clinical Evaluation & Post-Market Surveillance",
        "Regulatory Submissions: Devices & Diagnostics",
        "Global Regulatory Strategy & Submissions"
      ],
      image: "/rac.png"
    }
  ];

  return (
    <section id="achievements" className="achievements-section section">
      <div className="container">
        <h2 className="section-title mt-xl">CERTIFICATIONS</h2>
        
        <div className="certifications-container">
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              <div className="certification-content">
                <div className="certification-header">
                  <div className="certification-badge">
                    <span className="certification-category">{cert.category}</span>
                    <span className="certification-year">{cert.year}</span>
                  </div>
                  <h3 className="certification-title">{cert.title}</h3>
                  <div className="certification-institution">{cert.institution}</div>
                </div>
                
                <div className="certification-details">
                  <p>{cert.details}</p>
                  {cert.coursework && (
                    <ul className="coursework-list">
                      {cert.coursework.map((course, index) => (
                        <li key={index} className="coursework-item">{course}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
              <div className="certification-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="certification-image" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
