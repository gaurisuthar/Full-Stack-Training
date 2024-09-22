import React, { useState } from 'react';

const TextInput = ({ onChange }) => {
  const [inputValue, setInputValue] = useState(''); // Initialize state for the input value

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update local state
    onChange(e.target.value); // Pass the current value back to the parent
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="textInput" className="text-lg font-bold">Enter Text:</label>
      <input
        type="text"
        id="textInput"
        value={inputValue} // Controlled input
        onChange={handleChange} // Call handleChange on input change
        className="border border-gray-300 rounded p-2"
      />
    </div>
  );
};

export default TextInput;
