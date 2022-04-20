import './contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import headshot from '../assets/img/marshal-sq.jpg';
import Email from "../assets/img/email.png";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_marshal.rocks', 'marshal.rocks_contact', form.current, 'VeMG_pfy8u9t4JVXU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div>
            <section id='contact'>
                <div className="section-title">
                    <h2>Get in Touch</h2>
                    <h4>I'm excited to connect with you!</h4>
                    <div className='section--headshot'>
                        <img src={headshot} className="contact--headshot" alt="marshal headshot" />
                    </div>
                    <div className='section--info'>
                        <h3>Want to get in touch? I'd love to hear from you. Here's how you can do it.</h3>
                        <p>I believe in motivating others through lifelong learning and inspiration. I share motivational experiences in hopes of connecting with others and building a community on <a href='https://instagram.com/marshal.rocks' target='_blank'>Instagram.</a></p>
                    </div>
                </div>
                <div className="container contact--container">
                    <div className="contact--options">
                        <div className='contact--option'>
                            <img src={Email} className='contact-img' alt="email envelope" />
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='contact--option'>
                            <h4>Send An Email Message</h4>
                            <a href='mailto:sayhi@marshal.rocks' target="_blank">sayhi@marshal.rocks</a>
                        </div>
                        <input type="text" name='name' placeholder='Name*' required />
                        <input type="email" name='email' placeholder='Email*' required />
                        <textarea name='message' rows="8" placeholder='Your message*' required></textarea>
                        <div className="g-recaptcha" data-sitekey="6LduNoIfAAAAALUtWUdDcyf-QONY8EFycXYYRsXr"></div>
                        <div className='contact--btn'>
                            <button type='submit' className='btn btn-primary'>Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;