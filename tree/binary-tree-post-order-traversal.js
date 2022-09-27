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
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
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

const root = [1,null,2,3];
const result = postorderTraversal(getTree(root));
console.log('!');
