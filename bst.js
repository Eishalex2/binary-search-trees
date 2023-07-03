class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = buildTree(array);
    prettyPrint(this.root);
  }
}

function mergeSort(array) {
  // copy mergeSort from previous
}

// requires sorted array
function checkDupes(array) {
  if (array.length === 0) return null;
  let i = 0;
  let j = 1;
  while (j < array.length) {
    if (array[j] === array[i]) {
      j++;
    } else {
      i++;
      array[i] = array[j];
      j++
    }
  }
  return array;
}

function buildTree(array, start = 0, end = array.length-1) {
  // sort with merge sort
  // check for dupes
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const root = new Node(array[mid]);

  root.left = buildTree(array, start, mid - 1);
  root.right = buildTree(array, mid + 1, end);

  return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};


let sortedArray = [1, 4, 7, 23];

let tree = new Tree(sortedArray);