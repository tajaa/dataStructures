//QUEUE: First in First Out

//How do we use them in programming?

// 1. background tasks
// 2. uploading resources
//3. Printing/task processing

//You can build these with arrays or a own class

//QUE CLASS

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//queue classes are lighter weight

var q = [];

// we can add to beginning or end

q.push("First", "Second", "Third");
console.log(q);
console.log(q.shift());
console.log(q.unshift("First"));
console.log(q);

//to get desired result we can do:
//1. unshift combined with pop
//OR
//2. Push combined with shift

//In stacks you could use push and pop
//to make a stack and you would never have to
//reindex entire array

//Unlike a Queue, there's no way around it--which is
//why it makes sense to make classes generally
