import './ProjectSliderMobile.css';
import React, { useState, useEffect } from 'react';

const ProjectSliderMobile = (props) => {
    const numProjects = props.numProjects-1;
    const [counter, setCounter] = useState(0);
    const handleButtonClickNext = () => {
        if(counter < numProjects) {
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
            document.getElementById("back-mobile").style.opacity = "0.15";
        }
        else {
            document.getElementById("back-mobile").style.opacity = "1";
        }
        if(counter === numProjects) {
            document.getElementById("next-mobile").style.opacity = "0.15";
        } else {
            document.getElementById("next-mobile").style.opacity = "1";
        }

    }, [counter, setCounter, numProjects])
    return(
        <div class="slider-base-mobile" tabIndex="0">
            <div class="slider-label" id="slider-label-mobile">
                <div>P</div><div>R</div><div>O</div><div>J</div><div>E</div><div>C</div><div>T</div><div>S</div>
            </div>
            <div class="img-base">
                <img id="project-mobile-images" src={props.projects[`project_${counter+1}`].imgSrc}></img>
                <div class="stack-container">
                    <div class="project-main-heading" id="project-mobile-heading">
                            <button class="push-buttons" id="back-mobile" onClick={handleButtonClickBack}>{"<"}</button>
                            <div class="main-text">{props.projects[`project_${counter+1}`].title}</div>
                            <button class="push-buttons" id="next-mobile" onClick={handleButtonClickNext}>{">"}</button>
                    </div>
                    <div class="buttons-tray">
                            {/* <button class="button-class">Description</button> */}
                            <button title="GitHub Source Code" class="button-class" onClick={() => window.open(props.projects[`project_${counter+1}`].sourceURL)}><img class="button-css" src="./icons8-dev-windows-11/icons8-github-60.png"></img></button>
                            <button title={`Live Site ${props.projects[`project_${counter+1}`].liveURL ? "available" : "unavailable"}`} class="button-class" onClick={() => window.open(props.projects[`project_${counter+1}`].liveURL)}><img class="button-css" src="./icons8-dev-windows-11/icons8-website-60.png"></img></button>
                    </div>
                    <button class="description-button-main" title="Project Description"><img src="./icons8-dev-windows-11/icons8-flip-24.png"></img></button>
                </div>
            </div>
        </div>
    );
}

export default ProjectSliderMobile;