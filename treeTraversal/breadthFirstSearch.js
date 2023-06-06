//Breadth First Search

// * Steps Iteratively
//     * Create a queue (this can be array) and a variable to store the values of nodes visited
//         * Two variables
//     * Place the the root node in the queue
//         * Dequeue a node from the queue and push the value of
//         *   the node into the variable that stores the nodes
//         * If there is a left property on the node dequeued—add it to the queue
//         * If there is a right property on the node dequeued—ad it to the queue
//         * Return the variable that stores the values
//FIRS THING IN IS THE FIRST THING OUT

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
  } //
  //queue[] =
  //node=13
  //data[8,3,10,14,1,...,13]
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
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BreadthFirstSearch());
