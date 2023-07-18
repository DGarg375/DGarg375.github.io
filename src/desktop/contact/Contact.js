import './Contact.css';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [checkSubmit, setCheckSubmit] = useState(false);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById("submit-button").style.opacity = "0.5";
        emailjs.sendForm('service_00es1si', 'template_s7tj3pn', form.current, 'O5HpIEiDXmz-O2zHr')
        .then((result) => {
            setCheckSubmit(true);
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
            {windowSize[0] < 940 ? <></> : <div class="photo-base"><img id="contact-photo" src="./icons8-dev-windows-11/contact-us.png" alt="man saying contact me"></img></div>}
            <div class="contact-base-container">
                <div class="contact-title">Contact Me</div>
                <div class="contact-form">
                    {checkSubmit ? <div class="back">
                        <span id="after-submit-text"><img alt="thank you" src="./icons8-dev-windows-11/thank-you.png"></img></span>
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