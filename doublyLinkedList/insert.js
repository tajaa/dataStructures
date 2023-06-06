//INSERT: ADDING a node in a doubly linked list by
//a certain position

//you pass in an index(position) and a value. Create a new
//node with that value and adds it to that position to the LinkedLIst
//main difference is we can optimize by starting at end
//by using .previous

//we can use the Get method to find out whether to start
//towards the end or beginning

//PsuedoCode

//1. If the inex is less than zero or greather than
//or equal to the length --> return false
//2. If the index is 0, use unshift
//3. If the index is the same as the length, push
//4. Otherwise, use the get method to access the index -1
//5. Set the next and prev properties on the correct nodes to link
//everything together
//6. Increment the length by 1
//7. Return true

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
  insert(index, val) {
    //"!!"coerces a boolean output
    if (index < 0 || index > this.length) return false; //b/c length is always
    //one greater than the index since idx begin at 0
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var newNode = new Node(val); //make the new node
    var prevNode = this.get(index - 1); //to the one we want to get
    var afterNode = prevNode.next;
    //b= inserted
    (prevNode.next = newNode), (newNode.prev = prevNode); // now making b to a <--connect; //making a to b-> connect
    //making a to b -> connect, making b to a <-
    (newNode.next = afterNode), (afterNode.prev = newNode);
    // b -> c connect,           c to b <- connnect
    this.length++;
    return true;
  }
}
list = new DoublyLinkedList();

list.push("Harry");
list.push("Ron");
list.push("Hermione");
// console.log(list);
// console.log(list);
// console.log(list.insert(0, "FIRST"));
// console.log(list);
// console.log(list.insert(1, "TONKS"));
console.log(list.insert(0, 11));
console.log(list.insert(2, 11));
console.log(list.insert(2, 11));
console.log(list);
console.log(list.insert(5, 11));
console.log(list);
console.log(list.insert(8, 11));
