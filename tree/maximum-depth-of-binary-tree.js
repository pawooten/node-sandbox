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
 var maxDepth = function(root) {
     if (!root) {
         return 0;
     }
    let recordKeeper = { maxDepth: 0 };
    walkTree(root, 1, recordKeeper);
    return recordKeeper.maxDepth;
};

const walkTree = function(currentNode, currentDepth, recordKeeper) {
    if (currentNode.left) {
        walkTree(currentNode.left, currentDepth + 1, recordKeeper);
    }
    if (currentNode.right) {
        walkTree(currentNode.right, currentDepth + 1, recordKeeper);
    }

    recordKeeper.maxDepth = Math.max(recordKeeper.maxDepth, currentDepth);
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
const root = [3,9,20,null,null,15,7];
const result = maxDepth(getTree(root));
console.log('!');