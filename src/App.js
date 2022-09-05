import Navbar from "./contents/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./contents/Hero";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
