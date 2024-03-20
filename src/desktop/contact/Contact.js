import './Contact.css';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Resume = () => {
    const [toggleMobileView, setMobileWindow] = useState(true);
    useEffect(() => {
        
    }, []);
    const runFunction = () => {
        setMobileWindow(!toggleMobileView);
    };
    return(
        <div>{toggleMobileView ? <div class="dialog-mobile-toggle"><div class="toggle-text">Mobile phone version available now!<br></br>Scan the QR code below with your phone<br></br>OR<br></br> ENABLE a screen here. </div><button class="resume-toggle-button" onClick={runFunction}>ENABLE</button><div class="QR_portfolio"></div></div>:<div><embed class="resume-cont-border-styles" style={{border: "5px solid rgba(255, 87, 51, 1)"}} src="/" width="65%" height="740px"></embed><button class="resume-toggle-button" onClick={runFunction}>CLOSE</button></div>}</div>
    );
};

const Contact = () => {
    const form = useRef();
    const [checkSubmit, setCheckSubmit] = useState(false);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('contact-form-main-id').style.boxShadow = "none";
        document.getElementById("submit-button").style.opacity = "0.5";
        emailjs.sendForm('service_00es1si', 'template_s7tj3pn', form.current, 'O5HpIEiDXmz-O2zHr')
        .then((result) => {
            setTimeout(() => {
                setCheckSubmit(true);
            }, 0);
        }, (error) => {
            alert("Cannot connect to server. Plase try again!");
        })
    }
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
          };
      
          window.addEventListener('resize', handleWindowResize);
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          }
    }, [])
    return(
        <div class="contact-main">
            {windowSize[0] < 940 ? <></> : <div class="resume-container"><Resume /></div>}
            <div class="contact-base-container">
                <div class="contact-title" id="contact-title-id">Contact Me</div>
                <div class="contact-form" id="contact-form-main-id">
                    {checkSubmit ? <div class="back">
                        <span id="after-submit-text"><img id="thank-you-sticker" alt="thank you" src="./icons8-dev-windows-11/thank-you.png"></img></span>
                    </div> : <div class="front">
                        <form id="contact-form-main" ref={form} onSubmit={sendEmail}>
                            <br></br>
                            <input type="text" name="from_name" class="input-class" placeholder="Name" /><br></br><br></br><br></br>
                            <input type="email" name="user_email" class="input-class" placeholder="Email" required /><br></br><br></br><br></br>
                            <textarea name="message" class="input-class" id="input-message-id" placeholder="Message" required /><br></br><br></br>
                            <input type="submit" value="Send" class="input-class" id="submit-button" title="mailto: 'gargdivyansh11@gmail.com'"></input>
                        </form>
                    </div>}
                 </div>
            </div>
        </div>
    );
};

export default Contact;