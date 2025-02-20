// PropertyCard.jsx
import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ imageUrl, address, priceRange, score }) => {
  return (
    <div className="property-card">
      <div className="image-container">
        <img src={imageUrl} alt="Property" className="property-image" />
      </div>
      <div className="property-details">
        <div className="address">{address}</div>
        <div className="price-range">{priceRange}</div>
        <div className="score">
          <span role="img" aria-label="info">ℹ</span> Score: {score}%
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;