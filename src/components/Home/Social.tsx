import React from 'react';

interface SocialLink {
    href: string;
    iconClass: string;
    ariaLabel: string;
}

const socialLinks: SocialLink[] = [
    {
        href: 'https://www.linkedin.com/in/nik-sun',
        iconClass: 'uil uil-linkedin',
        ariaLabel: 'LinkedIn Profile'
    },
    {
        href: 'https://github.com/Kugelbrecher',
        iconClass: 'uil uil-github',
        ariaLabel: 'GitHub Profile'
    },
];

const Social: React.FC = () => {
    return (
        <div className="home__social">
            {socialLinks.map(({ href, iconClass, ariaLabel }) => (
                <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="home__social-icon"
                    aria-label={ariaLabel}
                >
                    <i className={iconClass}></i>
                </a>
            ))}
        </div>
    );
};

export default Social;
