import React from 'react';
import './Work.css';
import work1 from '../assets/img/work-1.jpg';
import work2 from '../assets/img/work-2.jpg';
import work3 from '../assets/img/work-3.jpg';
import work4 from '../assets/img/work-4.jpg';

const Work = () => {
  const works = [
    {
      id: 1,
      img: work1,
      title: 'Restaurant Website',
      description: 'Short description of the project that was carried out in this portfolio.'
    },
    {
      id: 2,
      img: work2,
      title: 'Design Of Products',
      description: 'Short description of the project that was carried out in this portfolio.'
    },
    {
      id: 3,
      img: work3,
      title: 'E-Commerce Website',
      description: 'A modern online store with cart system and responsive design.'
    },
    {
      id: 4,
      img: work4,
      title: 'Portfolio Design',
      description: 'Personal portfolio website with smooth animations and clean UI.'
    }
  ];

  return (
    <section className="work section" id="work">
      <h2 className="section__title scroll-animation">RECENT WORKS</h2>
      
      <div className="work__container container grid">
        {works.map((work, index) => (
          <div 
            key={work.id} 
            className="work__card scroll-animation" 
            style={{ '--card-index': index + 1 }}
          >
            <img src={work.img} alt={work.title} className="work__img" />
            <div className="work__content">
              <h3 className="work__title">{work.title}</h3>
              <p className="work__description">{work.description}</p>
              <span className="work__icon">
                <i className="ri-arrow-right-line"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;