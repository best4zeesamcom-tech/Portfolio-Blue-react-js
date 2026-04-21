import React from 'react';
import './Home.css';
import homePerfil from '../assets/img/home-perfil.png';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <img src={homePerfil} alt="Tailor Lyborm" className="home__img scroll-scale" />
        
        <div className="home__data scroll-left">
          <h1 className="home__name">Tailor <br /> Lyborm</h1>
          <h3 className="home__profession">Web Developer</h3>
        </div>

        <a href="#work" className="home__scroll scroll-up">
          <div className="home__scroll-box">
            <i className="ri-arrow-down-line"></i>
          </div>
          <span className="home__scroll-text">Recent Works</span>
        </a>
      </div>
    </section>
  );
};

export default Home;