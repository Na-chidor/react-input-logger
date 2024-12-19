import React, { useState } from 'react';

const InputLogger = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <label htmlFor="inputField">Type something: </label>
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default InputLogger;