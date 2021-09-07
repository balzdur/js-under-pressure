import { StopwatchResult } from "react-timer-hook";

export interface Props {
  watchRef: React.MutableRefObject<StopwatchResult | undefined>;
}
