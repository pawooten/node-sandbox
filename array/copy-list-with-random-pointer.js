/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    // construct a deep copy of the list. 
    let current = head, previous, resultNodes = [], sourceNodes = [];
    
    // Convert the list into an array
    while (current) {
        sourceNodes.push(current);
        current = current.next;
    }

    // Iterate the array from last to first, creating a new result node for each source node
    for (let index = sourceNodes.length - 1; index >= 0; index--) {
        let sourceNode = sourceNodes[index];
        
        // Copy the index of the Node referenced by the random pointer
        current = new Node(sourceNode.val, previous, sourceNodes.indexOf(sourceNode.random));
        previous = current;
        resultNodes = [current, ...resultNodes];
    }

    // Connect the random pointers
    resultNodes.forEach(node => {
        if (node.random || node.random === 0) {
            node.random = resultNodes[node.random];
        }
    });

    return resultNodes[0];
};
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}
function getList(values) {
    let current, previous, nodes = [];
    
    // Iterate the array from last to first, buildin the linked list.
    // For now, set the random property of each Node to the index within values, since we
    // may or may not have instantiated the Node each random pointer points to.
    for (let index = values.length - 1; index >= 0; index--) {
        current = new Node(values[index][0], previous, values[index][1]);
        nodes = [current, ...nodes];
        previous = current;
    }

    // Now that we've instantiated a Node for each value, replace the random indexes with references to the Node
    nodes.forEach(node => {
        if (node.random || node.random === 0) {
            node.random = nodes[node.random];
        }
    });

    return nodes[0];
}
const result = copyRandomList(getList([[7,null],[13,0],[11,4],[10,2],[1,0]]));
console.log('!');