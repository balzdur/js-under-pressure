import React, { useCallback, useEffect, useReducer } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

import { Props } from "./Exercise.types";
import styles from "./Exercise.module.scss";
import { youCantJSUnderPressure } from "../../assets";
import { Console } from "./Console";
import useMultiKeyPress from "../../Hooks/useMultiKeyPress";
import {
  ExerciceTestsLogs,
  ExerciseTest,
  ExerciseTestService,
} from "../../Services";

function areKeysPressed(keys: string[], keysPressed: string[]): boolean {
  for (var elem of keys) {
    if (!keysPressed.includes(elem)) return false;
  }
  return true;
}

interface ExerciseState {
  code: string;
  tests: ExerciseTest[];
  exerciceTestsLogs: ExerciceTestsLogs[];
  allTestsPassed: boolean;
}

type ExerciseActions =
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

const Exercise = ({ exercise: { baseCode, tests } }: Props) => {
  const [{ code, exerciceTestsLogs, allTestsPassed }, dispatch] = useReducer(
    reducer,
    {
      code: baseCode,
      tests,
      exerciceTestsLogs: [],
      allTestsPassed: false,
    }
  );

  const onGoClick = useCallback(() => {
    dispatch({ type: "GO", payload: {} });
  }, []);

  const keysPressed = useMultiKeyPress();
  useEffect(() => {
    if (
      areKeysPressed(["Meta", "Enter"], keysPressed) ||
      areKeysPressed(["Control", "Enter"], keysPressed)
    ) {
      onGoClick();
    }
  }, [keysPressed, onGoClick]);

  return (
    <div className={styles.container}>
      <img src={youCantJSUnderPressure.src} alt={youCantJSUnderPressure.alt} />
      <AceEditor
        className={styles.editor}
        width="100%"
        fontSize="3vmin"
        mode="javascript"
        theme="github"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
        }}
        value={code}
        onChange={(newCode) => {
          dispatch({ type: "SET_CODE", payload: { code: newCode } });
        }}
      />
      <Console
        onGoClick={onGoClick}
        exerciceTestsLogs={exerciceTestsLogs}
        allTestsAreValid={allTestsPassed}
      />
    </div>
  );
};

export default Exercise;
