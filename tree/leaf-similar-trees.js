/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    const values1 = [], values2 = [];
    const walkTree = (current, values) => {
        if (!current.left && !current.right) {
            // This is a leaf node, push it's value.
            values.push(current.val);
        } else {
            // This is not a leaf node.
            if (current.left) {
                walkTree(current.left, values);
            }
            if (current.right) {
                walkTree(current.right, values);
            }
        }
    };
    walkTree(root1, values1);
    walkTree(root2, values2);
    const length = values1.length;
    if (length !== values2.length) {
        // A different count of leaf nodes between the two trees indicates they are not similar.
        return false;
    }
    // Iterate over each leaf node value and verify they match, if not, the trees are not similar.
    for (let index = 0; index < length; index++) {
        if (values1[index] !== values2[index]) {
            return false;
        }
    }
    // We've iterated across each value without short circuiting, therefore, the trees must be similar.
    return true;
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

const root1 = [1,2,3], root2 = [1,3,2];
const result = leafSimilar(getTree(root1), getTree(root2));
console.log('!');