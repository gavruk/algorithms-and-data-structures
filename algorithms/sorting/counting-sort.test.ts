import { ITest, runTests } from '../../testing';
import { sort } from './counting-sort';

const tests: ITest<number[], number[]>[] = [
  {
    input: [1, 2, 3, 4, 5],
    result: [1, 2, 3, 4, 5],
  },
  {
    input: [4, 6, 1, 5, 7],
    result: [1, 4, 5, 6, 7],
  },
  {
    input: [5, 4, 3, 2, 1],
    result: [1, 2, 3, 4, 5],
  },
];

runTests('Counting sort', tests, sort);