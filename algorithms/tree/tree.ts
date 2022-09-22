import TreeNode from '../../data-structures/tree';

export function maxDepth<T>(root: TreeNode<T> | null): number {
  if (root === null) {
    return 0;
  }
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

function runSymmetric<T>(left: TreeNode<T> | null, right: TreeNode<T> | null): boolean {
  if (left === null || right === null) {
    return left === right;
  }
  if (left.val !== right.val) {
    return false;
  }
  return runSymmetric(left.left, right.right) && runSymmetric(left.right, right.left);
}

export function isSymmetric<T>(root: TreeNode<T> | null): boolean {
  if (root === null) {
    return false;
  }
  return runSymmetric(root.left, root.right);
};

export function minDepth<T>(root: TreeNode<T> | null): number {
  if (root === null) {
    return 0;
  }
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);
  if (leftDepth === 0 || rightDepth === 0) {
    return Math.max(leftDepth, rightDepth) + 1;
  }
  return Math.min(leftDepth, rightDepth) + 1;
};
