import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer scroll-animation">
      <div className="container">
        <p className="footer__copy">© {currentYear} Tailor Lyborm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;