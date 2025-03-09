import React, { useState } from "react";
import ShoppingBagNavbar from "./ShoppingBagNavbar/ShoppingBagNavbar";
import ShoppingBagCart from "./ShoppingBagCart/ShoppingBagCart";
import "./ShoppingBag.css";
import "./ShoppingBagNavbar/LightMode.css"

const ShoppingBag = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MID GREY SHARKSKIN SUIT",
      price: 1930.0,
      size: 48,
      color: "GRAY",
      quantity: 3,
      image: "/src/assets/Images/MidGreySuit.jpg",
    },
    {
      id: 2,
      name: "BROWN PRINCE OF WALES LINEN SPORT COAT",
      price: 1455.0,
      size: 52,
      color: "BROWN",
      quantity: 2,
      image: "/src/assets/Images/BrownSuit.jpg",
    },
  ]);

  const updateQuantity = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + change) }
          : product
      )
    );
  };

  const removeItem = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const shipping = "FREE";
  const postage = 20;
  const total = subtotal + postage;

  return (
    <div className="shoppingBag">
      <ShoppingBagNavbar />
      <h1 className="shopping-title">
        <span className="bold-text">SHOPPING</span> BAG
      </h1>
      <div className="shopping-content">
        <div className="shopping-cart">
          {products.map((product, index) => (
            <div key={product.id}>
              {index !== products.length - 1  && <div className="shoppingbagcart-divider"></div>}
              <ShoppingBagCart 
              product={product} 
              updateQuantity={updateQuantity} 
              removeItem={removeItem} />

            {index === products.length - 1 && <div className="shoppingbagcart-divider"></div>}
            </div>
          ))}
        </div>
        <div className="order-summary">
          <h3>ORDER SUMMARY</h3>
          <p><span>SUBTOTAL</span> <span>${subtotal.toFixed(2)}</span></p>
          <p><span>SHOPPING</span> <span>FREE</span></p>
          <p><span>POSTAGE</span> <span>$20</span></p>
          <br/>
          <p className="total"><span>TOTAL</span> <span>${total.toFixed(2)}</span></p>
          <button className="checkout-btn">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;