import './StackLoader.css';
import { stackImagesURL } from '../../projectMeta';
import React from 'react';

const StackLoader = (props) => {
    const techStack = props.techStack;
    const liveURL = props.liveURL;
    const sourceURL = props.sourceURL;
    class WordList extends React.Component {
        render() {
            const { techStack } = this.props;
            if(Array.isArray(techStack)) {
                return(
                    <div class="main-tech">
                        {techStack.map((word, index) => 
                            <div class="tech-div" id={`tech-div-${index+1}`} key={index}><img class="hello" src={stackImagesURL[word]}></img></div>
                        )}
                    </div>
                )
            } else {
                return <div>Loading techStack...</div>
            }
        }
    }
    return (
        <div class="stack-base">
            <div class="stack-tray"><WordList techStack={techStack}/></div>
            <div class="button-tray">
                <button class="project-nav" onClick={() => window.open(liveURL, '_blank')}>Live Site</button>
                <button class="project-nav" onClick={() => window.open(sourceURL, '_blank')}>GitHub</button>
            </div>
        </div>
    );
};

export default StackLoader;