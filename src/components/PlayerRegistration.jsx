import React, { useState } from 'react';

const PlayerRegistration = ({ onRegister, onGameStart }) => {
  const [newPlayers, setNewPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');

  const handleAddPlayer = () => {
    if (playerName) {
      setNewPlayers([...newPlayers, { name: playerName, games: [] }]);
      setPlayerName('');
    }
  };

  const handleRegisterPlayers = () => {
    onRegister(newPlayers);
    setNewPlayers([]);
    onGameStart();
  };

  return (
    <div className="player-registration">
      <h2>Register Players</h2>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter player name"
      />
      <button onClick={handleAddPlayer}>Add Player</button>
      <button onClick={handleRegisterPlayers}>Start Game</button>
      <ul>
        {newPlayers.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerRegistration;
