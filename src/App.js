import React, { useEffect } from 'react';
import '@fontsource/syne/400.css';
import '@fontsource/syne/600.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Info from './components/Info';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';

function App() {
  useEffect(() => {
    // Blur header on scroll
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY >= 50) {
          header.classList.add('blur-header');
        } else {
          header.classList.remove('blur-header');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Work />
        <Info />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimation />
    </>
  );
}

export default App;