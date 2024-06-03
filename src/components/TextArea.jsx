import React from 'react';
import '../styles/TextArea.css';

const TextArea = ({ text, style, onTextChange, setSelectedText, cursorPosition, setCursorPosition }) => {

  const handleTextSelect = (e) => {
    const selectionObj = window.getSelection();
    if (selectionObj.rangeCount > 0) {
      const range = selectionObj.getRangeAt(0);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(e.target);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      const start = preSelectionRange.toString().length;
      const end = start + range.toString().length;
      setSelectedText({
        start: start,
        end: end,
      });
    }
  };

  const handleCursorPosition = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const position = range.startOffset;
      setCursorPosition(position);
    }
  };

  const handleInput = (e) => {
    const newText = e.target.innerText.split('').map(char => ({ character: char, style: { ...style }}));
    onTextChange(newText);
  };

  return (
    <div 
      className="text-area" 
      contentEditable
      onInput={handleInput} 
      onSelect={handleTextSelect} 
      onKeyUp={handleCursorPosition} 
      onMouseUp={handleCursorPosition}
      style={style}
    >
      {Array.isArray(text) ? text.map((char, index) => (
        <span 
          key={index} 
          style={char.style}
        >
          {char.character}
        </span>
      )) : 'insert text here'}
    </div>
  );
};

export default TextArea;