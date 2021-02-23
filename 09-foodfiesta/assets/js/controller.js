import * as model from "./model.js";
import foodFact from "./Views/foodFactsView.js";
import foodJoke from "./Views/foodJokeView.js";
import searchFoodInput from "./Views/searchFoodView.js";
import searchRecipeInput from "./Views/searchRecipeView.js";
import randomRecipe from "./Views/randomRecipeView.js";

const controlFoodFact = async function () {
  await model.randomFoodFact();
  foodFact.render(model.state.foodFact);
};

const controlSearchFoodInput = function () {
  model.searchFood("oreo");
  searchFoodInput.renderSearch();
};

const controlSearchRecipeInput = function () {
  model.searchFood("oreo");
  searchRecipeInput.renderSearch();
};

const controlFoodJoke = function () {
  model.randomFoodJoke();
  foodJoke.render(model.state.foodJoke);
};

const controlRandomRecipe = function () {
  // model.randomRecipies();
  randomRecipe.render();
};

const init = function () {
  foodFact.addFoodFactHandler(controlFoodFact);
  foodJoke.addFoodJokeHandler(controlFoodJoke);
  searchFoodInput.addSearchFoodHandler(controlSearchFoodInput);
  searchRecipeInput.addSearchRecipeHandler(controlSearchRecipeInput);
  randomRecipe.addRandomRecipeHandler(controlRandomRecipe);
  // devlopment
};

init();

// functions

// randomFoodTrivia();

// searchAboutFood("cheese");

// searchRecipes("cheese");

// randomFoodJoke();

// randomRecipies();

// getQueriesAnswered("tell me a joke");

// searchByIngredients("tell me a joke");

//  auto-complete https://api.spoonacular.com/recipes/autocomplete?number=10&query=chick

//  search-ingredient-substitute https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=butter

//  quick-answers https://api.spoonacular.com/recipes/quickAnswer?q=How+much+vitamin+c+is+in+2+apples

//  POST-image-classification https://api.spoonacular.com/food/images/analyze
