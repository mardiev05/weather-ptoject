import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Main from './Components/Main';
import './App.css';
import Week from './Components/Week';
import Current from './Components/Current';

function App() {
    return (
        <div className="app">
            <div className="main__navbar">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Main</NavLink>
                <NavLink to="/current">Current</NavLink>
                <NavLink to="/week">Week</NavLink>
            </div>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path="current/:citYY" element={<Current />} />
                <Route path="week" element={<Week />} />
            </Routes>
        </div>
    );
}

export default App;
