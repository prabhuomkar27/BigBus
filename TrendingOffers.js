import React from 'react';
import './TrendingOffers.css'; // Import CSS for styling the cards

const TrendingOffers = () => {
  // Dummy data for trending offers
  const offers = [
    { id: 1, title: "50% Off on First Ride", description: "Use code FIRST50 for 50% off", imgSrc: "https://via.placeholder.com/150" },
    { id: 2, title: "25% Cashback on Bus Tickets", description: "Pay via XYZ Pay and get 25% cashback", imgSrc: "https://via.placeholder.com/150" },
    { id: 3, title: "Refer and Earn", description: "Invite friends and earn free rides", imgSrc: "https://via.placeholder.com/150" },
    { id: 4, title: "Get Rs. 100 Off", description: "Book tickets worth Rs. 500 and get Rs. 100 off", imgSrc: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="offers-container">
      <h1>Trending Offers</h1>
      <div className="offers-grid">
        {offers.map(offer => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.imgSrc} alt={offer.title} className="offer-img" />
            <div className="offer-details">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingOffers;
