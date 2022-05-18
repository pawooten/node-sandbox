/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
     if (!head) {
         return null;
     }
    let nodeIndexes = [];
    let current = head;
    while (current) {
        nodeIndexes.push(current);
        current = current.next;
    }

    let length = nodeIndexes.length;

    k = k % length;

    if (k === 0) {
        // Rotating k times results in one or more exact cycle backs to the initial head of the list.
        return head;
    }

    // Attach the end of the list to the head
    nodeIndexes[nodeIndexes.length - 1].next = head;

    // Detach the last k nodes from the end of the list 
    nodeIndexes[nodeIndexes.length - k - 1].next = null;
    head = nodeIndexes[nodeIndexes.length - k];
    return head;

};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function getList(values) {
    let current, previous;
    for (let index = values.length - 1; index >= 0; index--) {
        current = new ListNode(values[index], previous);
        previous = current;
    }
    return current;
}
const k = 0;
const result = rotateRight(getList([]), k);
console.log('!');