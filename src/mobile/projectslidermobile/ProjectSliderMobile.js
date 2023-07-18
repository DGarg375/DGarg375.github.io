import './ProjectSliderMobile.css';
import React, { useState, useEffect } from 'react';

const ProjectSliderMobile = (props) => {
    const numProjects = props.numProjects-1;
    const [counter, setCounter] = useState(0);
    const [toggleDescription, setToggleDescription] = useState(false)
    const currentProject = props.projects[`project_${counter+1}`];
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
    // useEffect(() => {
    //     if(counter === 0) {
    //         document.getElementById("back-mobile").style.opacity = "0.15";
    //     }
    //     else {
    //         document.getElementById("back-mobile").style.opacity = "1";
    //     }
    //     if(counter === numProjects) {
    //         document.getElementById("next-mobile").style.opacity = "0.15";
    //     } else {
    //         document.getElementById("next-mobile").style.opacity = "1";
    //     }

    // }, [counter, setCounter, numProjects])

    const toggleButtonFunction = () => {
        setToggleDescription(!toggleDescription)
    }

    return(
        <div class="slider-base-mobile">
            <div class="slider-label" id="slider-label-mobile">
                <div>P</div><div>R</div><div>O</div><div>J</div><div>E</div><div>C</div><div>T</div><div>S</div>
            </div>
            <div class="img-base">
                <div class="main-container-project-mobile"></div>
                <div class="project-index-container"></div>
                {/* <div class="stack-container" id="stack-container-id">
                    <div class="project-main-heading" id="project-mobile-heading">
                            <button class="push-buttons" id="back-mobile" onClick={handleButtonClickBack}>{"<"}</button>
                            <div class="main-text">{currentProject.title}</div>
                            <button class="push-buttons" id="next-mobile" onClick={handleButtonClickNext}>{">"}</button>
                    </div>
                    <div class="buttons-tray">
                            <button title="GitHub Source Code" class="button-class" onClick={() => window.open(currentProject.sourceURL)}><img class="button-css" id="new-img-id" src="./icons8-dev-windows-11/icons8-github-60.png"></img></button>
                            <button title={`Live Site ${props.projects[`project_${counter+1}`].liveURL ? "available" : "unavailable"}`} class="button-class" onClick={() => window.open(currentProject.liveURL)}><img class="button-css" id="new-img-id2" src="./icons8-dev-windows-11/icons8-website-60.png"></img></button>
                    </div>
                    <button class="description-button-main" title="Project Description"  onClick={toggleButtonFunction} id="front-body-button"><img src="./icons8-dev-windows-11/icons8-flip-24.png" id="description-button-id"></img></button>
                </div> */}
                {/* <div class="description-hide" id="description-hide-id">
                    <div class="description-mobile-text">
                        {currentProject.title}
                    </div>
                    <div class="description-mobile-mainbody">
                        {currentProject.description}
                    </div>
                    <button class="description-button-main" title="Project Description"  onClick={toggleButtonFunction} id="back-body-button"><img src="./icons8-dev-windows-11/icons8-cross-60.png" id="cross-id"></img></button>
                </div> */}
            </div>
        </div>
    );
}

export default ProjectSliderMobile;