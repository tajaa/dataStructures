//when we call pop we remove from the tail

//seems simple 'cause we're keeping track of last item

//problem is to remove it, we have to assign a new tail
//and that involves going all the way through the list from
//the beginning b/c we don't have a backwards pointer

//we can't just take the tail and say "give me the one"
// "before this"--singly linked lists are not setup like this

//to get a new tail: after we pop off the end, we have to go
//all the way through the lest and take the 2nd to last item
//and make that the new tail
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
      //if there is no head
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // console.log(this);
    return this;
  }
  //   traverse() {
  //     var current = this.head; //start at head set current to be this head
  //     while (current) {
  //       console.log(current.val);
  //       current = current.next; //then we set it to be current.next
  //       //which makes it "Goodbye"
  //     }
  //   }
  pop() {
    //check if there are no nodes
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next; //keep going until there' s no where for
      //current to go to
    }
    // console.log(current.val);
    // console.log(newTail.val);
    this.tail = newTail;
    this.tail.next = null; //severs connection with "!"
    //makes sure its not pointing at anything
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      //this means there was one item and we popped it off
      //and we subtracted 1 from length now 0 items and we rest
      //heads and tails to be null
    }
    return current;
  }
}

var list = new SinglyLinkedList(); //*** HERES LST */
list.push("Hello!");
list.push("GOODBYE");
list.push("!");
list.pop();
// console.log(list);
list.pop();
console.log(list);

// console.log(list.traverse());
//this is one way to traverse a list to figure out a new tail

//but we don't want to get to the end of the list
//just second to last item

//popping Psuedo code:

//if there are no nodies in the list, return undefined
//loop through the list until you reach the tail
//set the next property of the 2nd to last node to be null
//set the tail to be the 2nd to last node
//decrement the lenght of the list by 1
//return the value of the node removed
