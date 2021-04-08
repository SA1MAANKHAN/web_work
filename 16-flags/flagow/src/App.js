import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Level from "./Level";
import Quiz from "./Quiz";
import Type from "./Type";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Quiz">
            <Quiz />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/Level/">
            <Level />
          </Route>
          <Route path="/Type">
            <Type />
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
