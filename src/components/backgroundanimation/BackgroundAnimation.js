import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BackgroundAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const images = [];

const BackgroundAnimation = props => {
    const canvasRef = useRef(null);
    const endFrame = props.endframe;
    let ball = { frame: 0 };

    const currentFrame = (index) => `./frames/Frame (${(index+1).toString()}).jpg`;
    useEffect(() => {
        let render;
        // Get canvas and 2d context
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //Get and create all images
        for(let i = 0; i < endFrame; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }

        let tl = gsap.timeline();
        if(canvas.width > 800) {
            render = () => {
                const currentImage = images[ball.frame];
                context.canvas.width = images[ball.frame].width;
                context.canvas.height = images[ball.frame].height;
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(currentImage, 0, 0);
            }
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
    }, []);
    return (
        <canvas ref={canvasRef} {...props}></canvas>
    );
}

export default BackgroundAnimation;