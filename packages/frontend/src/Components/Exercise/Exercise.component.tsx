import React, { useCallback, useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

import { Props } from "./Exercise.types";
import styles from "./Exercise.module.scss";
import { youCantJSUnderPressure } from "../../assets";
import { Console } from "./Console";
import { useMultiKeyPress } from "../../Hooks";
import { useExercisesState } from "../../Providers/Exercises";
import { useHistory } from "react-router-dom";
import { Counter } from "./Counter";

function areKeysPressed(keys: string[], keysPressed: string[]): boolean {
  for (var elem of keys) {
    if (!keysPressed.includes(elem)) return false;
  }
  return true;
}

const Exercise = (_: Props) => {
  const {
    code,
    onCodeChange,
    onGoClick,
    exercises,
    exerciceTestsLogs,
    allTestsPassed,
    currentLevel,
  } = useExercisesState();

  const onGoClickWithWatch = useCallback(() => {
    onGoClick();
  }, [onGoClick]);

  const history = useHistory();
  useEffect(() => {
    if (!exercises || exercises.length === 0) {
      history.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keysPressed = useMultiKeyPress();
  useEffect(() => {
    if (
      areKeysPressed(["Meta", "Enter"], keysPressed) ||
      areKeysPressed(["Control", "Enter"], keysPressed)
    ) {
      onGoClickWithWatch();
    }
  }, [keysPressed, onGoClickWithWatch]);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <img
          src={youCantJSUnderPressure.src}
          alt={youCantJSUnderPressure.alt}
        />
        <Counter />
      </div>
      <AceEditor
        className={styles.editor}
        width="100%"
        fontSize="3vmin"
        mode="javascript"
        theme="github"
        value={code}
        onChange={onCodeChange}
      />
      <Console
        exerciceTestsLogs={exerciceTestsLogs}
        allTestsPassed={allTestsPassed}
        currentLevel={currentLevel}
        onGoClick={onGoClickWithWatch}
      />
    </div>
  );
};

export default Exercise;
