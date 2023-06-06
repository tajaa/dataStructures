//REMOVE: Removing a node in a Doubly Linked List
//by a certain position

//take advantage of Get to check if something is closer
//to the head or tail

//Remove PsuedoCode:
//TAKES AN INDEX
//1. If the index is less than zero or greater than or equal to
//the length, return undefined
//2. If index is 0, shift
//3.If the index is equal to length-1, pop
//4. Otherwise, the get method to retrieve the item
//to be removed
//5. then you have to update the 'next' and 'prev' properties
//to remove the node correctly from the list
//6. Set the next and prev to null on the found node
//7. decrement the length
//8. return the removed node
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
  remove(index) {
    //w/ insert it can be ">" beacuse you can append to end
    //here we're removing so we need ">=" b/c if removing 8 items,
    //there's nothing at index 8
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(); //if trying to remove from begininning
    if (index === this.length - 1) return this.pop(); //from the end
    let removedNode = this.get(index);
    // let beforeNode = removedNode.prev;
    // let afterNode = removedNode.next;
    // beforeNode.next = afterNode;
    // afterNode.prev = beforeNode;

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
list = new DoublyLinkedList();

list.push("Harry");
list.push("Ron");
list.push("Hermione");

// console.log(list.remove(1));
// console.log(list.remove(100));
list.push("Hahaha");
list.push("hello");
// console.log(list.remove(4));
console.log(list.tail);
//A B C D E F

//if tryingt o remove C, we need to send B.next to C.next
//removedNode.prev.next = removedNode.next;

//now we need to point D to 'B' which is removedNode.prev
//removedNode.next.prev = removedNode.prev
