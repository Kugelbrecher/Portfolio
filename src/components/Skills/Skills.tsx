import React, { useState } from 'react';
import './Skills.css';

interface SkillData {
  name: string;
  imgSrc: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: SkillData[];
}

// https://devicon.dev/
const skillCategories: SkillCategory[] = [
    {
        title: 'Data',
        subtitle: 'More than 3 years',
        icon: 'uil uil-percentage',
        skills: [
            { name: 'Python', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
            { name: 'Pandas', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
            { name: 'scikit', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
            { name: 'PostgreSQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
            { name: 'AWS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Tableau', imgSrc: 'https://img.icons8.com/color/48/000000/tableau-software.png' },
            { name: 'matplotlib', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
            { name: 'seaborn', imgSrc: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
            { name: 'Excel', imgSrc: 'https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png' },
            { name: 'Pytorch', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
            { name: 'TensorFlow', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
            { name: 'CV', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg' },
            { name: 'NLP', imgSrc: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-natural-language-processing-big-data-flaticons-lineal-color-flat-icons.png' },  
            { name: 'Spark', imgSrc: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_spark_logo_icon_170560.png' },
            { name: 'STATA', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stata/stata-original-wordmark.svg' },
            { name: 'MySQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
            { name: 'MongoDB', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
            { name: 'SAS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        ]
    },
    {
        title: 'Development',
        subtitle: 'More than 1 year',
        icon: 'uil uil-brackets-curly',
        skills: [
            { name: 'AWS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Google Cloud', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg' },
            { name: 'HTML', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
            { name: 'CSS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
            { name: 'JavaScript', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
            { name: 'TypeScript', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' },
            { name: 'ESLint', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg' },
            { name: 'Mongoose', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg' },
            { name: 'PostgreSQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg' },
            { name: 'Flask', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
            { name: 'React', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
            { name: 'REST API', imgSrc: 'https://www.clipartmax.com/png/middle/285-2851044_restful-search-api-rest-web-services-logo.png' },
            { name: 'Node.js', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
            { name: 'Heroku', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg' },
            { name: 'Git', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
            { name: 'VS Code', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
            { name: 'IntelliJ', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
            { name: 'Nginx', imgSrc: 'https://img.icons8.com/color/48/000000/nginx.png' },
            // { name: 'Nginx', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
            { name: 'Bash', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' },
            { name: 'Material UI', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
            { name: 'Bootstrap', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },

        ]
    }
];

const SkillItem: React.FC<{ skill: SkillData }> = ({ skill }) => (
    <div className="skills__data">
        <img className="skills__img" src={skill.imgSrc} alt={skill.name} />
        <div className="skills__titles">
            <h3 className="skills__name">{skill.name}</h3>
        </div>
    </div>
);

const SkillCategory: React.FC<{ category: SkillCategory }> = ({ category }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSkills = () => setIsOpen(!isOpen);

    return (
        <div className={`skills__content ${isOpen ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header">
                <i className={`${category.icon} skills__icon`}></i>
                <div>
                    <h1 className="skills__title">{category.title}</h1>
                    <span className="skills__subtitle">{category.subtitle}</span>
                </div>
                <i 
                    className="uil uil-angle-down skills__arrow" 
                    onClick={toggleSkills}
                ></i>
            </div>
            <div className="skills__list grid">
                {category.skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                <div>
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={index} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;