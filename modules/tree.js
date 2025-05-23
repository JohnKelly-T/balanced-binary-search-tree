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

  insert(value) {
    let node = new Node();
    node.data = value;

    let curr = this.root;

    while (true) {
      if (curr.data === value) {
        throw new Error("Value already in tree");
      }

      if (value < curr.data) {
        if (curr.left === null) {
          curr.left = node;
          return;
        }

        curr = curr.left;
      } else if (value > curr.data) {
        if (curr.right === null) {
          curr.right = node;
          return;
        }

        curr = curr.right;
      }
    }
  }

  deleteItem(value) {
    let parent = this.root;
    let target = this.root;

    // traverse to target node
    while (target !== null) {
      if (target.data === value) break;

      parent = target;
      target = (value < target.data) ? target.left : target.right;
    }

    if (target === null) throw new Error("Value not in tree");

    // case 1: leaf node
    if (target.left === null && target.right === null) {
      if (target.data < parent.data) {
        parent.left = null;
      } else if (target.data > parent.data){
        parent.right = null;
      } else if (target === this.root) {
        this.root = null;
      }

      return;
    }

    // case 2: node with only one child
    if (target.left === null || target.right === null) {
      let targetChild = target.left === null ? target.right : target.left;

      if (target.data < parent.data) {
        parent.left = targetChild;
      } else if (target.data > parent.data) {
        parent.right = targetChild;
      } else if (target === this.root) {
        this.root = targetChild;
      }
      
      return;
    } 

    // case 3: node with two children 
    let replacementParent = target;
    let replacementChild = target.right;


    // find the next largest node
    while (replacementChild.left !== null) {
      replacementParent = replacementChild;
      replacementChild = replacementChild.left;
    }

    // move replacement to target
    replacementChild.left = target.left;

    if (replacementParent !== target) {
      replacementParent.left = replacementChild.right;
      replacementChild.right = target.right;
    }
    
    if (target.data < parent.data) {
      parent.left = replacementChild;
    } else if (target.data > parent.data) {
      parent.right = replacementChild;
    } else if (target === this.root) {
      this.root = replacementChild;
    }
  }

  find(value) {
    let curr = this.root;

    while (curr !== null) {
      if (curr.data === value) return curr;
      
      curr = (value < curr.data) ? curr.left : curr.right;
    }

    return null;
  }
}