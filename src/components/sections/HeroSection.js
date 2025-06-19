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
            Curious, Driven, Committed to growth. Engineer with a Master’s and bachelor’s in biotechnology engineering (Total 6 years of degree education) and over 6.5 years of hands-on experience in quality compliance for Class II/III medical devices and diagnostics (US-FDA, EU-MDR), including SaMD, as well as R&amp;D and technical documentation within the biologics industry. Committed to delivering the highest quality of service while prioritizing the safety and effectiveness of medical devices for end users.
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
