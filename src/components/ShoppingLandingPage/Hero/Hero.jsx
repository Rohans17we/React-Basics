import React from "react";
import "./Hero.css";
import mushroomImage from "../../../assets/mushroom.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">100% Natural Products</p>
        <h1 className="hero-title">MUSHROOM</h1>
        <p className="hero-description">
          Mushrooms are edible fungus that can provide several important nutrients.
          The many kinds of mushrooms have varying compositions and nutritional profiles.
        </p>
        <div className="hero-buttons">
          <button className="btn buy-now">Buy Now</button>
          <button className="btn contact-us">Contact Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={mushroomImage} alt="Mushroom" />
      </div>
    </section>
  );
};

export default Hero;