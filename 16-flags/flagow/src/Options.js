import React from "react";
import { Link } from "react-router-dom";
import Option from "./Option";
import "./Options.css";

function Options() {
  return (
    <div className="options">
      <Link className="link" to="/Level">
        <Option optionName="Flag Quiz" />
      </Link>
      <Option optionName="City Quiz" />
      <Option optionName="Currency" />
      <Option optionName="Some other shit" />
      <Option optionName="Some more shit" />
    </div>
  );
}

export default Options;
