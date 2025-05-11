import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      name: "Bill Kurani",
      position: "Founder and SVP, IVD, Medical Device, Digital Health, Personalized Wellness, Personalized Cosmetics",
      relation: "April 29, 2025, Bill was Alifiya's teacher",
      text: "I've had the pleasure of working with Alifiya during the UCSC course on EU Medical Device Regulations, where she consistently demonstrated a strong work ethic, attention to detail, and a deep understanding of regulatory requirements. She excelled in all assignments—including device classification, technical file creation, clinical evaluations, labeling, and post-market surveillance—earning an A in the class. Alifiya actively contributed to class discussions, sharing her prior medical device experience and insights, and has recently been documenting IVD product classifications and trial planning with precision.\n\nBeyond academics, Alifiya took the initiative to set up and lead a study group focused on regulatory affairs, fostering peer learning and collaboration. I attended one of the sessions as a subject matter expert and was genuinely impressed by the quality of work and discussions. Her strong writing skills, as well as her knowledge of both EU and FDA regulations, would make her a valuable asset to any regulatory affairs team."
    },
    {
      name: "Akshay Jadhav",
      position: "Senior Engineer @ Kohler Co. | Codes and Standards | Stakeholder Management | Strategy Implementation | Compliance | Healthcare Devices",
      relation: "September 13, 2024, Akshay worked with Alifiya on the same team",
      text: "I had the privilege of collaborating with Alifiya on several high-profile projects, including Mobidisc L, Software, and Skin Mesher, during our tenure at TATA Elxsi, where we worked together on the Zimmer Biomet account. Throughout our collaboration, I was consistently impressed by Alifiya's exceptional teamwork, adaptability, and technical expertise. Her outstanding strengths include:\n\n- Cooperative and accommodating approach to team collaboration\n- Intelligent and efficient work style\n- Exceptional critical reviewing skills\n- Rapid learning abilities\n\nAlifiya's contributions were invaluable to our team's success, and I strongly believe she would be a valuable asset to any organization. I wholeheartedly recommend her for any future opportunities."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">TESTIMONIALS</h2>
        
        {testimonials.length > 0 ? (
          <div className="testimonials-carousel">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-author-info">
                  <h3 className="testimonial-author">{testimonials[activeIndex].name}</h3>
                  <p className="testimonial-position">{testimonials[activeIndex].position}</p>
                  <p className="testimonial-relation">
                    {testimonials[activeIndex].relation}
                  </p>
                </div>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonials[activeIndex].text}</p>
              </div>
              
              <div className="testimonial-navigation">
                <button 
                  className="nav-button prev" 
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  &lsaquo;
                </button>
                
                <div className="testimonial-indicators">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === activeIndex ? 'active' : ''}`}
                      onClick={() => goToTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  className="nav-button next" 
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  &rsaquo;
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-testimonials">
            <p>No testimonials available at this time.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
