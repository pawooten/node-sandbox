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
    // Build an array of the ancestors of p and q
    let recordKeeper = {};
    walkTree(root, p, [], recordKeeper);
    recordKeeper.p = recordKeeper.result;
    walkTree(root, q, [], recordKeeper);
    recordKeeper.q = recordKeeper.result;

    // All nodes of the tree have a common ancestor of the root. 
    let index = 1;
    const length = Math.min(recordKeeper.p ? recordKeeper.p.length : 0, recordKeeper.q ? recordKeeper.q.length : 0);
    for (; index < length; index++) {
        if (recordKeeper.p[index] != recordKeeper.q[index]) {
            return recordKeeper.q[index - 1].val;
        }
    }
    if (recordKeeper.q) {
        return recordKeeper.q[index].val;
    } else {
        return root;
    }
};

const walkTree = function(current, target, ancestors, recordKeeper) {
    if (current.val === target) {
        // We've found the target!
        ancestors.push(current);
        recordKeeper.result = ancestors;
        return;
    }

    // This node doesn't match the target. Explore it's children (if any).
    if (current.left) {
        walkTree(current.left, target, [current, ...ancestors], recordKeeper);
    }
    if (current.right) {
        walkTree(current.right, target, [current, ...ancestors], recordKeeper);
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
const root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1;
const result = lowestCommonAncestor(getTree(root), p, q);
console.log('!');