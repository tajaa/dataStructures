//Big O of Doubly Linked Lists

//Insertion: O(1)
//Removal: O(1)
//Searching - O(N)
//ACCESS - O(N)

//(TECHNICALLY searing is O(N/2) but that's still O(N)

//linked lists excel at insertion and deletion

//Removal for a DLL is always constant--not case for SLL:
//if we are removing from the end of a SLL we have to iterate
//over whole thing to get to the 2nd to last item to make that
//the new tail

//for a DLL, its constant time b/c you don't need to traverse
//entire list 'cause you have .prev

//RECAP>>>>>>>>>

//1. Doubly linked lists are almost identical to Singly
//linked lists except there is an additional pointer to
//previous nodes
//-if you need to start at the end and work backwards, like browsers
//accessing data in a reverse manner
//like browser history, its often done with a DLL b/c every page
//has a next and previous

//DLL are better for finding nodes--half the time
//but it does take up more memory considering the extra pointer
