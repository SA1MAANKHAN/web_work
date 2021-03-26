import React from "react";
import "./Option.css";

export default function Option({ optionName }) {
  return (
    <div className="option">
      <h1>{optionName}</h1>
    </div>
  );
}
