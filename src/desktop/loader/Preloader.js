import './Preloader.css';
import Typewriter from '../typewriter/Typewriter';

const typewriterTexts = ["Loading Animation Assets..."];

const Preloader = props => {
    return(
    <div class="loader-background">
        <div className="loader">
            <div className="ring"></div>
            <div className="circle"></div>
        </div>
        <div class="preloader-typewriter"><Typewriter texts={typewriterTexts} /></div>
    </div>);
};

export default Preloader;