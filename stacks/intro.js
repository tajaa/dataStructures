//WHAT IS A STACK?

// A collection of data and it needs to abide by LIFO principle
//Last in, first out
//Last element added to the stack will be first element
//removed from the stack

//Queue is first in first out

//How is used? Books on your desk, plates, etc.
//Remove from the top

//Where stacks are used:

//Managing function invocations
//Undo and Redo
//Routing (history obejcts)is treated like a stack
//algorithms to store things we want to come back to

//more than one way implementing a stack:just a set of rules
//to store data in such a way that the last thing added
//is the first thing removed

//Array implementation

var stack = [];
// stack.push("google");
// stack.push("instagram");
// stack.push("youtube");
// console.log(stack);
//using push and pop in tandem creates a stack
console.log(stack.pop());
console.log(stack);
stack.unshift("create new file");
stack.unshift("resized file");
stack.unshift("cloned out wrinkle");
console.log(stack);
console.log(stack.shift());
console.log(stack);
//first thing in last thing out
//last thing in, first thing out

//adding or removing from the beginning is good for time complexity

//better to just use PUSH and an index. Much easier
//If you care about effeciency, you won't use an array for a stack
//if you have a bunch of data. Better to use a Linked List

//for stacks doesn't matter if it goes to the front or back of list
//just matters the order it went IN and the order it goes OUT
//and as long as we're removing from that same direction

//better to use push and pop
