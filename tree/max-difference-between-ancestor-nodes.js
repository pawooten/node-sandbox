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
 var maxAncestorDiff = function(root) {
    if (!root) {
        return 0;
    }

    const walkTree = (current, path) => {
        if (current.left) {
            walkTree(current.left, path.concat(current.val));
        }
        if (current.right) {
            walkTree(current.right, path.concat(current.val));
        }

        // Is this a leaf node? If so, we should determine the max diff between ancestors in this path through the tree.
        path.push(current.val);
        let diff, last;
        while (path.length > 0) {
            last = path.pop();
            for (const ancestor of path) {
                diff = Math.abs(ancestor - last);
                maxDiff = Math.max(maxDiff, diff);
            }
        }
    };

    let maxDiff = 0;
    walkTree(root, []);
    return maxDiff;
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

const root = [1,null,2,null,0,3];
const result = maxAncestorDiff(getTree(root));
console.log('!');