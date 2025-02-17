import { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "A SNAPPY ITEM", quantity: 2, price: 42.68 },
    { id: 2, name: "A FANCY ITEM", quantity: 1, price: 12.84 },
    { id: 3, name: "A FINE ITEM", quantity: 1, price: 8.80 }
  ]);

  // Function to remove an item
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
        ))
      )}
    </div>
  );
};

export default Cart;
