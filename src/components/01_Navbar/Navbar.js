// src/components/01_Navbar/Navbar.js

import React, { useState } from 'react';
import './Navbar.css';

const linkVisibility = {
    Recruiter: new Set(['home', 'about', 'experience', 'skills', 'projects', 'hire-me']),
    Developer: new Set(['home', 'about', 'experience', 'skills', 'projects', 'hire-me']),
    Adventurer: new Set(['home', 'about', 'projects', 'hire-me']),
    Stalker: new Set(['home', 'about', 'experience', 'skills']),
};

// UPDATED: Accept the onReset prop
const Navbar = ({ userType, onReset }) => {
    // NEW: State to manage the mobile menu (open/closed)
    const [isOpen, setIsOpen] = useState(false);

    const visibleLinks = linkVisibility[userType] || new Set();

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className="navbar">
            {/* NEW: Left section container */}
            <div className="nav-left">
                <div className="nav-logo">R.</div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {visibleLinks.has('home') && <li><a href="#home" onClick={handleLinkClick}>Home</a></li>}
                    {visibleLinks.has('about') && <li><a href="#about" onClick={handleLinkClick}>About</a></li>}
                    {visibleLinks.has('experience') && <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>}
                    {visibleLinks.has('skills') && <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>}
                    {visibleLinks.has('projects') && <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>}
                    {visibleLinks.has('hire-me') && <li><a href="#hire-me" onClick={handleLinkClick}>Hire Me</a></li>}
                </ul>
            </div>

            {/* NEW: Right section container */}
            <div className="nav-right">
                <button onClick={onReset} className="profile-button" title="Change Viewer Profile">
                    🧑‍💻
                </button>
            </div>

            {/* NEW: Hamburger menu button for mobile */}
            <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
        </nav>
    );
}

export default Navbar;