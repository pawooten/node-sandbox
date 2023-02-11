/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    // Convert the integer into an array of the digits which compose it, and then sort them from smallest to largest
    const digits = num.toString(10).split('').map(c => +c).sort((left, right) => left - right);
    return Number.parseInt(`${digits[0]}${digits[2]}`) + Number.parseInt(`${digits[1]}${digits[3]}`);
};

const num = 4009;
const result = minimumSum(num);
console.log('!');