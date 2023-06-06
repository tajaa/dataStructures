//UNSHIFTING

//Adding a new node to the beginning of the linked list

//all we have to do is say is here is the new head
//point it to the old head

//psuedo code:
//1. this function should accept a value
//2. Create a new node using the value passed to the function
//3. If there is no head property on the list, set the head and
// tail to be the newly created node
//4. Otherwise, set the newly created nodes next property to be
//the current head property on the list
//5. Set the head property on the list to be that newly created
//node
//6. Increment the length of the list by 1
//7. Return the linked list

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
      //this code runs if head is empty
      this.head = newNode;
      this.tail = this.head; //both are set to new node
    } else {
      //this code runs w/ @ leat 1 element
      newNode.next = this.head; //newNode.next refers to
      //thing that is pointed at and this is saying its this.head
      //but that should be obvious--this is a way of moving
      //the "old" head forward by marking it Next
      this.head = newNode; //this now makes newNode the new head
    }
    //this code runs in either scneario
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("Goodbye");
list.push("!");
console.log(list);
list.unshift("FIRST");

list.pop();
list.pop();
list.pop();
list.pop();
console.log(list);
list.unshift("Add me!");
console.log(list);

//difference between unshift and push is that unshift adds on top of stack
//and push adds at the end of the stack
