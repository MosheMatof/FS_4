import React from 'react';
import '../styles/Keyboard.css';

const ENGLISH_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const HEBREW_ALPHABET = 'אבגדהוזחטיכלמנסעפצקרשת';
const NUMBERS = '0123456789';
const SPECIAL_SIGNS = '!@#$%^&*()_+';

const Keyboard = ({ onTextChange, language, style, cursorPosition, setCursorPosition }) => {
  const handleButtonClick = (char) => {
    const newChar = { character: char, style: style};
    onTextChange((prevText) => {
      const beforeCursor = prevText.slice(0, cursorPosition);
      const afterCursor = prevText.slice(cursorPosition);
      setCursorPosition(cursorPosition + 1);
      return [...beforeCursor, newChar, ...afterCursor];
    });
  };

  let alphabet;
    switch (language) {
      case 'he':
        alphabet = HEBREW_ALPHABET;
        break;
      default:
        alphabet = ENGLISH_ALPHABET;
    }

  return (
    <div className="keyboard">
      {[...alphabet, ...NUMBERS, ...SPECIAL_SIGNS].map((char) => (
        <button key={char} onClick={() => handleButtonClick(char)}>
          {char}
        </button>
      ))}
      <button onClick={() => handleButtonClick(' ')} className="space-button">
        Space
      </button>
    </div>
  );
};

export default Keyboard;