import { runTests, convertArrayToTree } from '../../testing';
import { 
  preorderTraversalIterative,
  inorderTraversalIterative,
  postorderTraversalIterative,
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
