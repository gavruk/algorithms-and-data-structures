import { isEqual, deepEqual } from 'lodash';
import TreeNode from './data-structures/tree';

export interface ITest<T, R> {
  input: T;
  result: R;
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
