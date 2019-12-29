import React from 'react';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Profile } from './components/Profile';

import Style from './style.module.css';

function App() {
    return (
        <div className={Style.app__wrapper}>
            <Header />
            <section className={Style.main__wrapper}>
                <Nav />
                <Profile />
            </section>
        </div>
    );
}

export default App;
