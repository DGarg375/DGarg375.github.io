import './AboutSliderMobile.css';
import React, { useState, useEffect } from 'react';
import CurrentSlide from '../../desktop/aboutslider/slides';

const AboutSliderMobile = (props) => {
    const numSlides = props.numSlides-1;
    const [counter, setCounter] = useState(0);
    const [toggleAbout, setToggleAbout] = useState(false);
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
    const toggleButtonAboutFunction = () => {
        setToggleAbout(!toggleAbout);
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

    useEffect(() => {
        if(!toggleAbout) {
            document.getElementById("about-description-hide-id").style.display = "none";
            document.getElementById("mobile-stack-container-id").style.display = "block";
        } else {
            document.getElementById("about-description-hide-id").style.display = "flex";
            document.getElementById("mobile-stack-container-id").style.display = "none";
        }
        // document.getElementById("about-description-hide-id").style.display = "none";
    }, [toggleAbout, setToggleAbout])

    return (
        <div class="about-slider-base-mobile" tabIndex="0">
            <div class="img-base">
                <img id="project-mobile-images" src={props.slides[`slide_${counter+1}`].imgSrc}></img>
                <div class="stack-container" id="mobile-stack-container-id">
                    <div class="about-main-heading" id="about-mobile-heading">
                        <button class="push-buttons" id="about-back-mobile" onClick={handleButtonClickBack}>{"<"}</button>
                        <div class="main-text">{props.slides[`slide_${counter+1}`].title}</div>
                        <button class="push-buttons" id="about-next-mobile" onClick={handleButtonClickNext}>{">"}</button>
                    </div>
                </div>
                <div class="about-description-hide" id="about-description-hide-id">
                    <div class="description-mobile-text">
                        {props.slides[`slide_${counter+1}`].title}
                    </div>
                    <div class="description-mobile-mainbody">
                        <CurrentSlide slideName={props.slides[`slide_${counter+1}`].useComponent} />
                    </div>
                </div>
                <button class="description-button-main hehe" id="about-description-button" title="Description" onClick={toggleButtonAboutFunction}>{toggleAbout ? <img src="./icons8-dev-windows-11/icons8-cross-60.png" id="cross-id"></img> : <img id="flip-button" src="./icons8-dev-windows-11/icons8-flip-24.png"></img>}</button>
            </div>
            <div class="about-slider-label" id="about-slider-label-mobile">
                <div>A</div><div>B</div><div>O</div><div>U</div><div>T</div>
            </div>
        </div>
    );
}

export default AboutSliderMobile;