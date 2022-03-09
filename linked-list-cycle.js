/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // Return true if the linked list has a cycle

    // Walk the list, if we find a node we've already visited, the list contains a cycle
    let hasCycle = false, current = head;
    while (!hasCycle && current) {
        hasCycle = current.visited;
        current.visited = true;
        current = current.next;
    }
    return !!hasCycle;
};
function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

function getList(values, linkIndex) {
    let last = undefined, previous = null, node;
    for (let valueIndex = values.length - 1; valueIndex >= 0; valueIndex--) {
        node = new ListNode(values[valueIndex], previous);
        if (!last) {
            last = node;
        }
        // linkIndex indicates this node should be connected to the last node of the list.
        if (valueIndex === linkIndex) {
            last.next = node;
        }
        previous = node;
    }

    // Return the head of the list
    return node;
}
const result = hasCycle(getList([1,2], -1));
console.log('!');