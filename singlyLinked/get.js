//GET

//retreiving a node by its position in the Linked List

//tehre are no indeces--we have to start at head then count
// .next until we get that item

//Get Psuedo Code

//1. This functino should accept an index
///2. If the index is less than zero or greater than or equal to the
//the length of the list, return null
//3. Loop through the list until you reach in the index and return
// the node at that specific indiex
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
    var counter = 0; //traverse 0 to 3 and add to counter each time
    var current = this.head; //keeps track of current position as we traverse
    while (counter !== index) {
      //while counter is not equal to index
      current = current.next;
      counter++;
    }
    return current; //we keep going until this is equal to 3
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("Goodbye");
list.push("!");
list.push("<3");
list.push(":)");

list.get(0);
console.log(list.get(5));
