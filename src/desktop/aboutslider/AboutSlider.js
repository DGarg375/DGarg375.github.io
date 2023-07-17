import './AboutSlider.css';
import { useState, useEffect } from 'react';
import CurrentSlide from './slides/index';

const AboutSlider = (props) => {
    const numSlides = props.numSlides-1;
    const slides = props.slides;
    const [slideNumber, setSlideNumber] = useState(0);

    const sliderGoNext = () => {
        if(slideNumber < numSlides) {
            setSlideNumber(slideNumber+1);
        }
    }
    const sliderGoBack = () => {
        if(slideNumber > 0) {
            setSlideNumber(slideNumber-1);
        }
    }

    useEffect(() => {
        if(slideNumber === 0) {
            document.getElementById("back-about").style.opacity = "0.15";
        } else {
            document.getElementById("back-about").style.opacity = "1";
        }
        if(slideNumber === numSlides) {
            document.getElementById("next-about").style.opacity = "0.15";
        } else {
            document.getElementById("next-about").style.opacity = "1";
        }
    }, [slideNumber, setSlideNumber, numSlides]);

    return(
        <div class="slider-about-base">
            <div class="about-meta-container">
                <div class="slider-buttons-about-container">
                    <button class="overlay-button-about" id="back-about" onClick={sliderGoBack}>{"<"}</button>
                    <button class="overlay-button-about" id="next-about" onClick={sliderGoNext}>{">"}</button>
                </div>
                <div class="about-main-heading">{slides[`slide_${slideNumber+1}`].title}</div>
                <div class="slides"><CurrentSlide slideName={slides[`slide_${slideNumber+1}`].useComponent} /></div>
            </div>
            <div class="img-about-container">
                <img id="slider-about-images" src={slides[`slide_${slideNumber+1}`].imgSrc} alt={slides[`slide_${slideNumber+1}`].imgAlt}/>
                <div class="overlay-container"></div>
            </div>
            <div class="about-slider-label">
                <div>A</div><div>B</div><div>O</div><div>U</div><div>T</div>
            </div>
        </div>
    );
}

export default AboutSlider;