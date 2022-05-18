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
    let map = new Map();
    let current = head;
    while (current) {
        if (!map.has(current.val)) {
            map.set(current.val, current);
        }
        current = current.next;
    }
    const results = [...map.values()];
    let previous = null;
    for (let index = results.length - 1; index >= 0; index--) {
        results[index].next = previous;
        previous = results[index];
    }
    return results.length > 0 ? results[0] : null;
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? 0 : next)
}
function getList(values) {
    let current, previous;
    for (let index = values.length - 1; index >= 0; index--) {
        current = new ListNode(values[index], previous);
        previous = current;
    }
    return current;
}
const result = deleteDuplicates(getList([1,1,2,3,3]));
console.log('!');