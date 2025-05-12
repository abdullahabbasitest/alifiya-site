import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  // All Professional Experiences
  const experiences = [
    {
      id: 0,
      role: "Study Group Lead, Freelance Content Engineer, 1:1 Peer Support",
      company: "Independent",
      location: "Sunnyvale, CA",
      period: "Current",
      description: [
        "Leading US, EU, and Global study groups with 30+ participants through remote sessions focused on regulatory understanding.",
        "Providing specialized content engineering services for life science businesses, including document formatting, editing, and refinement.",
        "Conducting 1:1 mentoring sessions with peers transitioning from different backgrounds to medical devices QA/RA roles."
      ]
    },
    {
      id: 1,
      role: "Regulatory Operations Specialist",
      company: "Shockwave Medical (acquired by Johnson & Johnson MedTech)",
      location: "Santa Clara, CA",
      period: "2024",
      description: [
        "Supported US and EU regulatory submissions by formatting and preparing documents.",
        "Conducted weekly searches on FDA and MDCG databases for updated guidance documents.",
        "Presented findings to the team and updated SharePoint documentation.",
        "Identified and redlined errors in Work Instructions, leading to improvements in content clarity and compliance."
      ]
    },
    {
      id: 2,
      role: "Regulatory Consultant",
      company: "Antrix Inc.",
      location: "Sunnyvale, CA",
      period: "2024",
      description: [
        "Created a regulatory database for 4 IVDs and Class I/II devices (510(k) & EU IVDR 2017/746).",
        "Researched FDA, EU, and CLSI documents and documented detailed regulatory attributes (e.g., classification, 21 CFR, IVDR rules, EMDN and GMDN codes, studies, intended use, predicate devices, etc.).",
        "Formatted QSR training materials for accuracy.",
        "Saved 48–72 hours by categorizing device types for easier team access and planning."
      ]
    },
    {
      id: 3,
      role: "Senior Engineer, Quality & Regulatory Affairs",
      company: "Tata Elxsi (Zimmer Biomet)",
      location: "Pune, MH",
      period: "2020 – 2021",
      description: [
        "Key member in developing technical documentation as per EU MDR 2017/745 for Class IIa, IIb, and III devices (Mobi disc L, Move Forward 3D software, Total Shield II).",
        "Performed EU MDR vs MDD gap analysis.",
        "Created/redlined IFUs and labels as per EN ISO 15223-1 & EN ISO 20417.",
        "Authored GSPR, Clinical Evaluation, PMS & PSUR documents.",
        "Conducted team training to ensure process compliance."
      ]
    },
    {
      id: 4,
      role: "Senior Research Associate, Technical Documentation",
      company: "USV Pvt Ltd",
      location: "Mumbai, MH",
      period: "2019 – 2020",
      description: [
        "Lead author for SOPs, SAPs, CAPAs, COAs, and other compliance documents.",
        "Delivered training on lab equipment SOPs (e.g., Fume hood, Milli-Q).",
        "Conducted internal GMP audits.",
        "Coordinated with vendors for equipment maintenance.",
        "Created Excel tracker to streamline project file archival."
      ]
    },
    {
      id: 5,
      role: "Senior Executive, R&D – Biologics",
      company: "INTAS Biopharma",
      location: "Ahmedabad, GUJ",
      period: "2017 – 2018",
      description: [
        "Main analyst to conduct analytical method development for monoclonal antibodies.",
        "Utilized techniques like SDS PAGE, IEF, HPLC, HCP, HCD analysis.",
        "Managed lab inventory and procurement using SAP."
      ]
    },
    {
      id: 6,
      role: "Senior Scientific Assistant, R&D – Biologics",
      company: "Zydus Cadila",
      location: "Ahmedabad, GUJ",
      period: "2015 – 2017",
      description: [
        "Key member in setting up the laboratory and performing method development and qualification (IQ, OQ, PQ).",
        "Conducted sameness evaluation using CD, FTIR, and spectrofluoroscope.",
        "Compiled lab documents (SOPs, STPs, ATRs) in compliance with 21 CFR Part 11."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-location">{exp.location}</p>
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
