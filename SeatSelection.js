// SeatSelection.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, source, destination, date } = location.state || {};
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 20 }, (_, index) => index + 1); // Simulated 20 seats

  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { bus, selectedSeats, source, destination, date } });
  };

  return (
    <div>
      <h2>Select Seats for {bus.name}</h2>
      <div className="seats-grid">
        {seats.map((seat) => (
          <button
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => toggleSeatSelection(seat)}
          >
            {seat}
          </button>
        ))}
      </div>
      <button onClick={handleProceedToPayment}>Proceed to Payment</button>
    </div>
  );
};

export default SeatSelection;
