//GET: Takes an index or a number and returns the node at that index
//at that position

//There's an optimization on a Doubly Linked List

//Lets say we're looking for item at the index of 6
//We start at the head and we set a counter variable
//We set it equal to zero
//then we did a loop and added one to counter
//every .next, counter ++1 until counter=index we want

//if you want the second to last item in a 1000 item singly
//linked list, you have to traverse every item before it

//With a DLL, however, we can start at the end and
//do .previous
//optimal path and whether to start at tail or head depends
//on index provided

//PsuedoCode

//1.If the index is less than 0 or greater or equal to
//the length, return null
//2. If the inex is less than or equal to half of the
//length of the list then:
// loop through the list starting from the head and
//loop towards the middle
//And return the node once its found
//3. Otherwise, if the index is greater than half the
//length of the list:
//Loop through the list starting from the tail and loop towards the middle
//return the ndoe once its found

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
}
list = new DoublyLinkedList();

list.push("Harry");
list.push("Ron");
list.push("Hermione");

list.push(300);
list.push(400);
list.push(500);
list.push(600);
// console.log(list);
// console.log(list.get(2));
console.log(list.get(2));
console.log(list.get(5));
console.log(list.get(7));
