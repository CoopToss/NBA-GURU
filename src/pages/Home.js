import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
import { fetchPlayers } from '../api/api';

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
    return <p className="text-center text-gray-600">Loading players...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-8">
        <img 
          src="https://storage.googleapis.com/nbarankings-theringer-com-cms/public/media/ringerbasketballhub/default/OpenerDesktopLeaguePassV3-1698108020883.png" 
          alt="Top 100 NBA Players" 
          className="w-full max-w-2xl object-cover" 
        />
      </div>

      <h1 className="text-3xl font-bold text-center my-8">Top 100 NBA Players</h1>

      <div className="flex flex-col items-center">
        {players.length > 0 ? (
          players.map((player) => (
            <Link key={player.id} to={`/player/${player.id}`} className="m-4 w-full max-w-md">
              <PlayerCard player={player} />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600">No players found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
