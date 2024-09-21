import React, {useState} from 'react';
import './Experience.css';

function Experience() {
    const [activeTab, setActiveTab] = useState(1);

    function switchTab(index) {
        setActiveTab(index);
        if (index === 1) {
            document.getElementById('education').classList.add('qualification__active');
            document.getElementById('work').classList.remove('qualification__active');
        }
        else {
            document.getElementById('education').classList.remove('qualification__active');
            document.getElementById('work').classList.add('qualification__active');
        }
    }

    return (
        <section class="qualification section">

            {/* sectionn title */}
            <h2 class="section__title" i18n="qualification__title">
          Experinece
            </h2>
            <span class="section__subtitle" i18n="qualification__subtitle">
          My personal journey 
            </span>


            <div class="qualification__container container">
                <div class="qualification__tabs">
                    <div
                        class={`qualification__button button--flex ${activeTab === 1 ? 'qualification__active' : ''}`}
                        data-target="#education"
                        onClick={() => switchTab(1)}
                    >
                        <i class="uil uil-graduation-cap qualification__icon"></i>
                        <span i18n="education">Education</span>
                    </div>

                    <div class={`qualification__button button--flex ${activeTab === 2 ? 'qualification__active' : ''}`}
                        data-target="#work"
                        onClick={() => switchTab(2)}
                    >
                        <i class="uil uil-briefcase-alt qualification__icon"></i>
                        <span i18n="work">Work</span>
                    </div>
                </div>


                <div class="qualification__sections">
                    {/* education */}
                    <div
                        class="qualification__content qualification__active"
                        data-content
                        id="education"
                    >
     
                        <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title" i18n="qualification1__title">
                    MS in Data Science
                                </h3>
                                <span
                                    class="qualification__subtitle"
                                    i18n="qualification1__subtitle"
                                >Rice University</span
                                >
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                    2022.08 - 2023.12
                                </div>
                  
                  
                            </div>

                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>
           
                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>

                            <div>
                                <h3 class="qualification__title" i18n="qualification2__title">
                  B.S. in Mathematical Science
                  B.A. in Economics (honor)
                                </h3>
                                <span
                                    class="qualification__subtitle"
                                    i18n="qualification2__subtitle"
                                >University of California, Santa Barbara</span
                                >
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                    2017.09 - 2021.06
                                </div>
                            </div>
                        </div>
           
                    </div>

                    {/* work */}
                    <div
                        class="qualification__content"
                        data-content
                        id="work"
                    >
     
                        <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title" i18n="qualification1__title">
                    Performance Engineer intern
                                </h3>
                                <span
                                    class="qualification__subtitle"
                                    i18n="qualification1__subtitle">
                      Silicon Ranch Corporation 
                                </span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                    2023.05 - 2023.08
                                </div>
                            </div>

                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>
           
                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>

                            <div>
                                <h3 class="qualification__title" i18n="qualification2__title">
                  Machine Learning Engineer intern
                                </h3>
                                <span
                                    class="qualification__subtitle"
                                    i18n="qualification2__subtitle">
                      Consentify 
                                </span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                    2023.05 - 2023.08
                                </div>
                            </div>
                        </div>
           
                        <div class="qualification__data">
                            <div>
                                <h3 class="qualification__title" i18n="qualification1__title">
                    Research Fellow 
                                </h3>
                                <span
                                    class="qualification__subtitle"
                                    i18n="qualification1__subtitle">
                      Rice Fondren Library
                                </span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt"></i>
                    2022.09 - 2023.05
                                </div>
                            </div>

                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div class="qualification__data">
                <div></div>
                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>

                <div>
                  <h3 class="qualification__title" i18n="qualification2__title">
                  BS in Data Science
                  </h3>
                  <span
                    class="qualification__subtitle"
                    i18n="qualification2__subtitle"
                    >University of California, Irvine</span
                  >
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    2017.09 - 2022.07
                  </div>
                </div>
              </div> */}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience;