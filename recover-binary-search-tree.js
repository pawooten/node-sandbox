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
 var recoverTree = function(root) {
    let nodes = [];
    walkTree(root, nodes);
    return 0;
};
const walkTree = function(current, nodes) {
    if (current.left) {
        walkTree(current.left, nodes);
    }
    if (current.right) {
        walkTree(current.right, nodes);
    }
    nodes.push(current.val);
}

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const getTree = function(values, swapIndex1, swapIndex2) {
    let root = new TreeNode(values[0], null, null);
    let swapNode1, swapNode2;
    if (swapIndex1 === 0) {
        swapNode1 = root;
    }
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
                    if (index === swapIndex1) {
                        swapNode1 = current.left;
                    }
                    if (index === swapIndex2) {
                        swapNode2 = current.left;
                    }
                    done = true;
                }
                // Doesn't matter if done
                current = current.left;
            } else {
                // indexed value belongs to the right of the current node.
                if (!current.right) {
                    current.right = new TreeNode(indexedValue, null, null);
                    if (index === swapIndex1) {
                        swapNode1 = current.right;
                    }
                    if (index === swapIndex2) {
                        swapNode2 = current.right;
                    }
                    done = true;
                }
                // Doesn't matter if done
                current = current.right;
            }
        }
    }
    // Swap the swap nodes
    let temp = swapNode1.val;
    swapNode1.val = swapNode2.val;
    swapNode2.val = temp;
    return root;
}
const getTree2 = function() {
    let root = new TreeNode(3, null, null);
    root.left = new TreeNode(1, null, null);
    root.right = new TreeNode(4, new TreeNode(2, null, null), null);
    return root;
}
const root = [2,1,3,4];
const result = recoverTree(getTree2());
console.log('!');