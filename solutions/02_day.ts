/**
 * Make a copy of this file for each day e.g. "01_day.ts"
 * run `npm run day <day>` to execute
 */

// Implement & return solution one here:
export const solutionOne = (input: string[]) => {
  // Placeholder transformation, input will not be numbers for all challenges
  type signType = 'R' | 'P' | 'S';
  type move = {
    sign: signType;
    score: number;
  }
  const moves: Record<string, move> = {
    A: { sign: 'R', score: 1 },
    B: { sign: 'P', score: 2 },
    C: { sign: 'S', score: 3 },
    X: { sign: 'R', score: 1},
    Y: { sign: 'P', score: 2},
    Z: { sign: 'S', score: 3},
  };

  const calcRoundScore = (p1: signType, p2: signType): number => {
    if (p1 === p2) return 3; // draw = 3 points
    if (p1 === 'R') {
      if (p2 === 'P') return 6; // win = 6 points
      return 0; // loss = 0 points
    }
    if (p1 === 'P') {
      if (p2 === 'S') return 6;
      return 0;
    }
    if (p1 === 'S') {
      if (p2 === 'R') return 6;
      return 0;
    }
    return 0;
  };

  const calcOutcome = (opponent: move, me: move): number => {
    const roundScore = calcRoundScore(opponent.sign, me.sign);
    return roundScore + me.score;
  }

  let totalScore = 0;

  input.forEach(round => {
    const [opponent, me] = round.split(' ').map(id => moves[id]);
    totalScore += calcOutcome(opponent, me);
  });

  return totalScore;
};

// Implement and return solution two here:
/**
 * X = lose
 * Y = draw
 * Z = win
 * @param input 
 * @returns 
 */
export const solutionTwo = (input: string[]) => {
  const outcomeScore: Record<string, number> = {
    X: 0, // lose
    Y: 3, // draw
    Z: 6, // win
  };

  const compareMap: Record<string, Record<string, number>> = {
    A: { // rock
      X: 3, // lose = S
      Y: 1, // draw = R
      Z: 2, // win = P
    },
    B: { // paper
      X: 1, // lose = R
      Y: 2, // draw = P
      Z: 3, // win = S
    },
    C: { // scissor
      X: 2, // lose = P
      Y: 3, // draw = S
      Z: 1, // win = R
    }
  };

  let totalScore = 0;
  input.map(round => {
    const [opponent, outcome]: string[] = round.split(' ');
    totalScore += compareMap[opponent][outcome];
    totalScore += outcomeScore[outcome];
  });

  return totalScore;
};
