import { Node } from "./node.js";
import { mergeSort } from "./merge-sort.js";

export class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }
  
  buildTree(arr) {
    // sort and remove duplicates
    let sorted = mergeSort(arr);
    let bst = this.buildTreeRecur(sorted, 0, sorted.length - 1);

    return bst;
  }

  buildTreeRecur(arr, start, end) {
    if (start > end) return null;

    // middle element
    let mid = start + Math.floor((end - start)/ 2);

    // root node
    let root = new Node();
    root.data = arr[mid];

    // left subtree
    root.left = this.buildTreeRecur(arr, start, mid - 1);

    // right subtree
    root.right = this.buildTreeRecur(arr, mid + 1, end);

    return root;
  }
}