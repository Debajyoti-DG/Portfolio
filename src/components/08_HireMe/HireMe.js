import React from 'react';
import './HireMe.css';
import myPicture from '../../assets/my_picture.png';

const HireMe = () => {
    return (
        <section className="hire-me-section">
            <h2 className="section-title">Let's Connect</h2>
            <div className="hire-me-content">
                <div className="contact-info">
                    <img src={myPicture} alt="Rupam" className="contact-image"/>
                    <h3>Ready to build something amazing?</h3>
                    <p>I'm currently available for freelance projects and full-time opportunities. If you have an exciting project in mind or think I'd be a great fit for your team, let's talk.</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> dattaguptadebajyoti@gmail.com</p>
                        <p><strong>Phone:</strong> +91 98753 38083</p>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/Debajyoti-DG" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/debajyoti-datta-gupta-262a82272/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://facebook.com/Debajyoti-Datta-Gupta" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireMe;