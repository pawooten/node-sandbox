/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1Head, list2Head) {
    var l1Current = list1Head, l2Current = list2Head;
    var mergedListHead = null, mergedListTail;
    while (l1Current || l2Current) {        
        // continue processing until we've reached the end of both input lists
        if (!l1Current) {
            if (!mergedListHead) {
                // No head of new list, so l2Current is the head.
                mergedListHead = l2Current;
            }else {
                mergedListTail.next = l2Current;
            }
            // We've exhausted the content of list1, add the remaining items in list2 and we're done.
            while (l2Current) {
                mergedListTail = l2Current;
                l2Current = l2Current.next;
                mergedListTail.next = l2Current;
            }
            continue;
        }

        if (!l2Current) {
            if (!mergedListHead) {
                // No head of new list, so l1Current is the head.
                mergedListHead = l1Current;
            }else {
                mergedListTail.next = l1Current;
            }
            // We've exhausted the content of list2, add the remaining items in list2 and we're done.
            while (l1Current) {
                mergedListTail = l1Current;
                l1Current = l1Current.next;
                mergedListTail.next = l1Current;
            }
            continue;
        }
        // We should have shortcircuited the iteration unless both l1Current and l2Current are non-null
        if (l1Current.val < l2Current.val) {
            if (!mergedListHead) {
                // No head, l1Current must be the head
                mergedListHead = l1Current;
            } else {
                mergedListTail.next = l1Current;
            }
            mergedListTail = l1Current; // Advance the tail to point to the last object appended to the list
            l1Current = l1Current.next;
        }else {
            if (!mergedListHead) {
                // No head, l2Current must be the head
                mergedListHead = l2Current;
            } else {
                mergedListTail.next = l2Current;
            }
            mergedListTail = l2Current; // Advance the tail to point to the last object appended to the list          
            l2Current = l2Current.next;
        }
    }
    return mergedListHead;
};
function buildLinkedList(values) {
    var nextObj = null;
    values.reverse().forEach( v => {
        var obj = { val: v, next: nextObj || null };
        nextObj = obj;
    });
    return nextObj; // The last nextObj is actually the head since we reversed the array of values    
}
const list1Head = buildLinkedList([]);
const list2Head = buildLinkedList([0]);
var result = mergeTwoLists(list1Head, list2Head);
console.log('done');