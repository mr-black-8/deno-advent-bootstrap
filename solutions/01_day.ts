/**
 * Make a copy of this file for each day e.g. "01_day.ts"
 * run `npm run day <day>` to execute
 */

type Input = number | string

// Implement & return solution one here:
export const solutionOne = (input: Input[]) => {
  // Placeholder transformation, input will not be numbers for all challenges
  // const transformedInput = input.map(Number);

  let tally = 0;
  let maxCal = 0;

  input.forEach(line => {
    if (line === '') {
      maxCal = maxCal > tally ? maxCal : tally;
      tally = 0;
    } else {
      tally += Number(line);
    }
  })

  return maxCal;
};

// Implement and return solution two here:
export const solutionTwo = (input: Input[]) => {
  // Placeholder transformation, input will not be numbers for all challenges
  // const transformedInput = input.map(Number);

  let tally = 0;
  const totals: number[] = [];

  input.forEach(line => {
    if (line === '') {
      totals.push(tally);
      tally = 0;
    } else {
      tally += Number(line);
    }
  });

  totals.sort((a, b) => b - a);

  return totals[0] + totals[1] + totals[2];
};
