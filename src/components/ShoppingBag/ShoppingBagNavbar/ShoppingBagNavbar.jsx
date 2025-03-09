import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ShoppingBagNavbar.css";

const ShoppingBagNavbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = (e) => {
    e.preventDefault(); 
    document.body.classList.toggle("light-mode");
    setIsLightMode(!isLightMode);
  };

  return (
    <nav className="shoppingBagNavbar">
      <div className="brand">BESNARD</div>
      <div className="nav-links">
        <a href="#">Login</a>
        <a href="#">Search</a>
        <a href="#">Cart (0)</a>
        <a href="#" onClick={toggleLightMode}>
        {isLightMode ? <FaMoon /> : <FaSun />}  
        {isLightMode ? " Dark Mode" : " Light Mode"}
        </a>
      </div>
    </nav>
  );
};

export default ShoppingBagNavbar;