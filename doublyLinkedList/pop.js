//POP

//Removing a node from the end of the doubly linked list
//poping from a singly linked list is worse b/c to remove the tail
//we have to find item before the tail and set the .next
//property to null but we cant work backwards and we need to traverse
//the whole list and get 2nd to last item and sever that tie

//easier with a DL list is easier b/c we start at tail
//and access .previous so if we want to remove last item
//we start there and work backwords

//PSUDO CODE

//1. If tehre is no head, return undefined
//2.Otherwise, store the current tail in a variable to return later
//3. if the length is 1, set the head and tail to be null
//4. update the tail to be previous Node

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
}
list = new DoublyLinkedList();
list.push(9);
list.push(10);
list.push(11);
// console.log(list);
// console.log(list);
// console.log(list.pop());
list.pop();
console.log(list.pop());
list.pop();
console.log(list);

//going through the steps

//1. create a new node (var = poppedNode)

//2. We set the new tail to be the one right before the new
//node (much easier than in singly linked list) we don't traverse entire lenth
//we jsut start at the end and do .previous

//3.then we set this.tail.next = empty
//4.take old tail poppedNode.prev = epmtpy (chop second connect)
//5. then we substract 1 from length and return the poppedNode
