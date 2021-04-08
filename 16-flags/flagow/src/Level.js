import React from "react";
import Option from "./Option";
import "./Level.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Level() {
  return (
    <div className="level">
      <Navbar />
      <h1>Select Your Level</h1>
      <div className="levels">
        <Link to="/Quiz">
          <Option optionName="huh, Easy Pesy" />
        </Link>
        <Option optionName="Umm, it's ok" />
        <Option optionName="Woo, that tough" />
        <Option optionName="Are you kiddin' " />
        <Option optionName="What the heck " />
        <Option optionName="Oh my God! " />
      </div>
    </div>
  );
}

export default Level;
