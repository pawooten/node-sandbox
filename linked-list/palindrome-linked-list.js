/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let nodes = [], current = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }
    const reversed = [...nodes].reverse(), length = reversed.length;
    let isPalindrome = true;
    for (let index = 0; index < length && isPalindrome; index++) {
        isPalindrome = nodes[index].val === reversed[index].val;
    }
    return isPalindrome;
};