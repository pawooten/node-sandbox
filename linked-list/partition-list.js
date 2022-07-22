/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    // walk the list, building up an array of nodes which are in the wrong partition.
    const nodesToMove = [];
    let current = head, previous, lastLeftPartitionNode, firstRightPartitionNode, found = false;
    while (current) {
        found = found || current.val >= x;
        if (!found) {
            // We haven't found the edge of the left partition yet, so update the pointer.
            lastLeftPartitionNode = current;
        }
        if (found && current.val < x) {
            // Copy the current node into the array of nodes to move.
            nodesToMove.push(current);
            
            // Detach the node from the list.
            previous.next = current.next;
            current = previous;
        }

        previous = current;
        current = current.next;    
    }

    if (nodesToMove.length === 0) {
        // No nodes are out of place.
        return head;
    }
    // Insert the nodes from the right partition to the end of the left partition.
    current = lastLeftPartitionNode;
    if (!current) {
        // The left partition is empty!
        firstRightPartitionNode = head;
        head = nodesToMove.shift();
        current = head;
        while (nodesToMove.length > 0) {
            current.next = nodesToMove.shift();
            current = current.next;
        }
    } else {
        // A left partition exists, append the misplaced nodes to it
        firstRightPartitionNode = current.next;
        while (nodesToMove.length > 0) {
            current.next = nodesToMove.shift();
            current = current.next;
        }        
    }

    // Attach the right partition to the end of the left partition after appending the misplaced nodes.
    current.next = firstRightPartitionNode;    

    return head;
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

const head = [1,4,3,0,2,5,2], x = 3;
const result = partition(getList(head), x);
console.log('!');