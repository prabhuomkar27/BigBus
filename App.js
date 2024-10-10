import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BusList from './components/BusList';
import SeatSelection from './components/SeatSelection';
import Payment from './components/Payment';
import Navbar from './components/Navbar'; // Importing the Navbar component
import TrendingOffers from './components/TrendingOffers'; // Importing TrendingOffers component
import './components/TrendingOffers.css'; // Importing TrendingOffers styles
import './App.css'; // Importing the App.css

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Adding the Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buslist" element={<BusList />} />
          <Route path="/seatselection" element={<SeatSelection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/trendingoffers" element={<TrendingOffers />} /> {/* Adding TrendingOffers route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
