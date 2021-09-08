import React, { useEffect } from "react";

import { Props } from "./Counter.types";
import styles from "./Counter.module.scss";
import { useCounterContext } from "../../../Providers/Counter";

function format(number?: number) {
  return number?.toString().padStart(2, "0");
}

const Counter = (_: Props) => {
  const { watch } = useCounterContext();

  useEffect(() => {
    if (watch) {
      watch.start();
    }
    return () => {
      if (watch) {
        watch.pause();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <p className={styles.counter}>{`${format(watch?.minutes)}:${format(
      watch?.seconds
    )}`}</p>
  );
};

export default React.memo(Counter);
