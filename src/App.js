import { useInView } from 'react-intersection-observer';

import './App.css';
import { projectsBundle } from './projectMeta';
import { aboutBundle } from './aboutMeta';
import { useEffect, useState } from 'react';
import Preloader from './desktop/loader/Preloader';
import BackgroundAnimation from './desktop/backgroundanimation/BackgroundAnimation';
import Typewriter from './desktop/typewriter/Typewriter';
import ProjectSlider from './desktop/projectslider/ProjectSlider';
import AboutSlider from './desktop/aboutslider/AboutSlider';
import Contact from './desktop/contact/Contact';
import ProjectSliderMobile from './mobile/projectslidermobile/ProjectSliderMobile';
import AboutSliderMobile from './mobile/aboutslidermobile/AboutSliderMobile';
import MobileComponent from './mobile/index';
import ScrollAlert from './desktop/scrollalert/ScrollAlert';

const typewriterTexts = ["import './DivyanshGargDev';"];

function App() {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projectsRef, projectsInView] = useInView({ threshold: 0.99,
    triggerOnce: false });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.85, triggerOnce: false });
  const [contactRef, contactInView] = useInView({ threshold: 0.99, triggerOnce: false });
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ])

  // This useEffect is to preload images
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

    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  // Finish Mobile View
  if(windowSize[0] < 620) {
    return(<MobileComponent />)
  }

  if(isLoading || !isImagesLoaded) {
    return <Preloader />
  }

  return (
    <div className="App">
      <div class="background-animation">
        <BackgroundAnimation width={window.innerWidth} height={window.innerHeight} startframe="0" endframe="212"></BackgroundAnimation>
      </div>
      <div class="layout">
        <div class="navbar-container">
          <div class={`nav-tab ${projectsInView ? 'active-tab' : ''}`} id="projects-tab">
            <a href="#projects-section" class="linkActivate">
              PROJECTS
            </a>
          </div>
          <div class={`nav-tab ${aboutInView ? 'active-tab' : ''}`} id="about-tab">
            <a href="#about-section" class="linkActivate">
              ABOUT
            </a>
          </div>
          <div class={`nav-tab ${contactInView ? 'active-tab' : ''}`} id="contact-tab">
            <a href="#contact-section" class="linkActivate">
              CONTACT
            </a>
          </div>
          <div class="nav-tab" id="resume-tab">
            <a href="https://www.linkedin.com/in/divyansh-garg-4b22171a1/" target="_blank" rel="noreferrer" class="linkActivate"> 
              LINKEDIN
            </a>
          </div>
        </div>
        <div class="intro-typewriter">
          <Typewriter texts={typewriterTexts} />
        </div>
        <div class="placeholder-div" id="placeholder-1"></div>
        <div class="projects-slider" id="projects-section">
          <div ref={projectsRef} class="projects-container">
            {windowSize[0] < 610 ? <ProjectSliderMobile numProjects={projectsBundle.numProjects} projects={projectsBundle} /> : <ProjectSlider numProjects={projectsBundle.numProjects} projects={projectsBundle} />}
          </div>
        </div>
        <div class="placeholder-div" id="placeholder-2"></div>
        <div class="about-me-slider" id="about-section">
          <div ref={aboutRef} class="about-me-container">
            {windowSize[0] < 610 ? <AboutSliderMobile numSlides={aboutBundle.numSlides} slides={aboutBundle} /> : <AboutSlider numSlides={aboutBundle.numSlides} slides={aboutBundle} />}
          </div>
        </div>
        <div class="placeholder-div" id="placeholder-3"></div>
        <div ref={contactRef} class="contact-me" id="contact-section">
          <Contact />
        </div>
      </div>
      <div class="scroll-action">
        <ScrollAlert />
      </div>
    </div>
  );
}

export default App;
