import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav__logo">
        <FastfoodIcon className="nav__icon" />
        <h1>FoodFiesta</h1>
        <img src="" alt="" />
      </Link>
    </div>
  );
}

export default Navbar;
