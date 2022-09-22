import { ITest } from '../../testing';
import { sort } from './insertion-sort';

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

describe('Insertion Sort', () => {
  it('should sort', () => {
    tests.forEach((t) => {
      expect(t.result).toEqual(sort(t.input));
    });
  });
});
