// sort the array using merge sort
function mergeSort(array) {
  if (array.length < 2) return array;
  
  else {
    const midPoint = Math.floor(array.length/2);
    let left = array.slice(0, midPoint);
    let right = array.slice(midPoint, array.length);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
  }
}

function merge(leftArray, rightArray) {
  let mergedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      mergedArray.push(leftArray.shift());
    } else {
      mergedArray.push(rightArray.shift());
    }
  }

  return [...mergedArray, ...leftArray, ...rightArray];
}

// requires sorted array
function checkDupes(array) {
  return array.filter((current, index, a) => current !== a[index-1]);
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

export { mergeSort, checkDupes, prettyPrint }