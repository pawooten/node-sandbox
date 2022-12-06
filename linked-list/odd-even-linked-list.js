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
 var oddEvenList = function(head) {
    if (!head) {
        return null;
    }
    // Walk the list, sorting nodes into odd indexed and even indexed arrays.
    const odds = [], evens = [];
    let current = head, index = 1;
    while (current) {
        if (index % 2 === 0) {
            evens.push(current);
        } else {
            odds.push(current);
        }
        index++;
        current = current.next;
    }
    
    // Iterate over the odd indexed nodes and attach each of them to the next in the array, but skip the last one.
    const oddsLast = odds.length - 1;
    for (index = 0; index < oddsLast; index++) {
        odds[index].next = odds[index + 1];
    }

    // Iterate over the even indexed nodes and attach each of them to the next in the array, but skip the last one.
    const evensLast = evens.length - 1;
    for (index = 0; index < evensLast; index++) {
        evens[index].next = evens[index + 1];
    }

    let result;
    if (odds.length > 0) {
        // Attach the last odd node to the first even node.
        if (evens.length > 0) {
            odds[odds.length - 1].next = evens[0];
        } else {
            odds[odds.length - 1].next = null;
        }
        result = odds[0];
    }
    if (evens.length > 0) {
        // Terminate the last even node.
        evens[evens.length - 1].next = null;
    }
    return result;
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

const head = [1];
const result  = oddEvenList(getList(head));
console.log('!');