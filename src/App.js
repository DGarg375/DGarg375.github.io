import { useInView } from 'react-intersection-observer';

import './App.css';
import { projectsBundle } from './projectMeta';
import { useEffect, useState } from 'react';
import Preloader from './components/loader/Preloader';
import BackgroundAnimation from './components/backgroundanimation/BackgroundAnimation';
import Typewriter from './components/typewriter/Typewriter';
import ProjectSlider from './components/projectslider/ProjectSlider';
import ScrollAlert from './components/scrollalert/ScrollAlert';

const typewriterTexts = ["import './DivyanshGargDev';"];
const imgSrc = ["https://as2.ftcdn.net/v2/jpg/02/05/66/49/1000_F_205664984_11Yvj3XlPfAxTwmwXTTtmi79OuhJjChb.jpg", "https://as2.ftcdn.net/v2/jpg/02/45/57/97/1000_F_245579784_Lypg35Mt7Voe4uxJtJcEQb4wWZMhWnEi.jpg", "https://i.pinimg.com/originals/02/ac/e3/02ace3d2a3ae4024c8b8353581fc0c41.png", "https://as1.ftcdn.net/v2/jpg/02/45/57/96/1000_F_245579674_XXzjXVvF8SaOU9nbDnxamHg7yt9heJN1.jpg", "https://previews.123rf.com/images/barrirret/barrirret1809/barrirret180900063/109924405-bright-abstract-mosaic-seamless-pattern-vector-background-for-design-and-decorate-backdrop.jpg", "https://as2.ftcdn.net/v2/jpg/02/89/41/33/1000_F_289413303_YKIoh6FoWzhOuYFU9AzxaouMRthoA04Y.jpg", "https://as2.ftcdn.net/v2/jpg/01/57/14/79/1000_F_157147947_4oBjSoFESXz7xX8fDsLJkqJS4VJJ2DVx.jpg", "https://as1.ftcdn.net/v2/jpg/01/57/14/86/1000_F_157148627_pjuZy7SH2X2OK8JFsNT3GLXzVUaqrVMW.jpg", "https://img.myloview.com/stickers/colored-abstract-marble-irregular-plastic-stony-mosaic-pattern-texture-background-with-white-grout-full-spectrum-rainbow-colors-400-81280133.jpg"];
const numProjects = projectsBundle.numProjects;

function App() {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projectsRef, projectsInView] = useInView({ threshold: 0.99,
    triggerOnce: false });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.85, triggerOnce: false });
  const [contactRef, contactInView] = useInView({ threshold: 0.43, triggerOnce: false });

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
            <a href="#placeholder-3" class="linkActivate">
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
            <ProjectSlider numProjects={numProjects} projects={projectsBundle} />
          </div>
        </div>
        <div class="placeholder-div" id="placeholder-2"></div>
        <div class="about-me-slider" id="about-section">
          <div ref={aboutRef} class="about-me-container"></div>
        </div>
        <div class="placeholder-div" id="placeholder-3"></div>
        <div ref={contactRef} class="contact-me" id="contact-section"></div>
      </div>
      <div class="scroll-action">
        <ScrollAlert />
      </div>
    </div>
  );
}

export default App;
