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
 * @return {TreeNode}
 */
 var pruneTree = function(root) {

    // We need to walk the tree, looking two ahead to see leaf nodes (with no left or right child) with a value of zero.
    // Detach those nodes and set a flag. Repeat until the flag isn't set.

    let keeper = { found: false };
    do {
        keeper.found = false;
        walkTree(root, keeper);
    } while (keeper.found);
    if (root.left || root.right || root.val != 0) {
        return root;
    }
    return null;
};

const walkTree = function(current, keeper) {
    if (current.left && (current.left.left === null && current.left.right === null)) {
        // The left child of the curent node is a leaf node (it has no children of it's own). Does it have a value of zero?
        if (current.left.val === 0) {
            // It does! Remove it, and flag the keeper to repeat.
            current.left = null;
            keeper.found = true;
        }
    }
    if (current.left) {
        walkTree(current.left, keeper);
    }
    if (current.right && (current.right.left === null && current.right.right === null)) {
        // The right child of the current node is a leaf node ( it has no children of it's own). Does it have a value of zero?
        if (current.right.val === 0) {
            // It does! Remove it, and flag the keeper to repeat.
            current.right = null;
            keeper.found = true;
        }
    }
    if (current.right) {
        walkTree(current.right, keeper);
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

const root = [0,null,0,0,0];
const result = pruneTree(getTree(root));
console.log('!');