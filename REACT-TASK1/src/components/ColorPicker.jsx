import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  const handleChange = (e) => {
    onColorChange(e.target.value); 
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <label htmlFor="colorPicker" className="text-lg font-bold">Pick a color:</label>
      <input
        type="color"
        id="colorPicker"
        onChange={handleChange}
        className="w-16 h-16"
      />
    </div>
  );
};

export default ColorPicker;
