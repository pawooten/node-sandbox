var RandomizedSet = function() {
    this.values = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.values.has(val)) {
        this.values.add(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.values.has(val)) {
        this.values.delete(val);
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const valuesArray = [...this.values.values()], length = valuesArray.length;
    if (length === 1) {
        return valuesArray[0];
    }
    const index = Math.round(Math.random() * (length - 1));
    return valuesArray[index];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const rSet = new RandomizedSet();
let result = rSet.insert(0);
result = rSet.insert(1);
result = rSet.insert(2);
result = rSet.getRandom();
result = rSet.getRandom();
result = rSet.getRandom();
result = rSet.getRandom();
result = rSet.getRandom();
result = rSet.getRandom();
result = rSet.getRandom();
result = rSet.getRandom();
result = rSet.getRandom();
result = rSet.getRandom();
console.log('!');