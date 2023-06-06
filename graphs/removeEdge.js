//Graph Class
//use Adjacency list--we just need a single property
//to store the edges/connections/relationships
//undirected graph for now

//Adding a vertex

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
  //   removeVertex(vertex) {
  //     while (this.adjacencyList[vertex].length) {
  //       const adjacentVertex = this.adjacencyList[vertex].pop();
  //       //while there's items in vertex, pop off last one and call
  //       this.removeEdge(vertex, adjacentVertex);
  //     }
  //     delete this.adjacencyList[vertex];
  //   }
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
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");

g.removeEdge("Dallas", "Tokyo");

console.log(g.adjacencyList);
// graph.addVertex("Tokyo");
// graph.adjacencyList["Tokyo"].push("SOMETHING");
// console.log(graph);
// graph.addVertex("San Diego");
// console.log(graph);
// graph.addVertex("Tokyo");
// console.log(graph);

// graph.addVertex("Dallas");
// graph.addVertex("Tokyo");
// graph.addVertex("Aspen");
// graph.addEdge("Dallas", "Tokyo");
// graph.addEdge("Dallas", "Aspen");
// console.log(graph.adjacencyList);

// graph.removeEdge("Dallas", "Aspen");
// console.log(graph.adjacencyList);
// graph.removeEdge("Dallas", "Tokyo");
// console.log(graph.adjacencyList);

// graph.addVertex("Dallas");
// graph.addVertex("Tokyo");
// graph.addVertex("Aspen");
// graph.addVertex("Los Angeles");
// graph.addVertex("Hong Kong");
// graph.addEdge("Dallas", "Tokyo");
// graph.addEdge("Dallas", "Aspen");
// graph.addEdge("Hong Kong", "Tokyo");
// graph.addEdge("Hong Kong", "Dallas");
// graph.addEdge("Dallas");
// graph.addEdge("Los Angeles", "Hong Kong");
// graph.addEdge("Los Angeles", "Aspen");
// console.log(graph.adjacencyList);
