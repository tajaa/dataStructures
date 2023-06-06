//take a link list and reverse it in PLACE

// [13]->[27]-> [32]-> [71]
// head                tail

//You make the head the tail and work backwards from there

//Psuedo Code:

//1.Swap the head and tail

//2. Create a variable called 'next'

//3. Another called 'prev'

//4.Create a variable called current to initalize at the head

//5. set 'next' to be the next-property on whatever node is

//6. Set the next property on the node to be whatever prev is

//7.Set prev to be the value of the node variable

//8. Set the node variable to be the value of the next variable

//6. Set

//REVERSE LIST
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
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop(); //
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  //three variables to keep track: currentNode,next var, and previous var
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next; //this means its undefined by definition
    var prev = null; //we need to make sure the tail .next is null

    for (var i = 0; i < this.length; i++) {
      //where 'this'is whatevers passed in
      next = node.next; //whatever currently looking at .next
      //we're saving it in a var so we can move onto it
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    //this is just so we can see what's happening
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
// console.log(list.print());
// list.reverse();

list.reverse();
console.log(list.print());

list.reverse();
console.log(list.print());

list.reverse();
console.log(list.print());
//walk through
//[100,    201,    250,    350,    999]
// node     next
////[100,    201,    250,    350,    999]
//   prev    next
///[100,    201,    250,    350,    999]
//   prev   node    next
///[201 -> 100,    201,    250,    350,    999]
/// prev        node.next   node
//1. first time through node = this.head
//2. 'next' is = node.next which is 201
//3.now node.next = prev which is 'null' so 100 -> null
// we had not redefined "node.next"yet only "Next" to equal node.next
//4.Then, we shift previous to be node so now node 100
//[100,    201,    250,    350,    999]
// prev    next
//5. and now node to be what next was which was 201
////[100,    201,    250,    350,    999]
// . prev   node
//now we loop all over again

//1. next = node.next which 250
//[100,    201,    250,    350,    999]
// prev   node   node.next
//2. node.next = previous (reset to be previous)
//b/c 100 previous, in order for it to be node-next,
//it must come in front of 201 so that 201-> 100
//[201, 100, 250,    350,    999]
// prev -> node
//then we update previous to be the node
//and then we set node to be next
//[201, 100, 250,    350,    999]
// prev     node

//then we start over

//1. next = node.next so next =350
////[201, 100, 250,    350,    999]
//2. node.next = prev for node.next to = 201, 250 must be in front of 201 b/c 250 is node
//3. so //[250, 201, 100, 350,    999]
//     prev           next
//4. node = next
//5.so //[250, 201, 100, 350,    999]
// .   prev             node
//start again

//1. next = node.next so since node=350, next is 999
// so now [250, 201, 100, 350,    999]
// prev           node    next
//2. node.next = prev so in order for node.next to equal 250, node (350)must be
//in front of 250 so -> [350, 250, 201, 100, 999]
//                                           next
// 3. and now prev = node so now prev =350
// [350, 250, 201, 100, 999]
//  prev                next
//4. now node = next
//5. [350, 250, 201, 100, 999]
// .  prev                node
//start over

// next = node.next there is no node next is null
//2.node.next = is null so last element 999 = prev(350)so
//and prev=node
//3. [999, 350, 250, 201, 100]
// .  prev

//[100,    201,    250,    350,    999]

//*BIG O COMPLEXITY of SINGLY LINKED LIST

//insertion - 0(1) (constant time no matter how big)
//not same if we have an array b/c you have to shift the index
//and on average you have O(n) so insertion time C is better
//on singly linked list

//Removal - it dpeneds..0(1) or O(N)
//depends on where you're removing from--beginning, its O(1)
//if its from the end--you have to traverse whole linked list -1

//Seraching - O(N):you have to check every node

// Access - O(N): getting a certain node out, as list grows, so does number
//of operations

//compared to an array--it has constant time of O(1)because its contant
//insertion may be difficult but RAM is easy

//singly linked lists excel at inseration and deletion
// if you need access, you need an array

//RECAP:

//1. Singly linked lists are an excellent alternative to arrays when
//insertion and deletion at the beginning are frequently required
//2. Arrays contain a built in index where as Linked LIsts do not
//3. The idea of a list data structure that consists of nodes is the
//foundation for other data structures like Stacks and Queues
