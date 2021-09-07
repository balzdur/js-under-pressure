import { ExerciseTest } from "../../Services/exerciceTests";

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
