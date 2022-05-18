/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
    // The signal is sent from k. Determine the time it takes for all nodes to receive the signal.

    // Initialize the map by setting each node as not visited.
    let nodeMap = new Map(), currentTime = 0;
    for (let tempN = 1; tempN <= n; tempN++) {
        nodeMap.set(tempN, { id: tempN, visited: false } );
    }
    // Set k as visited, since we're about to send the message from k.
    nodeMap.set(k, { id: k, visited: true });

    const nodes = [...nodeMap.values()];
    let done = false;
    // Continue until all nodes are visited.
    while (!done) {
        let unvisitedNodes = [], visitedNodes = [];
        nodes.forEach(node => {
            if (node.visited) {
                visitedNodes.push(node.id);
            } else {
                unvisitedNodes.push(node.id);
            }
        });
        // If there is a path to an unvisited node from a visited node, we should take it this round
        // If there are multiple paths to the same unvisited node from visited nodes, we should take the least expensive path.
        unvisitedNodes.forEach(unvisitedNode => {
            let bestTime = getBestTime(times, visitedNodes, unvisitedNode);
            if (bestTime > 0) {
                nodeMap.get(unvisitedNode).visited = true;
                currentTime += bestTime;
            }
        });

        // We are done if we've reached every node
        done = nodes.some(node => !node.visited);
    }

    return currentTime;
};

const getBestTime = function(times, visitedNodes, unvisitedNode) {
    let filteredTimes = times.filter(time => time[1] === unvisitedNode && visitedNodes.includes(time[0]));
    if (filteredTimes.length === 0) {
        // We can't reach this unvisited node from any visited node.
        return 0;
    }
    filteredTimes.sort((left, right) => left[2] - right[2]);
    // Return the lowest cost to reach the unvisited node
    return filteredTimes[0][2];
}

const times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2;
const result = networkDelayTime(times, n, k);
console.log('!');