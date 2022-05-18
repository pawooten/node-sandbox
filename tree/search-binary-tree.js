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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    // Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist return null.
    let current = root;
    let newRoot = null;
    while (current != null && newRoot == null) {
        if (current.val === val) {
            newRoot = current;
            continue;
        }
        if (val < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return newRoot;
};
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const getTree = function() {
    let three = new TreeNode(3, null, null);
    let one = new TreeNode(1, null, null);
    let two = new TreeNode(2, one, three);
    let seven = new TreeNode(7, null, null);
    let four = new TreeNode(4, two, seven);
    return four;
}
const root = [4,2,7,1,3], val = 5;
const result = searchBST(getTree(), val);
console.log('!');