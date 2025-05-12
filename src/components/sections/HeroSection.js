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
            A quality and regulatory affairs professional with over five years of cross-functional experience across R&D, quality, and regulatory roles in the biotech and medical device industries. I’ve had the opportunity to work with Class I, II, and III devices for US and EU regulations.
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
              src="/alifiya-pic.png" 
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
