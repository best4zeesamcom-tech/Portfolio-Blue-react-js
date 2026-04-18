import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const selectors = '.scroll-animation, .scroll-left, .scroll-right, .scroll-up, .scroll-scale';
    const elements = document.querySelectorAll(selectors);
    
    elements.forEach((el) => observer.observe(el));

    // Show elements already visible on load
    const checkVisible = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('show');
        }
      });
    };

    setTimeout(checkVisible, 100);
    window.addEventListener('load', checkVisible);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('load', checkVisible);
    };
  }, []);

  return null;
};

export default ScrollAnimation;