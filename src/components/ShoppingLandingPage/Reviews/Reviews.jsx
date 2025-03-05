import React from "react";
import Navbar from "../navbar/Navbar";
import "./Reviews.css";

const Reviews = () => {
  const reviewData = [
    { name: "John Doe", text: "Great products and excellent service!", rating: 5 },
    { name: "Jane Smith", text: "Fast delivery and good quality.", rating: 4 },
    { name: "Alice Johnson", text: "I love the organic products here.", rating: 5 },
    { name: "Bob Brown", text: "Customer support was very helpful.", rating: 4 },
    { name: "Charlie Davis", text: "Will definitely shop again!", rating: 5 },
  ];

  return (
    <>
      <Navbar />
      <section className="reviews">
        <h2 className="reviews-title">Customer Reviews</h2>
        <div className="reviews-container">
          {reviewData.map((review, index) => (
            <div key={index} className="review-card">
              <h3 className="review-name">{review.name}</h3>
              <p className="review-comment">"{review.text}"</p>
              <p className="review-rating">⭐ {review.rating}/5</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;