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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    let recordKeeper = { found: false };
    walkTree(root, 0, targetSum, recordKeeper);
    return recordKeeper.found;
};
const walkTree = function(currentNode, previousValue, targetSum, recordKeeper) {
    // Overwrite the value of currentNode with the sum of it's value plus the cost to reach it from the root.
    currentNode.val += previousValue;
    if (!currentNode.left && !currentNode.right) {
        // This node is a leaf. Did we find a match?
        if (currentNode.val === targetSum) {
            // Yes! Hooray
            recordKeeper.found = true;
            return;
        }
        // This is a leaf, but it doesn't match targetSum
        return;
    }
    // Not a leaf node.
    if (currentNode.left) {
        walkTree(currentNode.left, currentNode.val, targetSum, recordKeeper);
    } 
    if (currentNode.right) {
        walkTree(currentNode.right, currentNode.val, targetSum, recordKeeper);
    }
}


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

const root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22;
const result = hasPathSum(getTree(root), targetSum);
console.log('!');