import { mergeSort, checkDupes, prettyPrint } from "./helpers.js";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function sortAndRemoveDupes(array) {
  const sorted = mergeSort(array);
  return checkDupes(sorted);
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);

  }

  insert(data, root = this.root) {
    if (root === null) {
      root = new Node(data);
      return root;
    } else {
      if (data < root.data) {
        root.left = this.insert(data, root.left);
      } else {
        root.right = this.insert(data, root.right);
      }
      return root;      
    }
  }

  delete(data, root = this.root) {
    if (root === null) return root;
    if (data < root.data) {
      root.left = this.delete(data, root.left);
    } else if (data > root.data) {
      root.right = this.delete(data, root.right);
    } else {
      // node with no children, or only one child
      if (root.left === null) return root.right;
      else if (root.right === null) return root.left;

      root.data = this.minValue(root.right);
      root.right = this.delete(root.data, root.right);
    } 
    return root;
  }

  minValue(node) {
    let min = node.data;
    while (node.left !== null) {
      min = node.left.data;
      node = node.left;
    }
    return min;
  }

  find(value, root = this.root) {
    if (root === null) return null;

    if (root.data === value) return root;

    if (value < root.data) {
      return this.find(value, root.left);
    } else {
      return this.find(value, root.right);
    }
  }

  levelOrder(func) {
    let resultsArray = [];

    // use an array acting as a queue.
    if (!this.root) return [];

    let queue = [this.root];

    while (queue.length > 0) {
      let level = [];
      let n = queue.length;

      for (let i=0; i < n; i++) {
        const node = queue.shift();
        level.push(node.data);

        if (node.right) queue.push(node.right);
        if (node.left) queue.push(node.left);

        if (func) func(node);
      }
      resultsArray.push(level);
    }
    if (!func) return resultsArray;
  }

  getArray()

// inorder
// left, root, right
inOrder() {
  let resultsArray = [];
  if (!this.root) return [];


}

getInOrder(func, node = this.root) {
  if (!node) return;
  this.getInOrder(node.left);
  if (func) func(node.data);
  else if (!func) 
  this.getInOrder(node.right);
}


// preorder
// root, left, right

// postorder
// left, right, root



  buildTree(array, start = 0, end = array.length-1) {    
    if (start > end) return null;
  
    const mid = Math.floor((start + end) / 2);
    const root = new Node(array[mid]);
  
    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);
  
    return root;
  }
}



let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let arrayTest = [1,2,2,4];
let sort = sortAndRemoveDupes(array);

const tree = new Tree(sort);
prettyPrint(tree.root);
console.log(tree.levelOrder());