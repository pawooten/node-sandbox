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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
 var trimBST = function(root, low, high) {
    // Trim the tree so that all its elements lies within [low, high].

    // Is the root in range? Assume it is for now
    let rootVal;
    do {
        rootVal = root.val;
        if (rootVal < low) {
            root = getReplacementNode(root, true);
        }
        if (rootVal > high) {
            root = getReplacementNode(root, false);
        }
    } while ((rootVal > high || rootVal < low) && root);

    if (!root) {
        return null;
    }
    walkTree(root, low, high);
    return root;
};
const walkTree = function(current, low, high) {
    if (current.left) {
        // The current node has a left child. Is it in range?
        let leftValue;
        do {
            leftValue = current.left.val;
            if (leftValue < low) {
                // The left child is out of range and must be trimmed, but it's right child should replace it if any
                current.left = getReplacementNode(current.left, true);
            }    
        } while (leftValue < low && current.left);

        // The left child may have been non null prior to invoking getReplacementNode()
        if (current.left) {
            walkTree(current.left, low, high);
        }
    }
    if (current.right) {
        // The current node has a right child. Is it in range?
        let rightValue;
        do {
            rightValue = current.right.val;
            if (rightValue > high) {            
                // The right child is out of range and must be trimmed out, but it's left child should replace it if any
                current.right = getReplacementNode(current.right, false);
            }    
        } while (rightValue > high && current.right);

        if (current.right) {
            walkTree(current.right, low, high);
        }
    }
}
const getReplacementNode = function(node, isLeft) {
    // If we are removing a left child, we want the right children of the node which is being removed to survive, since they are greater
    // than their parent they may be in range whereas the left children are certain to not be in range because they are less than their parent (which is not in range)
    return isLeft ? node.right : node.left;
}

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const getTree = function(values) {
    const root = new TreeNode(values[0]);
    const length = values.length;
    // Skip the root by starting at 1 rather than 0.
    for (let index = 1; index < length; index++) {
        let value = values[index];
        if (value === null) {
            continue;
        }
        let current = root;
        let done = false;
        while (!done) {
            if (value < current.val) {
                if (!current.left) {
                    // There is no left node currently.
                    current.left = new TreeNode(value, null, null);
                    done = true;
                }
                // This shouldn't matter if done, but if not done, we need to walk the tree until we find a spot to attach the current value
                current = current.left;
            }
            if (value > current.val) {
                if (!current.right) {
                    // There is no right node currently.
                    current.right = new TreeNode(value, null, null);
                    done = true;
                }
                // This shouldn't matter if done, but if not done, we need to walk the tree until we find a spot to attach the current value
                current = current.right;
            }
        }
    }
    return root;
}
const result = trimBST(getTree([45,30,46,10,36,null,49,8,24,34,42,48,null,4,9,14,25,31,35,41,43,47,null,0,6,null,null,11,20,null,28,null,33,null,null,37,null,null,44,null,null,null,1,5,7,null,12,19,21,26,29,32,null,null,38,null,null,null,3,null,null,null,null,null,13,18,null,null,22,null,27,null,null,null,null,null,39,2,null,null,null,15,null,null,23,null,null,null,40,null,null,null,16,null,null,null,null,null,17]), 32, 44);
console.log('!');

