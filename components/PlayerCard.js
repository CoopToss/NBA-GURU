import React from 'react';
import './PlayerCard.css';

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <img 
        src={player.image_url} 
        alt={player.name} 
        className="player-image"
      />
      <div className="player-info">
        <h2 className="player-rank">{player.rank}</h2>
        <h2 className="player-name">{player.name}</h2>
        <p className="player-team">{player.team}</p>
        <p className="player-position">{player.position}</p>
        <div className="player-stats">
          <h3 className="stats-title">2023-2024 Stats:</h3>
          <p className="stats-info">
            {player.points_per_game} PPG, {player.assists_per_game} APG, {player.rebounds_per_game} RPG
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;



