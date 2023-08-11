import './Preloader.css';
import React, { useState, useEffect } from 'react';

const Preloader = props => {
    const [progress, setProgress] = useState(9.6);
    const loadingBar = document.getElementById("loading-progress-id");
    if(progress <= 720 && loadingBar) {
        setTimeout(() => {
            setProgress(progress+4.8);
            loadingBar.style.width = `${progress}px`;
        }, 100);
    }
    console.log(progress)
    return(
    <div class="loader-background">
        <div class="loader-container">
            <div class="loading-text">Loading background animation...</div>
            <div class="loading-bar" id="loading-bar-id">
                <div class="loading-progress" id="loading-progress-id"></div>
            </div>
        </div>
    </div>);
};

export default Preloader;