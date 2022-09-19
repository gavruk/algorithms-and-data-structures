import { runTests, convertArrayToTree } from '../../testing';
import { 
  maxDepth,
  isSymmetric,
} from './tree-algorithms';

runTests('tree max depth', [
  {
    input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
    result: 3,
  },
], maxDepth);

runTests('tree is symmetric', [
  {
    input: convertArrayToTree([1,2,2,3,4,4,3]),
    result: true,
  },
], isSymmetric);
