import { sortAndRemoveDupes, Tree } from "./bst.js";
import { prettyPrint } from "./helpers.js";

function randomArray(length) {
  let array = [];

  let i = 0;
  while (i < length) {
    array[i] = Math.floor(Math.random() * 100);
    i++;
  }
  array = sortAndRemoveDupes(array);
  return array;
}

const tree = new Tree(randomArray(5));
prettyPrint(tree.root);
console.log(tree.isBalanced());
console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
tree.insert(150);
tree.insert(125);
tree.insert(189);
tree.insert(200);
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
prettyPrint(tree.root);