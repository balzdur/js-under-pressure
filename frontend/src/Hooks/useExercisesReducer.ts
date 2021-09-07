import { useReducer } from "react";
import { StopwatchResult } from "react-timer-hook";
import { ExerciceTestsLogs, Exercise, ExerciseTestService } from "../Services";

export interface ExerciseState {
  currentExerciseIndex: number;
  code: string;
  exerciceTestsLogs: ExerciceTestsLogs[];
  exercises: Exercise[];
  allTestsPassed: boolean;
}

export type ExerciseActions =
  | {
      type: "NEXT_EXERCISE";
      payload: {};
    }
  | {
      type: "GO";
      payload: { watch?: StopwatchResult };
    }
  | {
      type: "SET_CODE";
      payload: { code: string };
    }
  | {
      type: "SET_EXERCISES";
      payload: { exercises: Exercise[] };
    };

function resetStateToExercise(exercises: Exercise[], index: number) {
  const { baseCode } = exercises[index];
  return {
    code: baseCode,
    exerciceTestsLogs: [],
    allTestsPassed: false,
    currentExerciseIndex: index,
  };
}

function reducer(state: ExerciseState, action: ExerciseActions) {
  const { code, currentExerciseIndex, exercises } = state;

  switch (action.type) {
    case "NEXT_EXERCISE":
      return {
        ...state,
        ...resetStateToExercise(exercises, currentExerciseIndex + 1),
      };
    case "GO":
      const { watch } = action.payload;
      watch?.pause();
      const { tests } = exercises[currentExerciseIndex];
      const { computedExerciceTests, allTestsPassed } =
        ExerciseTestService.computeExerciseTests(tests, code);

      const newState = {
        ...state,
        exerciceTestsLogs: [
          ...state.exerciceTestsLogs,
          ...ExerciseTestService.logExerciseTestsResults(computedExerciceTests),
        ],
        allTestsPassed,
      };

      watch?.start();
      return newState;
    case "SET_CODE":
      return {
        ...state,
        code: action.payload.code,
      };
    case "SET_EXERCISES":
      return {
        ...state,
        exercises: action.payload.exercises,
        ...resetStateToExercise(action.payload.exercises, 0),
      };
  }
}

export function useExercisesReducer(intialState: ExerciseState) {
  return useReducer(reducer, intialState);
}
