const day = Deno.args[0];
if (!day) {
  console.log('Day argument must be included ie `deno task day 01`');
  Deno.exit();
}

const input = await Deno.readTextFile(`input/${day}.input`).catch(() => {
  console.log(`Couldn't get input for day ${day}`);
  console.log(`Check the README for setup info, and make sure a file exists at "input/${day}.input"`)
  Deno.exit();
});

const inputArray = input.split('\n');

console.log(`Advent of Code 2022!\nhttps://adventofcode.com/\n\n`);
console.log(`Running solutions for day ${day}\n`);

const { solutionOne, solutionTwo } = await import(`./solutions/${day}_day.ts`);

if (!solutionOne || !solutionTwo) {
  console.log(`Solutions for day ${day} not implemented`);
  console.log('Check it has been added to `bundle_solutions.ts');
  Deno.exit();
}

const t1 = performance.now();
const resultOne = solutionOne(inputArray);
const timeOne = performance.now() - t1;

const t2 = performance.now();
const resultTwo = solutionTwo(inputArray);
const timeTwo = performance.now() - t2;

console.log(`Day ${day}, Part 1: ${resultOne === 0 ? 'Not implemented' : `${resultOne} (${timeOne}ms)`}`);
console.log(`Day ${day}, Part 2: ${resultTwo === 0 ? 'Not implemented' : `${resultTwo} (${timeTwo}ms)`}`);
