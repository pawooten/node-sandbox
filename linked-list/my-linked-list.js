
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    return this;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let current = this.head;
    while (index >= 1) {
        current = current.next;
        index--;
    }
    return current?.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if (this.head) {
        let newHead = { val: val, next: this.head };
        this.head = newHead;
    } else {
        this.head = { val: val, next: null };
        this.tail = this.head;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newTail = { val: val, next: null }
    if (this.tail) {
        this.tail.next = newTail;
    }
    this.tail = newTail;
    if (!this.head) {
        this.head = newTail;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let priorNode = this.head;
    while (index > 1) {
        priorNode = priorNode.next;
        index--;
    }
    let newNode = { val: val, next: priorNode.next };
    priorNode.next = newNode;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let priorNode = this.head;
    while (index > 1) {
        priorNode = priorNode.next;
        index--;
    }
    priorNode.next = priorNode.next?.next;
};
let myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
let result = myLinkedList.get(1);
myLinkedList.deleteAtIndex(1);
result = myLinkedList.get(1);

