/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    let exponent = 0, result;
    do {
        result = Math.pow(4, exponent);
        if (result === n) {
            return true;
        }
        exponent++;
    } while (result < n);
    return false;
};
const n = 1;
const result = isPowerOfFour(n);
console.log('!');