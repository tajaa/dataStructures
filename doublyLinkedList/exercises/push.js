class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = null;
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
      newNode.prev = this.tail; //make 45 newNode.prev
      this.tail = newNode; //now make the tail newNode
    }
    this.length++; //increment by 1
    return this;
  }
}

var doublyLinkedList = new DoublyLinkedList();

list.push(45);
list.push(49);
console.log(list);
