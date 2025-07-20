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
            Results-driven AI-savvy Regulatory Affairs Specialist with 6.5+ years of experience in FDA/EU submissions (510(k),
MDR), technical documentation, and quality compliance for Class II/III medical devices, SaMD, and diagnostics.
Proven track record in authoring GSPR, CERs, PMS, risk management files and IFU, labeling review while ensuring
adherence to ISO 13485, 21 CFR 820, and EU MDR/IVDR. Adept at leading regulatory strategy, gap analyses, and
post-market surveillance to drive compliance and accelerate approvals. Strong technical writing, cross-functional
collaboration, and mentorship skills. RAC (UCSC) and RCC-MDR (RAPS) certified. Authorized to work in the U.S. without sponsorship.
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
