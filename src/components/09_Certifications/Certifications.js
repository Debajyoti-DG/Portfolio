import React from 'react';
import './Certifications.css';

const certificationsData = [
    {
        title: "Data Structures and Algorithms using JAVA",
        issuer: "Infosys Springboard",
        date: "Issued June 2025",
        link: "https://drive.google.com/file/d/1x9KeR41UYF5188A723dt82kPYt2fCIX3/view?usp=sharing", // Add your link here
        icon: "devicon-java-plain"
    },
    {
        title: "React JS",
        issuer: "Infosys Springboard",
        date: "Issued June 2025",
        link: "https://drive.google.com/file/d/1zwenhzBtJm775MAfPAeIMc0CP2HDmjvK/view?usp=sharing", // Add your link here
        icon: "devicon-react-original"
    },
    {
        title: "Automating Sales Tasks with Zapier",
        issuer: "Coursera Project Network",
        date: "Issued Jul 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/RRYYGNRE3MTT", // Add your link here
        textIcon: "Zap"
    },
    {
        title: "Artificial Intelligence/Machine learning using Python",
        issuer: "EUPHORIA GENX",
        date: "Issued March 2025",
        link: "https://drive.google.com/file/d/1_zrll_fwKdC2i6aGJq-Y2vkgGh17WXIS/view?usp=sharing", // Add your link here
        icon: "devicon-python-plain"
    },
    {
        title: "C Essential Training",
        issuer: "LinkedIn",
        date: "Issued Jul 2024",
        link: "https://www.linkedin.com/learning/certificates/41ecb73e2bd4344fd759a63a36ee36f81432beaea917ebf443febba3d6bc4705", // Add your link here
        icon: "devicon-c-plain"
    },
    {
        title: "Cyber Security and Ethical Hacking",
        issuer: "ARDENT COMPUTECH LTD.",
        date: "Issued March 2024",
        link: "https://drive.google.com/file/d/1CGChNdq6KNwSQJqZO0g7wzBvSp_czrYF/view?usp=sharing", // Add your link here
        icon: "devicon-kalilinux-plain"
    },
    {
        title: "EFSET English Certificate 69/100 (C1 Advanced)",
        issuer: "EF Standard English Test",
        date: "Issued Jul 2023",
        link: "https://cert.efset.org/D31hmm", // Add your link here
        textIcon: "C1"
    }
];

const Certifications = () => {
    return (
        <section className="certifications-section" id="certifications">
            <h2 className="section-title">Licenses & Certifications</h2>
            <div className="certifications-grid">
                {certificationsData.map((cert, index) => (
                    <div className="certification-card" key={index}>
                        <div className="cert-icon">
                            {cert.icon ? <i className={cert.icon}></i> : <span>{cert.textIcon}</span>}
                        </div>
                        <div className="cert-details">
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                Show credential
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;