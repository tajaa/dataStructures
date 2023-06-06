//BIG of Binary Search Trees

// Binary search trees
// - insertion: O(log n)
// - Searching: O(log n)
// - But its not guaranteed
// - (Log base 2 of n === log n)
// - Log N is good
// - If you double the number of nodes, you only increase the number of steps to insert/find by 1
// - Because its sorted, we can double nodes with number of steps b 1:
//     - As we double from number of nodes, 1 extra step
//     - 4x nodes: 2 extra steps
//     - 8x number of nodes: 3extra steps
//     - Log n grows very slowly compared to n squared or n log n or even linear time
//     - Only thing that is better is constant time! Takes a long time for it grow
//     - Same for insertion AND searching . Whether we find value or insert—same thing
//     - O of log N is the average case
// - Worst case—some binary search tree configs that are very slow.
