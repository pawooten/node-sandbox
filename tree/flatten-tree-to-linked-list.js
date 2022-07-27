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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if (!root) {
        return null;
    }
    walkTree(root);
    return root;
};

const walkTree = function(current) {
    let repeat;
    do {
        repeat = false;
        if (current.left) {
            // A left child node exists
            if (current.left.left ) {
                // And it has a left child node of it's own. Continue descending the tree.
                walkTree(current.left);
                repeat = true;
            } else {
                // The left child doesn't have a left child of it's own, so insert the left child between current and the right child (if any).

                // Attach the last node we're moving from the left child linked list into the right child linked list.
                let lastChild = current.left;
                while (lastChild.right) {
                    lastChild = lastChild.right;
                }
                lastChild.right = current.right;
                // Overwrite the link from current to it's first right child linking current.right to the first node we are moving.
                current.right = current.left;
                current.left = null;
            }
        } 
        if (current.right) {
            walkTree(current.right);
        }  
    } while (repeat);
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

const root = [1,null,2,3];
const result = flatten(getTree(root));
console.log('!');