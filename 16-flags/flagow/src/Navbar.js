import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar__container" to="/">
        <HomeIcon className="home__icon" />
        <h2>About</h2>
      </Link>
    </div>
  );
}

export default Navbar;
