import React, { useState } from "react";
import { apiKey } from "./Config";
import { Img } from "react-image";
import "./RandomRecipe.css";
import TimerIcon from "@material-ui/icons/Timer";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import Navbar from "./Navbar";
function RandomRecipe() {
  const [randomRecipe, setRandomRecipe] = useState({});
  // const [similarRecipe, setSimilarRecipe] = useState({});

  const getRandomRecipe = async function () {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.recipes[0]);

    setRandomRecipe(data.recipes[0]);
    // getSimilarRecipe(data.id);
  };

  // const getSimilarRecipe = async function (id) {
  //   const response = await fetch(
  //     `https://api.spoonacular.com/recipes/${id}/similar`
  //   );

  //   const data = await response.json();

  //   console.log("@@@@@@@@@@@@@@@@@@@ req made");
  //   console.log(" similar", data);
  // };

  console.log("random recipe", randomRecipe);

  if (
    Object.keys(randomRecipe).length === 0 &&
    randomRecipe.constructor === Object
  ) {
    return (
      <div className="recipe__initate">
        <Navbar />
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
        <Navbar />
        <div className="recipe__container">
          <div className="recipe__img__container">
            <Img className="recipe__img" src={randomRecipe.image} alt="" />
          </div>

          <div className="recipe__info__container">
            <h1>{randomRecipe.title}</h1>

            {randomRecipe.vegetarian ? (
              <Img
                className="recipe__veg"
                src={[
                  "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png",
                  "https://files.muzli.space/27fcd2e1b2697d5fe6fe341090634aa8.webp",
                ]}
                alt=""
              />
            ) : (
              <img
                className="recipe__veg"
                src="https://www.pngkit.com/png/full/257-2579552_non-veg-symbol-non-veg-symbol-png.png"
                alt=""
              />
            )}

            <div className="recipe__time__servings">
              <div className="recipe__time recipe__time__serving">
                <TimerIcon className="recipe__icon" />
                {randomRecipe.readyInMinutes} min
              </div>
              <div className="recipe__servings recipe__time__serving">
                <LocalDiningIcon className="recipe__icon" />
                {randomRecipe.servings} servings
              </div>
            </div>

            <h1>Ingredients</h1>

            <div className="recipe__ingredients">
              {randomRecipe.extendedIngredients.map((ing, i) => (
                <div className="recipe__ingredient" itemID={`ingredient_${i}`}>
                  <div className="recipe__ingredient__img__container">
                    <img
                      className="recipe__ingredient__img"
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${ing.image}`}
                      alt=""
                    />
                  </div>
                  <div className="recipe__ingredient__info">
                    <div className="recipe__ingredient__name">{ing.name}</div>
                    <div className="recipe__ingredient__amount">
                      {ing.amount.toFixed(2)} {ing.unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="recipe__step__info">
          <h1>How to make </h1>
          {randomRecipe.analyzedInstructions[0].steps.map((step, i) => (
            <div className="recipe__step" itemID={`step__${i}`}>
              <div className="recipe__instruction__number">
                step {step.number}
              </div>
              <div className="recipe__instruction__step">{step.step}</div>
            </div>
          ))}
        </div>
        <footer className="footer">All rights reserved © 2021.</footer>
      </div>
    );
  }
}

export default RandomRecipe;
