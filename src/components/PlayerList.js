import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import supabase from '../supabaseClient';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const { data, error } = await supabase
        .from('players')
        .select('*');

      if (error) {
        console.error('Error fetching players:', error);
      } else {
        setPlayers(data);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}

export default PlayerList;
