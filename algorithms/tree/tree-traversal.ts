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

function runPreorderTraversalRecursive<T>(root: TreeNode<T>, result: T[]) {
  result.push(root.val);
  if (root.left) {
    runPreorderTraversalRecursive(root.left, result);
  }
  if (root.right) {
    runPreorderTraversalRecursive(root.right, result);
  }
}

export function preorderTraversalRecursive<T>(root: TreeNode<T> | null): T[] {
  if (!root) {
    return [];
  }
  const result: T[] = [];
  runPreorderTraversalRecursive(root, result);
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

function runInorderTraversalRecursive<T>(root: TreeNode<T>, result: T[]) {
  if (root.left) {
    runInorderTraversalRecursive(root.left, result);
  }
  result.push(root.val);
  if (root.right) {
    runInorderTraversalRecursive(root.right, result);
  }
}

export function inorderTraversalRecursive<T>(root: TreeNode<T> | null): T[] {
  if (!root) {
    return [];
  }
  const result: T[] = [];
  runInorderTraversalRecursive(root, result);
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


function runPostorderTraversalRecursive<T>(root: TreeNode<T>, result: T[]) {
  if (root.left) {
    runPostorderTraversalRecursive(root.left, result);
  }
  if (root.right) {
    runPostorderTraversalRecursive(root.right, result);
  }
  result.push(root.val);
}

export function postorderTraversalRecursive<T>(root: TreeNode<T> | null): T[] {
  if (!root) {
    return [];
  }
  const result: T[] = [];
  runPostorderTraversalRecursive(root, result);
  return result;
};


// Level-order traversal is to traverse the tree level by level.
// Breadth-First Search is an algorithm to traverse or search in data structures like a tree or a graph. The algorithm starts with a root node and visit the node itself first. Then traverse its neighbors, traverse its second level neighbors, traverse its third level neighbors, so on and so forth.
function getTreeHeight<T>(root: TreeNode<T> | null): number {
  if (!root) {
    return 0;
  }
  const leftHeight = getTreeHeight(root.left);
  const rightHeight = getTreeHeight(root.right);
  if (leftHeight >= rightHeight) {
    return leftHeight + 1;
  } else {
    return  rightHeight + 1;
  }
}

function runCurrentLevel<T>(root: TreeNode<T> | null, level: number, result: T[]): void {
  if (root == null) {
    return;
  }
  if (level === 0) {
    result.push(root.val);
    return;
  }
  runCurrentLevel(root.left, level - 1, result);
  runCurrentLevel(root.right, level - 1, result);
}


export function levelorderTraversal<T>(root: TreeNode<T> | null): T[] {
  if (!root) {
    return [];
  }
  const result: T[] = [];
  const height = getTreeHeight(root);
  for (let i = 0; i < height; i++) {
    runCurrentLevel(root, i, result);
  }
  return result;
};
