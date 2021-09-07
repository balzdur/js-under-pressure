import React from "react";

import { Props } from "./Console.types";
import styles from "./Console.module.scss";

const Console = ({ onGoClick }: Props) => {
  return (
    <div className={styles.container}>
      <button className={styles.goButton} onClick={onGoClick}>
        Go
      </button>
      <div className={styles.consoleContainer}>
        <div>
          Code as fast as you can! You need to double the integer and return it.
          <br />
          To test your code, click Go or hit Ctrl-Enter/⌘-Enter.
        </div>
      </div>
    </div>
  );
};

export default Console;
