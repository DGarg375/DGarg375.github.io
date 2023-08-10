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
                            <div class="tech-div" id={`tech-div-${index+1}`} key={index} title={word}><img class="hello" src={stackImagesURL[word]} alt={word}></img></div>
                        )}
                    </div>
                )
            } else {
                return <div class="alt-show">Tech Stack Not Available</div>
            }
        }
    }
    return (
        <div class="stack-base">
            <div class="stack-tray"><WordList techStack={techStack}/></div>
            <div class="button-tray">
                <button class="project-nav" name="wow" onClick={() => window.open(sourceURL, '_blank')} id="live-site"><img class="button-css" id="new-img-id" src="./icons8-dev-windows-11/icons8-github-60.png"></img></button>
                <button class="project-nav" onClick={() => window.open(liveURL, '_blank')}><img class="button-css" id="new-img-id2" src="./icons8-dev-windows-11/icons8-website-60.png"></img></button>
            </div>
        </div>
    );
};

export default StackLoader;