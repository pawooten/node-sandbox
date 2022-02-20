/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    if (k === 0) {
        return (+num).toString();
    }

    // calculate the resulting value after removing each digit individually
    let min = +removeDigit(num, 0), minIndex = 0;
    for (let index = 0; index < num.length; index++) {
        let resultNum = +removeDigit(num, index);
        if (resultNum < min) {
            min = resultNum;
            minIndex = index;
        }
    }
    // Remove the digit which results in the lowest resulting value
    num = removeDigit(num, minIndex);
    k -= 1;
    return removeKdigits(num, k);
};
let removeDigit = function(num, digitIndex) {
    let splitNum = num.slice().split('');
    splitNum.splice(digitIndex, 1);
    return splitNum.join('');
}

const num = "10", k = 2;
const result = removeKdigits(num, k);
console.log('!');