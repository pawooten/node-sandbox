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
 var deleteDuplicates = function(head) {
     if (!head) {
         return null;
     }
    // Walk the list, remembering which values we've already encountered.
    let values = new Map();
    let current = head, previous = head;
    while (current) {
        if (values.has(current.val)) {
            // We've already seen this value, so it is a duplicate and should be removed
            values.set(current.val, null);
        } else {
            values.set(current.val, current);
        }
        previous = current;
        current = current.next;
    }
    let result = [...values.values()].filter(v => v);
    previous = null;
    for (let index = result.length - 1; index >= 0; index--) {
        result[index].next = previous;
        previous = result[index];
    }
    return result.length > 0 ? result[0] : null;
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0: val)
    this.next = (next===undefined ? 0: next)
}
function getList(values) {
    let current = null, previous = null;
    for (let index = values.length - 1; index >= 0; index--) {
        current = new ListNode(values[index], previous);
        previous = current;
    }
    return current;
}
const result = deleteDuplicates(getList([1,1]));
console.log('!');