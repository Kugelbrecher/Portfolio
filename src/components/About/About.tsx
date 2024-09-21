import './About.css';
import ABOUT from '../../assets/img/cat.jpg';
import DS_RESUME from '../../assets/pdf/Nik Resume.pdf';

function About() {
    return (
        <section class="about section" id="about">
            <h2 class="section__title" i18n="about__title">About Me</h2>
            <span class="section__subtitle" i18n="about__subtitle"
            >My introduction</span>
            <div class="about__container container grid">
                <img src={ABOUT}
                    alt="" class="about__img" />

                <div class="about__data">
                    <p class="about__description" i18n="about__description">
                        I am currently looking for <spam style={{color: '#f9ab00'}}> full-time</spam> opportunities 
                        in data science, data analysis, and software engineering.
                        I will graduate in <spam style={{color:  '#f9ab00'}}>December 2023</spam> with a Master of 
                        Data Science degree from Rice University and I am open to relocation and remote work.
                        <br />
                        <br />
                        I'm proficient in Python, SQL, R, Html/Css and Java. I have experience in data analysis, 
                        machine learning, deep learning, and web developement.
                        <br />
                        <br />
                        I'm a quick learner and a team player. I enjoy comunicating with people and I'm always 
                        willing to help others. Besides, I'm a cat person and can't wait to have one someday!
                        <br />
                        <br />
                        Please feel free to <a href="#contact">contact me </a> if you have any questions or opportunities!
                        <i class="uil uil-smile-wink"></i>
                    </p>

                    <div class="about__buttons" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <div class="about__buttons">
                            <a
                                download=""
                                href={DS_RESUME}
                                class="button button--flex"
                            >
                                <span i18n="download">Resume
                                </span><i class="uil uil-download-alt button__icon"></i>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;
