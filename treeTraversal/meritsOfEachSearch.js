// Merits of each First Searches
// 1. Breadth First Search compared to Depth First Search
//     1. Which Do we use?
//         1. Depends on tree.
//         2. In Breadth, we have a queue. So if the trees are very wide then there can be a ton of data into memory
//         3. In depth breadth, this could also be true if the tree is very deep
//     2. Uses cases for variants of DFS
//         1. In order
//             1. When you use In order on a BST, if we look at the data we get back, it is in order—lowest to highest
//         2. Pre Order
//             1. Can be used to “export” a tree structure so that it is easily reconstructed or copied —its output is in a tree order (for BSTS) which make it easily reconstructed
//                 1. You have information about which is the root but not with In order or Post
// 2. Recap
//     1. Trees are non-linear data structures that contain a root and child nodes
//     2. Binary trees can have values of any type, but at most two children for each parent (b/c comparison)
//     3. Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than its value and every node to the right is greater
//     4. We can search through trees using Breadth First Search and Depth First Search
