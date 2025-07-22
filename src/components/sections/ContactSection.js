import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">CONTACT ME</h2>
        
        <div className="contact-tagline">
          <p>Let's connect and explore opportunities together!</p>
        </div>
        
        <div className="contact-content">
          
          <div className="contact-methods-grid">
            <div className="contact-method">
              <div className="method-icon">✉️</div>
              <h4 className="method-title">Email</h4>
              <a href="mailto:parekhalifiya@gmail.com" className="method-link">
                parekhalifiya@gmail.com
              </a>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">👥</div>
              <h4 className="method-title">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/alifiya-parekh/" target="_blank" rel="noopener noreferrer" className="method-link">
                linkedin.com/in/alifiya-parekh
              </a>
            </div>
            
            <div className="contact-method">
              <div className="method-icon">📍</div>
              <h4 className="method-title">Location</h4>
              <p className="method-text">Sunnyvale Bay Area, California</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
