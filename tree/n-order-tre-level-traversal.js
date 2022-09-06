/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(values) {
    
    // The first value in the array becomes the root of the tree.
    let treeLevels = [[{val: values.shift(), children: [] }]];
    // Remove the null value separating the root from it's children
    values.shift();

    while (values.length > 0) {
        // Retrieve a reference to the nodes on the previous level of the tree.
        let parentNodes = treeLevels.slice(-1)[0];
        let childNodes = [];

        // Iterate over the nodes of the previous level of the tree.
        parentNodes.forEach(parent => {
            if (parent === null) {
                // Skip to the next non-null parent.
                return;
            }

            while (values[0] != null) {
                parent.children.push({val: values.shift(), children: [] });
            }
            childNodes = childNodes.concat(parent.children);
            // Remove the null separator to advance to the children of the next parent in this level
            values.shift();
        });
        treeLevels.push(childNodes);
    }

    // Flatten to node values
    const result = [];

    treeLevels.forEach(treeLevel => {
        result.push(treeLevel.map(node => node.val));
    });
    return result;
}