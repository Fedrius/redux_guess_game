import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Game from'./game'

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <Game/>
        </div>

    </div>
);

export default App;
