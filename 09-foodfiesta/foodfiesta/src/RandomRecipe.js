import React, { useEffect, useState } from "react";
import { apiKey } from "./Config";
import ReactHtmlParser from "react-html-parser";

function RandomRecipe() {
  const [randomRecipe, setRandomRecipe] = useState({});

  const getRandomRecipe = async function () {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.recipes[0]);

    setRandomRecipe(data.recipes[0]);
  };

  console.log("random recipe", randomRecipe);

  if (
    Object.keys(randomRecipe).length === 0 &&
    randomRecipe.constructor === Object
  ) {
    return (
      <div className="recipe__initate">
        <button onClick={getRandomRecipe}> Feeling Lucky</button>
      </div>
    );
  }

  if (
    !(
      Object.keys(randomRecipe).length === 0 &&
      randomRecipe.constructor === Object
    )
  ) {
    return (
      <div className="randomRecipe">
        <h1>Random Recipe</h1>
        <h2>{randomRecipe.title}</h2>
        <h2>{randomRecipe.vegetarian ? "Vegetarian" : "NonVeg"}</h2>
        <div className="recipe__img">
          <img src={randomRecipe.image} alt="" />
        </div>
        <div className="recipe__ingredients">
          <h1>Ingredients</h1>
          {/* {ReactHtmlParser(
          randomRecipe.extendedIngredients.map((item) => {
            return `
          <h2>${item.name}</h2>
          
          `;
          })
        )} */}

          {ReactHtmlParser(
            randomRecipe.extendedIngredients
              .map((ing) => {
                return `
         <div className="recipe__ingredient">
            <div className="recipe__ingredient__img">
                <img src=https://spoonacular.com/cdn/ingredients_250x250/${
                  ing.image
                } alt=""/>
            </div>
            <div className="recipe__ingredient__name">${ing.name}
            </div>
            <div className="recipe__ingredient__amount">${ing.amount.toFixed(
              2
            )} ${ing.unit} 
            </div>
         </div>
         `;
              })
              .join("")
          )}
          <h1>Steps</h1>
          {ReactHtmlParser(
            randomRecipe.analyzedInstructions[0].steps
              .map((step) => {
                return `
            <div className="recipe__instruction_number">Step ${step.number}</div>
            <div className="recipe__instruction_step">${step.step}</div>
            `;
              })
              .join("")
          )}
        </div>
      </div>
    );
  }
}

export default RandomRecipe;
