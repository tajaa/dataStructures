class MaxBinaryHeap {
  constructor() {
    this.values = []; //store the heap
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;

    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      //   console.log(parentIdx);
      let parent = this.values[parentIdx];
      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;

      idx = parentIdx;
    }
  }
  extractMax() {
    //[55, 39, 41, 18, 27, 12, 33]
    const max = this.values[0]; //stores for element
    //as max
    const end = this.values.pop(); //gives us end
    this.values[0] = end; //this puts last value at position 0
    //the first value now equals whatever was popped off end
    if (this.values.length > 0) {
      this.heapDown();
    }

    //heap down

    return max;
  }
  heapDown() {
    // 0
    //[33, 39, 41, 18, 27, 12]
    let idx = 0;
    const length = this.values.length; //lenght of array
    const element = this.values[idx]; //the value. equal to 33 at beginning

    //same as this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1; //left child idx
      let rightChildIdx = 2 * idx + 2; //right child idx
      let leftChild, rightChild;
      let swap = null; //keeps track if we did any swaps in this loop
      //if there is no left or right child that is larger,
      //swap will stay = null

      //first thing is to check if idx is in bounds
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]; //if valid indx, let leftchild
        //equal the value at the indx of this.values[leftChild]
        //so to begin with leftChild of this.values[leftChild] is
        //the value that is at 1 which is 39 so now 39 is in leftChild
        if (leftChild > element) {
          swap = leftChildIdx; //this variable keeps track of position
          //that we're going to swap with
        }
      }
      if (rightChildIdx < length) {
        //this first part checks to see
        //if the index exists
        rightChild = this.values[rightChildIdx]; //rChild=value at idx of rChildIdx
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          //checking to make sure the rightchild is what we're swapping with
          swap = rightChildIdx;
        }
      }

      if (swap === null) break; //and then we break out
      //**SWAP BELOW */
      this.values[idx] = this.values[swap]; //now we're swapping the first thing
      //(idx) with this.values of swap--swap is an idx (either l or r child idx)
      //41 goes wehre 33 was (at 0)
      this.values[swap] = element; //element(33) goes where the swap was which was
      //where 41 was

      idx = swap; //we update idx to be what was swapped. So if we swapped
      //41 (idx2),then we're now looking @ the children that correspond to
      //index of two rather than 0
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// console.log(heap);
// console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
