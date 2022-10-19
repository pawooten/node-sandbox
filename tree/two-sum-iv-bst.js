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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    // Given the root of a BST and a target number k, return true if there exists two eleemnts in the BST such that their sum is equal to the given target.

    // naive
    const keeper = { values: new Set(), target: k, done: false };
    findNodes(root, keeper);
    return keeper.done;
};

const findNodes = (current, keeper) => {
    let compliment = keeper.target - current.val;
    if (keeper.values.has(compliment)) {
        // One of the other values we've encountered in the tree sums with the current value to equal the target k. Shortcircuit.
        keeper.done = true;
    }
    if (keeper.done) {
        return;
    }
    keeper.values.add(current.val);
    if (current.left) {
        findNodes(current.left, keeper);
    }
    if (current.right) {
        findNodes(current.right, keeper);
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

const root = [5,3,6,2,4,null,7], k = 28;
const result = findTarget(getTree(root), k);
console.log('!');