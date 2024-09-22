import React from 'react';

const ToggleSwitch = ({ toggleState }) => {
  const handleClick = () => {
    toggleState(); 
  };

  return (
    <div className="flex items-center">
      <label className="switch">
        <input type="checkbox" onClick={handleClick} />
        <span className="slider round"></span>
      </label>
      <span className="ml-2">Toggle Switch</span>
    </div>
  );
};

export default ToggleSwitch;
