import { ITest } from '../../testing';
import { sort } from './bucket-sort';

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
  {
    input: [523, 411, 388, 283, 132, 131],
    result: [131, 132, 283, 388, 411, 523],
  },
  {
    input: [523, 254, 346, 212, 135],
    result: [135, 212, 254, 346, 523],
  },
];

describe('Bucket Sort', () => {
  it('should sort', () => {
    tests.forEach((t) => {
      expect(t.result).toEqual(sort(t.input));
    });
  });
});
