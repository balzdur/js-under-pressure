import React, { useEffect } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

import { Props } from "./Exercise.types";
import styles from "./Exercise.module.scss";
import { youCantJSUnderPressure } from "../../assets";
import { Console } from "./Console";
import { useMultiKeyPress } from "../../Hooks";
import { useExercisesState } from "../../Providers/Exercises";

function areKeysPressed(keys: string[], keysPressed: string[]): boolean {
  for (var elem of keys) {
    if (!keysPressed.includes(elem)) return false;
  }
  return true;
}

const Exercise = (_: Props) => {
  const { code, onCodeChange, onGoClick } = useExercisesState();

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
        onChange={onCodeChange}
      />
      <Console />
    </div>
  );
};

export default Exercise;
