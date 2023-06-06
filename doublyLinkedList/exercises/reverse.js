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
      this.tail.next = newNode;
      newNode.prev = this.tail; //make 45 newNode.prev
      this.tail = newNode; //now make the tail newNode
    }
    this.length++; //increment by 1
    return this;
  }
  pop() {
    if (this.head === 0) {
      return undefined;
    } else {
      var poppedNode = this.tail;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = poppedNode.prev; //update tail to be previous Node
    this.tail.next = null; //sever
    poppedNode.prev = null; //sever
    this.length--;
    return poppedNode;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    //inverse pop
    if (this.length === 0) return undefined;
    let oldHead = this.head; //popped off
    if (this.length === 1) {
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
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next; //traverse the list
        count++;
      }
    } else {
      count = this.length - 1; //if tail =10, then count @ 9 b/c idx =9
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) {
      return this.pop();
    } else {
      let removedNode = this.get(index);
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
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
  reverse() {
    if (this.length === 0) return undefined; //edge cases
    if (this.length === 1) return this;
    else {
      //[100, 201, 250, etc..]

      //swap heads and tails
      let node = this.head; //let 100 = this .head
      this.head = this.tail; //set it to be tail now
      this.tail = node; //let tail be current tail

      //previous and next have remained the same
      //so we have to make prev null b/c always starts as null
      //if you start from the beginning
      let prev = null; //

      for (var i = 0; i < this.length; i++) {
        let next = node.next; //
        node.next = prev;
        node.prev = next;
        prev = node;
        node = next;
      }
      return this;
    }
  }
  print() {
    //this is just so we can see what's happening
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new DoublyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
console.log(list.reverse());
console.log(list.print());
console.log(list.reverse());
console.log(list.print());

///* Function to reverse a Doubly Linked List */
// function reverse() {
//     var temp = null;
//     var current = head;

//             /*
//              * swap next and prev for all nodes of doubly linked list
//              */
//             while (current != null) {
//                 temp = current.prev;
//                 current.prev = current.next;
//                 current.next = temp;
//                 current = current.prev;
//             }

//             /*
//              * Before changing head, check for the cases like empty list and list with only
//              * one node
//              */
//             if (temp != null) {
//                 head = temp.prev;
//             }
//         }

//we're essentially just swapping the next nad prev pointers
//and then spitting out that output. Its much simpler
