import React from "react";
import "./Card.css";

function Card({ cardName, img, color }) {
  return (
    <div className="card">
      <img className="card__img" src={img} alt="" />
      <h2>{cardName}</h2>
    </div>
  );
}

export default Card;
