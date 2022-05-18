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
const widthOfBinaryTree = function(root) {
  // return the maximum width of the tree.
  // The maximum width of a tree is the maximum width among all levels.
  // The width of one level is defined as the length between the end-nodes (the leftmost and rightmost)

  // Iterate over each depth of the tree, starting at the level following root, since it can only ever have a width of zero
  let done = false, depth = 1, maxWidth = 0;
  while (!done) {
      let children = []
      getChildrenAtDepth(root, depth, 0, children);
      // Determine the width of this depth of the tree
      let firstIndex = children.findIndex( node => node );
      let lastIndex = children.indexOf(children.filter( node => node ).pop());
      // The width is the difference between the indexes, since null nodes count
      if (firstIndex === -1 && lastIndex === -1) {
          // All nodes at this depth are null, we're done
          done = true;
      }
      maxWidth = Math.max(maxWidth, lastIndex + 1 - firstIndex);
      depth++;
  } 

    return maxWidth;
};

const getChildrenAtDepth = function(current, targetDepth, currentDepth, children) {
    if (!current) {
        // Consumers may pass references to child nodes which may be null. Return,
        // no work remains when a null child node is encountered. We can't continue to walk the tree
        // and no children at the desired depth will be accessible from this non-existent node.
        return;
    }
    // Are we one away from the depth we care about? We don't want to walk to the depth itself, because we want to be
    // able to copy null nodes, so stop walking the tree at the parent depth of the depth we want.
    if (targetDepth !== currentDepth + 1) {
        const newDepth = currentDepth + 1;
        getChildrenAtDepth(current.left, targetDepth, newDepth, children);
        getChildrenAtDepth(current.right, targetDepth, newDepth, children);
    } else {
        // We are at the depth we care about! Add the children of this node and we're done
        children.push(current.left, current.right);
    }
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
const getBinaryTree = function() {

    const five = new TreeNode(5, null, null);
    const three1 = new TreeNode(3, null, null);
    const three2 = new TreeNode(3, five, three1);
    const nine = new TreeNode(9, null, null);
    const two = new TreeNode(2, null, nine);
    const one = new TreeNode(1, three2, two);
    return one;
}
const result = widthOfBinaryTree(getBinaryTree());
console.log('!');