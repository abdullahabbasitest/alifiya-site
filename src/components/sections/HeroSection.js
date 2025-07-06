import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-name">Hi, I'm <span className="name-underline">Alifiya Parekh</span></h1>
            <div className="hero-title">MTech, RAC- Medical devices, RCC-MDR</div>
            <div className="hero-tag">Medical Devices | Diagnostics| Digital Health</div>
            <p className="hero-bio">
            Curious, driven, and dedicated Biotech Engineer & former R&D Scientist turned MedTech Quality and Regulatory professional, with over 6.5 years of hands-on experience in quality, compliance, and regulatory affairs. Proven expertise in Class II/III medical devices, diagnostics, and Software as a Medical Device (SaMD) (US FDA and EU MDR) as well as R&D and technical documentation across the biologics industry. Authorized to work in the U.S. without current or future sponsorship.
            </p>
            <div className="hero-cta">
              <a 
                href="#contact"
                className="hero-button primary-button"
              >
                Contact Me
              </a>
              <a 
                href="/alifiya-resume.docx"
                className="hero-button secondary-button"
                download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/alifiya-pic.jpeg" 
              alt="Alifiya Parekh"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
