//SET: Set takes an index like get,but also takes
//a value to update the node at that index with

//set item at index 3 to now be "hello"
//You just have to call get and update the node
//PsuedoCode:

//1. Create a variable which is the result of the 'get'
//method at the index passed to the function

// If the get method returns a valid node, set the value
//of that node to be the value passed to the function

//return true
//otherwise return false

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
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined; //doesn't matter if you use
    //this.length or this.head ===0
    let oldHead = this.head;
    if (this.length === 1) {
      //if length is 1 and remove last item
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
  unshift(val) {
    var newNode = new Node(val); //here's our new node call "Hagrid"
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode; //our current "head" is "harry" so this now points to
      //hagrid
      newNode.next = this.head; //now this points to Harry
      this.head = newNode; //but now we make the head newNode
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined; //can't have it equal to the
    //to the length b/c the highest index, just like arrays, is always
    //one less than the length
    var count, current; //you can also just put 'var' in var count=, var current =
    if (index <= this.length / 2) {
      console.log("WORKING FROM START");
      count = 0; //starting from left
      var current = this.head;
      while (count != index) {
        current = current.next; //traverse the list
        count++;
      }
    } else {
      //start at the end of list
      console.log("WORKING FROM END");
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }
}
list = new DoublyLinkedList();

list.push("Harry");
list.push("Ron");
list.push("Hermione");
// console.log(list);
console.log(list.set(0, "SERIUS~"));
console.log(list.set(2, "VOLDEMORT!"));
console.log(list);
