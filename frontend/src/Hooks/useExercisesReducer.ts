import { useReducer } from "react";
import {
  ExerciceTestsLogs,
  ExerciseTest,
  ExerciseTestService,
} from "../Services";

export interface ExerciseState {
  level: number;
  code: string;
  tests: ExerciseTest[];
  exerciceTestsLogs: ExerciceTestsLogs[];
  allTestsPassed: boolean;
}

export type ExerciseActions =
  | {
      type: "GO";
      payload: {};
    }
  | {
      type: "SET_CODE";
      payload: { code: string };
    };

function reducer(state: ExerciseState, action: ExerciseActions) {
  switch (action.type) {
    case "GO":
      const { computedExerciceTests, allTestsPassed } =
        ExerciseTestService.computeExerciseTests(state.tests, state.code);

      return {
        ...state,
        exerciceTestsLogs: [
          ...state.exerciceTestsLogs,
          ...ExerciseTestService.logExerciseTestsResults(computedExerciceTests),
        ],
        allTestsPassed,
      };
    case "SET_CODE":
      return {
        ...state,
        code: action.payload.code,
      };
  }
}

export function useExercisesReducer(intialState: ExerciseState) {
  return useReducer(reducer, intialState);
}
