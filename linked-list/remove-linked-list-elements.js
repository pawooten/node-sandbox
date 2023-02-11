/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if (!head) {
        // a null reference to head indicates the list is empty.
        return null;
    }
    // If the head of the linked list matches val, we must walk the list until we find the node which
    // will become the new head, the first node whose val !== val.
    while (head && head.val === val) {
        head = head.next;
    }
    if (head === null) {
        return head;
    }
    // Now that we've found the new head node, walk the remainder of the list and remove any nodes whose val === val.
    let previous = head, current = head.next;
    while (current) {
        if (current.val === val) {
            // This node must be removed from the linked list. Attach the previous node to the node which follows this one (if any).
            previous.next = current.next;
        } else {
            previous = current;
        }
        current = current.next;
    }

    return head;
};

const getList = function(values) {
    const length = values.length;
    const root = { val: values[0], next: null };
    let current = root;
    for (let index = 1; index < length; index++) {
        current.next = { val: values[index], next: null };
        current = current.next;
    }
    return root;
};

const head = [1,2,2,1], val = 2;
const result = removeElements(getList(head), val);
console.log('!');
