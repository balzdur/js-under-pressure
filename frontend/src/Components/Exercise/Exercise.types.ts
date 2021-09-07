import { ExerciseTest } from "../../Services/computeSolution";

export interface Exercise {
  name: string;
  description?: string;
  baseCode: string;
  solution: string;
  tests: ExerciseTest[];
}

export interface Props {
  exercise: Exercise;
}
