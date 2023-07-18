import './index.css';
import { useInView } from 'react-intersection-observer';
import Typewriter from '../desktop/typewriter/Typewriter';
import ScrollAlert from '../desktop/scrollalert/ScrollAlert';
import ProjectSliderMobile from './projectslidermobile/ProjectSliderMobile';
import AboutSliderMobile from './aboutslidermobile/AboutSliderMobile';
import Contact from '../desktop/contact/Contact';
import { projectsBundle } from '../projectMeta';
import { aboutBundle } from '../aboutMeta';

const MobileComponent = () => {
    const [projectsRef, projectsInView] = useInView({ threshold: 0.99,
        triggerOnce: false });
      const [aboutRef, aboutInView] = useInView({ threshold: 0.85, triggerOnce: false });
      const [contactRef, contactInView] = useInView({ threshold: 0.99, triggerOnce: false });
    return(
        <div className="App">
            <div class="layout" id="mobile-layout">
                <div class="navbar-container" id="mobile-navbar">
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
                <div class="intro-typewriter" id="intro-typewriter-mobile">
                    <div>DIVYANSH</div>
                    <div>GARG'S</div>
                    <div id="portfolio-text">PORTFOLIO</div>
                </div>
                <div class="mobile-placeholder"></div>
                <div ref={projectsRef} class="mobile-projects-container" id="projects-section">
                    <ProjectSliderMobile numProjects={projectsBundle.numProjects} projects={projectsBundle} />
                </div>
                <div class="mobile-placeholder"></div>
                <div ref={aboutRef} class="mobile-about-container" id="about-section">
                    <AboutSliderMobile numSlides={aboutBundle.numSlides} slides={aboutBundle} />
                </div>
                <div class="mobile-placeholder"></div>
                <div ref={contactRef} class="contact-me" id="contact-section">
                    <Contact />
                </div>
            </div>
            <div class="scroll-action">
                <ScrollAlert />
            </div>
        </div>
    )
};

export default MobileComponent;