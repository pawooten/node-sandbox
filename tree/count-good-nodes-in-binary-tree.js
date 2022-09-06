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
 var goodNodes = function(root) {
    // Return a count of the number of good nodes in the tree (values for which no ancestor > value)

    const keeper = { count: 0 };

    walkTree(root, [], keeper);
    return keeper.count;
};

const walkTree = function(current, path, keeper) {
    // Is the current node good?
    let currentVal = current.val;
    if (path.every(pathNode => pathNode.val <= currentVal)) {
        // This node is good! Increment the counter, but don't shortcircuit, because there could be children which are also good.
        keeper.count++;
    }
    if (current.left) {
        walkTree(current.left, path.concat(current), keeper);
    }

    if (current.right) {
        walkTree(current.right, path.concat(current), keeper);
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

const root = [3,1,4,3,null,1,5];
const result = goodNodes(getTree(root));
console.log('!');