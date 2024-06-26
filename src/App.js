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

const typewriterTexts = ["Divyansh Garg"];

const firstBackgroundImage = new Image();
firstBackgroundImage.src = `./frames/Frame (1).jpg`;

function App() {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [loader, setLoader] = useState(true);
  const [images, setImages] = useState([firstBackgroundImage]);
  const [projectsRef, projectsInView] = useInView({ threshold: 0.85,
    triggerOnce: false });
  const [placeholderOneRef, placeholderOneInView] = useInView({ threshold: 0.35, triggerOnce: false });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.85, triggerOnce: false });
  const [contactRef, contactInView] = useInView({ threshold: 0.85, triggerOnce: false });
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ])

  // This useEffect is to preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        for(let i = 1; i < 212; i++) {
          const img = new Image();
          img.src = `./frames/Frame (${(i + 1).toString()}).jpg`;
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
          images.push(img);
        }
        setImages(images);
        setIsImagesLoaded(true);
      } catch(error) {
        console.error('Error preloading images:', error);
      }
    };
    preloadImages();

    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    };

    window.addEventListener('resize', handleWindowResize);

    setTimeout(() => {
      setLoader(false);
    }, 20000);

    document.addEventListener("DOMContentLoaded", function(event) {
      let scrollpos = sessionStorage.getItem('scrollpos');
      if(scrollpos) {
        window.scrollTo(0, scrollpos);
        sessionStorage.removeItem('scrollpos');
      }
    });
    window.addEventListener("beforeunload", function(e) {
      sessionStorage.setItem('scrollpos', window.scrollY);
      
    });
    console.log(sessionStorage.getItem('scrollpos'))
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  // Finish Mobile View
  if(windowSize[0] < 620) {
    return <MobileComponent />
  }
  if(!isImagesLoaded && loader) {
    return <Preloader />
  }
  // return <Preloader />

  return (
      <div className="App">
        <div class="background-animation">
          <BackgroundAnimation width={window.innerWidth} height={window.innerHeight} startframe="1" endframe="212" images={images}></BackgroundAnimation>
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
          <div ref={placeholderOneRef} class={`${placeholderOneInView?'plcHlrActive':''} placeholder-div`} id="placeholder-1">
	    <div class="roles-container">
              <div class="change-text">WEB DEVELOPER.</div>
	      <div class="change-text">SOFTWARE ENGINEER.</div>
            </div>
	  </div>
          <div class={`projects-slider ${projectsInView?'projectsActive':''}`} id="projects-section">
            <div ref={projectsRef} class="projects-container">
              {windowSize[0] < 610 ? <ProjectSliderMobile numProjects={projectsBundle.numProjects} projects={projectsBundle} /> : <div class="desktop-projects"><ProjectSliderMobile numProjects={projectsBundle.numProjects} projects={projectsBundle} /></div>}
            </div>
          </div>
          <div class="placeholder-div" id="placeholder-2"></div>
          <div class={`about-me-slider ${aboutInView?'aboutActive':''}`} id="about-section">
            <div ref={aboutRef} class="about-me-container">
              {windowSize[0] < 610 ? <AboutSliderMobile numSlides={aboutBundle.numSlides} slides={aboutBundle} /> : <div class="desktop-abouts"><AboutSliderMobile numSlides={aboutBundle.numSlides} slides={aboutBundle} /></div>}
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
