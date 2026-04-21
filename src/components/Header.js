import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Tailor</a>
        
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li><a href="#home" className="nav__link" onClick={closeMenu}>Home</a></li>
            <li><a href="#work" className="nav__link" onClick={closeMenu}>Work</a></li>
            <li><a href="#info" className="nav__link" onClick={closeMenu}>My Info</a></li>
            <li><a href="#services" className="nav__link" onClick={closeMenu}>Services</a></li>
            <li><a href="#contact" className="nav__link" onClick={closeMenu}>Contact Me</a></li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;