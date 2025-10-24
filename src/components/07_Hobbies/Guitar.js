import React from 'react';
import './Guitar.css';
import guitarVideo from '../../assets/my_guitar_video.mp4'; // Make sure you have this video file!

const Guitar = () => {
    return (
        <div className="guitar-container">
            <h3>My Guitar Jam</h3>
            <p>Here's a little something I've been working on. Music is a great way to unwind and express creativity.</p>
            {guitarVideo && (
                <div className="video-wrapper">
                    <video controls src={guitarVideo} className="guitar-video">
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            {!guitarVideo && (
                <p className="video-placeholder">
                    (Placeholder: Please add your 'my_guitar_video.mp4' to src/assets/)
                </p>
            )}
        </div>
    );
};

export default Guitar;