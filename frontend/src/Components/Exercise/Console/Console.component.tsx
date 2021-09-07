import React from "react";

import { Props } from "./Console.types";
import styles from "./Console.module.scss";
import classnames from "classnames";

const Console = ({ onGoClick, exerciceTestsLogs, allTestsAreValid }: Props) => {
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

        <p style={{ display: allTestsAreValid ? "block" : "none" }}>
          SUCCESS! All tests passed. You've used 0:04 so far. Well done!
          <br />
          Click Go or hit Ctrl-Enter/⌘-Enter to move on to level 2!
        </p>
      </div>
    </div>
  );
};

export default Console;
