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
              Driven to make a meaningful difference in healthcare through excellence in technical documentation. 
              I achieve my mission by supporting medical device, diagnostics, and digital health organizations 
              with their submissions and technical documentation, helping create, review, and format content 
              for life science businesses, supporting peers in their career journey via organizing study 
              groups or 1:1 discussions, and volunteering at RAPS.
            </p>
            <p className="hero-motto">
              <strong>Motto:</strong> I believe in chaos theory. We are all connected!
            </p>
            <p className="hero-personal">
              <strong>Personal Story:</strong> After my mother's bilateral knee replacement surgery in 2022 
              from which she did not recover fully, I am committed to ensuring I contribute to making the 
              highest quality, safe and effective medical devices and technologies.
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
