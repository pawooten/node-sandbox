/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    // return an array of length n+1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
    let result = [];
    const length = n + 1;
    for (let index = 0; index < length; index++) {
        let count = index.toString(2).split('').map(digit => +digit).reduce((previous, current) => previous + current);
        result.push(count);
    }
    return result;
};
const n = 5;
const result = countBits(n);
console.log('!');