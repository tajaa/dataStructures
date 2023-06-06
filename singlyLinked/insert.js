//INSERT

//adding a node to the Linked List at a specific
//location

//Similar to set in that it takes an index and a value

//if we want to insert 17 at index of 2, we need to find
//item at index of 1 and connect that to our new node but first
//we take our new node '17' and point it to 77 (whats)
//at index 2 THEN we have what's at 1 point to new node '17'
//

//PsueCode

//1. define a function that takes in 2 things:index, value
//2. If the index is 0< or greater than the length, return false
//3. if the index is the same as the length, push a new node
//to the end of the list
//4. If the index is 0, unshift a new node to the start of list
//5.So first bits can be a couple conditional statements
//6. Otherwise, create newNode use the get method, access the node at the
//index -1
//7. Set the next property on that node to be the new node
//8. Set the next property on the new node to be the previous next
//9. Increment the length
//10. return true

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
  insert(index, val) {
    if (index < 0 || index > this.length) return false; //!! boolean operator Not
    if (index === this.length) return !!this.push(val); //inserts at the end
    if (index === 0) {
      //inserst at beginning
      this.unshift(val);
      return true;
    } //inserst at beginning
    var newNode = new Node(val); //defining our new node
    var prev = this.get(index - 1); //we need to find the item righ tbefore the
    //searched index using our get method--save to variable
    var temp = prev.next;
    prev.next = newNode; //this is our indexed newNode in right spot
    //but since its inserted, we need to hold its previous index value in var temp
    newNode.next = temp; //holding the temp
    this.length++;
    return true;
  }
}

var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("Goodbye");
// list.push("!");
// list.push("<3");
// list.push(":)");

list.push(100);
list.push(201);
list.push(250);
list.push(350);
// console.log(list);
list.insert(0, "First");
// console.log(list);

console.log(list.insert(0, "Firstttttt"));
console.log(list.insert(7, "last"));

//GOAL IS TO SET IN BETWEEN TWO NODES

// list.push(100);
// list.push(201);(previous)
//NEW NODE HERE newNode = new Node(val)
//now we need to connect prev to our newNewnode
//and newNode to whatever came after previous which is 201

//250 used to be .next so if we just set it without
//storing this old node somehwere, we'll lose it
//so set it to temp--its the previous.next
//before insertion of the new node

// list.push(250);connect newNode to this
//we have to do it without erasing this node

// list.push(350);

//prev.next IS the new node because prev = get -1 of index + next = NewNode
//and now newNode.next is holding temp
//where we held in memory the node we were pushing forward to amke room
//for new node

//this works beacuse of the order it happens:

// var newNode = new Node(val);
//var prev = this.get(index-1)
//var temp = prev.next
//prev.next = newNode;
//newNode.next = temp;
