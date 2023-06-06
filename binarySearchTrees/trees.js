//Trees: Data structure that consists of nodes in a
//parent/child relationship

//you end up with branching structures
//Lists - linear
//Trees - non linear

//Nodes can only point to children
//we can't have a child pointing to a parent
//we can't have a node pointing to a sibling
//(like in a graph)

//TREE Terminology

//Root: The top node in a tree
//Child: A node directly connected to another node
//when moving away from the Root
//Parent: The converse notion of a child
//Sibling: A group of nodes with the same parent
//Leaf- A node with no children
//Edge- the connection between one node and another

//USES FOR TREES:

// HTML DOM (document object model): parent child relationship
//between the elements
//but once it gets to the browser after a request and get the
//response, the browser then reads through it, parses it
//and creates the dom

//Network Routing

//Unicast, Broadcast, etc. Using trees.

//Abstract Syntax Trees

//AI: minimax tree decision tree
//classification algos

//Folders architecture
//JSON is a tree when its parsed
//and travesed into a tree

//Kinds of Trees:

//1. Binary trees, heeaps, B trees, binary search trees

//In a tree, any node can have any arbitrary
//amount of nodes

//in a binary tree, each node can have at most 2

//BINARY SEARCH TREES

//1. At most, every parent node has two children
//2. Sorted in a particular way
//3. BSTS are used to store data that could
//be compared in some order
//4. If we take any node on the tree, all #s or
//every item that is less than this node is located
//to the left of it
//5. Every item/# that is greater than is to the right
//COPY THE DIAGRAMS FOR LATER

//having this structure makes it very fast to look
//things up

//RECAP: How Binary Search Trees Work

// 1. Every parent node has at most two children
// 2. Every node to the left of a parent node is always
// less than the parent
// 3.Every node to the right of a parent node is always
// greater than the parent

//The Binary Search Tree Class

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

var tree = new BinarySearchTree();

tree.root = new Node(10);

tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log(tree);
