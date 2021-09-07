import React from "react";
import "./App.css";
import { Exercise } from "./Components/Exercise";
import { StartPage } from "./Components/StartPage";
import { useExercisesState } from "./Providers/Exercises";

function App() {
  return (
    <div className="App">
      {/* <StartPage onClick={() => {}} /> */}

      <Exercise />
    </div>
  );
}

export default App;
