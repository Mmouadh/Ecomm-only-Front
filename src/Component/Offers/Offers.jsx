import React from "react";
import "./Offers.css";
import exclusive_image from '../Assest/exclusive_image.png'
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1 className="ex">EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="img" />
      </div>
    </div>
  );
};

export default Offers;
