import React from 'react';
import './SelectionScreen.css';

const SelectionScreen = ({ onSelect }) => {
  const options = ["Recruiter", "Developer", "Adventurer", "Stalker"];

  return (
    <div className="selection-container">
      <h1 className="selection-title">Who's watching?</h1>
      <div className="options-grid">
        {options.map(option => (
          <button key={option} className="option-card" onClick={() => onSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionScreen;