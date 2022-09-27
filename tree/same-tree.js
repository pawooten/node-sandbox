/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    const keeper = { isSame: true };
    walkTrees(p, q, keeper);
    return keeper.isSame;
};

const walkTrees = function(currentP, currentQ, keeper) {
    if (currentP.val != currentQ.val) {
        keeper.isSame = false;
        return;
    }
    if (currentP.left) {
        // currentP has a left child. If currentQ doesn't, the trees don't match.
        if (!currentQ.left) {
            keeper.isSame = false;
            return;
        }
        walkTrees(currentP.left, currentQ.left, keeper);
    } else {
        // currentP doesn't have a left child. If currentQ does, the trees don't match.
        if (currentQ.left) {
            keeper.isSame = false;
            return;
        }
    }

    if (currentP.right) {
        // currentP has a right child. If currentQ doesn't, the trees don't match.
        if(!currentQ.right) {
            keeper.isSame = false;
            return;
        }
        walkTrees(currentP.right, currentQ.right, keeper);
    } else {
        // currentP doesn't have a right child. If currentQ does, the trees don't match.
        if (currentQ.right) {
            keeper.isSame = false;
            return;
        }
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
const p = [1,2], q = [1,null,2];
const result = isSameTree(getTree(p), getTree(q));
console.log('!');