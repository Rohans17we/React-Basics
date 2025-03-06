import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Partners from "./Partners/Partners";

const ShoppingLandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Services /> 
    </div>
  );
};

export default ShoppingLandingPage;