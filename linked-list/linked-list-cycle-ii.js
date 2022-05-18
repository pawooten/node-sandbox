/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  // return the node where the cycle begins, or null if there is no cycle.
  let cycleStart = null, current = head, indexedNodes = [];
  // traverse the list, looking for one which has a pos property, indicating the loop.
  while (current && !cycleStart) {
      if (indexedNodes.includes(current)) {
          // we found the loop back
          cycleStart = current;
          continue;
      }
      // save this reference in case the loop back points back to this node.
      indexedNodes.push(current);
      current = current.next;
  }
  return cycleStart;
};
function getList() {
    const last = { val: -4, next: null, pos:1 };
    const third = { val: 0, next: last };
    const second = { val: 2, next: third };
    const first = { val: 3, next: second };
    last.next = second;
    return first;
}
const result = detectCycle(getList());
console.log('!');