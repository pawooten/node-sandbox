/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    // swap each pair of adjacent nodes in the list
    // walk the list
    let current = head, previous = null;
    while (current !== null) {
        let first = current;
        let second = current.next;
        if (!second) {
            return head;
        }
        // Are we swapping the head of the list? If so, swap the pointer so we don't lose the new head of the list
        if (first === head) {
            head = second;
        }

        // swap
        if (previous) {
            // we have a previous node, attach it to the second swap node
            previous.next = second;
        }
        // attach first to the node that follows second, if any
        first.next = second.next;
        // second now points to first, since they are swapping places
        second.next = first;
        previous = first;
        current = first.next;
    }
    return head;
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const four = new ListNode(4, null);
const three = new ListNode(3, four);
const two = new ListNode(2, three);
const head = new ListNode(1, two);
const result = swapPairs(four);
console.log('!');