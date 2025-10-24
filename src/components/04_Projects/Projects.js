import React from 'react';
import './Projects.css';
// Import your project images
import portfolioImg from '../../assets/project_portfolio.png';
import parcelImg from '../../assets/project_parcel.png';
import skillenceImg from '../../assets/project_skillence.png';
import lunarImg from '../../assets/project_lunar.jpg';

const projectsData = [
    {
        title: "Portfolio Website",
        description: "The very website you are browsing now. A slick, responsive portfolio built with React to showcase my skills and projects.",
        // CORRECTED: Each technology is now a separate string
        techStack: ["React.js", "HTML5", "CSS3", "Git", "Node.js", "Javascript", "chess.js", "Devicon", "Netlify"],
        githubLink: "https://github.com/Debajyoti-DG/Portfolio",
        image: portfolioImg
    },
    {
        title: "Parcel Management System",
        description: "A robust system to track and manage parcel deliveries, featuring real-time updates and user authentication.",
        techStack: ["Javascript", "MongoDB", "React.js", "Node.js", "Express", "Git"],
        githubLink: "https://github.com/Bangali-Coders/parcel-management-backend",
        image: parcelImg
    },
    {
        title: "Skillence Website",
        description: "A professional, front-end for the Skillence platform, focusing on a clean UI and intuitive user experience.",
        techStack: ["React.js", "Node.js", "HTML5", "CSS3", "Javascript", "PostgreSQL", "Git", "Cloudinary", "Render", "Netlify"],
        githubLink: "https://github.com/Debajyoti-DG/Skillence",
        image: skillenceImg
    },
    {
        title: "Lunar Surface Recognition",
        description: "An AI-powered system using YOLOv8 to recognize and classify features on the lunar surface from satellite imagery.",
        techStack: ["Python", "TensorFlow", "YOLOv8", "AI"],
        githubLink: "https://github.com/your-username/your-repo",
        image: lunarImg
    }
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            {/* NEW: Tech stack is now a mapped list */}
                            <div className="project-tech-list">
                                {project.techStack.map((tech, techIndex) => (
                                    <span className="tech-item" key={techIndex}>{tech}</span>
                                ))}
                            </div>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;