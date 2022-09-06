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
 var middleNode = function(head) {
        // Walk the list, populating an array of the nodes in the linked list.
        let nodes = [], current = head;
        while (current != null) {
            nodes.push(current);
            current = current.next;
        }

        const length = nodes.length;
        if (length % 2 === 0) {
            // The length of the array is even.
            // Return the second middle node.
            return nodes[length / 2];
        }
        // The length of the array is odd. Round down to get to the middle node.
        return nodes[Math.floor(length / 2)];
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

const head = [1,2,3,4,5,6];
const result = middleNode(getList(head));
console.log('!');