import React from 'react';
import './About.css';
import ABOUT from '../../assets/img/cat.jpg';
import DS_RESUME from '../../assets/pdf/Nik Resume.pdf';


const About: React.FC = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={ABOUT} alt="About me" className="about__img" />

                <div className="about__data">
                    <p className="about__description">
                        I am currently looking for <span style={{color: '#f9ab00'}}> full-time</span> opportunities 
                        in data science, data analysis, and software engineering.
                        I graduated in <span style={{color: '#f9ab00'}}>December 2023</span> with a Master of 
                        Data Science degree from Rice University and I am open to relocation and remote work.
                        <br />
                        <br />
                        I'm proficient in Python, SQL, React, Flask, and AWS. I have experience in data analysis, 
                        machine learning, deep learning, and web development.
                        <br />
                        <br />
                        I'm a quick learner and a team player. I enjoy communicating with people and I'm always 
                        willing to help others. Besides, I'm a cat person and can't wait to have one someday!
                        <br />
                        <br />
                        Please feel free to <a href="#contact">contact me </a> if you have any questions or opportunities!
                        <i className="uil uil-smile-wink"></i>
                    </p>

                    <div className="about__buttons" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <a
                            download=""
                            href={DS_RESUME}
                            className="button button--flex"
                        >
                            <span>Resume</span>
                            <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;