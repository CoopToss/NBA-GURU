import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../supabaseClient';

function PlayerProfile() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching player:', error);
      } else {
        setPlayer(data);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">{player.name}</h1>
      <div className="text-center mb-6">
        <img
          src={player.image_url}
          alt={player.name}
          className="w-96 h-96 mx-auto object-cover rounded-full" // Adjust size as needed
        />
      </div>
      <p className="text-lg mb-2"><strong>Team:</strong> {player.team}</p>
      <p className="text-lg mb-4"><strong>Position:</strong> {player.position}</p>
      <p className="text-lg mb-6">{player.bio}</p>
      <div className="text-center">
        <a href={player.stats_link} target="_blank" rel="noopener noreferrer" className="block mb-2 text-blue-500 hover:underline">Player Stats</a>
        <a href={player.social_media} target="_blank" rel="noopener noreferrer" className="block mb-2 text-blue-500 hover:underline">Social Media</a>
        <a href={player.highlights_link} target="_blank" rel="noopener noreferrer" className="block mb-2 text-blue-500 hover:underline">Recent Highlights</a>
      </div>
    </div>
  );
}

export default PlayerProfile;
