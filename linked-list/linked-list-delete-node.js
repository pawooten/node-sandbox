/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    let current = node, previous;
    while (current.next) {
        current.val = current.next.val;
        previous = current;
        current = current.next;
    }
    previous.next = null;
};

const list = { val: 2, next: { val: 4, next: { val:10, next: null}}};
const result = deleteNode(list.next);
console.log('!');