import React from "react";
import "./Partners.css";
import { FaFacebook, FaAmazon, FaIntercom } from "react-icons/fa";
import { SiReebok } from "react-icons/si";

const partners = [
  { name: "facebook", icon: <FaFacebook />, type: "icon" },
  { name: "amazon", icon: <FaAmazon />, type: "icon" },
  { name: "Bench", icon: null, type: "text" },
  { name: "Intercom", icon: <FaIntercom />, type: "icon" },
  { name: "Reebok", icon: <SiReebok />, type: "icon" },
  { name: "The Morning Show", icon: null, type: "text" },
];

const Partners = () => {
  return (
    <section className="partners">
      <h3 className="partners-title">OUR PARTNERS</h3>
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            {partner.icon && <span className="partner-icon">{partner.icon}</span>}
            <span className="partner-name">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;