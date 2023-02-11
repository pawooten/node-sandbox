/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    // Create an array of empty objects which will become nodes of the tree.
    // Each node has it's own label as well as a collection of all of the labels contained in it's subtree.
    const nodes = [];
    let nodeLabel, nodeMap;
    for (let count = 0; count < n; count++) {
        nodeLabel = labels.charAt(count);
        nodeMap = new Map();
        nodeMap.set(nodeLabel, 1);
        // Initialize the labels array with this node's label only, since we must wait until the children are known
        // to populate the remaining labels.
        nodes.push({ label: nodeLabel, labels: nodeMap, children: [], connected: false });
    }

    // Iterate over the set of edges, connected parent nodes to their children.
    nodes[0].connected = true;
    let childNode, parentNode;
    for (const edge of edges) {
        parentNode = nodes[edge[0]];
        childNode = nodes[edge[1]];
        if (parentNode.connected) {
            parentNode.children.push(childNode);
            childNode.connected = true;
        } else {
            childNode.children.push(parentNode);
            parentNode.connected = true;
        }
    }

    // Recurse the tree, populating the set of labels for each subtree along the way.
    let childLabelMap;
    const walkTree = (current) => {
        // If there are no children, the labels array containing just the label of the leaf node is
        // returned because we skip the for loop
        for (const child of current.children) {
            // current.labels.push(...walkTree(child));
            childLabelMap = walkTree(child);
            for (const childLabel of childLabelMap.keys()) {
                if (!current.labels.has(childLabel)) {
                    current.labels.set(childLabel, childLabelMap.get(childLabel));
                } else {
                    current.labels.set(current.labels.get(childLabel) + childLabelMap.get(childLabel));
                }
            }
        }
        return current.labels;
    };
    // Iterate over each node and walk it's sub-tree if needed. Hopefully the entire tree has a single root
    for (const node of nodes) {
        if (node.children.length > 0 && node.labels.length === 1) {
            // We failed to populate this node!
            walkTree(node);
        }
    }

    const result = [];

    // Iterate over each node.
    let labelMatchCount;
    for (const node of nodes) {
        labelMatchCount = 0;
        for (const label of node.labels) {
            if (node.label === label) {
                labelMatchCount++;
            }
        }
        result.push(labelMatchCount);
    }
    return result;
};

const n = 4, edges = [[0,2],[0,3],[1,2]], labels = "aeed";
const result = countSubTrees(n, edges, labels);
console.log('!');