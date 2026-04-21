import React from 'react';
import './Info.css';
import infoPerfil from '../assets/img/info-perfil.png';

const Info = () => {
  return (
    <section className="info section" id="info">
      <h2 className="section__title scroll-animation">MY INFO</h2>
      
      <div className="info__container container grid">
        <div className="info__img-box scroll-left">
          <img src={infoPerfil} alt="Tailor Lyborm" className="info__img" />
        </div>

        <div className="info__data scroll-right">
          <h3 className="info__subtitle">About Me</h3>
          <p className="info__description">
            Passionate about creating websites with beautiful interfaces. 
            I have years of experience in Web Development with several projects completed.
          </p>
          <a href="/assets/cv.pdf" download className="info__button">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;