//

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.next = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      //if nothing in list
      this.head = newNode;
      this.tail = newNode;
    } else {
      //if already a value
      this.tail.next = newNode;
      newNode.prev = this.tail; //make 45 newNode.prev
      this.tail = newNode; //now make the tail newNode
    }
    this.length++; //increment by 1
    return this;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    //inverse pop
    if (this.length === 0) return undefined;
    let oldHead = this.head; //popped off
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);

// console.log(list);
// console.log(list.shift());
console.log(list.shift());
console.log(list);
