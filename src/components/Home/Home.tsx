import React from 'react';
import './Home.css';
import Social from './Social';
import Intro from './Intro';

const Home: React.FC = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div className="home__img">
                        <div className="image-wrapper">
                            <img src="../../assets/img/self1.jpg" alt="" />
                        </div>
                    </div>

                    <Intro />
                </div>

                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex" aria-label="Scroll down to About section">
                        <i className="uil uil-mouse-alt-2 home__scroll-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;