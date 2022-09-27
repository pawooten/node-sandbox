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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    // Return true if the tree is symmetric, otherwise false.
    // If the left child subtree of root matches the right child subtree of root, the tree is symmetrical.

    if (!root.left && !root.right) {
        // Root has no children, the tree is symmetrical because it has a single node.
        return true;
    }
    if (!root.left) {
        // If root.right was also null we'd have shortcircuited, therefore root.left is null and root.right is non-null. not symmetrical.
        return false;
    }
    if (!root.right) {
        // If root.left was also null, we'd have shortcircuited, therefore root.right is null and root.left is non-null. not symmetrical.
        return false;
    }

    // Build an array of arrays of each tree node by level. If each level is symmetric, the entire tree is symmetric.
    let treeLevels = [ [root] ], parentNodes = treeLevels[0];    
    let keepGoing;
    do {
        // Iterate over the nodes of the last level of the array
        let newParentNodes = [];
        parentNodes.forEach(parentNode => {
            if (parentNode) {
                newParentNodes.push(parentNode.left, parentNode.right);
            }
        })
        treeLevels.push(newParentNodes);
        parentNodes = newParentNodes;
    } while (parentNodes.length > 0);

    // Iterate over the array of nodes on each level of the tree.
    const treeLevelLength = treeLevels.length;
    for (let treeLevelIndex = 0; treeLevelIndex < treeLevelLength; treeLevelIndex++) {
        let treeLevel = treeLevels[treeLevelIndex];
        let length = treeLevel.length;
        if (length != 1) {
            for (let index = 0; index < length / 2; index++) {
                let left = treeLevel[index], right = treeLevel[length - 1 - index];
                if (left || right) {
                    if (!left || !right) {
                        // Either left is null and right is non-null or vice versa.
                        return false;
                    }
                    if (left.val !== right.val) {
                        return false;
                    }
                }
            }
        }
    }

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


const root = [1,2,2,3,4,4,3];
const result = isSymmetric(getTree(root));
console.log('!');