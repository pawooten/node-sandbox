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
        return null;
    }
    // Handle cases where the value of head is the value to remove.
    while (head && head.val == val) {
        head = head.next;
    }
    if (!head) {
        return null;
    }
    // Declare pointers to the current node and previouos node as we walk the list.
    let previous = head, current = head.next;
    if (!current) {
        return head;
    }
    do {
        if (current.val == val) {
            // This node must be removed. Do we have a node to attach the previous node to (or are we removing the last node of the list?)
            if (current.next) {
                // Another node exists to attach.
                previous.next = current.next;
                previous = current;
                current = current.next;
            } else {
                // This is the last node of the list
                previous.next = null;
                previous = null;
                current = null;
            }
        } else {
            // This node is allowed, move on to the next.
            previous = current;
            current = current.next;
        }
    } while (current);
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

const head = [1,2,6,3,4,5,6], val = 6;
const result = removeElements(getList(head), val);
console.log('!');
