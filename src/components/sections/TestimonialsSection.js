import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      name: "Rebecca D",
      position: "Third degree connection Regulatory | Quality | Electronic Systems hybrid talent",
      text: " work with Alifiya in RAPS San Francisco Chapter volunteering. As the chapter's Membership and Registration (M&R) Committee chair, I manage Alifiya and other committee members to support the membership onboarding, membership and registration database management, and on-site check in of event attendees. Alifiya has been an active member of our committee and has contributed to a number of events. Alifiya is very responsive and communicative throughout our collaboration. She is committed to getting the assigned tasks completed, and she thinks creatively to achieve the goal in an efficient manner. She actively seeks opportunities for continuous improvement while keeping the lead in the loop, and asks for confirmation when needed. When challenges arise, Alifiya clearly communicates it with an alternative proposal. In addition to her M&R committee assignments, Alifiya also went above and beyond and showcased her outstanding written communication skills via LinkedIn posts to help promote the chapter and its events. Alifiya is a bright, personable and professional individual. It is a true pleasure working with Alifiya."
    },
    {
      name: "Bill Kurani",
      position: "Founder and SVP, IVD, Medical Device, Digital Health, Personalized Wellness, Personalized Cosmetics",
      text: "I've had the pleasure of working with Alifiya during the UCSC course on EU Medical Device Regulations, where she consistently demonstrated a strong work ethic, attention to detail, and a deep understanding of regulatory requirements. She excelled in all assignments—including device classification, technical file creation, clinical evaluations, labeling, and post-market surveillance—earning an A in the class. Alifiya actively contributed to class discussions, sharing her prior medical device experience and insights, and has recently been documenting IVD product classifications and trial planning with precision.\n\nBeyond academics, Alifiya took the initiative to set up and lead a study group focused on regulatory affairs, fostering peer learning and collaboration. I attended one of the sessions as a subject matter expert and was genuinely impressed by the quality of work and discussions. Her strong writing skills, as well as her knowledge of both EU and FDA regulations, would make her a valuable asset to any regulatory affairs team."
    },
    {
      name: "Ashfaq Hussain",
      position: "ASQ CQE, ASQ CSSGB, IRCA Certified Lead Auditor, Medical Device QMS- ISO 13485 and 21 CFR 820, - EU MDR, Risk Management ISO 14971",
      text: "Working with Alifiya has been fantastic. She has the ability to quickly learn and grasp the medical device regulations and standards, She has also worked effortlessly helping our team meet deadlines for the EUMDR submissions with her technical expertise. Over the years, we discussed about medical device regulations and compliance extensively which shows her interest and passion towards the medical device regulations and she keeps herself up-to date with the latest information in the field of medical devices. I would highly recommend her to any team which is seeking a highly organized, enthusiastic, quick learner with strong technical skills. She adds a great value to any organization by her dedication towards the work and with the depth of technical knowledge."
    },
    {
      name: "Nakul Pathak",
      position: "Regulatory Affairs Manager Dormer Laboratories Inc.",
      text: "Alifiya and I have worked across multiple settings—as a coursemate and project partner during the RAC Certificate Program at UCSC, a collaborator on a regulatory project at Antrix, and a dedicated study group member for the RAPS RCC-MDR and organizer for RAC Devices preparation initiatives.Throughout these various experiences, Alifiya has consistently demonstrated a strong drive to learn, an eagerness to contribute, and a genuine passion for the field of quality and regulatory affairs in the medical device industry. She has a knack for quickly grasping complex concepts and translating them into visually engaging presentations and flowcharts that help both her and her peers understand the material better.Alifiya is dependable, resourceful, and brings a positive energy to every team she’s part of. She's not only reliable and skilled but also fun to work with. I wholeheartedly recommend her for any team seeking a motivated and capable professional in the quality and regulatory space"
    },
    {
      name: "Akshay Jadhav",
      position: "Senior Engineer @ Kohler Co. | Codes and Standards | Stakeholder Management | Strategy Implementation | Compliance | Healthcare Devices",
      text: "I had the privilege of collaborating with Alifiya on several high-profile projects, including Mobidisc L, Software, and Skin Mesher, during our tenure at TATA Elxsi, where we worked together on the Zimmer Biomet account. Throughout our collaboration, I was consistently impressed by Alifiya's exceptional teamwork, adaptability, and technical expertise. Her outstanding strengths include:\n\n- Cooperative and accommodating approach to team collaboration\n- Intelligent and efficient work style\n- Exceptional critical reviewing skills\n- Rapid learning abilities\n\nAlifiya's contributions were invaluable to our team's success, and I strongly believe she would be a valuable asset to any organization. I wholeheartedly recommend her for any future opportunities."
    },
    {
      name: "Saleel Yardi",
      position: "Sr. Technical Executive at Barentz Distribution India Pvt Ltd with expertise in Food Technology and Microbiology",
      text: "Alifiya and I worked together on our research project titled-Agrobacterium Mediated Transformation... published in Research & Reviews: Journal of Microbiology and Biotechnology. Alifiya proved to be a dependable and reliable team member—highly organized, detail-oriented, and a quick learner with remarkable clarity of thought. Her ability to grasp complex techniques and contribute meaningfully made her an invaluable part of our research team."
    },
    {
      name: "Prabhu Muthu, RCC-MDR",
      position: "Senior Regulatory Affairs Specialist at STRYKER (Payroll of ALTEN)- Expertise in EU MDR 2017/745, USFDA - 510(k), Product registration, Sustenance Engineering and Life Cycle Management, Risk Management, QMS",
      text: "I've known Alifiya for some time now when we were part of the same study group for the RAPS RCC-MDR preparation, and she stood out as an enthusiastic and eager learner. Fast forward a few months, and she went on to launch a global study group of over 30 members focused on understanding of US, EU, and global medical device regulations. I've found her to be not only a committed learner but also a highly organized and inspiring leader who fosters collaboration and knowledge-sharing within the community."
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
