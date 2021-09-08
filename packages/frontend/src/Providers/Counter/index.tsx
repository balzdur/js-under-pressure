import { createContext, useContext } from "react";
import { useStopwatch, StopwatchResult } from "react-timer-hook";

const CounterContext = createContext<{ watch?: StopwatchResult }>({});

function CounterProvider(props: React.PropsWithChildren<{}>) {
  const watch = useStopwatch({ autoStart: false });

  return (
    <CounterContext.Provider value={{ watch }}>
      {props.children}
    </CounterContext.Provider>
  );
}

function useCounterContext() {
  const exercisesState = useContext(CounterContext);
  if (typeof exercisesState === "undefined") {
    throw new Error("useExercisesState must be used within an CounterProvider");
  }
  return exercisesState;
}

export { CounterProvider, useCounterContext };
