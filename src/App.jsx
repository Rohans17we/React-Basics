import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton";
import CartItem from "./components/CartItem/CartItem";
import ToDoApp from "./components/ToDoApp/ToDoApp";
import Notes from "./components/Notes/Notes"; // Import the Notes component
import PropertyCard from "./components/PropertyCard/PropertyCard";


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

  return (
    <div className="app">
      <DarkModeButton />


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
      
      <div className="property-card-container">

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

      </div>
      


    </div>


  );
}

export default App;
