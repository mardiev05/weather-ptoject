import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Main from './Components/Main';
import Week from './Components/Week';
import Current from './Components/Current';
import './App.css';
import bgVideo from "./images/video8.mp4"

function App() {
    return (
        <div className="app">

            <video autoPlay loop muted>
                <source src={bgVideo} />
            </video>

            <div className="main__navbar">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Main</NavLink>
                <NavLink to="/current">Current</NavLink>
                <NavLink to="/week">Week</NavLink>
            </div>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path="current/" element={<Current />} />
                <Route path="current/:citYY" element={<Current />} />
                <Route path="week/" element={<Week />} />
                <Route path="week/:citYY" element={<Week />} />
            </Routes>
        </div>
    );
}

export default App;
