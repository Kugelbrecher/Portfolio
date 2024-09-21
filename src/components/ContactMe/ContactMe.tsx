import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_efzs46d', 'template_jzy692r', form.current, '3JcnbvKgwz1KBUEjP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();

        //  show success message for 5 seconds
        document.getElementById('status').style.display = 'block';
        setTimeout(function(){ document.getElementById('status').style.display = 'none'; }, 5000);

    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title" i18n="contact__title">Contact me</h2>
            <span className="section__subtitle" i18n="contact__subtitle">
                Let's get in touch
            </span>
            <div className="contact__container container grid">

                <div action="" className="contact__flex" style={{flexDirection: 'column', justifyContent: 'center'}}
                >
                    <div className="contact__content">
                        {/* call me */}
                        <h3 className="contact__title" i18n="call__title"><i className="uil uil-phone contact__icon"></i>Call me</h3>
                        <div className="contact__info">
                            <h3 className="contact__subtitle" i18n="call__subtitle">(805)403-9974</h3>
                            <span className="contact__text" i18n="call__text">Mon-Fri 8am-8pm CST</span>
                        </div>
                    </div>

                    <div className="contact__content">
                        {/* email me */}
                        <h3 className="contact__title" i18n="email__title"><i className="uil uil-envelope contact__icon"></i>Email Me</h3>
                        <div className="contact__info">
                            <h3 class="contact__subtitle" i18n="call__subtitle">nikswenxz@gmail.com</h3>
                            <span class="contact__text" i18n="call__text"> Anytime!</span>
                        </div>
                    </div>

                    <div className="contact__content">
                        {/* social media */}
                        <h3 className="contact__title" i18n="social__title"><i className="uil uil-comment-dots contact__icon"></i>Message Me</h3>
                        <div className="contact__info">
                            <a href="https://www.linkedin.com/in/nik-sun" target="_blank" rel="noreferrer" className="contact__social">
                                <h3 className="contact__subtitle" i18n="social__subtitle">LinkedIn (click!)
                                </h3>
                            </a>
                            <span className="contact__text" i18n="social__text">I'm active on LinkedIn :)</span>
                        </div>
                    </div>

                </div>

                {/* send email to me with a form submitted */}
                <form className='contact__form'id="contact-form" ref={form} onSubmit={sendEmail}>
                    <div id="status" style={{display: 'none', color: 'green'}}>Message Sent!</div>

                    <label htmlFor="name">Your Name:</label>
                    <input className='contact__input'
                        type="text" id="name" name="name" required/>
        
                    <label htmlFor="email">Your Email:</label>
                    <input className='contact__input' type="email" id="email" name="email" required/>
        
                    <label htmlFor="message">Message:</label>
                    <textarea className='contact__input' id="message" name="message" rows="4" required></textarea>
        
       
                    <button className= 'button button--flex' style = {{width: '100px', height: '40px', justifyContent: 'center', alignItems: 'center',
                        color: 'white', borderRadius: '10px', border: 'none', cursor: 'pointer', marginRight: '10px'}}
                    type="submit">Send</button> 

                </form>

            </div>
        </section>
    )
}

export default ContactMe;