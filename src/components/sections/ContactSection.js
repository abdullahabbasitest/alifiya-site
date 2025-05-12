import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">CONTACT ME</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div>
              <p className="contact-description">
              I'm open to new opportunities, whether full-time or part-time, or on a contract basis. I'm flexible with remote, hybrid, or onsite roles within the USA and do not require work sponsorship
              </p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h4 className="method-title">Email</h4>
                <a href="mailto:parekhalifiya@gmail.com" className="method-link">
                parekhalifiya@gmail.com
                </a>
              </div>
              
              <div className="contact-method">
                <h4 className="method-title">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/alifiya-parekh/" target="_blank" rel="noopener noreferrer" className="method-link">
                  linkedin.com/in/alifiya-parekh
                </a>
              </div>
              
              <div className="contact-method">
                <h4 className="method-title">Location</h4>
                <p className="method-text">Sunnyvale Bay Area, California</p>
              </div>
              
              <div className="contact-method">
                <h4 className="method-title">Phone</h4>
                <a href="tel:+14087025207" className="method-link">
                  +1 (408) 702-5207
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
