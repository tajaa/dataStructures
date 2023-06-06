//Objectives

//Construct a doubly linked list
//compare and contrast doubly and singly linked lists
//implement basic operations on a doubly linked list

//almost identical to singly linked lists, expcept every node
//each node points to in front and back

//In this datastructure, if I want to go to the last item
//i can just go to the tail with .previous
//instead of having to go from beginning to the end

//imagine you wanted print out a linked list and go backwards
//you have to start at beginnign and go all the way to the end
//but you can't go backwards so you can go tot he second last item
// and start over or you need to add things to ann array
//then reverse

//we a doubly linked list we can start at end and do .prev .prev etc

//Comparisons with Singly linked Lists
//More Memory === More flexibility
//its almost always a tradeoff

//single linked lists use less memory

//Node will have val, next, prev
//Doubly Linked List head, tail and length

class Node {
  //node just stores a piece of data like 'val'
  //and stores a reference to the next-node
  //and in this case, prev-node
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

first = new Node(12);
first.next = new Node(13);
console.log(first.next);
console.log(first);
console.log(Node);
