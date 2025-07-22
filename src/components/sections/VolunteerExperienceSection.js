import React from 'react';
import './VolunteerExperienceSection.css';

const VolunteerExperienceSection = () => {
  // Professional affiliations and volunteering content
  const affiliationsData = [
    {
      id: 1,
      description: (
        <>
          <strong>Regulatory Project Management</strong> (Sessions' designer, Technical Presenter, Coordinator, Moderator, Mentor) <em>Global Remote Study Group | Mar-May 2025</em>
          <ul>
            <li>Designed and led a 7-session study group focused on US, EU and International medical device regulations with 15+ active participants resulting in enhanced understanding of the medical device regulations for the participants.</li>
            <li>Developed and delivered technical content including agendas and quizzes; collaborated with 8+ SMEs</li>
            <li>Provided peer mentoring for transitioning professionals entering MedTech regulatory role</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      description: (
        <>
          <strong>Panel Speaker</strong> RAPS SF Chapter, UCSF (Apr 2025): Shared career insights on transitioning into MedTech
        </>
      )
    },
    {
      id: 3,
      description: (
        <>
          <strong>Volunteer</strong> RAPS SF Chapter (Dec 2024–Present): Member and event registration support
        </>
      )
    },
    {
      id: 4,
      description: (
        <>
          <strong>Member</strong> California Medical Instrumentation Association- Bay area Chapter
        </>
      )
    }
  ];

  return (
    <section id="volunteer" className="volunteer-section section">
      <div className="container">
        <h2 className="section-title">PROFESSIONAL AFFILIATIONS & VOLUNTEERING</h2>
        
        <ul className="affiliations-list">
          {affiliationsData.map((item) => (
            <li key={item.id} className="affiliation-item">
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default VolunteerExperienceSection;
