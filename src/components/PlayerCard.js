import React from 'react';

function PlayerCard({ player }) {
  return (
    <div className="w-full max-w-xl p-8 border border-gray-300 rounded-lg shadow-lg bg-white">
      <img 
        src={player.image_url} 
        alt={player.name} 
        className="w-full h-96 object-cover rounded-t-lg" 
      />
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-2">{player.rank}</h2>
        <h2 className="text-4xl font-bold mb-4">{player.name}</h2>
        <p className="text-2xl text-gray-700 mb-1">Team: {player.team}</p>
        <p className="text-2xl text-gray-700">Position: {player.position}</p>
      </div>
    </div>
  );
}

export default PlayerCard;


