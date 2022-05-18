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
 var sortList = function(head) {
    if (!head || !head.next) {
        return head; // This is a list of one element
    }

    let moved = false;
    // sort ascending
    do {
        // Walk the list starting with the second element, looking for elements which are out of order, by comparing them to the previous element.
        let current = head.next, previous = head;
        moved = false;
        while (current && !moved) {
            if (current.val < previous.val ) {
                // This node is out of order, detach it from its previous and next neighbors
                previous.next = current.next;
                moved = true;

                // find where it should be moved to.
                let newPrevious = findInsertAfterNode(head, current.val);
                if (!newPrevious) {
                    // This value should become the new head of the list.
                    // The old head of the list should follow current.
                    current.next = head;
                    head = current;
                } else {
                    // This value should be appended to follow newPrevious
                    // Connect the nodes that follow newPrevious (if any) to current
                    current.next = newPrevious.next;
                    // Connect newPrevious to current.
                    newPrevious.next = current;
                }
            }
            previous = current;
            current = current.next;            
        }
        // Did we move any elements? If not, we're done, because we've successfully walked the list without finding any elements which are out of order     
    } while (moved);
    return head;
};
/**
 * Return a reference to the node after which the node of the insertValue parameter should be inserted to achieve ascending order, or null
 * if the node of the insertValue parameter should become the new head of the list
 * @param {*} head head of the list which should be searched for insertion point
 * @param {*} insertValue the value of the node to be inserted.
 */
const findInsertAfterNode = function(head, insertValue) {
    if (insertValue < head.val) {
        return null;
    }
    let current = head;
    while (current !== null) {
        if (!current.next) {
            // we've reached the end of the list, so append to the last node of the list
            return current;
        }
        if (insertValue >= current.val && insertValue <= current.next.val) {
            return current;
        }
        current = current.next;
    }
}
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
const getList = function() {
    const listValues = [4,2,1,3];
    var current, previous;
    for (let index = listValues.length - 1; index >= 0; index--) {
        current = new ListNode(listValues[index], previous);
        previous = current;
    }
    return current;
}
const result = sortList(getList());
console.log('!');