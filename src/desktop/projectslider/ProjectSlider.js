import './ProjectSlider.css';
import { useState, useEffect } from 'react';
import StackLoader from '../stackloader/StackLoader';

const ProjectSlider = (props) => {
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
            document.getElementById("back").style.opacity = "0.15";
        }
        else {
            document.getElementById("back").style.opacity = "1";
        }
        if(counter === numProjects) {
            document.getElementById("next").style.opacity = "0.15";
        } else {
            document.getElementById("next").style.opacity = "1";
        }

    }, [counter, setCounter, numProjects])

    return(
        <div class="slider-base" tabIndex="0">
            <div class="slider-label">
                <div>P</div><div>R</div><div>O</div><div>J</div><div>E</div><div>C</div><div>T</div><div>S</div>
            </div>
            <div class="img-container">
                <div id="slider-images"></div>
                <div class="stack-container">
                    <StackLoader liveURL={props.projects[`project_${counter+1}`].liveURL} sourceURL={props.projects[`project_${counter+1}`].sourceURL} techStack={props.projects[`project_${counter+1}`].techStack} />
                </div>
            </div>
            <div class="project-meta-container">
                <div class="slider-buttons-container">
                    <button class="overlay-button" id="back" onClick={handleButtonClickBack}>{"<"}</button>
                    <button class="overlay-button" id="next" onClick={handleButtonClickNext}>{">"}</button>
                </div>
                <div class="project-main-heading">{props.projects[`project_${counter+1}`].title}</div>
                <div class="description-container">{props.projects[`project_${counter+1}`].description}</div>
            </div>
        </div>
    );
}

export default ProjectSlider;