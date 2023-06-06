//Add to the end and remove from the beginning

//instead of push and pop for a stack , we say
//ENQ and DQ

//ENQ is added to the end
//DEQ we're removing from the beginning (which we would call
//shift)

//add to end and remove from ehad

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode; //set this node be the first
      this.last = newNode; //and last property
    } else {
      this.last.next = newNode; //very end .next is newnode
      this.last = newNode; //now we move the pointer to make this the real last
    }
    return ++this.size;
  }
  dequeue() {
    //identical to shift
    if (!this.first) return null; //nothing in Q
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next; //set first property
    //to be next property of first

    --this.size;
    return temp.value;
  }
}

var q = new Queue();

q.enqueue("first");
q.enqueue("second");
q.enqueue("third");
console.log(q); // console.log(q);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

//EQUEUE PsuedoCode

// 1. This function accepts some value
// 2. Create a new node using that value passed
// to the function
// 3. If there are no nodes in teh queueMicrotask, set this node
// to be the first and last property of the queue
//4. Otherwise, set the next property on the currrent last
// to be that node, and then set the last property of the
//queue to be that node

//DEQUEUE PsuedoCode

// 1. We define the property--takes no arguments
// 2. If there is no first property, just return null
// 3. Store the first property in a variable
// 4. See if the first is the same as the last (check if
//     there only 1 Node)
// 5. If there is moer than Node, set the first property
// to be next property of first
// 6. Decrement the size by 1
