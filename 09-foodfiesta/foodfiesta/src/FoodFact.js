import React, { useEffect, useState } from "react";
import { apiKey } from "./Config";

function FoodFact() {
  const [foodFact, setFoodFact] = useState();

  useEffect(() => {
    getFoodFact();
  }, []);

  const getFoodFact = async function () {
    const response = await fetch(
      `https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.text);

    setFoodFact(data.text);
  };

  return (
    <div className="foodFact">
      <h1>FoodFAact</h1>
      <h2>{foodFact}</h2>
      <button onClick={getFoodFact}>RELOAD</button>
    </div>
  );
}

export default FoodFact;
