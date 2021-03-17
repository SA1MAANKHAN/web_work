import React, { useState } from "react";
import { apiKey } from "./Config";
import ReactHtmlParser from "react-html-parser";

function Recipe() {
  const [recipes, setRecipe] = useState({});
  const [search, setSearch] = useState("");

  const getRecipeById = async function (id) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made *******************");
    console.log(data);

    setRecipe(data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    getRecipeById(search);
    setSearch("");
  };

  if (Object.keys(recipes).length === 0 && recipes.constructor === Object) {
    return (
      <div className="searchRecipe">
        <h1>This is recipe , enter id </h1>
        <form onSubmit={getSearch} className=" recipe__from">
          <input
            type="text"
            className="recipe__search"
            value={search}
            onChange={updateSearch}
          />
          <button
            type="submit"
            className="recipe__search__btn"
            onClick={getSearch}
          >
            Search
          </button>
        </form>
      </div>
    );
  }

  if (!(Object.keys(recipes).length === 0 && recipes.constructor === Object)) {
    return (
      <div className="searchRecipe">
        <h1>This is recipe</h1>
        <h2>see the console</h2>
        <form onSubmit={getSearch} className=" recipe__from">
          <input
            type="text"
            className="recipe__search"
            value={search}
            onChange={updateSearch}
          />
          <button
            type="submit"
            className="recipe__search__btn"
            onClick={getSearch}
          >
            Search
          </button>
        </form>
        <h1>here comes recipe</h1>
        <h2>{recipes.title}</h2>
        <h2>{recipes.vegetarian ? "Vegetarian" : "NonVeg"}</h2>
        <div className="recipe__img">
          <img src={recipes.image} alt="" />
        </div>
        <div className="recipe__ingredients">
          <h1>Ingredients</h1>
          {/* {ReactHtmlParser(
          recipes.extendedIngredients.map((item) => {
            return `
          <h2>${item.name}</h2>
          
          `;
          })
        )} */}

          {ReactHtmlParser(
            recipes.extendedIngredients
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
            recipes.analyzedInstructions[0].steps
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

export default Recipe;
