import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodJoke from "./FoodJoke";
import FoodFact from "./FoodFact";
import SearchRecipe from "./SearchRecipe";
import RandomRecipe from "./RandomRecipe";
import FoodInfo from "./FoodInfo";
import Recipe from "./Recipe";
import Header from "./Header";
import RecipeResult from "./RecipeResult";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/RecipeResult/:id">
            <RecipeResult />
          </Route>
          <Route path="/FoodJoke">
            <FoodJoke />
          </Route>
          <Route path="/FoodFact">
            <FoodFact />
          </Route>
          <Route path="/SearchRecipe">
            <SearchRecipe />
          </Route>
          <Route path="/RandomRecipe">
            <RandomRecipe />
          </Route>
          <Route path="/FoodInfo">
            <FoodInfo />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
