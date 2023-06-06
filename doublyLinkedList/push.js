//Pushing Psuedocode

//1. Create a new node with the value passed to the function
//2. If the head property is null, set the head and tail to be
//the newly created node
//3. If not, set the  next property on the tail to be that node
//4. Set the previous property on the newly created node to be
//the tail
//5. Set the tail to be the newly created node
//6. Increment the length
//7. return the doubly linked list

class Node {
  //node just stores a piece of data like 'val'
  //and stores a reference to the next-node
  //and in this case, prev-node
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
      this.head = newNode; //set head and tail to be newly created node
      this.tail = newNode; //first value passed in will be heads and tails
    } else {
      this.tail.next = newNode; //this is making sure 99->100
      newNode.prev = this.tail; //storing old tail in node.prev
      this.tail = newNode; //this is making sure 100 is now the new tail
    }
    this.length++;
    return this;
  }
}

list = new DoublyLinkedList();
list.push(99);
list.push(100);
// console.log(list);
list.push("last ITEM");
console.log(list);
