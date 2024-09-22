import React, { useState, useCallback } from 'react';
import './Header.css';
import LOGO from '../../assets/img/logo.png';

interface NavItem {
    href: string;
    iconClass: string;
    i18nKey: string;
    label: string;
}

const navItems: NavItem[] = [
    { href: '#home', iconClass: 'uil uil-estate nav__icon', i18nKey: 'home', label: 'Home' },
    { href: '#about', iconClass: 'uil uil-user nav__icon', i18nKey: 'about', label: 'About' },
    { href: '#skills', iconClass: 'uil uil-file-alt nav__icon', i18nKey: 'skills', label: 'Skills' },
    { href: '#contact', iconClass: 'uil uil-message nav__icon', i18nKey: 'contact', label: 'Contact me' }
    // { href: '#resume', iconClass: 'uil uil-file-download-alt nav__icon', i18nKey: 'resume', label: 'Resume' }
];

const Header: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [showMenu, setShowMenu] = useState(false);

    const handleTheme = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        target.classList.remove(`uil-${theme === 'light' ? 'moon' : 'sun'}`);
        target.classList.add(`uil-${newTheme === 'light' ? 'moon' : 'sun'}`);

        document.body.classList.toggle('dark-theme', newTheme === 'dark');
    }, [theme]);

    const handleItemClick = useCallback(() => {
        setShowMenu(false);
    }, []);

    const toggleMenu = useCallback(() => {
        setShowMenu((prev) => !prev);
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    <img 
                        src={LOGO} 
                        alt="logo" 
                        style={{ width: '2em', height: '2em', verticalAlign: 'middle', marginRight: '0.5em' }}
                    />
                    Nik Sun
                </a>

                <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list grid">
                        {navItems.map((item) => (
                            <li className="nav__item" key={item.href} onClick={handleItemClick}>
                                <a href={item.href} className="nav__link">
                                    <i className={item.iconClass}></i>
                                    <p data-i18n={item.i18nKey}>{item.label}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={toggleMenu}></i>
                </div>

                <div className="nav__btns">
                    <i 
                        className={`uil uil-${theme === 'light' ? 'moon' : 'sun'} change-theme`} 
                        id="theme-button"
                        onClick={handleTheme}
                    ></i>
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>        
            </nav>
        </header>
    );
};

export default Header;