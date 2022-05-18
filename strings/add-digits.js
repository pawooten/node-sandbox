/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    // add each digit of num until the result has only one digit, and return it.

    let strNum = num.toString();
    while (strNum.length > 1) {
        num =  strNum.split('').map(char => +char).reduce( (previous, current) => previous + current);
        strNum = num.toString();
    }
    return num;
};
const num = 10;
const result = addDigits(num);
console.log('!');