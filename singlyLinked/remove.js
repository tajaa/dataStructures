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
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;

    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift(); //remove the first thing
    if (index === this.length - 1) return this.pop(); //
    var previousNode = this.get(index - 1); //retrieve the node 1 before the one we're trying
    //to remove
    var removed = previousNode.next; //so this is now 250
    previousNode.next = removed.next; //here, we're bridging Previousnode -> 350
    this.length--;
    return removed;
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);

list.remove(0);
list.remove(1);
list.remove(2);
console.log(list);
list.remove(1);
console.log(list);
list.remove(0);
console.log(list);
console.log(list.remove(-1));
//REMOVE ////////

// Removing a node from the linked list at a specific position

//Psuedo Code

//1. If the index is less than zero or greater than the length, return undefined

//2. if the index is the same as the length-1, pop

//3. if the index is 0, shift

//4. otherwise, using the get method, access the node at the index -1

//5. set the next property on that node to be the next of the next node

//6. decrement the lenght

//7. return the value of the node removed

//EX: if we want o remove index of 1
//1. We first need to find that item
//2. We take it out--but to do that, we need to take the previous one
//and setting its "next" to the "deleted one's" next

//so if we're trying to remove 250 from
//100, 201, 250, 350
//we find the previous node (201)

//we make a variable called removed
//we set it equal to previousNode.next

//then we set previousNdoe.next = removed.next

//so we take 201 and set its next 350
