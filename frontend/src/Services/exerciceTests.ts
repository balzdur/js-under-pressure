export interface ExerciseTest {
  call: string;
  result: any;
}

interface ComputedExerciceTest extends ExerciseTest {
  testPassed: boolean;
  computedResult: any;
}

function computeExerciseTests(
  tests: ExerciseTest[],
  code: string
): { computedExerciceTests: ComputedExerciceTest[]; allTestsPassed: boolean } {
  const computedExerciceTests = tests.reduce<ComputedExerciceTest[]>(
    (acc, { call, result }) => {
      if (acc.length > 0 && acc[acc.length - 1].testPassed === false)
        return acc;

      const computedResult = eval(`${code};${call}`);

      return [
        ...acc,
        { call, computedResult, result, testPassed: computedResult === result },
      ];
    },
    []
  );

  return {
    computedExerciceTests,
    allTestsPassed:
      computedExerciceTests.length === tests.length &&
      computedExerciceTests[computedExerciceTests.length - 1].testPassed,
  };
}

export interface ExerciceTestsLogs {
  testPassed: boolean;
  testTitle: string;
  testResult: string;
}

function logExerciseTestsResults(
  computedExerciceTests: ComputedExerciceTest[]
): ExerciceTestsLogs[] {
  return computedExerciceTests.map(
    ({ testPassed, computedResult, call, result }) => ({
      testTitle: `Testing "${call};"...`,
      testPassed,
      testResult: testPassed
        ? `RIGHT: ${computedResult} is the right answer.`
        : `WRONG: Got ${computedResult} but expected ${result}. Try again!`,
    })
  );
}

export const ExerciseTestService = {
  computeExerciseTests,
  logExerciseTestsResults,
};
