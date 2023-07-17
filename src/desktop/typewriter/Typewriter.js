import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts, typingDelay = 100, erasingDelay = 50, delay = 1500, terminalSign = '>' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timerId;

    const startTyping = () => {
      let textIndex = 0;
      setIsTyping(true);

      const typingInterval = setInterval(() => {
        if (textIndex <= texts[currentTextIndex].length) {
          setDisplayText(texts[currentTextIndex].substring(0, textIndex));
          textIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(startErasing, delay);
        }
      }, typingDelay);
    };

    const startErasing = () => {
      let textIndex = texts[currentTextIndex].length;
      setIsTyping(true);

      const erasingInterval = setInterval(() => {
        if (textIndex >= 0) {
          setDisplayText(texts[currentTextIndex].substring(0, textIndex));
          textIndex--;
        } else {
          clearInterval(erasingInterval);
          setCurrentTextIndex((prevIndex) =>
            (prevIndex + 1) % texts.length
          );
          setTimeout(startTyping, delay);
        }
      }, erasingDelay);
    };

    startTyping();

    return () => {
      clearTimeout(timerId);
    };
  }, [texts, typingDelay, erasingDelay, delay, currentTextIndex]);

  return (
    <div className="typed-text">
      <span id="terminal-sign"><b> {terminalSign} </b></span>
      <div class="typewriter-text-container">
        <div className="typewriter-text">{displayText}</div>
      </div>
      {isTyping && <span className="cursor">_ </span>}
    </div>
  );
};

export default Typewriter;
