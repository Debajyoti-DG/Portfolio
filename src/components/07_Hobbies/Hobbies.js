// src/components/07_Hobbies/Hobbies.js

import React, { useState } from 'react';
import './Hobbies.css';

// 1. Import components directly instead of using React.lazy
import Chess from './Chess';
import Guitar from './Guitar';
import Movies from './Movies';

const Hobbies = () => {
    // 2. Set the default active hobby to 'chess'
    const [activeHobby, setActiveHobby] = useState('chess');

    return (
        <section className="hobbies-section">
            <h2 className="section-title">My Hobbies</h2>
            <div className="hobbies-nav">
                <button
                    className={`hobby-tab ${activeHobby === 'chess' ? 'active' : ''}`}
                    onClick={() => setActiveHobby('chess')}
                >
                    Chess
                </button>
                <button
                    className={`hobby-tab ${activeHobby === 'guitar' ? 'active' : ''}`}
                    onClick={() => setActiveHobby('guitar')}
                >
                    Guitar
                </button>
                <button
                    className={`hobby-tab ${activeHobby === 'movies' ? 'active' : ''}`}
                    onClick={() => setActiveHobby('movies')}
                >
                    Movies
                </button>
            </div>
            <div className="hobby-content-display">
                {/* 3. Render the active component directly. Suspense is no longer needed. */}
                {activeHobby === 'chess' && <Chess />}
                {activeHobby === 'guitar' && <Guitar />}
                {activeHobby === 'movies' && <Movies />}
            </div>
        </section>
    );
};

export default Hobbies;