import React from 'react';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Profile } from './components/Profile';
import { Message } from './components/Message';
import { Settings } from './components/Settings';
import { News } from './components/News';

import Style from './style.module.css';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className={Style.app__wrapper}>
                <Header />
                <section className={Style.main__wrapper}>
                    <Nav />

                    {/* <section> */}
                    <Route path="/profile" component={Profile} />
                    <Route path="/message" component={Message} />
                    <Route path="/news" component={News} />
                    <Route path="/settings" component={Settings} />
                    {/* </section> */}
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
