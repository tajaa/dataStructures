//
class PriorityQueue {
  constructor() {
    this.values = []; //store the heap
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode); //add it to very end
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      //   console.log(parentIdx);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;

      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.heapDown();
    }
    //heap down
    return min;
  }
  heapDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break; //and then we break out

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // this.time = Date.now();
    //when comparing just priority, we take this into
    //acct too
  }
}

let DC = new PriorityQueue();

DC.enqueue("flag raised", 5);
DC.enqueue("invasion", 1);
DC.enqueue("beacon lit", 4);
DC.enqueue("stun", 2);
DC.enqueue("shots fired", 3);

// console.log(DC);
console.log(DC.dequeue());
console.log(DC.dequeue());
console.log(DC.dequeue());
console.log(DC.dequeue());
console.log(DC.dequeue());
console.log(DC.dequeue());

//order they go in doesn't matter
//priority que is all that matters

//big 0 of insertion and removal: log(n)
