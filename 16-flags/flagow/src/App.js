import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Level from "./Level";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/RecipeResult/:id"></Route>
          <Route path="/FoodJoke"></Route>
          <Route path="/FoodFact"></Route>
          <Route path="/SearchRecipe"></Route>
          <Route path="/RandomRecipe"></Route>
          <Route path="/Level">
            <Level/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
