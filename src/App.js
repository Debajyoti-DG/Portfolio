// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

import SelectionScreen from './components/00_SelectionScreen/SelectionScreen';
import Navbar from './components/01_Navbar/Navbar';
import Home from './components/02_Home/Home';
import About from './components/03_About/About';
import Projects from './components/04_Projects/Projects';
import Skills from './components/05_Skills/Skills';
import Experience from './components/06_Experience/Experience';
import Hobbies from './components/07_Hobbies/Hobbies';
import HireMe from './components/08_HireMe/HireMe';
import Certifications from './components/09_Certifications/Certifications';

// Define which sections are visible for each user type
const sectionVisibility = {
    Recruiter: new Set(['home', 'about', 'experience', 'skills', 'projects', 'hobbies', 'certifications', 'hire-me']),
    Developer: new Set(['home', 'about', 'experience', 'skills', 'projects', 'hobbies', 'certifications', 'hire-me']),
    Adventurer: new Set(['home', 'about', 'projects', 'hobbies', 'certifications', 'hire-me']), // Hides Skills, Experience, Hire Me
    Stalker: new Set(['home', 'about', 'experience', 'skills', 'hobbies']), // Hides Projects, Certifications, Hire Me
};

function App() {
  const [userType, setUserType] = useState(null);

  const handleSelectUser = (type) => {
    setUserType(type);
  };

  // NEW: Function to reset the user type and go back to the selection screen
  const resetUserType = () => {
    setUserType(null);
  };

  // NEW: This effect applies the theme and animations based on user type
  useEffect(() => {
    if (userType) {
      // Clear previous theme classes
      document.body.className = '';
      // Add the new theme class to the body tag
      document.body.classList.add(`theme-${userType.toLowerCase()}`);
    }
  }, [userType]);


  if (!userType) {
    return <SelectionScreen onSelect={handleSelectUser} />;
  }

  // Get the set of visible sections for the current user type
  const visibleSections = sectionVisibility[userType];

  return (
    <div className="App">
      {/* Pass userType to Navbar to control link visibility */}
      <Navbar userType={userType} onReset={resetUserType} />
      <main>
        {/* Each section is now conditionally rendered */}
        {visibleSections.has('home') && <div id="home"><Home userType={userType} /></div>}
        {visibleSections.has('about') && <div id="about"><About /></div>}
        {visibleSections.has('experience') && <div id="experience"><Experience /></div>}
        {visibleSections.has('skills') && <div id="skills"><Skills /></div>}
        {visibleSections.has('projects') && <div id="projects"><Projects /></div>}
        {visibleSections.has('hobbies') && <div id="hobbies"><Hobbies /></div>}
        {visibleSections.has('certifications') && <div id="certifications"><Certifications /></div>}
        {visibleSections.has('hire-me') && <div id="hire-me"><HireMe /></div>}
      </main>
    </div>
  );
}

export default App;