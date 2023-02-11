/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // Create a map whose keys are node indices, and values are an array of the node indices that are reachable from that node.
    const nodeMap = new Map();
    let currentNodeIndex;
    for (const edge of edges) {
        currentNodeIndex = edge[0];
        if (!nodeMap.has(currentNodeIndex)) {
            nodeMap.set(currentNodeIndex, [edge[1]]);
        } else {
            nodeMap.get(currentNodeIndex).push(edge[1]);
        }
    }

    let destinationReached = false;
    const walkGraph = (currentNodeIndex, path) => {
        if (currentNodeIndex === destination) {
            destinationReached = true;
        } else {
            const destionations = nodeMap.has(currentNodeIndex) ? nodeMap.get(currentNodeIndex) : [];
            for (const destination of destionations) {
                if (path.indexOf(destination) === -1 ) {
                    walkGraph(destination, path.concat(currentNodeIndex));
                }
            }
        }
    };
    walkGraph(source, []);
    return destinationReached;
};

const n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2;
const result = validPath(n, edges, source, destination);
console.log('!');