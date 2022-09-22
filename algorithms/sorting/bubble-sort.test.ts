import { ITest } from '../../testing';
import { sort1, sort2 } from './bubble-sort';

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

describe('Bubble Sort', () => {
  it('should sort 1', () => {
    tests.forEach((t) => {
      expect(t.result).toEqual(sort1(t.input));
    });
  });

  it('should sort 2', () => {
    tests.forEach((t) => {
      expect(t.result).toEqual(sort2(t.input));
    });
  });
});
