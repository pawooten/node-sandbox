/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
     // walk the tree, building arrays of nodes per level. Leftmost nodes in each level array are the farthest left nodes
    let hasChildren, level = 1, levelMap = new Map([
        [0, [root]]
    ]);
    do {
        hasChildren = walkTree(level, levelMap);
        level++;
    } while (hasChildren);

    // Iterate over each level of the tree
    [...levelMap.values()].forEach(level => {
        if (level.length > 1) {
            // Attach each node in this level to it's neighbor, except for the last node which should remain null
            for (let index = 0; index < level.length - 1; index++) {
                level[index].next = level[index+1];
            }
        }
    });

    return root;
};
const walkTree = function(level, levelMap) {
    let parentNodes = levelMap.get(level - 1);
    let children = [];
    parentNodes.forEach(parent => {
        if (parent && parent.left) {
            children.push(parent.left);
        }
        if (parent && parent.right) {
            children.push(parent.right);
        }
    });
    levelMap.set(level, children);
    return children.length > 0;
}

function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};
const getTree = function() {
    const seven = new Node(7, null, null, null);
    const three = new Node(3, null, seven, null);
    const five = new Node(5, null, null, null);
    const four = new Node(4, null, null, null);
    const two = new Node(2, four, five, null);
    const one = new Node(1, two, three, null);
    return one;
}
connect(getTree());
console.log('!');