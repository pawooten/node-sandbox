/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    // Convert each list into integers, sum the integers, convert the sum into a linked list
    const sum = sumList(l1) + sumList(l2);

    // Convert from number back to a linked list
    const sumValues = sum.toString().split('').map(char => +char);

    let current = null, nextNode = { val: sumValues[0], next: null };
    for (let index = 1; index < sumValues.length; index++) {
        current = { val: sumValues[index], next: nextNode };
        nextNode = current;
    }
    return nextNode;
};
const sumList = function(head) {
    let str = '', current = head;
    while (current != null) {
        str = current.val += str;
        current = current.next;
    }

    return BigInt(str);
}

const getList = function(values) {
    let node = null, previous = null;
    for (let index = values.length - 1; index >= 0; index--) {
        node = new ListNode(values[index], previous);
        previous = node;
    }
    return node;
}
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const l1 = [2,4,9], l2 = [5,6,4,9];
const result = addTwoNumbers(getList(l1), getList(l2));
console.log('!');