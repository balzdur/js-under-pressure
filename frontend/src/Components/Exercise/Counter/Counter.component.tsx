import React, { useEffect } from "react";

import { useStopwatch } from "react-timer-hook";
import { Props } from "./Counter.types";
import styles from "./Counter.module.scss";

const Counter = ({ watchRef }: Props) => {
  const watch = useStopwatch({ autoStart: false });

  useEffect(() => {
    if (watch) {
      watchRef.current = watch;
      watch.start();
    }
    return () => {
      if (watch) {
        watch.pause();
      }
    };
  }, [watchRef]);

  return (
    <p className={styles.counter}>{`${watch?.minutes}:${watch?.seconds}`}</p>
  );
};

export default React.memo(Counter);
