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
//  var sumRootToLeaf = function(root) {
//     // find all the paths from root to each leaf.
//     const leafPaths = FindLeafPaths(root);
// };

var sumRootToLeaf = function(root) {
    let result = 0;
    const traverse = (currentNode, currentString) =>{
        if( !currentNode ) { 
            return;
        }
        traverse(currentNode.left,  currentString + currentNode.val);
        traverse(currentNode.right, currentString + currentNode.val);
        if(!currentNode.left && !currentNode.right) result = result +  parseInt(currentString + currentNode.val, 2)
    }
    traverse(root, '');
    return result;
};

var sumRootToLeaf = function(root) {
    let result = 0;
    const traverse = (currentNode, path) =>{
        if( !currentNode ) { 
            return;
        }
        traverse(currentNode.left,  [...path, currentNode.val]);
        traverse(currentNode.right, [...path, currentNode.val]);
        if(!currentNode.left && !currentNode.right) {
            // Found a leaf!
            path.push(currentNode.val);
            result += parseInt(path.join(''), 2);
        }
    }
    traverse(root, []);
    return result;
};

// function findLeaves(node) {
//     if (!node) {
//         return [];
//     }
//     if (node.left === null && node.right === null) {
//         // This node is a leaf because both its left and right child are null
//         return [node];
//     }
//     return [ ...findLeaves(node.left), ...findLeaves(node.right)];
// }

// function FindLeafPaths(currentNode, path) {
//     if (!currentNode) {
//         return;
//     }
//     if (currentNode.left === null && currentNode.right === null) {
//         // found a leaf!
//         path.push(currentNode);
//         return;
//     }
//     FindLeafPaths(currentNode.left, [...path]);
//     FindLeafPaths(currentNode.right, [...path]);
// }

 function buildTree() {
    const leaf1 = { val: 0, left: null, right: null, n: 'leaf1' };
    const leaf2 = { val: 1, left: null, right: null, n: 'leaf2' };
    const leaf3 = { val: 0, left: null, right: null, n: 'leaf3' };
    const leaf4 = { val: 1, left: null, right: null, n: 'leaf4' };

    const child1 = { val: 0, left: leaf1, right: leaf2, n: 'child1' };
    const child2 = { val: 1, left: leaf3, right: leaf4, n: 'child2' };

    return { val: 1, left: child1, right: child2, n: 'root' };
}
var root = buildTree();
var result = sumRootToLeaf(root);
console.log('!');