//UNSHIFTING: Add node to beginning of D-L-L

//All we do is find the head
//we make a new node
//Point new node.next at the current head
//then we point the old head.prev (current head) @ the new node
//then make it the new node the head

//PsuedoCode

//1. Create a new node with the value passed to the function
//2. if the length is 0 then set head to be the new node
//AND set hte tail to be the new node
//3. OTHERWISE:
//set the prev property on the head of the
//list to be the new node
//AND set the next property on the new node to be the head property
//AND update the head to be the new node
//4. Increment the length
//5. return the list

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
}
list = new DoublyLinkedList();

list.push("Harry");
list.push("Ron");
list.push("Hermione");

list.unshift("Hagrid");

list.pop();
list.pop();
list.pop();
list.pop();
console.log(list);
list.unshift(1000);
console.log(list);
