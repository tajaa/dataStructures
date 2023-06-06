//DFS IN Order:

// DFS-In Order;
// 1. Visit the entire left side
// 2. Then visit the node
// 3. Then visit/traverse the entire right side

// Pseudo- Code:
// 1. Create a variable to store the values of nodes visited
// 2. Store the root of the BST in a variable called current
// 3. Write a helper function which accepts a node
//     1. If the node has left property, call the helper function
//     with the left property on the node
//     2. Push the value of the node to the variable that stores the values
//     3. If the node has a right property, cal the helper function
//     with the right property on the node
// 4. Invoke the helper function with the current variable
// 5. Return array of values

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(val) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(val) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BreadthFirstSearch() {
    //no args
    //we just want to visit every node
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node); //pushing root into queue from the end
    while (queue.length) {
      node = queue.shift(); //take from the beginning
      //this node is what is shifted
      //first in first out
      data.push(node.val); //then we push it INTO our data DS
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      //this continues to get called by traverse(node.left/right)
      //node is the value of whats inserted
      data.push(node.val); //push the value of the node to the var
      //that stores the value (here its 'data');
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current); //defines where to start from
    return data;
  }
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;
  }
  DFSInOrder() {
    let data = [];
    let current = this.root; //bst
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val); //visit by pushing node val
      //into data array
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
