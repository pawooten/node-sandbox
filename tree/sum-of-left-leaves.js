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
 var sumOfLeftLeaves = function(root) {
    // Return the sum of all left leaves.
    const keeper = { sum: 0 };
    findLeftLeaves(root, keeper);
    return keeper.sum;
};

const findLeftLeaves = (current, keeper) => {
    // Does the current have a left child?
    if (current.left) {
        // Yes
        if (!current.left.left && !current.left.right) {
            // The left child exists and is a leaf, therefore it's value should be accumulated.
            keeper.sum += current.left.val;
        } else {
            // The left child exists but is not a leaf. Explore the left child in case one of it's children is a left leaf.
            findLeftLeaves(current.left, keeper);
        }
    }
    // Does the current have a right child which is not a leaf?
    if (current.right && (current.right.left || current.right.right)) {
        // Explore the right child, maybe one of it's children is a left leaf.
        findLeftLeaves(current.right, keeper);
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

const root = [3,9,20,null,null,15,7];
const result = sumOfLeftLeaves(getTree(root));
console.log('!');