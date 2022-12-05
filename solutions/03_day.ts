/**
 * Make a copy of this file for each day e.g. "01_day.ts"
 * run `npm run day <day>` to execute
 */

const prioLessOne = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Implement & return solution one here:
export const solutionOne = (input: string[]) => {
  const getCompartmentContents = (bag: string): Array<Array<string>> => [bag.slice(0, bag.length / 2).split(''), bag.slice(bag.length / 2).split('')];

  let result = 0;
  input.forEach(bag => {
    const [compartmentOne, compartmentTwo] = getCompartmentContents(bag);
    for (const item of compartmentOne) {
      if (compartmentTwo.includes(item)) {
        result += (prioLessOne.indexOf(item) + 1);
        break;
      }
    }
  })
  return result;
};

// Implement and return solution two here:
export const solutionTwo = (input: string[]) => {
  let result = 0;
  const groupSize = 3;
  for (let i = 0; i < input.length; i += groupSize) {
      const group = input.slice(i, i + groupSize).map(bag => bag.split(''));
      for (const item of group[0]) {
        if (group[1].includes(item) && group[2].includes(item)) {
          result += (prioLessOne.indexOf(item) + 1)
          break;
        }
      }
  }

  return result;
};
