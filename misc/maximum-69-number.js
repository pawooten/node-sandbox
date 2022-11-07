/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    // num is a positive integer consisting only of digits 6 and 9.
    // Return the maximum number you can get by changing at most one digit (6 -> 9 or 9 -> 6)

    // Iterate over the digits of num, from most significant (leftmost) to least significant. The first 6 that can be swapped to a 9 
    // will result in the highest possible number. If there are no 6s, num is already the maxmimum 69 number.
    const digits = num.toString().split(''), length = digits.length;
    for (let index = 0; index < length; index++) {
        if (digits[index] === '6') {
            // We've found a digit to swap
            digits[index] = '9';
            break;
        }
    }
    return parseInt(digits.join(''));
};
const num = 9669;
const result = maximum69Number(num);
console.log('!');