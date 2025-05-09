import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillData = [
    {
      category: "Computer Skills",
      details: "MS Office, Adobe Acrobat, Virje, SAP, Atlassian JIRA, SQL, Electronic Lab Notebooks"
    },
    {
      category: "Tools & Platforms",
      details: "BSI Compliance Navigator, IQVIA database, and Nyquist, EUDAMED, GMDN, GUDID, FDA database-e CFR"
    },
    {
      category: "Writing",
      details: "510k, Technical documentation, GSPR, IFU, Labels, Clinical and post market surveillance, SOPs, Work Instructions, Change assessment, CAPA"
    },
    {
      category: "Worked with",
      details: "21CFR 820, ISO 13485, ISO 14971, ISO 15223-1, ISO 20417, ISO 11137 and ISO 11135"
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
      details: "Critical Analysis, Methodical Documentation, Visual Communication, Simplification of Complex Concepts, Curiosity and Lifelong Learning, Attention to Detail and Organization"
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
