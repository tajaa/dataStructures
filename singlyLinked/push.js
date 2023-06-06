//objectives:

//define what a singly linked list is
// compare and contrast arrays with Singly Linked lists

//implement insertion, removal and traversal methods
//on singly linked lists

//what is a linked list? It's a data structure that contains a head, tail
//and length property

//linked lists consist of nodes and each node has a value and a pointer
//to another node or null

//a linked list just conists of a bunch of elements with no indices
//that are pointing to the next element but its ordered

//Distinction with arrays: in an array, each item is mapped.
//its indexed with a number so I can get the fifth or six item
//any time something gets added, it gets an index

//in Linked Lists: each element is a node. A node stores a piece
//of data like a string a number but it also references the next
//node --at end if no node then = null

//DIAGRAM in 2nd video

//singly linked list refers to the fact each node is connected only
//one directionaly to the next node

//Comparisons with Arrays

//Lists
// Do not have indexes
//Connected via nodes with a next pointer
//Random access is not allowed
//these are good at insertion and deletion

//this would bea  good reason to use lists insetad of arrays
//if you don't need random access

//Arrays
// Indexed in order
//Insertion and deletion can expensive
//can quickly be accessed at a specific index
//reindexing sucks

//piece of data - val
//reference  to next node - next

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {}
// }

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
//bad way of representing a linked list

// console.log(first.next);

// var list = new SinglyLinkedList();

// list.push("hello");
// list.push("goodbye");

//PUSHING

//adding a new node ot the end of the linked list

//Pushing psuedo code:

//this function should accept a value

//create a new node using the value passed to the function

//if there is no head property on the list, set the head and
//tail to be the newly created node

//otherwise, set the next property on the tail to be the new node
//and set the tail property on the list to be the newly created node

//increment the length by 1

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      //if there is no head
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // console.log(this);
    return this;
  }
}
var list = new SinglyLinkedList();
// list.push("hello");
// list.push("Goodbye");
list.push("hi");
// console.log(SinglyLinkedList);
// console.log(Node);
list.push("you");
list.push(99);
// console.log(list.head.next);
// console.log(list.head.next.next);

//very fast to push
//take the tail and add ont to he end and move the tail one spot
//over
