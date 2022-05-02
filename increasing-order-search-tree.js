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
 var increasingBST = function(root) {
    // Rearrange the tree in-order so that the leftmost node is now the root of the tree, and every node has no left child and only one right child
    let nodeValues = [];
    walkTree(root, nodeValues);
    nodeValues.sort((left, right) => left - right);
    let newRoot = new TreeNode(nodeValues[0], null, null), latest = newRoot;
    const length = nodeValues.length;

    // Skip over the new root while creating nodes based on node Values
    for (let index = 1; index < length; index++) {
        latest.right = new TreeNode(nodeValues[index], null, null);
        latest = latest.right;
    }
    return newRoot;
};
const walkTree = function(current, nodeValues) {
    nodeValues.push(current.val);
    if (current.left) {
        walkTree(current.left, nodeValues);
    }
    if (current.right) {
        walkTree(current.right, nodeValues);
    }
}


function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
const getTree = function(values) {
    const root = new TreeNode(values[0], null, null);
    const length = values.length;
    // Skip element 0, since that is the root of the tree
    for (let index = 1; index < length; index++) {
        let current = root, done = false;
        let indexedValue = values[index];
        if (indexedValue === null) {
            // Skip over nulls in our input array
            continue;
        }
        while (!done) {
            if (indexedValue < current.val) {
                if (!current.left) {
                    // This value is less than current and there is no left child, so it should become the left child
                    current.left = new TreeNode(indexedValue, null, null);
                    done = true;
                }
                // Doesn't matter if done
                current = current.left;
            } else {
                if (!current.right) {
                    // This value is greater than current and there is no right child, so it should become the right child
                    current.right = new TreeNode(indexedValue, null, null);
                    done = true;
                }
                // Doesn't matter if done
                current = current.right;
            }
        }
    }
    return root;
}
const root = [5,3,6,2,4,null,8,1,null,null,null,7,9];
const result = increasingBST(getTree(root));
console.log('!');