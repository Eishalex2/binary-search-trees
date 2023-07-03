import { mergeSort, checkDupes, prettyPrint } from "./helpers.js";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const sorted = mergeSort(array);
    const unique = checkDupes(sorted);
    this.root = buildTree(unique);
    prettyPrint(this.root);
  }
}

function buildTree(array, start = 0, end = array.length-1) {

  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const root = new Node(array[mid]);

  root.left = buildTree(array, start, mid - 1);
  root.right = buildTree(array, mid + 1, end);

  return root;
}

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let tree = new Tree(array);