//INSERT: PSUEDO CODE

//Steps iteratively or recursively

//1. Create a new node and pass in the value
//2. Starting at the root--check if there is a root, if not: The root now becomes
//the new node.
//If there is a root, check if the value of the new node is greater than
//or less than the value of he root
//3.If it is greater, check to see if there is a node to the right
//--if there is, move to that node and repeat these teps
//--if there isn't, add that node as the right property
//4. If it less: check to see if there is a node to the left
//--if there is, move to that node and repeat these steps
//--if there is not, add that node as the left property
//5.return tree

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
      let current = this.root; //we'll update this as we go
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            //if there's already a left, then update new left
            //and insert to the left of that new left
            current = current.left;
          }
        } else if (val > current.val) {
          //for the right side now
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
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(10);
console.log(tree);

//          10
//     5 .      13
// 2      7. 11      16

//if we have a binary output and we're already
//reutrning in that loop, we don't need to have the 'else'
//because its redundant--we can just skip else to say
//if this is not the case: then do x as opposed to
//kind of lik the terenary situation with the if x :
