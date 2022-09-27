/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    if (!root) {
        return [];
    }
    const keeper = { nodeValues: [] };
    walkTree(root, keeper);
    while (keeper.nodeValues.slice(-1)[0] === null) {
        keeper.nodeValues.pop();
    }
    return keeper.nodeValues;
};

const walkTree = function(current, keeper) {
    if (current.left) {
        walkTree(current.left, keeper);
    }
    if (current.right) {
        walkTree(current.right, keeper);
    }
    if (current) {
        keeper.nodeValues.push(current.val);
    }
}


const root = [1,null,3,2,4,null,5,6];