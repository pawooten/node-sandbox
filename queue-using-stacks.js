
var MyQueue = function() {
    this.values = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.values.unshift(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.values.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.values[this.values.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.values.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */