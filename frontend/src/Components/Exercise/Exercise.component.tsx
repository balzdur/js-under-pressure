import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

import { Props } from "./Exercise.types";
import styles from "./Exercise.module.scss";
import { youCantJSUnderPressure } from "../../assets";
import { Console } from "./Console";
import useMultiKeyPress from "../../Hooks/useMultiKeyPress";

function areKeysPressed(keys: string[], keysPressed: string[]): boolean {
  for (var elem of keys) {
    if (!keysPressed.includes(elem)) return false;
  }
  return true;
}

const Exercise = ({ exercise }: Props) => {
  const [code, setCode] = useState(exercise.baseCode);

  function onGoClick() {}

  const keysPressed = useMultiKeyPress();
  useEffect(() => {
    if (
      areKeysPressed(["Meta", "Enter"], keysPressed) ||
      areKeysPressed(["Control", "Enter"], keysPressed)
    ) {
      onGoClick();
    }
  }, [keysPressed]);

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
        onChange={setCode}
      />
      <Console
        onGoClick={onGoClick}
        exerciceTestsLogs={[
          {
            testTitle: 'Testing "isNumberEven(2);"...',
            testPassed: false,
            testResult: "WRONG: Got undefined but expected true. Try again!",
          },
          {
            testTitle: 'Testing "isNumberEven(2);"...',
            testPassed: true,
            testResult: "WRONG: Got undefined but expected true. Try again!",
          },
        ]}
        allTestsAreValid={false}
      />
    </div>
  );
};

export default Exercise;
