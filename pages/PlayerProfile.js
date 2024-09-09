import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../supabaseClient';
import './PlayerProfile.css';

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

  if (!player) return <div className="loading">Loading...</div>;

  return (
    <div className="profile-container">
      <h1 className="profile-title">{player.name}</h1>
      <div className="profile-image-container">
        <img
          src={player.image_url}
          alt={player.name}
          className="profile-image"
        />
      </div>
      <p className="profile-info"><strong>Team:</strong> {player.team}</p>
      <p className="profile-info"><strong>Position:</strong> {player.position}</p>
      <div className="profile-bio-container">
        <div className="profile-bio" dangerouslySetInnerHTML={{ __html: player.bio }} />
      </div>
      <div className="profile-links">
        <a href={player.stats_link} target="_blank" rel="noopener noreferrer" className="profile-link">Player Stats</a>
        <a href={player.social_media} target="_blank" rel="noopener noreferrer" className="profile-link">Social Media</a>
        <a href={player.highlights_link} target="_blank" rel="noopener noreferrer" className="profile-link">Recent Highlights</a>
      </div>
    </div>
  );
}

export default PlayerProfile;
