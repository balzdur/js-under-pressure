import React from "react";

import { Props } from "./StartPage.types";
import styles from "./StartPage.module.scss";
import { youCantJSUnderPressure } from "../../assets";

const StartPage = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <img src={youCantJSUnderPressure.src} alt={youCantJSUnderPressure.alt} />
      <h2>
        Five functions to fill. One ticking clock. <b>How fast can you code?</b>
      </h2>
      <button onClick={onClick}>Start the game</button>
    </div>
  );
};

export default StartPage;
