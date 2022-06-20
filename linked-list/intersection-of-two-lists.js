/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
     if (headA === headB) {
         return headA;
     }
    let currentA = headA, currentB = headB;
    let valuesA = [], valuesB = [];
    // Copy each list into an array
    while (currentA != null || currentB != null) {
        if (currentA) {
            valuesA.push(currentA);
            currentA = currentA.next;
        }
        if (currentB) {
            valuesB.push(currentB);
            currentB = currentB.next;
        }
    }

    // Iterate over the values of each list in reverse order.
    valuesA = valuesA.reverse();
    valuesB = valuesB.reverse();
    const length = Math.min(valuesA.length, valuesB.length);
    let index;
    for (index = 0; index < length; index++) {
        if (valuesA[index] != valuesB[index]) {
            // The values do not match. If index is zero, this means there is no intersection at all
            // if index > 0, the value of index-1 is the intersection
            if (index === 0) {
                return null;
            }
            if (valuesA.length < valuesB.length) {
                return valuesA[index - 1];
            }
            return valuesB[index - 1];
        }
    }
    if (index > 0) {
        if (valuesA.length < valuesB.length) {
            return valuesA[index - 1];
        }
        return valuesB[index - 1];
    }
    return null;
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

const intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3;
let a = { val: 3, next: null };
const result = getIntersectionNode(a, {val:2, next: a});
console.log('!');