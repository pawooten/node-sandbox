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
 * @return {number}
 */
 var minDepth = function(root) {
    let current = root;
    let nodeCount = 1;
    let recordKeeper = { minDepth: undefined };
    walkTree(current, nodeCount, recordKeeper);
    return recordKeeper.minDepth === undefined ? 0 : recordKeeper.minDepth;
};
const walkTree = function(current, nodeCount, recordKeeper) {
    if (!current) {
        return;
    }
    if (!current.left && !current.right) {
        // We've found a leaf
        if (recordKeeper.minDepth === undefined) {
            recordKeeper.minDepth = nodeCount;
        } else {
            recordKeeper.minDepth = Math.min(recordKeeper.minDepth, nodeCount);
        }
        return;
    }
    // Continue exploring
    if (current.left) {
        walkTree(current.left, nodeCount + 1, recordKeeper);
    }
    if (current.right) {
        walkTree(current.right, nodeCount + 1, recordKeeper);
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
};
const root = [3,9,20,null,null,15,7];
const result = minDepth(getTree(root));
console.log('!');