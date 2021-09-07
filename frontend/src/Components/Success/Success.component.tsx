import React from "react";

import { Props } from "./Success.types";
import styles from "./Success.module.scss";
import { useHistory } from "react-router-dom";
import { useExercisesState } from "../../Providers/Exercises";
import { youCanJSUnderPressure } from "../../assets";

const Success = (_: Props) => {
  const { exercises } = useExercisesState();
  const history = useHistory();

  const watch = {
    minutes: 3,
    seconds: 10,
  };

  return (
    <div className={styles.container}>
      <img src={youCanJSUnderPressure.src} alt={youCanJSUnderPressure.alt} />
      <h2>
        {`${watch?.minutes}:${watch?.seconds} for all ${exercises.length} levels. Well done!`}
      </h2>
      <button
        onClick={(event) => {
          event.stopPropagation();
          history.push("/");
        }}
      >
        Go to Welcome Page
      </button>
    </div>
  );
};

export default Success;
