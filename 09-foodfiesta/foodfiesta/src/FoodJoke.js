import React, { useEffect, useState } from "react";
import { apiKey } from "./Config";

function FoodJoke() {
  const [foodJoke, setFoodJoke] = useState();

  useEffect(() => {
    getFoodJoke();
  }, []);

  const getFoodJoke = async function () {
    const response = await fetch(
      `https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.text);

    setFoodJoke(data.text);
  };

  return (
    <div className="foodJoke">
      <h1>FoodJokes</h1>
      <h2>{foodJoke}</h2>
      <button onClick={getFoodJoke}>RELOAD</button>
    </div>
  );
}

export default FoodJoke;
