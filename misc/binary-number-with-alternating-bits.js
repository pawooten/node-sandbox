/**
 * @param {number} n
 * @return {boolean}
 */
 var hasAlternatingBits = function(n) {
    const bits = n.toString(2).split(''), length = bits.length - 1;
    for (let index = 0; index < length; index++) {
        if (bits[index] === bits[index + 1]) {
            return false;
        }
    }
    return true;
};

const n = 7;
const result = hasAlternatingBits(n);
console.log('!');