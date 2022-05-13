/**
 * @param {number[][]} graph
 * @return {boolean}
 */
 var isBipartite = function(graph) {
    // graph[u] is an array of nodes that node u is adjacent to.

    // A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that
    // every edge in the graph connects a node in set A to a node in set B.

    // return true iff the graph is bipartite.

    // Determine all edges in the graph.
    const edges = [...getEdges(graph)];
    return edges.length % 2 === 0;
};
const getEdges = function(graph) {
    let edgeMap = new Map();
    graph.forEach((graphNode, index) => {
        graphNode.forEach(adjacentNodeIndex => {
            let edge = [index, adjacentNodeIndex];
            if (index > adjacentNodeIndex) {
                edge = [adjacentNodeIndex, index];
            }
            edgeMap.set(edge.toString(), edge); // Each edge will be duplicated in the array, so we're overwriting every value once, but who cares
        });
    });
    return edgeMap.values();
}
const graph = [[1,3],[0,2],[1,3],[0,2]];
const result = isBipartite(graph);
console.log('!');