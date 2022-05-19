/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let nodes = [], current = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }
    if (nodes.length === 1) {
        return null;
    }

    let nodeToRemove = null;
    while (n > 0) {
        nodeToRemove = nodes.pop();
        n--;
    }
    if (nodes.length > 0) {
        // Attach the node prior the the remove node to the next (if any)
        nodes[nodes.length - 1].next = nodeToRemove.next;
    } else {
        // The node to remove is the first in the list.
        head = nodeToRemove.next;
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
}

const head = [1,2], n = 2;
const result = removeNthFromEnd(getList(head), n);
console.log('!');
