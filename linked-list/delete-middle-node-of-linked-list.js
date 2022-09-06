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
 var deleteMiddle = function(head) {
    // Walk the list, populating an array of the nodes in the linked list.
    let nodes = [], current = head;
    while (current != null) {
        nodes.push(current);
        current = current.next;
    }

    const length = nodes.length;
    let priorNode;
    if (length % 2 === 0) {
        // The length of the array is even.
        priorNode = nodes[(length / 2) - 1]; // Save a reference to the node prior to the second middle, the first middle
    } else {
        // The length of the array is odd.
        priorNode = nodes[Math.floor(length / 2) - 1]; // Save a reference to the node prior to the middle node.
    }

    switch(length) {
        case 1:
            // There is only one node in the list.
            return null;
        case 2:
            // There are two nodes in the list.
            head.next = null;
            break;
        default:
            // There are at least three nodes in the list.
            priorNode.next = priorNode.next.next;
            break;
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

const head = [1,3,4,7,1,2,6];
const result = deleteMiddle(getList(head));
console.log('!');