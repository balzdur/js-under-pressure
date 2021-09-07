import React, { createContext, useCallback } from "react";
import { ExerciseState, useExercisesReducer } from "../../Hooks";

const exercise = {
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
};

const initialState: ExerciseState = {
  level: 1,
  code: exercise.baseCode,
  tests: exercise.tests,
  exerciceTestsLogs: [],
  allTestsPassed: false,
};

interface ExercisesState extends Omit<ExerciseState, "tests"> {
  onGoClick: () => void;
  onCodeChange: (code: string) => void;
}

const ExercisesContext = createContext<ExercisesState>({
  level: 0,
  code: "",
  exerciceTestsLogs: [],
  allTestsPassed: false,
  onGoClick: () => {},
  onCodeChange: () => {},
});

function ExercisesProvider(props: React.PropsWithChildren<{}>) {
  const [{ code, level, exerciceTestsLogs, allTestsPassed }, dispatch] =
    useExercisesReducer(initialState);

  const onGoClick = useCallback(() => {
    dispatch({ type: "GO", payload: {} });
  }, [dispatch]);

  const onCodeChange = useCallback(
    (newCode: string) => {
      dispatch({ type: "SET_CODE", payload: { code: newCode } });
    },
    [dispatch]
  );

  return (
    <ExercisesContext.Provider
      value={{
        code,
        level,
        exerciceTestsLogs,
        allTestsPassed,
        onGoClick,
        onCodeChange,
      }}
    >
      {props.children}
    </ExercisesContext.Provider>
  );
}

function useExercisesState() {
  const exercisesState = React.useContext(ExercisesContext);
  if (typeof exercisesState === "undefined") {
    throw new Error(
      "useExercisesState must be used within a ExercisesProvider"
    );
  }
  return exercisesState;
}

export { ExercisesProvider, useExercisesState };
