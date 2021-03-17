import React from "react";
import "./Card.css";

function Card({ cardName, img }) {
  return (
    <div className="card">
      <h2>{cardName}</h2>
    </div>
  );
}

export default Card;
