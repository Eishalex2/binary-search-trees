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
tree.insert(2);
prettyPrint(tree.root);