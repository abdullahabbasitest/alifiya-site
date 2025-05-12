import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-name">Hi, I'm Alifiya Parekh</h1>
            <div className="hero-title">MTech, RAC- Medical devices, RCC-MDR</div>
            <div className="hero-tag">Medical Devices | Diagnostics| Digital Health</div>
            <p className="hero-bio">
            Driven to make a meaningful impact by empowering peers in their career journeys, supporting life science businesses with impactful content, and contributing to the development of safe and effective medical innovations.
            </p>
            <div className="hero-cta">
              <a 
                href="#contact"
                className="hero-button primary-button"
              >
                Contact Me
              </a>
              <a 
                href="#experience"
                className="hero-button secondary-button"
              >
                View Experience
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
