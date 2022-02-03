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
    let sum = 0, stack = [], current = head;
    while (current != null) {
        stack.push(current.val);
        current = current.next;
    }

    for (let power = 0; power < stack.length; power++) {
        sum += Math.pow(10, power) * stack[power]; //stack[stack.length - 1 - power];
    }

    return sum;
}

const getList1 = function() {
    const tail = { val: 3, next: null };
    const second = { val: 4, next: tail };
    const head = { val:2, next: second };
    return head;
}

const getList2 = function() {
    const tail = { val: 4, next: null };
    const second = { val: 6, next: tail };
    const head = { val:5, next: second };
    return head;
}
const result = addTwoNumbers(getList1(), getList2());
console.log('!');