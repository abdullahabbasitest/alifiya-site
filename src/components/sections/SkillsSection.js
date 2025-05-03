import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Regulatory Expertise",
      skills: [
        { name: "FDA 510(k) Submissions", level: 95 },
        { name: "CE Marking", level: 90 },
        { name: "ISO 13485", level: 90 },
        { name: "Medical Device Regulations (MDR)", level: 85 },
        { name: "Quality Management Systems", level: 85 }
      ]
    },
    {
      id: 2,
      title: "Technical Skills",
      skills: [
        { name: "Risk Management", level: 90 },
        { name: "Design Controls", level: 85 },
        { name: "Validation & Verification", level: 85 },
        { name: "Technical Documentation", level: 90 },
        { name: "Root Cause Analysis", level: 80 }
      ]
    },
    {
      id: 3,
      title: "Product Development",
      skills: [
        { name: "Clinical Evaluation", level: 75 },
        { name: "Biocompatibility", level: 70 },
        { name: "Medical Device Software", level: 65 },
        { name: "Product Lifecycle Management", level: 85 },
        { name: "Design Verification", level: 80 }
      ]
    },
    {
      id: 4,
      title: "Soft Skills",
      skills: [
        { name: "Cross-functional Collaboration", level: 95 },
        { name: "Project Management", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Leadership", level: 80 },
        { name: "Problem Solving", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-content">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
