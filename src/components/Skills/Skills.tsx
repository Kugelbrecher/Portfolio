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

const skillCategories: SkillCategory[] = [
    {
        title: 'Data',
        subtitle: 'More than 3 years',
        icon: 'uil uil-percentage',
        skills: [
            { name: 'Python', imgSrc: 'https://img.icons8.com/color/48/000000/python--v1.png' },
            { name: 'PostgreSQL', imgSrc: 'https://img.icons8.com/color/48/000000/postgreesql.png' },
            { name: 'AWS', imgSrc: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
            { name: 'Tableau', imgSrc: 'https://img.icons8.com/color/48/000000/tableau-software.png' },
            { name: 'Excel', imgSrc: 'https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png' },
            { name: 'Pytorch', imgSrc: 'https://pytorch.org/assets/images/pytorch-logo.png' },
            { name: 'CV', imgSrc: 'https://img.icons8.com/color/48/000000/opencv.png' },
            { name: 'NLP', imgSrc: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-natural-language-processing-big-data-flaticons-lineal-color-flat-icons.png' },  
            { name: 'Spark', imgSrc: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_spark_logo_icon_170560.png' },
            { name: 'STATA', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stata/stata-original-wordmark.svg' },

        ]
    },
    {
        title: 'Development',
        subtitle: 'More than 1 year',
        icon: 'uil uil-brackets-curly',
        skills: [
            { name: 'AWS', imgSrc: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
            { name: 'Google Cloud', imgSrc: 'https://img.icons8.com/color/48/000000/google-cloud.png' },
            { name: 'HTML', imgSrc: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
            { name: 'CSS', imgSrc: 'https://img.icons8.com/color/48/000000/css3.png' },
            { name: 'JavaScript', imgSrc: 'https://img.icons8.com/color/48/000000/javascript--v1.png' },
            { name: 'TypeScript', imgSrc: 'https://img.icons8.com/color/48/000000/typescript--v1.png' },
            { name: 'MongoDB', imgSrc: 'https://img.icons8.com/color/48/000000/mongodb.png' },
            { name: 'React', imgSrc: 'https://img.icons8.com/color/48/000000/react-native.png' },
            { name: 'REST API', imgSrc: 'https://www.clipartmax.com/png/middle/285-2851044_restful-search-api-rest-web-services-logo.png' },
            { name: 'Node.js', imgSrc: 'https://img.icons8.com/color/48/000000/nodejs.png' },
            { name: 'Heroku', imgSrc: 'https://img.icons8.com/color/48/000000/heroku.png' },
            { name: 'Git', imgSrc: 'https://img.icons8.com/color/48/000000/git.png' },
            { name: 'VS Code', imgSrc: 'https://cdn.icon-icons.com/icons2/2107/PNG/48/file_type_vscode_icon_130084.png' },
            { name: 'IntelliJ', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png' },
            { name: 'Flask', imgSrc: 'https://img.icons8.com/color/48/000000/flask.png' },
            { name: 'Material UI', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
            { name: 'Bootstrap', imgSrc: 'https://img.icons8.com/color/48/000000/bootstrap.png' },

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