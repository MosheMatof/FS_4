import React from 'react';
import '../styles/Toolbar.css';

const Toolbar = ({ onStyleChange, style, onClear, onUndo, onDeleteLast }) => {
  const handleFontSizeChange = (e) => {
    onStyleChange({ ...style, fontSize: e.target.value });
  };

  const handleFontFamilyChange = (e) => {
    onStyleChange({ ...style, fontFamily: e.target.value });
  };

  const handleColorChange = (e) => {
    onStyleChange({ ...style, color: e.target.value });
  };

  const handleCaseChange = (e) => {
    onStyleChange({ ...style, textTransform: e.target.value });
  };

  const handleLanguageChange = (e) => {
    onStyleChange({ ...style, language: e.target.value });
  };

  return (
    <div className="toolbar">
      <select onChange={handleFontSizeChange}>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
      </select>
      <select onChange={handleFontFamilyChange}>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </select>
      <input type="color" onChange={handleColorChange} />
      <select onChange={handleCaseChange}>
        <option value="lowercase">Lowercase</option>
        <option value="uppercase">Uppercase</option>
      </select>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="he">Hebrew</option>
      </select>
      <button onClick={onUndo}>Undo</button>
      <button onClick={onDeleteLast}>Delete Last</button>
      <button onClick={onClear}>Clear all</button>
    </div>
  );
};

export default Toolbar;
