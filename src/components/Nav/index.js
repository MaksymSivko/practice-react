import React from 'react';
import Style from './Nav.module.css';

export const Nav = () => {
    return (
        <nav className={Style.nav}>
            <div className={Style.nav__link}>
                <a href="#">Profil</a>
                {/* Profil */}
            </div>
            <div className={Style.nav__link}>
                <a href="#">Message</a>
                {/* Message */}
            </div>
            <div className={Style.nav__link}>
                <a href="#">News</a>
                {/* News */}
            </div>
            <div className={Style.nav__link}>
                <a href="#">Settings</a>
                {/* Settings */}
            </div>
        </nav>
    );
};
