/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    const values = [0, 1, 1];
    while (values.length <= n) {
        values.push(values.slice(-3).reduce((previous, current) => previous + current, 0));
    }
    return values[n];
};

const n = 25;
const result = tribonacci(n);
console.log('!');