import "./App.css";
import CardContainer from "./CardContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodJoke from "./FoodJoke";
import FoodFact from "./FoodFact";
import SearchRecipe from "./SearchRecipe";
import RandomRecipe from "./RandomRecipe";
import FoodInfo from "./FoodInfo";
import Recipe from "./Recipe";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Recipe">
            <Recipe />
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
            <h1>Welcome to FoodFiesta</h1>
            {/* Header */}
            {/* Slider */}
            <CardContainer />
            {/* Some other stuff */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
