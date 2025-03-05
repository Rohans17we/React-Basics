import React from "react";
import { FaTruck, FaLeaf, FaExchangeAlt } from "react-icons/fa"; // Import icons
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h3 className="services-title">SERVICE</h3>
      <h2 className="services-heading">We offer for you</h2>

      <div className="services-container">
        {/* Free Shipping */}
        <div className="service-card">
          <div className="service-icon"><FaTruck /></div>
          <h3>Free Shipping</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content.</p>
        </div>

        {/* Certified Organic */}
        <div className="service-card">
          <div className="service-icon"><FaLeaf /></div>
          <h3>Certified Organic</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content.</p>
        </div>

        {/* Easy Returns */}
        <div className="service-card">
          <div className="service-icon"><FaExchangeAlt /></div>
          <h3>Easy Returns</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;