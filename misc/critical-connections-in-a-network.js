/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
 var criticalConnections = function(n, connections) {
    // Determine if every node in the network is reachable excluding one connection at a time
    // If the network is no longer entirely trafersable, that connection is a critical connection.

    let criticals = [];
    const length = connections.length;
    for (let index = 0; index < length; index++) {
        let clone = [...connections];
        clone.splice(index, 1);
        if (!isTraversable(n, clone)) {
            criticals.push(connections[index]);
        }
    }
    return criticals;
};
const isTraversable = function(n, connections) {
    if (connections.length === 0) {
        return false;
    }
    // Grab the first connection arbitrarily and determine if all nodes are reachable by the remaining connections
    let firstConnection = connections.shift();
    let visitMap = new Map([ [firstConnection[0], true], [firstConnection[1], true] ]);

    let done, matches;
    do {
        done = true;
        matches = [...visitMap.keys()];
        let toRemove = [];
        connections.forEach((connection, index) => {
            if (matches.includes(connection[0]) || matches.includes(connection[1])) {
                // We found a connection to a node we can already reach! Add it to the network and process again to see
                // if the now expanded network gets another match.
                done = false;
                visitMap.set(connection[0], true);
                visitMap.set(connection[1], true);
                toRemove.push(index);
            }
        });
        while (toRemove.length > 0) {
            connections.splice(toRemove.pop(), 1);
        }
    } while (!done);

    for (let index = 0; index < n; index++) {
        if (!visitMap.get(index)) {
            // This node can't be accessed by the network
            return false;
        }
    }
    return true;
}

const n = 2, connections = [[0,1]];
const result = criticalConnections(n, connections);
console.log('!');