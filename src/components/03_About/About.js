import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <p>
                    Hello! I'm Debajyoti Datta Gupta, a passionate and detail-oriented developer dedicated to crafting elegant, efficient, and impactful software solutions.
                </p>
                <p>
                    My journey into technology began with a deep curiosity about how things work, which naturally evolved into a strong drive to build and innovate through code. I thrive on challenges and continuously expand my skill set to stay ahead in the ever-evolving tech landscape.
                </p>
                <p>
                    Beyond development, I enjoy exploring emerging technologies and mentoring aspiring programmers in Java and SQL, helping them strengthen their foundation in software engineering.
                </p>
                <p>
                    My ultimate goal is to create applications that are not only technically robust and scalable but also deliver a seamless and engaging user experience.
                </p>
            </div>
        </section>
    );
};

export default About;