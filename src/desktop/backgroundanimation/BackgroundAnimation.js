import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BackgroundAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const BackgroundAnimation = (props) => {
    const canvasRef = useRef(null);
    const endFrame = props.endframe;
    const images = props.images;
    const ball = { frame: 0 };

    useEffect(() => {
        let render;
        // Get canvas and 2d context
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        if(images) {
            render = () => {
                const currentImage = images[ball.frame];
                context.canvas.width = images[ball.frame].width;
                context.canvas.height = images[ball.frame].height;
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(currentImage, 0, 0);
            };

            let tl = gsap.timeline();
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