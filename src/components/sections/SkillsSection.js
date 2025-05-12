import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillData = [
    {
      category: "Computer Skills",
      details: "MS Office, Adobe Acrobat, Canva, Smartsheet, SharePoint, Virje, SAP, Atlassian JIRA, SQL, Electronic Lab Notebooks"
    },
    {
      category: "Tools & Platforms",
      details: "BSI Compliance Navigator, IQVIA database, and Nyquist AI, EUDAMED, GMDN, GUDID, FDA database-e CFR"
    },
    {
      category: "Technical Skills",
      details: "510k EU-MDR Technical documentation, GSPR, IFU, Labels, Clinical and post market surveillance, SOPs, Work Instructions, Change assessment, CAPA"
    },
    {
      category: "Regulatory Skills",
      details: "21CFR 820, 21CFR Part 11, ISO 13485, FDA QSR’s, ISO 14971, ISO 15223-1, ISO 20417, ISO 11137 and ISO 11135, FMEA, Design Control Table, EUMDR, EU IVDR"
    },
    {
      category: "Public Speaking",
      details: "International Toastmasters Club Member – India"
    },
    {
      category: "Languages",
      details: "Proficient: English, Hindi, Gujarati, Urdu    Basic: Arabic, Sanskrit, Marathi"
    },
    {
      category: "Other Skills",
      details: "Attention to Detail and Organization, Critical Analysis, Methodical Documentation, Visual Communication, Simplification of Complex Concepts, Curiosity and Lifelong Learning."
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
