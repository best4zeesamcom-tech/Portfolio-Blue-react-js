import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactCards = [
    { id: 1, icon: 'ri-phone-line', title: 'Phone', data: '+1 (555) 123-4567' },
    { id: 2, icon: 'ri-mail-line', title: 'Email', data: 'tailor.lyborm@example.com' },
    { id: 3, icon: 'ri-map-pin-line', title: 'Location', data: 'New York, United States' },
    { id: 4, icon: 'ri-discord-line', title: 'Discord', data: 'tailor.dev' }
  ];

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title scroll-animation">CONTACT ME</h2>
      
      <div className="contact__container container grid">
        <div className="contact__info">
          {contactCards.map((card, index) => (
            <div 
              key={card.id} 
              className="contact__card scroll-left" 
              style={{ '--card-index': index + 1 }}
            >
              <i className={`${card.icon} contact__icon`}></i>
              <div>
                <h3 className="contact__card-title">{card.title}</h3>
                <p className="contact__card-data">{card.data}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="contact__form scroll-right" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__form-label">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="contact__form-input" 
              placeholder="Your name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="contact__form-group">
            <label htmlFor="email" className="contact__form-label">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="contact__form-input" 
              placeholder="Your email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="contact__form-group">
            <label htmlFor="message" className="contact__form-label">Message</label>
            <textarea 
              id="message" 
              className="contact__form-textarea" 
              placeholder="Tell me about your project..." 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="contact__button">
            Send Message <i className="ri-send-plane-line"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;