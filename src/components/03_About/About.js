// src/components/03_About/About.js

import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const cards = [
        {
            title: "Who I Am",
            icon: "👤",
            content: "A final-year B.Tech CSE student at FIEM with a deep-rooted passion for software engineering. Beyond coding, I've spent 4+ years mentoring students in Java and SQL, honing my ability to simplify complex logic."
        },
        {
            title: "What I Do",
            icon: "🚀",
            content: "I build scalable, full-stack applications using the SERN/PERN/MERN stack. My expertise spans from crafting responsive React interfaces to architecting secure Node.js APIs and integrating AI models like YOLOv8 for real-world impact."
        },
        {
            title: "What I Aim For",
            icon: "🎯",
            content: "I am seeking a Full Stack Developer role where I can solve high-stakes problems. My goal is to leverage my SIH 2024 finalist experience and startup internship background to build products that are both technically robust and user-centric."
        }
    ];

    return (
        <section className="about-section" id="about">
            <h2 className="section-title">The Story So Far</h2>
            
            <div className={`about-cards-container ${animate ? 'start-animation' : ''}`}>
                {cards.map((card, index) => (
                    <div className="about-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="card-glass-overlay"></div>
                        <div className="card-content">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">{card.icon}</span>
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <div className="title-underline"></div>
                            <p className="card-text">{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;