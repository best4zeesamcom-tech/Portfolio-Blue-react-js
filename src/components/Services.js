import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'ri-code-line',
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies.'
    },
    {
      id: 2,
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces across all devices.'
    },
    {
      id: 3,
      icon: 'ri-smartphone-line',
      title: 'Responsive Design',
      description: 'Mobile-first designs that work flawlessly everywhere.'
    },
    {
      id: 4,
      icon: 'ri-speed-line',
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced techniques.'
    },
    {
      id: 5,
      icon: 'ri-shopping-cart-line',
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with secure payments.'
    },
    {
      id: 6,
      icon: 'ri-customer-service-line',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support.'
    }
  ];

  return (
    <section className="services section" id="services">
      <h2 className="section__title scroll-animation">MY SERVICES</h2>
      
      <div className="services__container container grid">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="services__card scroll-animation" 
            style={{ '--card-index': index + 1 }}
          >
            <i className={`${service.icon} services__icon`}></i>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
            <a href="#" className="services__link">
              Learn More <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;