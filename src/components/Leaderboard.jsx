import React from 'react';

const Leaderboard = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => {
    const aBest = a.games.length > 0 ? Math.min(...a.games) : Infinity;
    const bBest = b.games.length > 0 ? Math.min(...b.games) : Infinity;
    return aBest - bBest;
  }).slice(0, 3);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {sortedPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - Best Score: {player.games.length > 0 ? Math.min(...player.games) : 'N/A'}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;