
var MyHashSet = function() {
    this.map = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.map[key] = key;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    delete this.map[key];
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.map[key] === key;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
var obj = new MyHashSet();
obj.add(1);
obj.add(2);
let result = obj.contains(1);
result = obj.contains(3);
obj.add(2);
result = obj.contains(2);
obj.remove(2);
result = obj.contains(2);
console.log('!');