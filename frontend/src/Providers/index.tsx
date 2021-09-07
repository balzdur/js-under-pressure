import React from "react";
import { ExercisesProvider } from "./Exercises";
import { ReactQueryProvider } from "./ReactQuery";
import { BrowserRouter } from "react-router-dom";

export const Providers = ({ children }: { children: React.ReactElement }) => (
  <BrowserRouter>
    <ExercisesProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ExercisesProvider>
  </BrowserRouter>
);
