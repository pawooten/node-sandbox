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
 var reverseList = function(head) {
    let nodes = [], current = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }
    if (nodes.length === 0) {
        return null;
    }
    let reversedNodes = nodes.reverse();
    let newHead = reversedNodes.shift();
    current = newHead;
    while (reversedNodes.length > 0) {
        current.next = reversedNodes.shift();
        current = current.next;
        current.next = null;
    }
    return newHead;
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
const head = [];
const result = reverseList(getList(head));
console.log('!');