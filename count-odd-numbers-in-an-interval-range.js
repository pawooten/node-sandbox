/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    // return the count of odd numbers between low and high (inclusive).
    let count = 0;
    if (low % 2 === 0) {
        low++;
    }
    for (; low <= high; low += 2) {
        if (low % 2 === 1) {
            count++; // low is odd.
        }
    }
    return count;
};
const low = 3, high = 7;
const result = countOdds(low, high);
console.log('!');