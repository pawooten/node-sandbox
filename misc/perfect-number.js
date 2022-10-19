/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false;
    }
    // A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
    // A divisor of an integer x is an integer that can divide x evenly.
    // Return true if num is a perfect number, otherwise false.

    const divisors = getDivisors(num);
    const sum = divisors.reduce((previous, current) => previous + current, 0);
    return num === sum;
};

const getDivisors = (num) => {
    const divisors = [ 1 ], max = num / 2;
    let divisor = 2;
    while (divisor <= max) {
        if (num % divisor === 0) {
            divisors.push(divisor);
        }
        divisor++;
    }
    return divisors;
};

const num = 7;
const result = checkPerfectNumber(num);
console.log('!');