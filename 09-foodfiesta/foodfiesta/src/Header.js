import React from "react";
import "./Header.css";
import CardContainer from "./CardContainer";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />

      <h2> FoodFiesta</h2>
      <h3> Give yourself a massive feast!</h3>

      <CardContainer />
    </div>
  );
}

export default Header;
