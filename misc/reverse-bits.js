/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    const binary = (n >>> 0).toString(2).split('');
    return +(binary.reverse().join(''));
};

const n = -3;
const result = reverseBits(n);
console.log('!');

00000010100101000001111010011100 
00111001011110000010100101000000