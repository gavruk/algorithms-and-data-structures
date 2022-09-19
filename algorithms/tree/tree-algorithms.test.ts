import { runTests, convertArrayToTree } from '../../testing';
import { 
  maxDepth,
} from './tree-algorithms';

runTests('tree max depth', [
  {
    input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
    result: 3,
  },
], maxDepth);
