import { isEqual } from 'lodash';

export interface ITest<T, R> {
  input: T;
  result: R;
}

export function runTests<T, R>(name: string, tests: ITest<T, R>[], fn: (arg: T) => R) {
  tests.forEach((t, index) => {
    const result = fn(t.input);
    const ok = isEqual(result, t.result);
    if (!ok) {
      console.log('INPUT: ', t.input);
      console.log('ACTUAL: ', result);
      console.log('EXPECTED: ', t.result);
    }
    console.log(`${name} ${index}: ${ok ? 'OK' : 'ERROR'}`);
  });
  console.log('---');
}
