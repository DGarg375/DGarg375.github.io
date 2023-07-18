import './ProjectSliderMobile.css';
import React, { useState, useEffect } from 'react';

const ProjectSliderMobile = (props) => {
    const numProjects = props.numProjects;
    const [counter, setCounter] = useState(1);
    const [toggleDescription, setToggleDescription] = useState(false)
    const currentProject = props.projects[`project_${counter}`];
    
    const toggleButtonFunction = () => {
        setToggleDescription(!toggleDescription)
    }

    useEffect(() => {
        console.log(currentProject)
        for(let i = 1; i <= numProjects; ++i) {
            document.getElementById(`PTag_${i}`).addEventListener('click', () => setCounter(i));
        }
        // document.getElementById('new-img-id3').addEventListener('click', () => {

        // })
    }, []);

    useEffect(() => {
        if(toggleDescription) {
            setTimeout(() => {
                document.getElementById('description-hide-id').style.display = "flex";
                document.getElementById('img-base-container').style.display = "none";
                document.getElementById('placCont').style.display = "block";
            }, 100);
        } else {
            document.getElementById('description-hide-id').style.display = "none";
            document.getElementById('img-base-container').style.display = "flex";
        }
    }, [toggleDescription, setToggleDescription])

    useEffect(() => {
        if(counter == 1) {
            document.getElementById('PTag_1').style.backgroundColor = "rgba(255, 87, 51, 0.8)";
        }
        else {
            document.getElementById('PTag_1').style.background = "transparent";
        }
    }, [setCounter, counter]);

    return(
        <div class="slider-base-mobile">
            <div class="slider-label" id="slider-label-mobile">
                <div>P</div><div>R</div><div>O</div><div>J</div><div>E</div><div>C</div><div>T</div><div>S</div>
            </div>
            <div class="placeholder-img-base-container" id="placCont"></div>
            <div class="img-base" id="img-base-container">
                <div class="main-container-project-mobile">
                    <div class="heading-text-project-mobile">
                        {currentProject.title}
                    </div>
                    <div class="button-tray-project-mobile">
                        <button title="Description" class="projectURLButton"><img class="button-css" id="new-img-id3" src="./icons8-dev-windows-11/icons8-description-64.png" onClick={toggleButtonFunction}></img></button>
                        <button title="GitHub Source Code" class="projectURLButton" onClick={() => window.open(currentProject.sourceURL)}><img class="button-css" id="new-img-id" src="./icons8-dev-windows-11/icons8-github-48.png"></img></button>
                        <button title={`Live Site ${currentProject.liveURL ? "available" : "unavailable"}`} class="projectURLButton" onClick={() => window.open(currentProject.liveURL)}><img class="button-css" id="new-img-id2" src="./icons8-dev-windows-11/icons8-live-60.png"></img></button>
                    </div>
                </div>
                <div class="project-index-container">
                    <br></br>
                    {
                        Object.keys(props.projects).map((key, index) => {
                            if(index !== 0) {
                                return (
                                <button key={key} class="project-index-tag" id={`PTag_${index}`}>{props.projects[`project_${index}`].title}</button>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                    <br></br>
                </div>
            </div>
            <div class="description-hide" id="description-hide-id">
                    <div class="description-mobile-text">
                        {currentProject.title}
                    </div>
                    <div class="description-mobile-mainbody">
                        {currentProject.description}
                    </div>
                </div>
        </div>
    );
}

export default ProjectSliderMobile;