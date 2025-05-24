# Balanced Binary Search Tree

This project is an implementation of a balanced **Binary Search Tree (BST)** data structure in JavaScript, developed as part of **The Odin Project's** curriculum. It provides a fundamental understanding of how BSTs work, including node management, ordered storage, efficient searching, insertion, deletion, and tree balancing.

## Features

* **Node-based Storage:** Implements a `Node` class/factory with `data`, `left`, and `right` attributes.
* **Tree Construction:** A `buildTree(array)` function that takes an array of data, sorts it, removes duplicates, and constructs a balanced BST.
* **Operations:**
    * `insert(value)`: Inserts a new node with the given `value` while maintaining BST properties.
    * `deleteItem(value)`: Deletes a node with the given `value`, handling various cases (no children, one child, two children).
    * `find(value)`: Returns the node containing the given `value`, or `null` if not found.
* **Tree Traversal Methods:**
    * `levelOrder(callback)`: Traverses the tree in breadth-first level order. Can accept an optional callback function for each node.
    * `inOrder(callback)`: Traverses the tree in in-order (left, root, right), which returns elements in sorted order. Can accept an optional callback.
    * `preOrder(callback)`: Traverses the tree in pre-order (root, left, right). Can accept an optional callback.
    * `postOrder(callback)`: Traverses the tree in post-order (left, right, root). Can accept an optional callback.
* **Tree Information & Balancing:**
    * `height(node)`: Returns the height of a given `node` (longest path from node to a leaf node).
    * `depth(node)`: Returns the depth of a given `node` (distance from the root to the node).
    * `isBalanced()`: Checks if the tree is balanced (the difference between heights of left and right subtrees of every node is not more than 1).
    * `rebalance()`: Rebalances an unbalanced tree to ensure optimal performance.
* **Pretty Print Function:** Includes a utility `prettyPrint` function for visualizing the tree structure in the console.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (for running JavaScript outside a browser environment, highly recommended for testing)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:JohnKelly-T/balanced-binary-search-tree.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd balanced-binary-search-tree
    ```

### Usage

Run the driver script 
```bash
  node index.js
```

### Skills Learned
Through this project, I gained practical experience and solidified my understanding in:

- **Advanced Data Structures**: Implementing and deeply understanding the internal workings of a Binary Search Tree (BST).
- **Recursive Algorithms**: Mastering recursion for tree traversal (in-order, pre-order, post-order), insertion, deletion, and tree building/balancing.
- **Tree Traversal**: Implementing and differentiating between Breadth-First (Level Order) and Depth-First (Pre, In, Post Order) traversals.
- **Tree Balancing**: Understanding the concept of a balanced tree and implementing algorithms to check and rebalance a BST (e.g., converting to sorted array and rebuilding).
- **Node Manipulation**: Efficiently managing pointers (references) between nodes for insertions, deletions, and structural changes.
- **Problem Solving**: Breaking down complex tree operations into manageable recursive steps and handling various edge cases (e.g., deleting nodes with zero, one, or two children).
