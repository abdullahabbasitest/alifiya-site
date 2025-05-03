import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-info">
            <h1 className="hero-name">Alifiya Parekh</h1>
            <h2 className="hero-title">Medical Device Professional</h2>
            <p className="hero-bio">
              Experienced professional with expertise in medical device regulatory affairs, 
              quality assurance, and product development. Passionate about leveraging 
              technology to improve patient outcomes and healthcare delivery.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="hero-button primary-button">Get In Touch</a>
              <a href="#experience" className="hero-button secondary-button">View Experience</a>
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
        <div className="hero-scrolldown">
          <a href="#experience" className="scrolldown-link">
            <span className="scrolldown-text">Scroll Down</span>
            <span className="scrolldown-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
