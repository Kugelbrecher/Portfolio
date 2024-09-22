import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

const ContactMe: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_nfuuwje', 'template_ujucvso', form.current, 'BRpNbyMP2mhZu6V3d')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            e.currentTarget.reset();

            // Show success message for 5 seconds
            const statusElement = document.getElementById('status');
            if (statusElement) {
                statusElement.style.display = 'block';
                setTimeout(() => { statusElement.style.display = 'none'; }, 5000);
            }
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact me</h2>
            <span className="section__subtitle">
                Let's get in touch
            </span>
            <div className="contact__container container grid">

                <div className="contact__flex" style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    {/* Call Me */}
                    <div className="contact__content">
                        <h3 className="contact__title"><i className="uil uil-phone contact__icon"></i>Call me</h3>
                        <div className="contact__info">
                            <h3 className="contact__subtitle">(805) 403-9974</h3>
                            <span className="contact__text">Mon-Fri 8am-8pm CST</span>
                        </div>
                    </div>

                    {/* Email Me */}
                    <div className="contact__content">
                        <h3 className="contact__title"><i className="uil uil-envelope contact__icon"></i>Email Me</h3>
                        <div className="contact__info">
                            <h3 className="contact__subtitle">nikswenxz@gmail.com</h3>
                            <span className="contact__text">Anytime!</span>
                        </div>
                    </div>

                    {/* Message Me */}
                    <div className="contact__content">
                        <h3 className="contact__title"><i className="uil uil-comment-dots contact__icon"></i>Message Me</h3>
                        <div className="contact__info">
                            <a href="https://www.linkedin.com/in/nik-sun" target="_blank" rel="noreferrer" className="contact__social">
                                <h3 className="contact__subtitle">LinkedIn (click!)</h3>
                            </a>
                            <span className="contact__text">I'm active on LinkedIn :)</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="contact__form" id="contact-form" ref={form} onSubmit={sendEmail}>
                    <div id="status" style={{ display: 'none', color: 'green' }}>Message Sent!</div>

                    <label htmlFor="name">Your Name:</label>
                    <input className="contact__input" type="text" id="name" name="name" required />

                    <label htmlFor="email">Your Email:</label>
                    <input className="contact__input" type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea className="contact__input" id="message" name="message" rows={4} required />

                    <button
                        className="button button--flex"
                        style={{
                            width: '100px',
                            height: '40px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            borderRadius: '10px',
                            border: 'none',
                            cursor: 'pointer',
                            marginRight: '10px'
                        }}
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
