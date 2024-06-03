import React, { useState } from 'react';

const GameBoard = ({ player, isActive, onMove, onScore }) => {
  const [currentNumber, setCurrentNumber] = useState(Math.floor(Math.random() * 100));
  const [operations, setOperations] = useState(0);

  const makeMove = (operation) => {
    if (!isActive) return;
    let newNumber = currentNumber;
    switch (operation) {
      case '+1':
        newNumber += 1;
        break;
      case '-1':
        newNumber -= 1;
        break;
      case '*2':
        newNumber *= 2;
        break;
      case '/2':
        newNumber = Math.floor(newNumber / 2);
        break;
      default:
        break;
    }
    setCurrentNumber(newNumber);
    setOperations(operations + 1);
    if (newNumber === 100) {
      alert(`${player.name} has reached 100 in ${operations + 1} moves!`);
      onScore(player.name, operations + 1);
      onMove();
    } else {
      onMove();
    }
  };

  return (
    <div className={`game-board ${isActive ? 'active' : 'inactive'}`}>
      <h3>{player.name}</h3>
      <p>Current Number: {currentNumber}</p>
      <p>Moves: {operations}</p>
      <button onClick={() => makeMove('+1')}>+1</button>
      <button onClick={() => makeMove('-1')}>-1</button>
      <button onClick={() => makeMove('*2')}>*2</button>
      <button onClick={() => makeMove('/2')}>/2</button>
    </div>
  );
};

export default GameBoard;
