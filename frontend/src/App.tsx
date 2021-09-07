import React, { useEffect, useState } from "react";
import "./App.css";
import { Exercise } from "./Components/Exercise";
import { StartPage } from "./Components/StartPage";

function App() {
  return (
    <div className="App">
      {/* <StartPage onClick={() => {}} /> */}

      <Exercise
        exercise={{
          name: "Double integer",
          description: "Double the number and return the result.",
          baseCode:
            "function doubleInteger(x) {\n        // `x` will be an integer. Double it and return it.\n              return x;\n      }      ",
          solution: "solution",
          tests: [
            { call: "doubleInteger(2)", result: 4 },
            { call: "doubleInteger(4)", result: 8 },
            { call: "doubleInteger(-10)", result: -20 },
            { call: "doubleInteger(0)", result: 0 },
            { call: "doubleInteger(100)", result: 200 },
          ],
        }}
      />
    </div>
  );
}

export default App;
