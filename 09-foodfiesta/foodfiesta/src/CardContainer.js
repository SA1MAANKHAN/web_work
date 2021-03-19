import React from "react";
import "./CardContainer.css";
import Card from "./Card";
import { Link } from "react-router-dom";

function CardContainer() {
  return (
    <div className="card__container">
      <Link to="/Recipe">
        <Card
          cardName="Recipe By Id"
          img="https://image.freepik.com/free-vector/comfort-food-illustration-with-eggs-bacon_23-2148536215.jpg"
        />
      </Link>
      <Link to="/FoodJoke">
        <Card
          cardName="Food Jokes"
          img="https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg"
        />
      </Link>
      <Link to="/FoodFact">
        <Card
          cardName="Food Facts"
          img="https://cdni.iconscout.com/illustration/free/thumb/cooking-food-1654583-1399845.png"
        />
      </Link>
      <Link to="/SearchRecipe">
        <Card
          cardName="Search Recipe"
          img="https://image.freepik.com/free-vector/pizza-illustration_8319-36.jpg"
        />
      </Link>
      <Link to="/RandomRecipe">
        <Card
          cardName="Random Recipe"
          img="https://image.freepik.com/free-vector/comfort-food-illustration-with-eggs-bacon_23-2148536215.jpg"
        />
      </Link>
      <Link to="/FoodInfo">
        <Card
          cardName="Food Info"
          img="https://cdn.dribbble.com/users/1787323/screenshots/11115027/media/d02a172ecd55b98b716d94ead600ef1a.png?compress=1&resize=1000x750"
        />
      </Link>
    </div>
  );
}

export default CardContainer;
