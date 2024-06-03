import React, { useState, useEffect } from 'react';
import PlayerRegistration from './PlayerRegistration';
import GameBoard from './GameBoard';
import Leaderboard from './Leaderboard';
import '../styles/OneToHundred.css';

const OneToHundred = () => {
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameIsRunning, setGameIsRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    setPlayers(savedPlayers);
  }, []);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
  }, [players]);

  const handlePlayerRegistration = (newPlayers) => {
    setPlayers(newPlayers);
  };

  const handleNextTurn = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  const handleGameStart = () => {
    setGameIsRunning(true);
  }
  
  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleResetGame = () => {
    setGameOver(false);
    setCurrentPlayerIndex(0);

  };

  return (
    <div className="App">
      {gameOver ? (
        <button onClick={handleResetGame}>Start New Game</button>
      ) : (
        <>
        {!gameIsRunning && <PlayerRegistration onRegister={handlePlayerRegistration} onGameStart={handleGameStart}/>}      <div className="game-boards">
        {players.map((player, index) => (
          <GameBoard
            key={index}
            player={player}
            isActive={index === currentPlayerIndex}
            onMove={handleNextTurn}
            onGameOver={handleGameOver}
          />
        ))}
      </div>
      <Leaderboard players={players} />
      </>
      )}
    </div>
  );
};

export default OneToHundred;
