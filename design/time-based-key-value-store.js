
var TimeMap = function() {
    this.values = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.values.has(key)) {
        this.values.set(key, {});
    }

    this.values.get(key)[timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.values.has(key)) {
        // No value of any timestamp exist for this key.
        return '';
    }

    const currentValuesByTimestamp = this.values.get(key);
    for (let index = timestamp; index >= 0; index--) {
        if (currentValuesByTimestamp[index] != null) {
            return currentValuesByTimestamp[index];
        }
    }
    
    return '';
};