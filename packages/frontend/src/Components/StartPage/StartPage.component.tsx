import React from "react";

import { Props } from "./StartPage.types";
import styles from "./StartPage.module.scss";
import { youCantJSUnderPressure } from "../../assets";
import { useFetchExercises } from "../../Hooks/useFetchExercises";
import { useHistory } from "react-router-dom";

const StartPage = (_: Props) => {
  const history = useHistory();

  const {
    isIdle,
    isLoading,
    isError,
    mutate: fetchExercises,
  } = useFetchExercises({
    onSuccess: () => {
      history.push("/exercises");
    },
  });

  return (
    <div className={styles.container}>
      <img src={youCantJSUnderPressure.src} alt={youCantJSUnderPressure.alt} />
      <h2>
        Five functions to fill. One ticking clock. <b>How fast can you code?</b>
      </h2>
      <button
        onClick={(event) => {
          event.stopPropagation();
          fetchExercises();
        }}
      >
        {isLoading && <div className={styles.loader} />}
        {isError && "Error: can't fetch exercises"}
        {isIdle && "Start the game"}
      </button>
    </div>
  );
};

export default StartPage;
