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
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    const leftChildKeeper = { maxLevel: 0 }, rightChildKeeper = { maxLevel: 0 };
    getTreeHeight(root.left, 1, leftChildKeeper);
    getTreeHeight(root.right, 1, rightChildKeeper);

    const childHeightDifference = Math.abs(leftChildKeeper.maxLevel - rightChildKeeper.maxLevel);
    if (childHeightDifference > 1) {
        // The height difference between the left and right child trees of this node causes it not to be balanced.
        return false;
    }
    
    // The height differnce is good, but walk the child nodes to make sure they are good too.
    const leftIsBalanced = isBalanced(root.left);
    if (!leftIsBalanced) {
        
        return false;
    }
    return isBalanced(root.right);
};

const getTreeHeight = function(current, levelCount, keeper) {
    if (!current) {
        return;
    }
    keeper.maxLevel = Math.max(keeper.maxLevel, levelCount);
    if (current.left) {
        getTreeHeight(current.left, levelCount + 1, keeper);
    }
    if (current.right) {
        getTreeHeight(current.right, levelCount + 1, keeper);
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

const root = [1,2,2,3,null,null,3,4,null,null,4];
const result = isBalanced(getTree(root));
console.log('!');