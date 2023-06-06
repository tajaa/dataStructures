//SET:This function should accept an index and a value and
//update the value of the node in DLL(List) @ the index
//with the new value

//it should return 'true' if the node is updated successfully or
//'false' if an invalid index is passed in

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
  //   set(index, val) {
  //     var foundNode = this.get(index);
  //     if (foundNode === true) {
  //       foundNode.val = val;
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.remove(1));
// console.log(list);
// console.log(list);
// console.log(list.shift());

// console.log(list);
// list.push();
// console.log(list.pop(5));
// console.log(list);
