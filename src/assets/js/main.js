 (function() {
      'use strict';
      
      // ---------- MENU TOGGLE ----------
      const navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle'),
            navClose = document.getElementById('nav-close');
      if(navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
      if(navClose) navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
      
      const navLinks = document.querySelectorAll('.nav__link');
      navLinks.forEach(link => link.addEventListener('click', () => navMenu.classList.remove('show-menu')));
      
      // ---------- BLUR HEADER ----------
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
        window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
      });
      
      // ---------- SCROLL ANIMATIONS (Intersection Observer) ----------
      function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('show'); });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
        
        const selectors = '.scroll-animation, .scroll-left, .scroll-right, .scroll-up, .scroll-scale';
        document.querySelectorAll(selectors).forEach(el => observer.observe(el));
        
        // Show elements already visible
        const checkVisible = () => {
          document.querySelectorAll(selectors).forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight * 0.85) el.classList.add('show');
          });
        };
        setTimeout(checkVisible, 100);
        window.addEventListener('load', checkVisible);
      }
      
      document.addEventListener('DOMContentLoaded', initScrollAnimations);
    })();
