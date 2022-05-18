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
 var convertBST = function(root) {
    // Convert the binary search tree to a greater tree such that every key of the original BST is changed to the orignal key
    // plus the sum of all keys greater than the original key in BST.
    if (!root) {
        return null;
    }
    
    let nodeValues = [];
    walkTree(root, nodeValues);
    nodeValues.sort((left, right) => left - right);
    updateTree(root, nodeValues);
    return root;
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
const updateTree = function(current, nodeValues) {
    // Convert the value of current to original value + sum of all keys greater than the original key.
    const currentValue = current.val;
    const index = nodeValues.indexOf(currentValue);
    // nodeValues is sorted, so we should sum all values following the index of currentValue to calculate new value,
    // but skip if currentValue is the largest value in the array, as their are no other nodes to sum with the currentValue
    // and thus the currentValue doesn't change
    if (index != nodeValues.length - 1) {
        current.val = currentValue + nodeValues.slice(index + 1).reduce((previous, current) => previous + current);
    }

    if (current.left) {
        updateTree(current.left, nodeValues);
    }
    if (current.right) {
        updateTree(current.right, nodeValues);
    }
}

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
const getTree = function(values) {
    let root = new TreeNode(values[0], null, null);
    const length = values.length;
    for (let index = 1; index < length; index++) {
        let current = root, done = false, insertValue = values[index];
        if (insertValue === null) {
            continue;
        }
        while (!done) {
            let nodeValue = current.val;
            if (insertValue < nodeValue) {
                if (!current.left) {
                    // This value should be inserted to the left of the current node, and there is no left child,
                    // so attach there and move on to the next value.
                    current.left = new TreeNode(insertValue, null, null);
                    done = true;
                }
                // Doesn't matter if done
                current = current.left;
            } else {
                if (!current.right) {
                    // This value should be inserted to the right of the current node, and there is no right child,
                    // so attach there and move on to the next value.
                    current.right = new TreeNode(insertValue, null, null);
                    done = true;
                }
                // Doesn't matter if done
                current = current.right;
            }
        }
    }
    return root;
}

const root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8];
const result = convertBST(getTree(root));
console.log('!');