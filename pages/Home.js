import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
import { fetchPlayers } from '../api/api';
import './Home.css';

function Home() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (err) {
        setError('Failed to fetch players');
      } finally {
        setLoading(false);
      }
    };

    getPlayers();
  }, []);

  if (loading) {
    return <p className="loading">Loading players...</p>;
  }

  if (error) {
    return <p className="loading">{error}</p>;
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Top 100 NBA Players</h1>

      <div className="card-container">
        {players.length > 0 ? (
          players.map((player) => (
            <Link key={player.id} to={`/player/${player.id}`} className="card-link">
              <PlayerCard player={player} />
            </Link>
          ))
        ) : (
          <p className="loading">No players found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
