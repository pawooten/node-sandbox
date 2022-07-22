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
 var rightSideView = function(root) {
    // walk the tree, building arrays of nodes per level.
    let hasChildren, level = 1, levelMap = new Map([[0, [root]]]);
    do {
        hasChildren = walkTree(level, levelMap);
        level++;
    } while (hasChildren);

    let populatedLevels = [...levelMap.keys()].filter(level => levelMap.get(level).length > 0);
    let rightSideNodes = [];
    populatedLevels.forEach(populatedLevel => {
        let node = levelMap.get(populatedLevel).pop();
        if (node) {
            rightSideNodes.push(node.val);
        }
    });
    levelMap?.length;
    return rightSideNodes;
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
const root = [1,2,3,null,5,null,4];
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
const result = rightSideView(getTree(root));
console.log('!');