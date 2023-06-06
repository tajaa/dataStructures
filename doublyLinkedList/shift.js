//SHIFTING

//Shifting removes a node from the beginning of the Doubly Linked List
//(inverse pop)

//Psuedo Code

//1. If length is 0, return undefined (edge case)
//2. Store the current head property in variable
//we'll call "oldHead"
//3. If the length is 1, set the head and tail property to be null
//3. Otherwise, update teh head to be the 'next' of the old head
//4.set the heads and  prev property to 'null'
//5. Set the old heads next to null
//6. Decrement the length
//return old head

//basically the same as singly linked list isntead you have to apy attention
//to previous so no real benefit to singly LL in this scenario

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
}
list = new DoublyLinkedList();

list.push("Harry");
list.push("Ron");
list.push("Hermione");
console.log(list);
// list.shift();
// console.log(list.shift());
list.shift();
list.shift();
list.shift();
console.log(list.shift());
