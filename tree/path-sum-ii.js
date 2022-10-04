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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    if (!root) {
        return [];
    }
    // Nodes may contain negative values, so we can't shortcircuit if we overshoot the target.
    // We must walk the path to each node and then filter out the paths whose sums don't match targetSum.
    const keeper = { targetSum, result: [] };
    walkTree(root, [], keeper);

    return keeper.result;
};

const walkTree = (current, path, keeper) => {
    if (current.left) {
        walkTree(current.left, path.concat(current.val), keeper);
    }
    if (current.right) {
        walkTree(current.right, path.concat(current.val), keeper);
    }
    if (!current.left && !current.right) {
        // current is a leaf.
        path.push(current.val);
        let currentSum = path.reduce((previous, current) => previous + current, 0);
        if (currentSum === keeper.targetSum) {
            keeper.result.push(path);
        }

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

const root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22;
const result = pathSum(getTree(root), targetSum);
console.log('!');