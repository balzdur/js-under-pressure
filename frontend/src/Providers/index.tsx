import React from "react";
import { ExercisesProvider } from "./Exercises";

export const Providers = ({ children }: { children: React.ReactElement }) => (
  <ExercisesProvider>{children}</ExercisesProvider>
);
