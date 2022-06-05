/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result = divide2(dividend, divisor);
    if (result > 2147483647) {
        result = 2147483647;
    }
    return result;
}
 var divide2 = function(dividend, divisor) {
    // Implement division without using multiplication, divison or modulus operators.
    // Truncate fractions of integers

    const negate = dividend < 0 != divisor < 0;
    dividend = Math.abs(dividend), divisor = Math.abs(divisor);

    if (divisor === 1) {
        // We're dividing by 1 or -1, optimize
        return negate ? dividend * -1 : dividend;
    }

    let resultAccumulator = 0, result = 0;
    while (resultAccumulator < dividend) {
        resultAccumulator += divisor;
        result++;
    }
    // Did we overshoot the dividend target, or land perfectly?
    if (resultAccumulator != dividend) {
        // We overshot the dividend target, decrement one to correspond to the truncated fraction.
        result--;
    }

    if (negate) {
        result *= -1;
    }
    return result;
};
const dividend = 7, divisor = -3;
const result = divide(dividend, divisor);
console.log('!');