import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [checkSubmit, setCheckSubmit] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_00es1si', 'template_s7tj3pn', form.current, 'O5HpIEiDXmz-O2zHr')
        .then((result) => {
            setCheckSubmit(true);
        }, (error) => {
            alert("Cannot connect to server. Plase try again!");
        })
    }
    return(
        <div class="contact-main">
            <div class="photo-base"><img id="contact-photo" src="./icons8-dev-windows-11/contact-us.png" alt="man saying contact me"></img></div>
            <div class="contact-base-container">
                <div class="contact-title">Contact Me</div>
                <div class="contact-form">
                    {checkSubmit ? <><span id="after-submit-text">Thank You! <br></br><br></br>Your message has been sent!</span></> : <form id="contact-form-main" ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" class="input-class" placeholder="Full Name" /><br></br><br></br>
                        <input type="email" name="user_email" class="input-class" placeholder="Email" required /><br></br><br></br>
                        <textarea name="message" class="input-class" id="input-message-id" placeholder="Message" required /><br></br><br></br>
                        <input type="submit" value="Send" class="input-class" id="submit-button" title="gargdivyansh11@gmail.com"></input>
                    </form>}
                </div>
            </div>
        </div>
    );
};

export default Contact;