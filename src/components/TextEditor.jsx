import { useState, useEffect } from 'react';
import Keyboard from './Keyboard';
import Toolbar from './Toolbar';
import TextArea from './TextArea';
import '../styles/TextEditor.css';

const TextEditor = () => {
  const [text, setText] = useState('');
  const [selectedText, setSelectedText] = useState({
    start: null,
    end: null,
  });
  const [style, setStyle] = useState({
    fontSize: '16px',
    fontFamily: 'Arial',
    color: '#000000',
    textTransform: 'Lowercase',
    language: 'en', 
  });
  const [history, setHistory] = useState([]);
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleTextChange = (newText) => {
    setHistory([...history, text]);
    setText(newText);
  };

  const handleStyleChange = (newStyle) => {
    setStyle(newStyle);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      setText(history[history.length - 1]);
      setHistory(history.slice(0, -1));
    }
  };

  const handleDeleteLast = () => {
    if (text.length > 0) {
      handleTextChange(text.slice(0, -1));
    }
  };

  const handleClear = () => {
    handleTextChange('');
  };

  const applyStyleToSelectedText = () => {
    if (selectedText.start !== null && selectedText.end !== null) {
      const updatedText = text.map((char, index) => {
        if (index >= selectedText.start && index < selectedText.end) {
          return { ...char, style };
        } else {
          return char;
        }
      });
      handleTextChange(updatedText);
    }
  };

  useEffect(() => {
    applyStyleToSelectedText(selectedText);
  }, [style]);

  return (
    <div className="text-editor">
      <Toolbar 
        onStyleChange={handleStyleChange} 
        style={style} 
        onClear={handleClear} 
        onUndo={handleUndo} 
        onDeleteLast={handleDeleteLast} 
      />
      <TextArea 
        text={text} 
        style={style} 
        onTextChange={handleTextChange} 
        setSelectedText={setSelectedText} 
        cursorPosition={cursorPosition} 
        setCursorPosition={setCursorPosition}
      />
      <Keyboard 
        onTextChange={handleTextChange} 
        language={style.language} 
        style={style} 
        cursorPosition={cursorPosition} 
        setCursorPosition={setCursorPosition} 
      />
    </div>
  );
};

export default TextEditor;
