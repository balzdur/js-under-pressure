import { ExerciseContext } from "../../../Providers/Exercises/types";

export interface Props
  extends Pick<
    ExerciseContext,
    "exerciceTestsLogs" | "allTestsPassed" | "currentLevel"
  > {
  onGoClick: () => void;
}
