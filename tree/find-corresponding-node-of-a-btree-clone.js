/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target) {
     // Find a path to the target node in the original tree.
    let recordKeeper = {};
    findTarget([], original, target, recordKeeper);

    // Replay the path on the cloned tree, starting at the root
    let current = cloned;
    while (recordKeeper.path.length > 0) {
        let step = recordKeeper.path.shift();
        if (step === 'L') {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return current;
};
const findTarget = function(path, current, target, recordKeeper) {
    if (current === target) {
        // We've reached the target!
        recordKeeper.path = path;
        return;
    }
    if (current.left) {
        findTarget([...path, 'L'], current.left, target, recordKeeper);
    }
    if (current.right) {
        findTarget([...path, 'R'], current.right, target, recordKeeper);
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

const treeData = [7,4,3,null,null,6,19], tree2 = [...treeData];
const tree1 = getTree(treeData);
const result = getTargetCopy(tree1, getTree(tree2), tree1.right);
console.log('!');