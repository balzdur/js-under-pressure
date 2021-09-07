import { useEffect, useReducer } from "react";

function reducer(
  keysPressed: string[],
  { type, key }: { type: "DOWN" | "UP"; key: string }
) {
  switch (type) {
    case "DOWN":
      return Array.from(new Set([...keysPressed, key]));
    case "UP":
      return keysPressed.filter((keyPressed) => {
        return keyPressed !== key;
      });
  }
}

export default function useMultiKeyPress() {
  const [keysPressed, dispatch] = useReducer(reducer, []);

  function downHandler({ key }: { key: string }) {
    dispatch({ type: "DOWN", key });
  }

  const upHandler = ({ key }: { key: string }) => {
    dispatch({ type: "UP", key });
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return keysPressed;
}
