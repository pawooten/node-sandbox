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
 * @return {string}
 */
 var tree2str = function(root) {
    const keeper = { result: '' };
    walkTree(root, keeper);
    return keeper.result;
};

const walkTree = function(current, keeper) {
    keeper.result += current.val;
    if (current.left) {
        keeper.result += '(';
        walkTree(current.left, keeper);
        keeper.result += ')';
    } 
    if (current.right) {
        if (!current.left) {
            keeper.result += '()';
        }
        keeper.result += '(';
        walkTree(current.right, keeper);
        keeper.result += ')';
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

const root = 
[1,2,3,null,4];
const result = tree2str(getTree(root));
console.log('!');