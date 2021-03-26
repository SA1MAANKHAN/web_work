import React from "react";
import Option from "./Option";
import "./Level.css";

function Level() {
  return (
    <div className="level">
      <h1>Select Your Level</h1>
      <div className="levels">
        <Option optionName="huh, Easy Pesy" />
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
