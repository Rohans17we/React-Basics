import React from "react";
import "./CartItem.css";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-left">
        <div className="cart-image"></div>
        <div className="cart-details">
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">${item.price.toFixed(2)}</p>
        <div className="cart-buttons">
          <button className="edit-btn">EDIT</button>
          <button className="remove-btn">REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
