// src/components/06_Experience/Experience.js

import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const timelineData = [
    {
    type: "work",
    title: "AI+ Insider (Student Ambassador)",
    company: "AI+ Smartphones",
    date: "Dec 2025 – Present",
    details: [
        "Providing structured feedback on smartphone hardware performance and NxtQuantum OS usability.",
        "Participating in beta testing and feature evaluation to improve system stability and user experience.",
        "Representating AI+ within the student community, sharing insights and reporting issues for continuous improvement."
        ]
    },
    {
        type: "work",
        title: "Full Stack Developer Freelance",
        company: "Skillence",
        date: "May 2025 – Oct 2025",
        details: [
            "Designed and developed a full-stack website for the Skillence startup using React.js, Node.js, Express, and MySQL.",
            "Collaborated to implement responsive UI components and secure backend APIs.",
            "Contributed to system optimization, ensuring seamless data flow between client and server.",
        ]
    },
    {
        type: "work",
        title: "Java & SQL Instructor",
        company: "Mentorship Role",
        date: "2020 – Present (4+ years)",
        details: [
            "Mentored and trained students and beginners in Java and SQL, focusing on problem-solving, DSA, and database fundamentals.",
            "Developed custom learning materials and exercises that improved student understanding and project implementation.",
            "Guided learners through real-world coding challenges and tech projects."
        ]
    },
    {
        type: "education",
        title: "Bachelor of Technology – CSE",
        company: "Future Institute of Engineering and Management (FIEM)",
        date: "2022 – Present",
        details: [
            "Finalist, Smart India Hackathon 2024, KCGIIT Chennai — developed an innovative tech solution under government mentorship.",
            "Event Head (former) and Event Advisor (current), Estrella Productions — led and organized creative film-based events.",
        ]
    }
];

// This is the component that handles the scroll-reveal animation
const TimelineItem = ({ item }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Animate only once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the item is visible
            }
        );

        // --- THIS IS THE FIX ---
        // 1. Store the current ref value in a local variable
        const currentItemRef = itemRef.current;

        if (currentItemRef) {
            observer.observe(currentItemRef);
        }

        return () => {
            // 2. Use the local variable in the cleanup function
            if (currentItemRef) {
                observer.unobserve(currentItemRef);
            }
        };
    }, []); // Dependency array remains empty as we only want this to run on mount

    // Pass the item.type as a class
    return (
        <div ref={itemRef} className={`timeline-item ${item.type} ${isVisible ? 'is-visible' : ''}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-company">{item.company}</p>
                <ul className="item-details">
                    {item.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const Experience = () => {
    return (
        <section className="experience-section">
            <h2 className="section-title">Experience & Education</h2>
            <div className="timeline-container">
                {timelineData.map((item, index) => (
                    <TimelineItem item={item} key={index} />
                ))}
            </div>

            <div className="timeline-end-star">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </div>
        </section>
    );
};

export default Experience;