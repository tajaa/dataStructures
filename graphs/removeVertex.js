class Graph {
  constructor() {
    this.adjacencyList = {}; //equals object
  }
  addVertex(vertex) {
    //adds a key to adjacencylist w/name of vertex
    //and its value to be an empty array
    //this part below is error handling to check
    //if key/vertex doesn't already exist
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    //if nothing here already, then make empty array
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    //take current adj list of v1, filter it, keep everything where
    //it is not equal to vertex2
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      //this const will refer to the popped off item
      const adjacentVertex = this.adjacencyList[vertex].pop();
      //while there's items in vertex, pop off last one and call
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  //   removeVertex(vertex) {
  //     for (var i = this.adjacencyList[vertex].length - 1; i >= 0; i--) {
  //       const adjacentVertex = this.adjacencyList[vertex].pop();
  //       this.removeEdge(vertex, adjacentVertex);
  //     }
  //     delete adjacencyList[vertex];
  //   }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

g.removeVertex("Hong Kong");
g.removeVertex("Aspen");

console.log(g.adjacencyList);
