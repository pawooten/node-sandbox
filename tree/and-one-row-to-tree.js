/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
 var addOneRow = function(root, val, depth) {
    // Handle the special case where the root is being replaced.
    if (depth === 1) {
        return { val: val, left: root, right: null };
    }

    // Retrieve references to the set of nodes of depth - 1, aka the parents of the nodes which must be displaced to insert the new nodes.
    const keeper = { parentNodes: [] };
    findParentNodes(root, 1, depth - 1, keeper);

    let tempLeft, tempRight;
    // Iterate over each parent node
    keeper.parentNodes.forEach(parentNode => {
        tempLeft = parentNode.left;
        parentNode.left = { val: val, left: tempLeft, right: null };
        tempRight = parentNode.right;
        parentNode.right = { val: val, left: null, right: tempRight };
    });
    return root;
};

const findParentNodes = (current, depth, targetDepth, keeper) => {
    if (depth === targetDepth) {
        // We've reached the target, add current to the list of parent nodes.
        keeper.parentNodes.push(current);
        return;
    }
    if (depth < targetDepth) {
        if (current.left) {
            findParentNodes(current.left, depth + 1, targetDepth, keeper);
        }
        if (current.right) {
            findParentNodes(current.right, depth + 1, targetDepth, keeper);
        }
    }
};

const getTree = function(values) {
    let treeLevels = [[{val: values.shift(), left: null, right: null }]];
    while (values.length > 0) {
        // The last level of the tree needs it's children attached, peak rather than pop
        let parentNodes = treeLevels.slice(-1)[0];
        let childNodes = [];
        parentNodes.forEach(parent => {
            let leftValue = values.shift(), rightValue = values.shift();
            if (leftValue != null) {
                leftValue = { val: leftValue, left: null, right: null };
                childNodes.push(leftValue);
            }
            parent.left = leftValue;

            if (rightValue != null) {
                rightValue = { val: rightValue, left: null, right: null };
                childNodes.push(rightValue);
            }
            parent.right = rightValue;
        });
        treeLevels.push(childNodes);
    }
    return treeLevels[0][0];
}

const root = [4,2,6,3,1,5], val = 1, depth = 2;
const result = addOneRow(getTree(root), val, depth);
console.log('!');