import { useHistory } from "react-router-dom";
import { StopwatchResult } from "react-timer-hook";
import React, { createContext, useCallback } from "react";
import { useExercisesReducer } from "../../Hooks";
import { Exercise } from "../../Services";
import { ExerciseContext } from "./types";

const ExercisesContext = createContext<ExerciseContext>({
  currentLevel: 0,
  code: "",
  exercises: [],
  exerciceTestsLogs: [],
  allTestsPassed: false,
  onGoClick: () => {},
  onCodeChange: () => {},
  setExercises: () => {},
});

function ExercisesProvider(props: React.PropsWithChildren<{}>) {
  const history = useHistory();

  const [
    {
      currentExerciseIndex,
      code,
      exerciceTestsLogs,
      allTestsPassed,
      exercises,
    },
    dispatch,
  ] = useExercisesReducer({
    currentExerciseIndex: 0,
    code: "",
    exercises: [],
    exerciceTestsLogs: [],
    allTestsPassed: false,
  });

  const onGoClick = useCallback(
    (watch?: StopwatchResult) => {
      if (!allTestsPassed) {
        return dispatch({ type: "GO", payload: { watch } });
      }
      if (currentExerciseIndex === exercises.length - 1) {
        return history.push("/success");
      }
      dispatch({ type: "NEXT_EXERCISE", payload: {} });
    },
    [allTestsPassed, currentExerciseIndex, dispatch, exercises.length, history]
  );

  const onCodeChange = useCallback(
    (newCode: string) => {
      dispatch({ type: "SET_CODE", payload: { code: newCode } });
    },
    [dispatch]
  );

  const setExercises = useCallback(
    (exercises: Exercise[]) => {
      dispatch({ type: "SET_EXERCISES", payload: { exercises } });
    },
    [dispatch]
  );

  return (
    <ExercisesContext.Provider
      value={{
        currentLevel: currentExerciseIndex + 1,
        code,
        exerciceTestsLogs,
        allTestsPassed,
        exercises,
        onGoClick,
        onCodeChange,
        setExercises,
      }}
    >
      {props.children}
    </ExercisesContext.Provider>
  );
}

function useExercisesContext() {
  const exercisesState = React.useContext(ExercisesContext);
  if (typeof exercisesState === "undefined") {
    throw new Error(
      "useExercisesState must be used within an ExercisesProvider"
    );
  }
  return exercisesState;
}

export { ExercisesProvider, useExercisesContext as useExercisesState };
