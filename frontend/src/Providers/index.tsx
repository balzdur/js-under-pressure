import React from "react";
import { ExercisesProvider } from "./Exercises";
import { ReactQueryProvider } from "./ReactQuery";
import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "./Counter";

export const Providers = ({ children }: { children: React.ReactElement }) => (
  <BrowserRouter>
    <CounterProvider>
      <ExercisesProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ExercisesProvider>
    </CounterProvider>
  </BrowserRouter>
);
