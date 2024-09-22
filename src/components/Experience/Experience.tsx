import React, { useState } from 'react';
import './Experience.css';

interface QualificationData {
  title: string;
  subtitle: string;
  date: string;
}

interface QualificationSection {
  education: QualificationData[];
  work: QualificationData[];
}

const qualificationData: QualificationSection = {
    education: [
        {
            title: 'M.S. in Data Science',
            subtitle: 'Rice University',
            date: '2022.08 - 2023.12'
        },
        {
            title: 'B.S. in Mathematical Science & B.A. in Economics (honor)',
            subtitle: 'University of California, Santa Barbara',
            date: '2017.09 - 2021.06'
        }
    ],
    work: [
        {
            title: 'Full-Stack Data Scientist',
            subtitle: 'Prospect Equities',
            date: '2024.02 - Now'
        },
        {
            title: 'Performance Engineer intern',
            subtitle: 'Silicon Ranch Corporation',
            date: '2023.05 - 2023.08'
        },
        {
            title: 'Machine Learning Engineer intern',
            subtitle: 'Consentify',
            date: '2023.05 - 2023.08'
        },
        {
            title: 'Research Fellow',
            subtitle: 'Rice Fondren Library',
            date: '2022.09 - 2023.05'
        },
        {
            title: 'Operational Analyst',
            subtitle: 'Fuhe New Materials',
            date: '2021.10 - 2022.07'
        },
    ]
};

const Experience: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'work'>('education');

    const switchTab = (tab: 'education' | 'work') => {
        setActiveTab(tab);
    };

    const renderQualificationData = (data: QualificationData, isLeft: boolean) => (
        <div className="qualification__data">
            {isLeft ? (
                <>
                    <div>
                        <h3 className="qualification__title">{data.title}</h3>
                        <span className="qualification__subtitle">{data.subtitle}</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> {data.date}
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </>
            ) : (
                <>
                    <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">{data.title}</h3>
                        <span className="qualification__subtitle">{data.subtitle}</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> {data.date}
                        </div>
                    </div>
                </>
            )}
        </div>
    );

    return (
        <section className="qualification section">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
                        onClick={() => switchTab('education')}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
                        onClick={() => switchTab('work')}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`}
                        data-content
                        id="education"
                    >
                        {qualificationData.education.map((item, index) => (
                            renderQualificationData(item, index % 2 === 0)
                        ))}
                    </div>

                    <div
                        className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`}
                        data-content
                        id="work"
                    >
                        {qualificationData.work.map((item, index) => (
                            renderQualificationData(item, index % 2 === 0)
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;