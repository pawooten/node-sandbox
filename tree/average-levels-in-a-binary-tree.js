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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    // Return the average value of the nodes on each level in the form of an array.

    const nodeValuesByLevel = new Map();
    const results = [];
    
    walkTree(root, [], nodeValuesByLevel);

    let level = 0, levelValues, sum;
    while (nodeValuesByLevel.has(level)) {
        levelValues = nodeValuesByLevel.get(level);
        sum = levelValues.reduce((previous, current) => previous + current, 0);
        results.push(sum / levelValues.length);
        level++;
    }

    return results;
};

const walkTree = function(current, path, nodeValuesByLevel) {
    const level = path.length;
    if (!nodeValuesByLevel.has(level)) {
        nodeValuesByLevel.set(level, []);
    }
    nodeValuesByLevel.get(level).push(current.val);

    if (current.left) {
        walkTree(current.left, path.concat(current.val), nodeValuesByLevel);
    }
    if (current.right) {
        walkTree(current.right, path.concat(current.val), nodeValuesByLevel);
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

const root = [3,9,20,null,null,15,7];
const result = averageOfLevels(getTree(root));
console.log('!');