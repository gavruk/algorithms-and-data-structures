import { isEqual, deepEqual } from 'lodash';
import TreeNode from './data-structures/tree';

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

export function convertArrayToTree<T>(array: T[]): TreeNode<T> | null {
  if (array.length === 0) {
    return null;
  }
  const root = new TreeNode<T>(array.shift());
  const queue = [root];
  while (queue.length > 0 && array.length > 0) {
    const curNode = queue.shift();
    const leftVal = array.shift();
    const rightVal = array.shift();
    if (leftVal !== null && leftVal !== undefined) {
      curNode.left = new TreeNode<T>(leftVal);
      queue.push(curNode.left);
    }
    if (rightVal !== null && rightVal !== undefined) {
      curNode.right = new TreeNode<T>(rightVal);
      queue.push(curNode.right);
    }
  }

  return root;
}
