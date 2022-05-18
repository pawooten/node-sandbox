/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let cursor = digits.length - 1, operand = 1, result = [];
    while (cursor >= 0) {
        let value = digits[cursor] + operand;
        if (value === 10) {
            value = 0;
            operand = 1;
        } else {
            operand = 0;
        }
        result.push(value);
        cursor--;
    }
    if (operand) {
        result.push(1);
    }
    return result.reverse();
};
const digits = [4,3,2,1];
const result = plusOne(digits);
console.log('!');