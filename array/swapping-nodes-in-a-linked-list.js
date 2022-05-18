/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
    // Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end
    let current = head, previous, kthNode, kthNodePrevious, currentIndex = 1, done = false;

    // Walk the list once, to determine length
    while (current.next) {
        currentIndex++;
        current = current.next;
    }
    const lastIndex = currentIndex;
    if (lastIndex - k + 1 < k) {
        // We have a singly linked list, so we need to make sure we retrieve a reference to kthnNode and kthNodePrevious
        // before currentIndex matches the swap value.
        k = lastIndex - k + 1;
    }
    
    // Handle special case of the head swapping with the tail, regardless of list length.
    if (k === 1 || lastIndex === 2) {
        let temp = head.val;
        head.val = current.val;
        current.val = temp;
        return head;
    }
    
    currentIndex = 1;
    current = head;

    while (current.next && !done) {
        if (currentIndex === k) {
            kthNode = current;
            kthNodePrevious = previous;
        }
        if (currentIndex === lastIndex - k + 1) {
            // Do the swap
            kthNodePrevious.next = current;
            let swappedNext = current.next;
            if (kthNode.next === current) {
                current.next = kthNode;
            } else {
                current.next = kthNode.next;
            }
            previous.next = kthNode;
            kthNode.next = swappedNext;
            done = true;
        }
        previous = current;
        current = current.next;
        currentIndex++;
    }
    return head;
};

const getList = function(values) {
    let current, previous = null;
    for (let index = values.length - 1; index >= 0; index--) {
        current = new ListNode(values[index], previous);
        previous = current;
    }
    return current;
}
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const head = [100,24,24,36,18,52,95,61,54,88,86,79,11,1,31,26], k = 16;
const result = swapNodes(getList(head), k);
console.log('!');