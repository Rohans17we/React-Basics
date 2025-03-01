import "./App.css";
import React, { useState, useEffect } from 'react';
import Accordion from "./components/Accordion/Accordion";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";
import CartItem from "./components/CartItem/CartItem";
import ToDoApp from "./components/ToDoApp/ToDoApp";
import Notes from "./components/Notes/Notes";
import PropertyCard from "./components/PropertyCard/PropertyCard";
import DynamicPropertyCard from "./components/DynamicPropertyCard/DynamicPropertyCard";
import EMICalculator from "./components/EMICalculator/EMICalculator";
import LatestCustomers from "./components/LatestCustomers/LatestCustomers";
import ProductList from "./components/ProductList/ProductList";
import Widgets from "./components/WidgetsUI/Widgets";
import NFTCard from "./components/NFTCard/NFTCard";
import ShoeCard from "./components/ShoeCard/ShoeCard";



function App() {
  const accordionItems = [
    { title: "What is React?", content: "React is a JavaScript library for UI development." },
    { title: "Why use React?", content: "React makes UI development easy with reusable components." },
    { title: "How does React work?", content: "React updates the UI efficiently using a virtual DOM." }
  ];

  const cartItems = [
    { name: "A SNAPPY ITEM", quantity: 2, price: 42.68 },
    { name: "A FANCY ITEM", quantity: 1, price: 12.84 },
    { name: "A FINE ITEM", quantity: 1, price: 8.80 }
  ];

  const [cards, setCards] = useState([]);

  const handleAddCard = (newCardData) => {
    setCards([...cards, newCardData]);
  };


  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nft-card")) {
        setSelectedId(null); // Unselect when clicking outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="app">
      {/* <DarkModeButton /> */}


      {/* <Accordion items={accordionItems} /> */}
      

      {/* CART SECTION */}
      {/* <div className="cart-container">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div> */}


      {/* <ToDoApp /> */}

      {/* Notes Component */}
      {/* <Notes />    */}
      
      {/* <div className="property-card-container">

      <PropertyCard
        imageUrl="./src/assets/PropertyCard.avif"
        address="123 Main St, Phoenix, AZ, USA"
        priceRange="$280k - $310k"
        score={85}
      />
      <PropertyCard
        imageUrl="./src/assets/PropertyCard.avif"
        address="123 Main St, Phoenix, AZ, USA"
        priceRange="$280k - $310k"
        score={85}
      />
      <PropertyCard
        imageUrl="./src/assets/PropertyCard.avif"
        address="123 Main St, Phoenix, AZ, USA"
        priceRange="$280k - $310k"
        score={85}
      />

      </div> */}
      

      {/* <DynamicPropertyCard onAdd={handleAddCard} />
      <div className="property-card-container">
            {cards.map((card, index) => (
              
              <PropertyCard
                key={index}
                imageUrl={card.imageUrl}
                address={card.address}
                priceRange={card.priceRange}
                score={card.score}
              />
             
            ))}
      </div> */}


      {/* <EMICalculator /> */}

      {/* <LatestCustomers /> */}

      {/* <ProductList /> */}

      {/* <Widgets /> */}

      {/* <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      
      <NFTCard
        id={1}
        image="/src/assets/Images/40Z_2105.w023.n001.595B.p1.595.jpg"
        ownerAvatar="/src/assets/Images/9377250.jpg"
        owner="581EX"
        creatorAvatar="/src/assets/Images/7748169.jpg"
        creator="4STY87"
        price="5.65"
        usdPrice="10,344"
        isSelected={selectedId === 1}
        onClick={() => setSelectedId(1)}
      />

      <NFTCard
        id={2}
        image="/src/assets/Images/118Z_2012.w015.n001.319B.p15.319.jpg"
        ownerAvatar="/src/assets/Images/9377250.jpg"
        owner="23WCFV"
        creatorAvatar="src/assets/Images/7903563.jpg"
        creator="ST5664"
        price="4.65"
        usdPrice="8,706"
        isSelected={selectedId === 2}
        onClick={() => setSelectedId(2)}
      />

      </div> */}

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
      <ShoeCard 
        image="/src/assets/Images/Nike Air Pegasus.png"
        title="Nike Air Pegasus"
        brand="Nike"
        description="Your workhorse with wing returns."
        price="180"
        bgColor="#fbe6e7"  // Light pink background
      />
      
      <ShoeCard 
        image="/src/assets/Images/Nike ZoomX.png"
        title="Nike ZoomX"
        brand="Nike"
        description="The Nike ZoomX vaporfly next% clears."
        price="320"
        bgColor="#e3e8f0"  // Light blue-gray background
      />
      </div>



    </div>


  );
}

export default App;
