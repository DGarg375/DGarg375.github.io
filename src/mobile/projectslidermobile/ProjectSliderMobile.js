import './ProjectSliderMobile.css';
import React, { useState, useEffect } from 'react';

const ProjectSliderMobile = (props) => {
    const numProjects = props.numProjects;
    const [counter, setCounter] = useState(1);
    const [toggleDescription, setToggleDescription] = useState(false);

    const currentProject = props.projects[`project_${counter}`];
    
    const toggleButtonFunction = () => {
        setToggleDescription(!toggleDescription);
    }

    useEffect(() => {
        for(let i = 1; i <= numProjects; ++i) {
            document.getElementById(`PTag_${i}`).addEventListener('click', () => setCounter(i));
        }
    }, []);

    useEffect(() => {
        if(toggleDescription) {
            document.getElementById('description-hide-id').style.display = "flex";
            document.getElementById('img-base-container').style.display = "none";
            document.getElementById('placCont').style.display = "block";
        } else {
            document.getElementById('description-hide-id').style.display = "none";
            document.getElementById('img-base-container').style.display = "flex";
            document.getElementById('placCont').style.display = "none";
        }
        document.getElementById('description-mobile-mainbody-id').scrollTop = 0;
    }, [toggleDescription, setToggleDescription])

    useEffect(() => {
        document.getElementById(`PTag_${counter}`).style.backgroundColor = "rgba(255, 87, 51, 0.9)";
        document.getElementById(`PTag_${counter}`).style.width = "125%";
        document.getElementById(`PTag_${counter}`).style.borderRight="1.5px solid black";
        document.getElementById(`PTag_${counter}`).style.borderRadius="0px 5px 5px 0px";
        for(let i = 1; i <= numProjects; ++i) {
            if(i !== counter) {
                document.getElementById(`PTag_${i}`).style.background="transparent";
                document.getElementById(`PTag_${i}`).style.width="100%";
                document.getElementById(`PTag_${i}`).style.borderRadius="0px";
                document.getElementById(`PTag_${i}`).style.borderRight="0";
            }
        }
        if(counter != 1) {
            document.getElementById('layout-help-projects-id').style.display = "none";
        }
    }, [setCounter, counter]);

    return(
        <div class="slider-base-mobile">
            <div class="slider-label" id="slider-label-mobile">
                <div>P</div><div>R</div><div>O</div><div>J</div><div>E</div><div>C</div><div>T</div><div>S</div>
            </div>
            <div class="placeholder-img-base-container" id="placCont"></div>
            <div class="img-base" id="img-base-container">
                <div class="layout-help-projects" id="layout-help-projects-id">
                    <div class="relative-class">
                        <div class="index-layout-container">
                            <span id="index-project-arrow">USE THIS INDEX TO NAVIGATE THROUGH PROJECTS</span>
                            <div class="help-arrows" id="arrow-index"></div>
                        </div>
                        <div class="description-layout-container">
                            <span id="desc-project-arrow">DESCRIPTION</span>
                            <div class="help-arrows" id="arrow-description"></div>
                        </div>
                        <div class="github-layout-container">
                            <span id="git-project-arrow">SOURCE CODE</span>
                            <div class="help-arrows" id="arrow-git"></div>
                        </div>
                        <div class="live-layout-container">
                            <span id="live-project-arrow">WEBSITE</span>
                            <div class="help-arrows" id="arrow-live"></div>
                        </div>
                    </div>
                </div>
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
                    <div class="gallery-button"><button title="Description" class="projectURLButton" id="go-back-project-button"><img class="button-css" id="new-img-id3" src="./icons8-dev-windows-11/icons8-left-arrow-50.png" onClick={toggleButtonFunction}></img></button>{currentProject.photoGallery ? <button class="projectURLButton"><a href={currentProject.photoGallery} target="_blank" rel="noreferrer" id="photo-gallery-button"> 
                    Photo Gallery
              </a></button>:<></>}</div>
                    <div class="description-mobile-mainbody" id="description-mobile-mainbody-id">
                        {currentProject.description}
                    </div>
            </div>
        </div>
    );
}

export default ProjectSliderMobile;