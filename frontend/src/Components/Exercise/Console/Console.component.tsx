import React, { useEffect, useRef } from "react";

import { Props } from "./Console.types";
import styles from "./Console.module.scss";
import classnames from "classnames";
import { useExercisesState } from "../../../Providers/Exercises";

const Console = (_: Props) => {
  const { exerciceTestsLogs, allTestsPassed, onGoClick, currentLevel } =
    useExercisesState();

  const consoleEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [exerciceTestsLogs]);

  return (
    <div className={styles.container}>
      <button className={styles.goButton} onClick={onGoClick}>
        Go
      </button>
      <div className={styles.consoleContainer}>
        <p>
          Code as fast as you can! You need to double the integer and return it.
          <br />
          To test your code, click Go or hit Ctrl-Enter/⌘-Enter.
        </p>

        {exerciceTestsLogs.map(({ testPassed, testTitle, testResult }) => (
          <>
            <p>{testTitle}</p>
            <p
              className={classnames({
                [styles.validTest]: testPassed,
                [styles.unValidTest]: !testPassed,
              })}
            >
              {testResult}
            </p>
          </>
        ))}

        <p
          className={styles.success}
          style={{ display: allTestsPassed ? "block" : "none" }}
        >
          SUCCESS! All tests passed. You've used 0:04 so far. Well done!
          <br />
          {`Click Go or hit Ctrl-Enter/⌘-Enter to move on to level ${
            currentLevel + 1
          }!`}
        </p>
        <div ref={consoleEndRef} />
      </div>
    </div>
  );
};

export default Console;
