import './AboutSliderMobile.css';
import React, { useState, useEffect } from 'react';

const AboutSliderMobile = (props) => {
    const numSlides = props.numSlides-1;
    const [counter, setCounter] = useState(0);
    const handleButtonClickNext = () => {
        if(counter < numSlides) {
            setCounter(counter+1);
        }
    }
    const handleButtonClickBack = () => {
        if(counter > 0) {
            setCounter(counter-1);
        }
    }

    useEffect(() => {
        if(counter === 0) {
            document.getElementById("about-back-mobile").style.opacity = "0.15";
        }
        else {
            document.getElementById("about-back-mobile").style.opacity = "1";
        }
        if(counter === numSlides) {
            document.getElementById("about-next-mobile").style.opacity = "0.15";
        } else {
            document.getElementById("about-next-mobile").style.opacity = "1";
        }

    }, [counter, setCounter, numSlides])
    return (
        <div class="about-slider-base-mobile" tabIndex="0">
            <div class="img-base">
                <img id="project-mobile-images" src={props.slides[`slide_${counter+1}`].imgSrc}></img>
                <div class="stack-container">
                    <div class="about-main-heading" id="about-mobile-heading">
                        <button class="push-buttons" id="about-back-mobile" onClick={handleButtonClickBack}>{"<"}</button>
                        <div class="main-text">{props.slides[`slide_${counter+1}`].title}</div>
                        <button class="push-buttons" id="about-next-mobile" onClick={handleButtonClickNext}>{">"}</button>
                    </div>
                </div>
                <button class="description-button-main hehe" id="about-description-button" title="Description"><img id="flip-button" src="./icons8-dev-windows-11/icons8-flip-24.png"></img></button>
            </div>
            <div class="about-slider-label" id="about-slider-label-mobile">
                <div>A</div><div>B</div><div>O</div><div>U</div><div>T</div>
            </div>
        </div>
    );
}

export default AboutSliderMobile;