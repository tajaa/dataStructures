// //Max Binary heap
// 6. Representing Heaps
//     1. For any index of an array n…
//     2. The left child is stored at 2n + 1
//     3. The right child is at 2n + 2
// ￼
// 1. If you want to know what are the children of 6, you use 2n + 1 and 2n+2 which is 2(6) + 1 =13 and 2(6) + 2 = 14 so its children are the values 1 and 4
// 2. If you want to go backwards, if you have child node and want to know its parent:
//     1. For any child node at index n…
//     2. Its parent is at index (n-1)/2 (floored)
//     3. So index 13 is 1
//         1. To find its parent, we subtract 13-1=12 and divide by 2 and gives us 6. At index 6 we have value 5, its parent
//     4. Another example: at index 10, we have value 11. To find its parent, 10-1= 9 then 9/2 =4.5 floored = 4 and the value is 12—the parent.
// 3. Defining Our Class
//     1. Class Name:
//         1. MaxBinaryHeap
//     2. Properties:
//         1. values= [];
//     3. All we need is that values property. No node class, no prev or next or left or right. Just an empty array to start.
//     4. Instead of connecting a bunch of nodes manually, we store them in an array and we use their position to model the actual structure
//         1. The position, their index, the individual numbers corresponding to each items position is what gives the structure of the heap
//         2. To make something somethings else parent, it just goes to the correct index
//     5. Adding to a MaxBinaryHeap
//         1. Add to the end
//         2. Bubble up
//     6. When adding a new node, it goes to the left first.
//         1. It makes a right branching node only if there’s already a left sibling
//         2. Then we compare with each parent node to see which is bigger
//             1. Bubbles up until it stops being the larger number
//             2. Max number is at top
//         3. No order between left and right siblings, other that they are less
//   Thant heir shared parent in a MaxBinaryHeap
// 4. Psuedocode
//     1. Push the value into the values property on the heap
//     2. Bubble Up:
//         1. Create a variable called index which is the length of the values property -1
//         2. Create a variable called parentIndex which is the floor of (index-1)/2
//         3. Keep looping as long as the values element at the parentIndex is less than
//              the values element at the child index
//             1. Swap the value of the values element at the parentIndex
// with the value of the element property at the child index
//             2. Set the index to be the parentIndex and start over

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]; //store the heap
  }
  insert(element) {
    //takes element or value
    this.values.push(element); //push it into values at the end
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1; //gives us index
    //will keep track of where newly inserted item is
    //will start as last idx but if we swap, update
    const element = this.values[idx]; //store value of element
    //itself at the indx
    while (idx > 0) {
      //this way we know E is largest E w/ idx>0
      //need to find indx of parent
      let parentIdx = Math.floor((idx - 1) / 2);
      //   console.log(parentIdx);
      let parent = this.values[parentIdx]; //this.values of parentidx
      if (element <= parent) break;
      //this swaps element for parent
      this.values[parentIdx] = element; //put 55 where 33 was
      this.values[idx] = parent; //put 33 where 55 was
      console.log(parent);
      //this swaps parent for element
      idx = parentIdx; //b/c if we don't update idx (6) then parent idx
      //will always be 2 which is 33 and we'll just be in infinte loop
      //we now have to see what the parent of 55 is from idx of 2
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
// console.log(heap);
//[41, 39, 33, 18, 27, 12, 55]
// 0   1   2   3   4   5   6
//so w/ 55 in index is 6
//but the element is 5

//we need to take the idx of 55 to
//find the parent
