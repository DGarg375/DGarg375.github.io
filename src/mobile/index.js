import './index.css';
import { useInView } from 'react-intersection-observer';
import ScrollAlert from '../desktop/scrollalert/ScrollAlert';
import ProjectSliderMobile from './projectslidermobile/ProjectSliderMobile';
import AboutSliderMobile from './aboutslidermobile/AboutSliderMobile';
import Contact from '../desktop/contact/Contact';
import { projectsBundle } from '../projectMeta';
import { aboutBundle } from '../aboutMeta';

// Comment changed for testing

const MobileComponent = () => {
    const [projectsRef, projectsInView] = useInView({ threshold: 0.75,
        triggerOnce: true });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.75, triggerOnce: true });
    const [contactRef, contactInView] = useInView({ threshold: 0.75, triggerOnce: true });
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
                    <div>Divyansh</div>
                    <div>Garg</div>
                    <div id="portfolio-text">Web Developer.<br></br>Software Engineer.</div>
                </div>
                <div class="mobile-placeholder"></div>
                
                <div ref={projectsRef} class={`mobile-projects-container ${projectsInView?'container-animation':''}`} id="projects-section">
                    <ProjectSliderMobile numProjects={projectsBundle.numProjects} projects={projectsBundle} />
                </div>
                <div class="mobile-placeholder"></div>
                <div ref={aboutRef} class={`mobile-about-container ${aboutInView?'container-animation':''}`} id="about-section">
                    <AboutSliderMobile numSlides={aboutBundle.numSlides} slides={aboutBundle} />
                </div>
                <div class="mobile-placeholder"></div>
                <div ref={contactRef} class={`contact-me contact-me-anim ${contactInView?'container-animation':''}`} id="contact-section">
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