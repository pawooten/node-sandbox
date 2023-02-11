/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let deleteCount = 0;

    // Iterate across each column to determine if its lexicographically sorted.

    const isSorted = (values) => {
        const sortedValues = [...values].sort(), valuesLength = values.length;
        for (let valueIndex  = 0; valueIndex < valuesLength; valueIndex++) {
            if (values[valueIndex] !== sortedValues[valueIndex]) {
                return false;
            }
        }
        return true;
    }

    const length = strs[0].length;
    for (let index = 0; index < length; index++) {
        if (!isSorted(strs.map(row => row.charAt(index)))) {
            deleteCount++;
        }
    }

    return deleteCount;
};

const strs = ["cba","daf","ghi"];
const result = minDeletionSize(strs);
console.log('!');