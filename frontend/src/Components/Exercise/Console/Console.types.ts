import { ExerciceTestsLogs } from "../../../Services";

export interface Props {
  onGoClick: () => void;
  exerciceTestsLogs: ExerciceTestsLogs[];
  allTestsAreValid: boolean;
}
