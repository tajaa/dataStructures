//shifting
//removing a new node from the beginning of a linked list

//Shifting Psuedo code//

//if there are no nodes, return undefined

//store the current head property in a variable

//set the head property to be the current heads next property

//decrement the length by 1

//return the value of the node removed

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
  //   traverse() {
  //     var current = this.head; //start at head set current to be this head
  //     while (current) {
  //       console.log(current.val);
  //       current = current.next; //then we set it to be current.next
  //       //which makes it "Goodbye"
  //     }
  //   }
  pop() {
    //check if there are no nodes
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next; //keep going until there' s no where for
      //current to go to
    }
    // console.log(current.val);
    // console.log(newTail.val);
    this.tail = newTail;
    this.tail.next = null; //severs connection with "!"
    //makes sure its not pointing at anything
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      //this means there was one item and we popped it off
      //and we subtracted 1 from length now 0 items and we rest
      //heads and tails to be null
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
}

var list = new SinglyLinkedList(); //*** HERES LST */
list.push("Hello!");
list.push("GOODBYE");
list.push("!");
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// console.log(list.shift());
list.shift();

list.shift();

list.shift();

list.shift();

list.push(100);
console.log(list);
list.push(2000);
console.log(list);
list.pop();
console.log(list);
list.shift();
console.log(list);
console.log("it works");
