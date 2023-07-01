import './App.css';
import { useEffect, useState } from 'react';
import Preloader from './components/loader/Preloader';
import BackgroundAnimation from './components/backgroundanimation/BackgroundAnimation';
import Typewriter from './components/typewriter/Typewriter';
import ScrollAlert from './components/scrollalert/ScrollAlert';

const typewriterTexts = ["import './DivyanshGargDev';"];

function App() {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = [];
        for(let i = 0; i < 212; i++) {
          const img = new Image();
          img.src = `./frames/Frame (${(i + 1).toString()}).jpg`;
          imagePromises.push(
            new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
            })
          );
        }
        await Promise.all(imagePromises);
        setIsImagesLoaded(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };
    preloadImages();
  }, []);
  if(isLoading || !isImagesLoaded) {
    return <Preloader />
  }
  return (
    <div className="App">
      <div class="background-animation">
        <BackgroundAnimation width={window.innerWidth} height={window.innerHeight} startframe="0" endframe="212"></BackgroundAnimation>
      </div>
      <div class="layout">
        <div class="intro-typewriter"><Typewriter texts={typewriterTexts} /></div>
        <div class="placeholder-div" id="placeholder-1"></div>
        <div class="projects-slider">
          <div class="projects-container"></div>
        </div>
        <div class="placeholder-div" id="placeholder-2"></div>
        <div class="about-me-slider">
          <div class="about-me-container"></div>
        </div>
        <div class="placeholder-div" id="placeholder-3"></div>
        <div class="contact-me"></div>
      </div>
      <div class="scroll-action"><ScrollAlert /></div>
    </div>
  );
}

export default App;
