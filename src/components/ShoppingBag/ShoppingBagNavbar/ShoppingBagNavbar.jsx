import React from "react";
import "./ShoppingBagNavbar.css";

const ShoppingBagNavbar = () => {
  return (
    <nav className="shoppingBagNavbar">
      <div className="brand">BESNARD</div>
      <div className="nav-links">
        <a href="#">Login</a>
        <a href="#">Search</a>
        <a href="#">Cart (0)</a>
      </div>
    </nav>
  );
};

export default ShoppingBagNavbar;