/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let characters = (n >>> 0).toString(2).split('');
    return characters.filter(char => char === '1').length;
};
const n = 11;
const result = hammingWeight(n);
console.log('!');