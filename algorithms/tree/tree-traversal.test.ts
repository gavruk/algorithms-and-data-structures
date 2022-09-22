import { convertArrayToTree } from '../../testing';
import { 
  preorderTraversalIterative,
  preorderTraversalRecursive,
  inorderTraversalIterative,
  inorderTraversalRecursive,
  postorderTraversalIterative,
  postorderTraversalRecursive,
  levelorderTraversal,
} from './tree-traversal';

const preorderTests = [{
  input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
  result: [1, 2, 4, 5, 3, 6],
}, {
  input: convertArrayToTree([1, null, 2, 3]),
  result: [1, 2, 3],
}];
const inorderTests = [{
  input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
  result: [4, 2, 5, 1, 6, 3],
}, {
  input: convertArrayToTree([1, null, 2, 3]),
  result: [1, 3, 2],
}];
const postorderTests = [{
  input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
  result: [4, 5, 2, 6, 3, 1],
}, {
  input: convertArrayToTree([1, null, 2, 3]),
  result: [3, 2, 1],
}];
const levelorderTests = [{
  input: convertArrayToTree([1, 2, 3, 4, 5, 6]),
  result: [1, 2, 3, 4, 5, 6],
}, {
  input: convertArrayToTree([1, null, 2, 3]),
  result: [1, 2, 3],
}];

describe('Tree Traversal', () => {
  it('should traverse pre order iterative', () => {
    preorderTests.forEach((t) => {
      expect(t.result).toEqual(preorderTraversalIterative(t.input));
    });
  });

  it('should traverse pre order recursive', () => {
    preorderTests.forEach((t) => {
      expect(t.result).toEqual(preorderTraversalRecursive(t.input));
    });
  });

  it('should traverse in order iterative', () => {
    inorderTests.forEach((t) => {
      expect(t.result).toEqual(inorderTraversalIterative(t.input));
    });
  });

  it('should traverse in order recursive', () => {
    inorderTests.forEach((t) => {
      expect(t.result).toEqual(inorderTraversalRecursive(t.input));
    });
  });

  it('should traverse post order iterative', () => {
    postorderTests.forEach((t) => {
      expect(t.result).toEqual(postorderTraversalIterative(t.input));
    });
  });

  it('should traverse post order recursive', () => {
    postorderTests.forEach((t) => {
      expect(t.result).toEqual(postorderTraversalRecursive(t.input));
    });
  });

  it('should traverse level order', () => {
    levelorderTests.forEach((t) => {
      expect(t.result).toEqual(levelorderTraversal(t.input));
    });
  });
});
