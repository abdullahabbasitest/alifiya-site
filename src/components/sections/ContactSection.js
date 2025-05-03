import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-detail">
              <h3 className="contact-title">Contact Information</h3>
              <p className="contact-description">
                I'm open to discussing new opportunities, collaborations, or answering any questions about medical device regulations and quality management systems.
              </p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h4 className="method-title">Email</h4>
                <a href="mailto:contact@example.com" className="method-link">
                  contact@example.com
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
                <p className="method-text">San Francisco Bay Area, California</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for your message. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-control" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
