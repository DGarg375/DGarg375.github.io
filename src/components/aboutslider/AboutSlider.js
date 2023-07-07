import './AboutSlider.css';
import { useState, useEffect } from 'react';

const AboutSlider = (props) => {
    return(
        <div class="slider-about-base">
            <div class="about-meta-container">
                <div class="slider-buttons-about-container">
                    <button class="overlay-button-about" id="back-about" onClick={console.log("hello")}>{"<"}</button>
                    <button class="overlay-button-about" id="next-about" onClick={console.log("hello")}>{">"}</button>
                </div>
                <div class="about-main-heading"></div>
                <div class="description-about-container"></div>
            </div>
            <div class="img-about-container">
                <img id="slider-about-images" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
                <div class="overlay-container"></div>
            </div>
        </div>
    );
}

export default AboutSlider;