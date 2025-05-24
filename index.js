import { Tree } from "./modules/tree.js";

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

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let myTree = new Tree(array);
myTree.insert(10);
myTree.insert(68);
myTree.insert(350);
myTree.insert(349);
myTree.insert(348);
myTree.insert(347);
myTree.insert(6200);
myTree.insert(6100);
myTree.insert(6050);
myTree.insert(6000);

myTree.insert(24);
myTree.insert(25);
myTree.insert(26);
myTree.insert(27);
myTree.insert(28);
myTree.insert(29);
myTree.insert(30);
myTree.insert(31);
myTree.insert(32);

prettyPrint(myTree.root);
myTree.deleteItem(8);
myTree.deleteItem(9);
myTree.deleteItem(10);
myTree.deleteItem(23);


console.log("\n==================================================");
console.log("=====           Deleted leaf node            =====");
console.log("==================================================\n");
prettyPrint(myTree.root);

console.log("\n==================================================");
console.log("=====               Find Node                =====");
console.log("==================================================\n");
console.log(myTree.find(67));

console.log("\n==================================================");
console.log("=====          Level order traversal         =====");
console.log("==================================================\n");

myTree.levelOrder((node) => {
  console.log(node.data);
});

console.log("\n==================================================");
console.log("=====            In order traversal          =====");
console.log("==================================================\n");

myTree.inOrder((node) => {
  console.log(node.data);
});

console.log("\n==================================================");
console.log("=====           Pre order traversal          =====");
console.log("==================================================\n");

myTree.preOrder((node) => {
  console.log(node.data);
});

console.log("\n==================================================");
console.log("=====           Post order traversal         =====");
console.log("==================================================\n");

myTree.postOrder((node) => {
  console.log(node.data);
});

console.log("\n==================================================");
console.log("=====                 Height                 =====");
console.log("==================================================\n");

console.log("Height of node 28: ", myTree.height(28));

console.log("\n==================================================");
console.log("=====                  Depth                 =====");
console.log("==================================================\n");

console.log("Depth of node 24: ", myTree.depth(24));

console.log("\n==================================================");
console.log("=====         Test isBalanced method         =====");
console.log("==================================================\n");

console.log("Is tree balanced? ", myTree.isBalanced());

console.log("\n==================================================");
console.log("=====          Test rebalance method         =====");
console.log("==================================================\n");

myTree.rebalance();
console.log("Is tree balanced? ", myTree.isBalanced());

prettyPrint(myTree.root);
