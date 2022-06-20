/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    // Parse num1 and num2 into integers (manually) and return a string representation of the product of num1 and num2.
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    return (n1 * n2).toString();
};
// Initialize a lookup for char / int values
const digitCharacters = new Map();
for (let i = 0; i < 10; i++) {
    digitCharacters.set(i.toString(), i);
}

const parseInt = function(value) {
    const digits = value.split('');
    let sum = 0, multiplier = 1;
    for (let index = digits.length - 1; index >= 0; index--) {
        sum += digitCharacters.get(digits[index]) * multiplier;
        multiplier *= 10;
    }
    return BigInt(sum);
}

const num1 = "123", num2 = "456";
const result = multiply(num1, num2);
console.log('!');