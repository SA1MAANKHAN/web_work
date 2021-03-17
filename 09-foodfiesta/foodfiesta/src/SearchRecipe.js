import React, { useState } from "react";
import { apiKey } from "./Config";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

function SearchRecipe() {
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  const getRecipe = async function (query) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`
    );

    const data = await response.json();

    console.log("@@@@@@@@@@@@@@@@@@@ req made");
    console.log(data.results);

    setRecipe(data.results);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    getRecipe(search);
    setSearch("");
  };

  if (recipes.length < 1) {
    return (
      <div className="searchRecipe">
        <h1>SearchRecipe</h1>
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

  if (recipes.length >= 1) {
    return (
      <div className="searchRecipe">
        <h1>SearchRecipe</h1>
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
        {console.log("this is recipe", recipes)}

        {ReactHtmlParser(
          recipes
            .map((recipe) => {
              return `
              <Link to="/Recipe" >
              <div className="recipe__result" id=${recipe.id}>
              <h2 className = "recipe__title">${recipe.title}</h2>
              <div className="recipe__img">
              <img src=${recipe.image} alt=""/></div>
              </div>
              </Link>
    
    `;
            })
            .join("")
        )}
      </div>
    );
  }
}

export default SearchRecipe;
