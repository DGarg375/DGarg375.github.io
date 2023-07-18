import './ScrollAlert.css';
import React, { useEffect, useState } from 'react';

const ScrollAlert = () => {
    const [isEndOfScroll, setIsEndOfScroll] = useState(false);
    const handleScroll = () => {
      const targetElement = document.getElementById('contact-section');
      if(targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsEndOfScroll(targetPosition <= windowHeight);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return !isEndOfScroll && <div class="down-arrow" title="Scroll Down" id="scroller-div"></div>;
  };
export default ScrollAlert;