import React from 'react';
import Style from './Header.module.css';

export const Header = () => {
    return (
        <header className={Style.header}>
            <img
                src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                className="logo"
                alt="logo"
            />
        </header>
    );
};
