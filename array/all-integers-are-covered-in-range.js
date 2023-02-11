/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    const coveredPoints = new Set();
    let rangeStart, rangeEnd;
    for ([rangeStart, rangeEnd] of ranges) {
        do {
            coveredPoints.add(rangeStart);
            rangeStart++;
        } while (rangeStart <= rangeEnd);
    }

    for (; left <= right; left++) {
        if (!coveredPoints.has(left)) {
            return false;
        }
    }
    return true;
};

const ranges = [[1,10],[10,20]], left = 21, right = 21;
const result = isCovered(ranges, left, right);
console.log('!');