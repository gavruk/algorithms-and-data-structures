export default class TreeNode<T> {
  val: T | null;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(val?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
