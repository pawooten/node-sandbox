/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var pairSum = function(head) {
    // Walk the list, populating an array of the values of each node in the linked list.
    let nodeValues = [], current = head;
    while (current != null) {
        nodeValues.push(current.val);
        current = current.next;
    }

    // Iterate across each twin pair and determine their twin sum.
    let maxTwinSum = 0;
    const length = nodeValues.length, halfLength = length / 2;
    for (let index = 0; index < halfLength; index++) {
        maxTwinSum = Math.max(maxTwinSum, nodeValues[index] + nodeValues[length - index - 1]);
    }
    return maxTwinSum;
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

const head = [4,2,2,3];
const result = pairSum(getList(head));
console.log('!');