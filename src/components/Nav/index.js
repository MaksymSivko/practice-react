import React from 'react';
import Style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={Style.nav}>
            <div className={Style.nav__link}>
                <NavLink to="/profile">Profil</NavLink>
            </div>
            <div className={Style.nav__link}>
                <NavLink to="/message">Message</NavLink>
            </div>
            <div className={Style.nav__link}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={Style.nav__link}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
};
