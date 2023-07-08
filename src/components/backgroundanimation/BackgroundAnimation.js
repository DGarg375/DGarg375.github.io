import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BackgroundAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const images = [];

const BackgroundAnimation = (props) => {
    const canvasRef = useRef(null);
    const endFrame = props.endframe;
    const ball = { frame: 0 };
    const [isLoaded, setIsLoaded] = useState(false);

    const currentFrame = (index) => `./frames/Frame (${(index+1).toString()}).jpg`;

    useEffect(() => {
        const preloadImages = async () => {
            try {
                for(let i = 0; i < endFrame; i++) {
                    const img = new Image();
                    img.src = currentFrame(i);
                    await new Promise((resolve, reject) => {
                        img.onload = resolve;
                        img.onerror = reject;
                    });
                    images.push(img);
                }
                setIsLoaded(true);
            } catch(error) {
                console.error('Error preloading images:', error);
            }
        };
        preloadImages();
    }, [endFrame]);

    useEffect(() => {
        let render;
        // Get canvas and 2d context
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if(isLoaded) {
            render = () => {
                const currentImage = images[ball.frame];
                context.canvas.width = images[ball.frame].width;
                context.canvas.height = images[ball.frame].height;
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(currentImage, 0, 0);
            };

            let tl = gsap.timeline();
            if(canvas.width > 800) {
                tl.to(ball, {
                    frame: endFrame-1,
                    snap: "frame",
                    ease: "none",
                    scrollTrigger: {
                        scrub: true,
                        pin: "canvas",
                        end: '500%',
                    },
                    onUpdate: render,
                });

                images[ball.frame].onload = render;
            }
        }
    }, [isLoaded, endFrame]);
    return (
        <canvas ref={canvasRef} {...props}></canvas>
    );
}

export default BackgroundAnimation;