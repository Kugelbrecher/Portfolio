import './Home.css';
import Social from './Social';
import Intro from './Intro';


function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
          
                    <div className="home__img">
                        <div class="image-wrapper">
                            <img src="../../assets/img/self1.jpg" alt="" />
                        </div>
                    </div>

                    <Intro />

                </div>

                <div class="home__scroll">
                    <a href="#about" class="home__scroll-button button--flex">
                        <i class="uil uil-mouse-alt-2 home__scroll-mouse"></i>
                        <span class="home__scroll-name" i18n="home__scroll-name">Scroll down</span>
                        <i class="uil uil-arrow-down home__scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
    
    )
}

export default Home;