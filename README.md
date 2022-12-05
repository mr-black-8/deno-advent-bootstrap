## Advent of Code: Deno TS bootstrap

### Initial Setup

[Install deno](https://deno.land/manual/getting_started/installation)

Clone this repo to your machine:
```shell
git clone git@github.com:mr-black-8/deno-advent-of-code.git
```

### Running solutions
You can run your solutions using deno task passing the day parameter:

(check below for daily challenge setup)
```
deno task day 01
```

### Daily Challenge setup
For maximum points, the solutions need to be submitted ASAP once challenge is available. If you're going for a high score, make sure you complete the daily setup before the challenge is released!

#### TLDR;
- paste input data into new input file eg `input/01.input`
- copy `x_day.ts` to eg `01_day.ts` and implement solutions
- run `deno task day <day>`

#### Input data set
Each day on advent of code, two challenges are posted which are base on one set of input data.

Create a copy of the `input/x.input` file and rename with the current day: `x.input` -> `01.input`

**Dont forget to remove the existing lines of instructions for the input file!**

#### Solution functions
Create a copy of the `solutions/x_day.ts` file and rename with the current day: `x_day.ts` -> `01_day.ts`

Implement your solutions so that the result is returned by the appropriate function, `solutionOne` or `solutionTwo`
