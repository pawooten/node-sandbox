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
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let nodeValues = [];
    walkTree(root, nodeValues);
    nodeValues.sort((left, right) => left - right);
    return nodeValues[k - 1];
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
    let root = new TreeNode(values[0], null, null);
    const length = values.length;
    for (let index = 1; index < length; index++) {
        let indexedValue = values[index], done = false, current = root;
        if (indexedValue === null) {
            continue;
        }
        while (!done) {
            if (indexedValue < current.val) {
                // indexed value belongs to the left of the current node.
                if (!current.left) {
                    current.left = new TreeNode(indexedValue, null, null);
                    done = true;
                }
                // Doesn't matter if done
                current = current.left;
            } else {
                // indexed value belongs to the right of the current node.
                if (!current.right) {
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
const root = [5,3,6,2,4,null,null,1], k = 3;
const result = kthSmallest(getTree(root), k);
console.log('!');