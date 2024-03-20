import './ScrollAlert.css';
import React, { useEffect, useState } from 'react';

const ScrollAlert = () => {
    const [isEndOfScroll, setIsEndOfScroll] = useState(false);
    const handleScroll = () => {
      const targetElement = document.getElementById('contact-title-id');
      if(targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsEndOfScroll(targetPosition <= windowHeight-420);
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