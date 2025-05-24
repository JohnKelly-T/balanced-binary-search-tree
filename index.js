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

const randomArray = () => {
  let arr = []

  for (let i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }

  return arr;
};


// let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let array = randomArray();

let myTree = new Tree(array);

console.log("\n==================================================");
console.log("=====               Random Tree              =====");
console.log("==================================================\n");
prettyPrint(myTree.root);

console.log("\n==================================================");
console.log("=====        Check if tree is balanced       =====");
console.log("==================================================\n");

console.log("Is tree balanced? ", myTree.isBalanced());

console.log("\n==================================================");
console.log("=====          Level order traversal         =====");
console.log("==================================================\n");

let levelArr = [];
myTree.levelOrder((node) => {
  levelArr.push(node.data);
});

console.log(levelArr);

console.log("\n==================================================");
console.log("=====            In order traversal          =====");
console.log("==================================================\n");

let inOrderArr = [];
myTree.inOrder((node) => {
  inOrderArr.push(node.data);
});
console.log(inOrderArr);

console.log("\n==================================================");
console.log("=====           Pre order traversal          =====");
console.log("==================================================\n");

let preOrderArr = [];
myTree.preOrder((node) => {
  preOrderArr.push(node.data);
});

console.log(preOrderArr);

console.log("\n==================================================");
console.log("=====           Post order traversal         =====");
console.log("==================================================\n");

let postOrderArr = [];
myTree.postOrder((node) => {
  postOrderArr.push(node.data);
});

console.log(postOrderArr);

console.log("\n==================================================");
console.log("=====   Unbalance tree with bigger numbers   =====");
console.log("==================================================\n");

myTree.insert(101);
myTree.insert(253);
myTree.insert(401);
myTree.insert(122);
myTree.insert(150);
myTree.insert(323);
myTree.insert(765);
myTree.insert(400);

prettyPrint(myTree.root);

console.log("\n==================================================");
console.log("=====           Rebalance the tree           =====");
console.log("==================================================\n");

myTree.rebalance();
prettyPrint(myTree.root);


console.log("\n==================================================");
console.log("=====        Check if tree is balanced       =====");
console.log("==================================================\n");

console.log("Is tree balanced? ", myTree.isBalanced());

