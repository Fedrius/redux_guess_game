import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <img src={logo} className="logo rotate"/>
            <img src={logo} className="logo rotate"/>
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
        </div>
        <div>
            <img src={logo} className="logo rotate"/>
        </div>
    </div>
);

export default App;
