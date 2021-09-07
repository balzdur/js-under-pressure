import { useMutation, UseMutationOptions } from "react-query";
import { useExercisesState } from "../Providers/Exercises";

export function useFetchExercises(
  options?: UseMutationOptions<any, any, void, any>
) {
  const { setExercises } = useExercisesState();

  return useMutation(
    [],
    () => {
      return fetch("/exercises");
    },
    {
      ...options,
      onSuccess: async (...args) => {
        const exercises = await args[0].json();
        setExercises(exercises);
        options?.onSuccess?.(...args);
      },
    }
  );
}
