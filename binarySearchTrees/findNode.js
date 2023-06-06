//FINDING A NODE IN A BINARY SEARCH TREE

//STEPS ITERATIVELY OR RECURSIVELY

//1. Starting at the root: Check if there is a root, if not, we're done
//2. If there is a root, check if the value of the new nod eis the value we
//are looking for.
//--if we found it, we're done
//3. If not, check to see if the value is greater than or less than the
//value of th root
//4. If it is greater, check to see if there is a node to the right
//5.--if there is, move to that node and repeat these steps from here
//6. --if not, we're done searching
//7. If it is less, check to see if there is a ndoe to the left
//--if tehre is, move to that node and repeat these steps (from there)
//--if there i snot, we're done searching

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
  find(val) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      //while tehre is a current node--while current is not node
      //as soon as we can't update current
      //loop will stop and we havne't found it
      //and as soon as found is flipped to true
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        //heres the right side
        current = current.right;
      } else {
        //this is if its equal to b/c
        //the two priors are greater than or equal to
        //this is the only other option
        found = true; //if this is not hit then it goes to !found and returns
        //undefined
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
      //while there's something
      //loop over AND we haven't found it
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
        //at end of the tree current = null
        //because in here current = current.right
        //or current = current.left
      } else {
        return true;
      }
    }
    return false;
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
// console.log(tree.contains(10));
console.log(tree.find(120));
// console.log(tree);

//true or false version

// console.log(tree.find(13));
// console.log(tree.find(100));
