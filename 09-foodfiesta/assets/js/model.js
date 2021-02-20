import { APIKEY } from "./config.js";

export const state = {
  foodFact: {},
  searchFood: {
    query: {},
  },
  searchRecipe: {},
};

export const randomFoodTrivia = async function () {
  const response = await fetch(
    `https://api.spoonacular.com/food/trivia/random?apiKey=${APIKEY}`
  );
  const data = await response.json();
  state.foodFact = data.text;
};

export const searchFood = async function (input) {
  const response = await fetch(
    `https://api.spoonacular.com/food/search?query=${input}&apiKey=${APIKEY}`
  );

  const data = await response.json();

  state.searchFood.query = data.query;
  state.searchFood.recipes = data.searchResults[0].results;
  state.searchFood.products = data.searchResults[1].results;
  state.searchFood.articles = data.searchResults[3].results;
  state.searchFood.videos = data.searchResults[4].results;

  console.log(state);
};

export const randomFoodJoke = async function () {
  const response = await fetch(
    `https://api.spoonacular.com/food/jokes/random?apiKey=${APIKEY}`
  );

  const data = await response.json();
  console.log("----------------------Random Food Joke ---------------------");
  console.log(data);
};

// RANDOM RECIPIES

export const randomRecipies = async function () {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}`
  );

  const data = await response.json();

  return data;
};

export const getQueriesAnswered = async function (inputQuery) {
  const query = inputQuery.toLowerCase().replaceAll(" ", "+");

  const response = await fetch(
    `https://api.spoonacular.com/food/converse?text=${query}&apiKey=${APIKEY}`
  );

  const data = await response.json();
  console.log("------------------------Talk to bot ---------------------");
  console.log(data);
};

export const searchByIngredients = async function (ingredients) {
  const ing = ingredients.split(" ").join(",+");

  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ing}&apiKey=${APIKEY}`
  );

  const data = await response.json();
  console.log(
    "------------------------Search By Ingredients ---------------------"
  );
  console.log(data);
};
