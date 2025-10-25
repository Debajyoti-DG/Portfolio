// src/components/02_Home/Home.js

import React, { useState } from 'react';
import './Home.css';
import myPicture from '../../assets/my_picture.png';
import Chatbot from '../Chatbot/Chatbot';

const Home = ({ userType }) => {
    const [isChatbotOpen, setChatbotOpen] = useState(false);

    // This function now gets passed to the Chatbot
    const handleCloseChatbot = () => setChatbotOpen(false);

    const getWelcomeMessage = () => {
        // ... (getWelcomeMessage function remains the same)
        switch (userType) {
            case "Recruiter":
                return "Welcome, Recruiter! You've found a candidate with the skills and passion to elevate your team.";
            case "Developer":
                return "Hey, fellow Developer! Let's collaborate and build something amazing together.";
            case "Adventurer":
                return "Greetings, Adventurer! Explore my digital world of projects and creations.";
            case "Stalker":
                return "Hello... Stalker. I see you. Feel free to look around, but be cool. 😉";
            default:
                return "Welcome to my portfolio.";
        }
    };

    return (
        <section className="home-section">
            <div className={`home-content animate-${userType.toLowerCase()}`}>
                <p className="welcome-tagline">{getWelcomeMessage()}</p>
                <div className="home-name-container">
                    <h1 className="home-name line-1">I'm Debajyoti,</h1>
                    <h1 className="home-name line-2">crafting future.</h1>
                </div>
                <p className="home-description">
                    I design and build exceptional digital experiences. From complex backend systems to intelligent AI solutions, I bring ideas to life with code.
                </p>
                
                <div className="cta-buttons-container">
                    <a href="#projects" className="cta-button">View My Work</a>
                    <a 
                        href="https://www.linkedin.com/in/debajyoti-datta-gupta-262a82272/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-button secondary"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="/resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-button secondary"
                    >
                        My Resume
                    </a>
                </div>
            </div>

            <div className="home-image-container">
                <img src={myPicture} alt="Rupam" className="home-image" />
            </div>

            <a href="#hobbies" className="hobbies-quick-link" title="Explore My Hobbies">
                <span>🎨</span>
            </a>

            {/* This toggle button now only opens the chatbot */}
            <button className="chatbot-toggle" onClick={() => setChatbotOpen(true)}>
                🤖
            </button>

            {/* The onClose prop is now passed to the Chatbot component */}
            {isChatbotOpen && <Chatbot onClose={handleCloseChatbot} />}
        </section>
    );
};

export default Home;