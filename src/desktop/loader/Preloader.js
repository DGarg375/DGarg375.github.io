import './Preloader.css';
import React, { useState, useEffect } from 'react';

const Preloader = props => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const loadingProgress = document.getElementById("loading-progress-id");
        const loadingProgText = document.getElementById("loading-text-id");

        if(loadingProgress) {
            const startTime = performance.now();
            const endTime = startTime + 20000;
            const startWidth = 0;
            const endWidth = 720;
            function updateProgress(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progressPercentage = (elapsedTime/20000) * 100;
                const currentWidth = (progressPercentage/100) * endWidth;
                setProgress(currentWidth);
                if(currentTime < endTime) {
                    requestAnimationFrame(updateProgress);
                }
            }
            requestAnimationFrame(updateProgress);
        }
        if(loadingProgText) {
            setTimeout(() => {
                document.getElementById("loading-text-id").innerText = "LOADING ANIMATION FILES";
            }, 2000);
            setTimeout(() => {
                document.getElementById("loading-text-id").innerText = "GENERATING IMAGES";
            }, 7000);
            setTimeout(() => {
                document.getElementById("loading-text-id").innerText = "ALMOST THERE...";
            }, 15000);
            setTimeout(() => {
                document.getElementById("loading-text-id").innerText = "DONE";
            }, 19500);
        }
    }, []);
    const loadingProgressStyle = {
        width: `${progress}px`,
    };
    return(
    <div class="loader-background">
        <div class="loader-container">
            <div class="loading-bar" id="loading-bar-id">
                <div class="loading-progress" id="loading-progress-id" style={loadingProgressStyle}></div>
            </div>
            <div class="loading-text" id="loading-text-id">. . .</div>
        </div>
    </div>);
};

export default Preloader;