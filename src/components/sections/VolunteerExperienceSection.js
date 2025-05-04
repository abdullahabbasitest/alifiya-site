import React from 'react';
import './VolunteerExperienceSection.css';

const VolunteerExperienceSection = () => {
  // Volunteer experiences data
  const volunteerExperiences = [
    {
      id: 1,
      role: "Organizer",
      organization: "Independent US, EU, Global Regulations Study Group",
      duration: "2025 – Present",
      summary: "Leading a 50–60-member global study group by creating content for US,EU, global regulation based topics, developing session structures, creating agendas, coordinating with SMEs, creating regulations' related quizzes, handling facilitation and admin"
    },
    {
      id: 2,
      role: "Volunteer & Member",
      organization: "RAPS San Francisco Chapter",
      duration: "2024 – Present",
      summary: "Supporting the membership and registration team as an active volunteer."
    },
    {
      id: 3,
      role: "Speaker Panelist",
      organization: "Event at UCSF with RAPS San Francisco Chapter",
      duration: "April 2025",
      summary: "Topic- Evolving in regulatory"
    }
  ];

  return (
    <section id="volunteer" className="volunteer-section section">
      <div className="container">
        <h2 className="section-title">VOLUNTEER EXPERIENCE</h2>
        
        <div className="volunteer-container">
          {volunteerExperiences.map((volunteer) => (
            <div key={volunteer.id} className="volunteer-card">
              <div className="volunteer-header">
                <div className="volunteer-role-wrapper">
                  <h3 className="volunteer-role">{volunteer.role}</h3>
                  <span className="volunteer-duration">{volunteer.duration}</span>
                </div>
                <p className="volunteer-organization">{volunteer.organization}</p>
              </div>
              <div className="volunteer-divider"></div>
              <div className="volunteer-content">
                <p className="volunteer-summary">{volunteer.summary}</p>
              </div>
              <div className="volunteer-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerExperienceSection;
