import { isEqual, deepEqual } from 'lodash';

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

export function assert<T>(expected: T, actual: T, message: string) {
  const ok = isEqual(expected, actual);
  if (!ok) {
    console.log('ACTUAL: ', actual);
    console.log('EXPECTED: ', expected);
    console.log(`${message}: ERROR`);
  } else {
    console.log(`${message}: OK`);
  }
}

export function assertArray<T>(expected: T[], actual: T[], message: string, deep: boolean = false) {
  const ok = deep 
    ? isEqual(expected.sort(), actual.sort())
    : isEqual(expected, actual);
  if (!ok) {
    console.log('ACTUAL: ', actual);
    console.log('EXPECTED: ', expected);
    console.log(`${message}: ERROR`);
  } else {
    console.log(`${message}: OK`);
  }
}
