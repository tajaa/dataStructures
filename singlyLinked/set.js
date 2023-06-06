//Set

// takes two arguments: An index and a value to update the item at that
//index to

// Changing the value of a node based on its position

//psuedo-code

//1. This function should accept a value and an index
//2. Use your get function to find a specific node
//3. If the node is not found, return false

//in the linked List
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
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;

      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index); //use get to get the index if its there
    if (foundNode) {
      //if the index exists then =>
      foundNode.val = val; //update this value with new value being
      //passed in
      return true;
    }
    return false;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("Goodbye");
list.push("!");
list.push("<3");
list.push(":)");

// console.log(list.get(2));
list.set(2, "!!!");
// console.log(list.get(2));
console.log(list.get(2));
