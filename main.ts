const day = Deno.args[0];
if (!day) {
  console.log('Day argument must be included ie `deno task day 01`');
  Deno.exit();
}

const input = await Deno.readTextFile(`input/${day}.input`).catch(err => {
  console.log(`Couldn't get input for day ${day}`);
  console.log(`Check a file exists at "input/${day}.input"`)
  console.log(err);
  Deno.exit();
});

const inputArray = input.split('\n');

console.log(`Advent of Code 2020!\nhttps://adventofcode.com/\n\n`);
console.log(`Running solutions for day ${day}\n`);

const { solutionOne, solutionTwo } = await import(`./solutions/${day}_day`);

// const solutionOne = solutions[`solution${day}1`];
// const solutionTwo = solutions[`solution${day}2`];

if (!solutionOne || !solutionTwo) {
  console.log(`Solutions for day ${day} not implemented`);
  console.log('Check it has been added to `bundle_solutions.ts');
  Deno.exit();
}

console.log(`Day ${day}, Task 1: ${solutionOne(inputArray)}`);
console.log(`Day ${day}, Task 2: ${solutionTwo(inputArray)}`);