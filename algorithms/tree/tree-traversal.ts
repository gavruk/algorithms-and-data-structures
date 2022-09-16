import TreeNode from '../../data-structures/tree';

// Pre-order traversal is to visit the root first. Then traverse the left subtree. Finally, traverse the right subtree.
// Root — Left — Right
export function preorderTraversalIterative<T>(root: TreeNode<T> | null): T[] {
  if (!root) {
    return [];
  }
  const result: T[] = [];
  const stack: TreeNode<T>[] = [];
  stack.push(root);
  while (stack.length !== 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right != null) {
      stack.push(node.right);
    }
    if (node.left != null) {
      stack.push(node.left);
    }
  }
  return result;
};


// In-order traversal is to traverse the left subtree first. Then visit the root. Finally, traverse the right subtree.
// Left — Root — Right
export function inorderTraversalIterative<T>(root: TreeNode<T> | null): T[] {
  if (!root) {
    return [];
  }
  const result: T[] = [];
  const stack: TreeNode<T>[] = [];
  let curr = root;
  while (curr != null || stack.length !== 0) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
};


// Post-order traversal is to traverse the left subtree first. Then traverse the right subtree. Finally, visit the root.
// Left — Right — Root
export function postorderTraversalIterative<T>(root: TreeNode<T> | null): T[] {
  if (!root) {
    return [];
  }
  const result: T[] = [];
  const stack: TreeNode<T>[] = [];
  let curr = root;
  while (stack.length > 0 || curr != null) {
    if (curr != null) {
      stack.push(curr);
      result.unshift(curr.val);
      curr = curr.right;
    } else {
      const node = stack.pop();
      curr = node.left;
    }
  }
  return result;
};


// Level-order traversal is to traverse the tree level by level.
// Breadth-First Search is an algorithm to traverse or search in data structures like a tree or a graph. The algorithm starts with a root node and visit the node itself first. Then traverse its neighbors, traverse its second level neighbors, traverse its third level neighbors, so on and so forth.
