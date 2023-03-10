import { useState } from 'react';

export function Prueba({ views, view, onView, messages }) {
  const [selectedOption, setSelectedOption] = useState(views);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onView(option.value);
  };

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={() => setShowOptions(!showOptions)}>
        {view}
        <i className="arrow-down"></i>
      </div>
      {showOptions && (
        <div className="options">
          {views.map((option) => (
            <div
              key={option.value}
              className={`option ${selectedOption.value === option.value ? 'selected' : ''}`}
              onClick={() => handleOptionChange(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}