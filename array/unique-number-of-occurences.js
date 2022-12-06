/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    const countMap = new Map();
    for (const value of arr) {
        if (!countMap.has(value)) {
            countMap.set(value, 1);
        } else {
            countMap.set(value, countMap.get(value) + 1);
        }
    }

    const countSet = new Set();
    for (const count of countMap.values()) {
        if (countSet.has(count)) {
            return false;
        }
        countSet.add(count);
    }
    return true;
};

const arr = [1,2];
const result = uniqueOccurrences(arr);
console.log('!');