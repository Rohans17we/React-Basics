import React from "react";
import "./ShoppingBagCart.css";
import { FaTrash } from "react-icons/fa"; // Import delete icon

const ShoppingBagCart = ({ product, updateQuantity, removeItem }) => {
  return (
    <>
      
      <div className="shoppingbagcart-item"> 
        <img src={product.image} alt={product.name} className="shoppingbagcart-product-image" />
        <div className="shoppingbagcart-details">
          <h3 className="shoppingbagcart-product-name">{product.name}</h3>
          <p className="shoppingbagcart-product-price">${product.price.toFixed(2)}</p>
          <p className="shoppingbagcart-product-info">Size: {product.size}</p>
          <p className="shoppingbagcart-product-info">Color: {product.color}</p>
          <div className="shoppingbagcart-quantity-controls">
            <button className="shoppingbagcart-quantity-btn" onClick={() => updateQuantity(product.id, -1)}>-</button>
            <span className="shoppingbagcart-quantity">{product.quantity}</span>
            <button className="shoppingbagcart-quantity-btn" onClick={() => updateQuantity(product.id, 1)}>+</button>
            <button className="shoppingbagcart-delete-btn" onClick={() => removeItem(product.id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingBagCart;