// Big O of Stacks

// Insertion: 0(1) (push)
// Removal: O(1) (pop)
// Searching: O(n)
// Access: O(n);

//stacks prioritize inseration and removal

//if you wanted t search over this, you would
//need to do .next .next and so on and traverse
//the whole stack/LL

//RECAP

// 1. Stacks are last in first out where the last value in
// is always the first one out
// 2. Stacks are used to handle function invocations
// (the call stack), for operations like undo/redo,
// and for routing (website back and forth) and more
// 3. They are not a built in data structure in JSON,
// but are relatively simple to implement
// 4. This is the preferred way to build a stack--
// no reason to store an array for 10k items
// if you're only using push and pop
