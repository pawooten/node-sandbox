
var MyStack = function() {
    this.values = [];
    return this;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.values.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.values.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.values[this.values.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.values.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

 let myStack = new MyStack();
 myStack.push(1);
 myStack.push(2);
 let result = myStack.top(); // return 2
 result = myStack.pop(); // return 2
 result = myStack.empty(); // return False