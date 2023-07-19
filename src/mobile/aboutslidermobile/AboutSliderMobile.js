import './AboutSliderMobile.css';
import React, { useState, useEffect } from 'react';
import CurrentSlide from '../../desktop/aboutslider/slides';

const AboutSliderMobile = (props) => {
    const numSlides = props.numSlides;
    const [counterA, setCounterA] = useState(1);
    const [toggleAbout, setToggleAbout] = useState(false);

    const currentSlide = props.slides[`slide_${counterA}`];

    const toggleButtonFunction = () => {
        setTimeout(() => {
            setToggleAbout(!toggleAbout);
        }, 200);
    }

    useEffect(() => {
        for(let i = 1; i <= numSlides; ++i) {
            document.getElementById(`ATag_${i}`).addEventListener('click', () => setCounterA(i));
        }
    }, []);

    useEffect(() => {
        if(toggleAbout) {
            document.getElementById('description-hide-about-id').style.display = "flex";
            document.getElementById('img-base-about-container').style.display = "none";
            document.getElementById('about-placeholder-id').style.display = "block";
        } else {
            document.getElementById('description-hide-about-id').style.display = "none";
            document.getElementById('img-base-about-container').style.display = "flex";
            document.getElementById('about-placeholder-id').style.display = "none";
        }
        document.getElementById('description-about-mobile-mainbody-id').scrollTop = 0;
    }, [toggleAbout, setToggleAbout])

    useEffect(() => {
        document.getElementById(`ATag_${counterA}`).style.backgroundColor = "rgba(255, 87, 51, 0.9)";
        document.getElementById(`ATag_${counterA}`).style.width = "125%";
        document.getElementById(`ATag_${counterA}`).style.borderLeft="1.5px solid black";
        document.getElementById(`ATag_${counterA}`).style.borderRadius="5px 0px 0px 5px";
        for(let i = 1; i <= numSlides; ++i) {
            if(i != counterA) {
                document.getElementById(`ATag_${i}`).style.background="transparent";
                document.getElementById(`ATag_${i}`).style.width="100%";
                document.getElementById(`ATag_${i}`).style.borderRadius="0px";
                document.getElementById(`ATag_${i}`).style.borderLeft="0";
            }
        }
        if(counterA != 1) {
            document.getElementById('layout-help-about-id').style.display = "none";
        }
    }, [setCounterA, counterA]);

    return (
        <div class="about-slider-base-mobile" tabIndex="0">

            <div class="img-base" id="img-base-about-container">
                <div class="layout-help-about" id="layout-help-about-id">
                    <div class="relative-class">
                    <div class="index-layout-container-about">
                        <span id="index-about-arrow">USE THIS INDEX TO NAVIGATE THROUGH SLIDES</span>
                            <div class="help-arrows" id="arrow-index-about"></div>
                        </div>
                    </div>
                    <div class="description-layout-container-about">
                        <span id="desc-about-arrow">DESCRIPTION</span>
                        <div class="help-arrows" id="arrow-description-about"></div>
                    </div>
                </div>
                <div class="about-index-container" id="hellothere">
                    <br></br>
                    {
                        Object.keys(props.slides).map((key, index) => {
                            if(index !== 0) {
                                return (
                                    <button key={key} class="about-index-tag" id={`ATag_${index}`}>{props.slides[`slide_${index}`].title}</button>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                    <br></br>
                </div>
                <div class="main-container-about-mobile">
                    <div class="heading-text-about-mobile">
                        {currentSlide.title}
                    </div>
                    <div class="button-tray-about-mobile">
                        <button title="Description" class="projectURLButton"><img class="button-css" id="new-img-id3" src="./icons8-dev-windows-11/icons8-description-64.png" onClick={toggleButtonFunction}></img></button>
                    </div>
                </div>
            </div>

            <div class="about-placeholder" id="about-placeholder-id"></div>

            <div class="about-slider-label" id="about-slider-label-mobile">
                <div>A</div><div>B</div><div>O</div><div>U</div><div>T</div><br></br><div>M</div><div>E</div>
            </div>
            <div class="description-hide" id="description-hide-about-id">
                    <div class="description-mobile-text">
                        {currentSlide.title}
                    </div>
                    <div><button title="Description" class="projectURLButton" id="go-back-project-button"><img class="button-css" id="new-img-id3" src="./icons8-dev-windows-11/icons8-left-arrow-50.png" onClick={toggleButtonFunction}></img></button></div>
                    <div class="description-mobile-mainbody" id="description-about-mobile-mainbody-id">
                        <CurrentSlide slideName={currentSlide.useComponent} />
                    </div>
            </div>
        </div>
    );
}

export default AboutSliderMobile;