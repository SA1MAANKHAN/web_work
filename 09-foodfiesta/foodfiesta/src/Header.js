import React from "react";
import "./Header.css";
import CardContainer from "./CardContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <h1 className="banner__title">
        Welcome <br /> to food fiesta
      </h1>
      <p className="banner__mantra"> Give yourself a massive feast!</p>
      <div className="card__containers">
        <CardContainer />
      </div>
    </div>
  );
}

export default Header;
