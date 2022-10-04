/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    const num1Digits = num1.split(''), num2Digits = num2.split('');
    let result = [];
    let carry = 0, sum, digit1, digit2;
    while (num1Digits.length > 0 || num2Digits.length > 0) {
        if (num1Digits.length === 0) {
            // Only digits of num2 remain. Add them to the result one digit at a time, plus the carry, if any.
            digit2 = +(num2Digits.pop());
            sum = carry + digit2;
            carry = sum > 9 ? 1 : 0;
            result.push(sum % 10);
        } else {
            // At least one num1 digit remains. Does a num2 remain?
            if (num2Digits.length === 0) {
                // No. Only digits of num1 remain. Add them to the result one digit at a time.
                digit1 = +(num1Digits.pop());
                sum = carry + digit1;
                carry = sum > 9 ? 1 : 0;
                result.push(sum % 10);
            } else {
                // Yes, this means we have two digits to add.
                digit1 = +(num1Digits.pop());
                digit2 = +(num2Digits.pop());
                sum = carry + digit1 + digit2;
                carry = sum > 9 ? 1 : 0;
                result.push(sum % 10);
            }
        }
    }

    if (carry > 0) {
        result.push('1');
    }

    return result.reverse().join('');
};
const num1 = "1", num2 = "9";
const result = addStrings(num1, num2);
console.log('!');