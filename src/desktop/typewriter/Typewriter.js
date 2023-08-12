import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts, typingDelay = 150, terminalSign = '$' }) => {
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
        }
      }, typingDelay);
    };

    setTimeout(() => {
      startTyping();
    }, 2000);
    // startTyping();

    return () => {
      clearTimeout(timerId);
    };
  }, [texts, typingDelay, currentTextIndex]);

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
