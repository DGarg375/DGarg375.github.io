import './App.css';
import { useEffect, useState } from 'react';
import Preloader from './components/loader/Preloader';
import BackgroundAnimation from './components/backgroundanimation/BackgroundAnimation';
import ScrollAlert from './components/scrollalert/ScrollAlert';

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
        }, 10000);
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
      <div class="scroll-action"><ScrollAlert /></div>
    </div>
  );
}

export default App;
