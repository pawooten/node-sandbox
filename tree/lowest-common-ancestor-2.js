/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    // Build an array of the ancestors of p
    let recordKeeper = { path: [] };
    getAncestors(root, [], recordKeeper, p);
    let pAncestors = recordKeeper.path;

    // Build an array of the ancestors of q
    recordKeeper.path = [];
    getAncestors(root, [], recordKeeper, q);
    let qAncestors = recordKeeper.path;

    // Advance an index through both arrays until we find a mismatch, indicating we just passed the lowest common ancestor
    let index = 0;
    let lastCommon = null;
    while (index < pAncestors.length && index < qAncestors.length) {
        let pAncestor = pAncestors[index];
        if (pAncestor === qAncestors[index]) {
            // These ancestors are common
            lastCommon = pAncestor;
        } else {
            // Mismatch! Shortcircuit
            index = Number.MAX_VALUE;
        }
        index++;
    }
    return lastCommon;
}

const getAncestors = function(current, currentPath, recordKeeper, targetValue) {
    if (current.val === targetValue) {
        // We've found the target!
        currentPath.push(current);
        recordKeeper.path = currentPath;
    }
    // We haven't found the target, continue searching
    let newPath = currentPath.concat(current);
    if (current.left) {
        getAncestors(current.left, newPath, recordKeeper, targetValue);
    }
    if (current.right) {
        getAncestors(current.right, newPath, recordKeeper, targetValue);
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

const treeValues = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8;
const result = lowestCommonAncestor(getTree(treeValues), p, q);
console.log('!');

