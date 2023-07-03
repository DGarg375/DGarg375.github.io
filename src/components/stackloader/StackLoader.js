import './StackLoader.css';

const StackLoader = (props) => {
    return (
        <div class="stack-base">
            <div class="stack-tray"></div>
            <div class="button-tray">
                <button class="project-nav" onClick={() => window.open(props.liveURL, '_blank')}>Live Site</button>
                <button class="project-nav" onClick={() => window.open(props.sourceURL, '_blank')}>GitHub</button>
            </div>
        </div>
    );
};

export default StackLoader;