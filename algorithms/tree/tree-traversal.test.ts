import { runTests, convertArrayToTree } from '../../testing';
import { 
  preorderTraversalIterative,
  preorderTraversalRecursive,
  inorderTraversalIterative,
  inorderTraversalRecursive,
  postorderTraversalIterative,
  postorderTraversalRecursive,
} from './tree-traversal';

runTests('pre order traversal [iterative]', [
  {
    input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
    result: [1, 2, 4, 5, 3, 6],
  },
  {
    input: convertArrayToTree([1, null, 2, 3]),
    result: [1, 2, 3],
  },
], preorderTraversalIterative);
runTests('pre order traversal [recursive]', [
  {
    input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
    result: [1, 2, 4, 5, 3, 6],
  },
  {
    input: convertArrayToTree([1, null, 2, 3]),
    result: [1, 2, 3],
  },
], preorderTraversalRecursive);

runTests('in order traversal [iterative]', [
  {
    input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
    result: [4, 2, 5, 1, 6, 3],
  },
  {
    input: convertArrayToTree([1, null, 2, 3]),
    result: [1, 3, 2],
  },
], inorderTraversalIterative);
runTests('in order traversal [recursive]', [
  {
    input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
    result: [4, 2, 5, 1, 6, 3],
  },
  {
    input: convertArrayToTree([1, null, 2, 3]),
    result: [1, 3, 2],
  },
], inorderTraversalRecursive);

runTests('post order traversal [iterative]', [
  {
    input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
    result: [4, 5, 2, 6, 3, 1],
  },
  {
    input: convertArrayToTree([1, null, 2, 3]),
    result: [3, 2, 1],
  },
], postorderTraversalIterative);
runTests('post order traversal [recursive]', [
  {
    input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
    result: [4, 5, 2, 6, 3, 1],
  },
  {
    input: convertArrayToTree([1, null, 2, 3]),
    result: [3, 2, 1],
  },
], postorderTraversalRecursive);
