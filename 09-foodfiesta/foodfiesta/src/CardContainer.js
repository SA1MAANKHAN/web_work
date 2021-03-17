import React from "react";
import "./CardContainer.css";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardContainer() {
  return (
    <div className="card__container">
      <Link to="/Recipe">
        <Card cardName="Recipe By Id" />
      </Link>
      <Link to="/FoodJoke">
        <Card cardName="Food Jokes" />
      </Link>
      <Link to="/FoodFact">
        <Card cardName="Food Facts" />
      </Link>
      <Link to="/SearchRecipe">
        <Card cardName="Search Recipe" />
      </Link>
      <Link to="/RandomRecipe">
        <Card cardName="Random Recipe" />
      </Link>
      <Link to="/FoodInfo">
        <Card cardName="Food Info" />
      </Link>
    </div>
  );
}

export default CardContainer;
