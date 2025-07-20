import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillData = [
    {
      category: "Regulatory Submissions and Technical Writing",
      details: "EU MDR Technical documentation, GSPR, IFU and labels, Clinical and post market surveillance, SOPs, Work Instructions, Change assessment, CAPA, Deviation, Risk management, Design control file and Process validation plan"
    },
    {
      category: "Regulatory Frameworks & Quality Standards",
      details: "EU MDR 2017/745, US FDA guidance documents, ISO 13485, 21CFR 820, 21CFR Part 11, ISO 14971, ISO 15223-1, ISO 20417, EU-IVDR, IMDRF, and other ISO/ IEC standards"
    },
    {
      category: "Tools & Databases",
      details: "MS Office suite, Adobe Acrobat, Adobe express, Canva, Notion, Veeva, Smartsheet, SharePoint, SAP, Virje, JIRA, BSI Compliance Navigator, GUDID, EUDAMED, FDA database, e Star Forms, Nyquist AI, IQVIA database, e Lab notebooks, MDCG"
    },
    {
      category: "Languages",
      details: "Fluent in English, Hindi, Gujarati, Basic proficiency in Urdu, Arabic, Sanskrit, Marathi"
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        
        <div className="skills-table-container">
          <table className="skills-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {skillData.map((skill, index) => (
                <tr key={index}>
                  <td className="skill-category">{skill.category}</td>
                  <td className="skill-details">{skill.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
