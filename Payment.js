// Payment.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { bus, selectedSeats, source, destination, date } = location.state || {};

  const totalFare = selectedSeats.length * bus.fare;

  const handlePayment = () => {
    alert('Payment Successful!');
    // Implement payment logic here
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <p>Bus: {bus.name}</p>
      <p>Seats Selected: {selectedSeats.join(', ')}</p>
      <p>Total Fare: Rs. {totalFare}</p>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Payment;
