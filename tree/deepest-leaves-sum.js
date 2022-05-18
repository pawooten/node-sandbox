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
 var deepestLeavesSum = function(root) {
        // walk the tree, building arrays of nodes per level.
        let hasChildren, level = 1, levelMap = new Map([
        [0, [root]]
    ]);
    do {
        hasChildren = walkTree(level, levelMap);
        level++;
    } while (hasChildren);

    // Return the sum of the highest non-empty level within the levelMap
    let populatedLevels = [...levelMap.keys()].filter(level => levelMap.get(level).length > 0);
    populatedLevels.sort((left, right) => left - right);
    level = levelMap.get(populatedLevels.pop());
    sum = level.map(node => node.val).reduce((previous, current) => previous + current);

    return sum;
};
const walkTree = function(level, levelMap) {
    let parentNodes = levelMap.get(level - 1);
    let children = [];
    parentNodes.forEach(parent => {
        if (parent && parent.left) {
            children.push(parent.left);
        }
        if (parent && parent.right) {
            children.push(parent.right);
        }
    });
    levelMap.set(level, children);
    return children.length > 0;
}   

const root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5];
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
const result = deepestLeavesSum(getTree(root));
console.log('!');