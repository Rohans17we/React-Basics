// DynamicPropertyCard.jsx
import React, { useState } from 'react';
import './DynamicPropertyCard.css';
import PropertyCard from '../PropertyCard/PropertyCard';

const DynamicPropertyCard = ({ onAdd }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [address, setAddress] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [score, setScore] = useState(0);
  const [showForm, setShowForm] = useState(false); // State to toggle form

  const handleAdd = () => {
    onAdd({ imageUrl, address, priceRange, score });
    setImageUrl('');
    setAddress('');
    setPriceRange('');
    setScore(0);
    setShowForm(false); // Close the form after adding
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  return (
    <div className="dynamic-property-card">
      <button className="toggle-form-button" onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Add Your Property'}
      </button>
      {showForm && (
        <div className="form-container">
          <div className="input-section">
            <label>Image URL:</label>
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </div>
          <div className="input-section">
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="input-section">
            <label>Price Range:</label>
            <input type="text" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
          </div>
          <div className="input-section">
            <label>Score:</label>
            <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
          </div>

          <button className="add-button" onClick={handleAdd}>
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default DynamicPropertyCard;