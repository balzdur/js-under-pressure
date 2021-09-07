import { ExerciceTestsLogs, Exercise } from "../../Services";
import { StopwatchResult } from "react-timer-hook";

export interface ExerciseContext {
  currentLevel: number;
  code: string;
  exercises: Exercise[];
  exerciceTestsLogs: ExerciceTestsLogs[];
  allTestsPassed: boolean;
  onGoClick: (watch?: StopwatchResult) => void;
  onCodeChange: (code: string) => void;
  setExercises: (exercises: Exercise[]) => void;
}
