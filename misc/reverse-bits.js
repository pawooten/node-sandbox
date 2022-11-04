/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    const binary = (n >>> 0).toString(2).padStart(32, '0').split('');
    return parseInt(binary.reverse().join(''), 2);
};

const n = 43261596;
const result = reverseBits(n);
console.log('!');
