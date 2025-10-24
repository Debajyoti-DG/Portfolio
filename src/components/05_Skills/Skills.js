// src/components/05_Skills/Skills.js

import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Languages & Databases",
    skills: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain-wordmark" },
      { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain-wordmark" },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Postman", icon: "devicon-postman-plain" },
      { name: "GitHub Copilot", icon: "devicon-github-original" }, // Using GitHub icon as a proxy
      { name: "ChatGPT", text: "GPT" }, // Using text for non-Devicon items
      { name: "Gemini Pro", text: "API" },
      { name: "Zapier", text: "Zap" },
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
        { name: "TensorFlow", icon: "devicon-tensorflow-original" },
        { name: "scikit-learn", icon: "devicon-scikitlearn-plain" },
        { name: "OpenCV", icon: "devicon-opencv-plain" },
        { name: "YOLOv8", text: "YOLO" },
    ],
  },
  {
    category: "Cloud & Deployment",
    skills: [
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Netlify", icon: "devicon-netlify-plain" },
      { name: "Render", icon: "devicon-heroku-plain" }, // Using Heroku as a proxy
      { name: "Cloudinary", text: "IMG" },
      { name: "Google Analytics", text: "GA" },
    ],
  },
  {
    category: "CS Fundamentals & SDLC",
    skills: [
      { name: "DSA", text: "DSA" },
      { name: "OOPs", text: "OOP" },
      { name: "DBMS", text: "DB" },
      { name: "Agile", text: "Agile" },
      { name: "SDLC", text: "SDLC" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Networks", text: "Net" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Professional Skillset</h2>
      <div className="skills-grid">
        {skillsData.map((categoryItem, index) => (
          <div className="skill-category-card" key={index}>
            <h3 className="category-title">{categoryItem.category}</h3>
            <div className="skills-list">
              {categoryItem.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex} title={skill.name}>
                  {skill.icon ? (
                    <i className={skill.icon}></i>
                  ) : (
                    <span className="skill-text">{skill.text}</span>
                  )}
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;