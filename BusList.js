// BusList.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BusList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { source, destination, date } = location.state || {};

  const buses = [
    { id: 1, name: 'Bus A', fare: 500, time: '10:00 AM' },
    { id: 2, name: 'Bus B', fare: 600, time: '12:00 PM' },
    // Add more buses as needed
  ];

  const handleSelectBus = (bus) => {
    navigate('/seatselection', { state: { bus, source, destination, date } });
  };

  return (
    <div>
      <h2>Buses from {source} to {destination} on {date}</h2>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id}>
            {bus.name} - {bus.time} - Rs. {bus.fare}
            <button onClick={() => handleSelectBus(bus)}>Select Bus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusList;
