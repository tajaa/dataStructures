//Array implementation - Stack from Scratch

//Singly Linked List implementation

//can use an array implementation or own class

//only care about two methods stack.push and stack.pop
//need class defined called STACK

//A STACK CLASS

//heads and tails are just pointers
class Node {
  constructor(value) {
    this.value = value; //value for each node
    this.next = null; //pointer to next node in the stack
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first; //create a var that stores
      //current first property on teh stack
      this.first = newNode; //reset first prop to be newly created node
      this.first.next = temp; //set next property on the node to be the previously
      //created variable
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null; //edge case when 1 thing in there
    }
    this.first = this.first.next; //this sets first to be null as well
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.push(4));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

//STACKS ARE SUPPOSED TO BE CONSTANT TIME SO WE'RE ADDING AND REMOVING
//FROM THE BEGINNING BUT WE'RE CALLING IT PUSH AND POP b/C IT IS A STACK

//in a stack, push and pop are supposed to be constant time
//but its not with SLL b/c weh ave to loop over entire list to find
//2nd to last element before popping off the tail

//instead its better to use shift and unshift

//The PSUEDO CODE: PUSH

//1. The function should accept a value
//2. Create a new node with that value
//3. if there are no nodes in the stack, set the first and last
//property to be the newly created node
//4. If there is at least one node, create a variable that stores
//the current first property on the stack
//5. Reset the first property to be the newly created node
//6. Set the next property on the node to be the previously
//created variable
//7. Increment the size of the stack by 1

//pushing and removing from beginning in SLL, its O(1)
//w a DLL it would be constant time to pop as well

//*** ******* PSUEDO CODE FOR POP   */

// 1. If there are no nodes in the stack, return null
// 2. otherwise, create a temporary variable to store the
// first property on the stack
// 3. If there is more than one node, set the first property
// to be the next property on the current first
// 4. Decrement the size by 1
// 5. Return the value of the removed node
