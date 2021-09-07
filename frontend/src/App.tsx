import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Exercise } from "./Components/Exercise";
import { StartPage } from "./Components/StartPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/exercises" component={Exercise} />
        <Route path="" component={StartPage} />
      </Switch>
    </div>
  );
}

export default App;
