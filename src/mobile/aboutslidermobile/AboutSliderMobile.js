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

    // useEffect(() => {
    //     if(counter === 0) {
    //         document.getElementById("about-back-mobile").style.opacity = "0.15";
    //     }
    //     else {
    //         document.getElementById("about-back-mobile").style.opacity = "1";
    //     }
    //     if(counter === numSlides) {
    //         document.getElementById("about-next-mobile").style.opacity = "0.15";
    //     } else {
    //         document.getElementById("about-next-mobile").style.opacity = "1";
    //     }

    // }, [counter, setCounter, numSlides])

    // useEffect(() => {
    //     if(!toggleAbout) {
    //         document.getElementById("about-description-hide-id").style.display = "none";
    //         document.getElementById("mobile-stack-container-id").style.display = "block";
    //     } else {
    //         document.getElementById("about-description-hide-id").style.display = "flex";
    //         document.getElementById("mobile-stack-container-id").style.display = "none";
    //     }
    // }, [toggleAbout, setToggleAbout])

    return (
        <div class="about-slider-base-mobile" tabIndex="0">
            <div class="img-base">
                
            </div>
            <div class="about-slider-label" id="about-slider-label-mobile">
                <div>A</div><div>B</div><div>O</div><div>U</div><div>T</div>
            </div>
        </div>
    );
}

export default AboutSliderMobile;