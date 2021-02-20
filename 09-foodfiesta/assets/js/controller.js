import * as model from "./model.js";
import * as hompageView from "./Views/homepageView.js";
import foodFact from "./Views/foodFactsView.js";

const controlFoodFact = async function () {
  return await model.randomFoodTrivia();
};

const init = function () {
  // model.randomFoodTrivia();
  //   foodFact.addFoodFactHandler(controlFoodFact);
  // model.searchFood("oreo");
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
