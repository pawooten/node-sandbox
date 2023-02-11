/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const results = [], targetIndex = graph.length - 1;

    const walkGraph = (index, path) => {
        if (index === targetIndex) {
            // We've reached the target!
            results.push(path.concat(index));
            return;
        }
        // We haven't reached the target, explore each path we can take

        for (const pathIndex of graph[index]) {
            walkGraph(pathIndex, path.concat(index));
        }
    };
    walkGraph(0, []);

    return results;
};

const graph = [[1,2],[3],[3],[]];
const result = allPathsSourceTarget(graph);
console.log('!');