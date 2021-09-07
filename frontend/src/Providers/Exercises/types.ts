import { ExerciceTestsLogs, Exercise } from "../../Services";

export interface ExerciseContext {
  currentLevel: number;
  code: string;
  exercises: Exercise[];
  exerciceTestsLogs: ExerciceTestsLogs[];
  allTestsPassed: boolean;
  onGoClick: () => void;
  onCodeChange: (code: string) => void;
  setExercises: (exercises: Exercise[]) => void;
}
