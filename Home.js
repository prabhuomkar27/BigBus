// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrendingOffers from './TrendingOffers'; // Import the TrendingOffers component

const Home = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/buslist', { state: { source, destination, date } });
  };

  return (
    <div>
      <h1>Search Buses</h1>
      <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
      <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSearch}>Search Buses</button>

      {/* Add the Trending Offers section */}
      <TrendingOffers />
    </div>
  );
};

export default Home;
