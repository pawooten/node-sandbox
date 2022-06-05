/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }
    let result = countAndSay(n - 1);
    let digits = result.split('');
    // Iterate across the digits of the result and identify where each span of the same digit begins.
    // 0 is the beginning of a span (even if that span is only the 0th element)
    let commonDigitSpanStartIndexes = [ 0 ];
    let length = digits.length;
    for (let index = 1; index < length; index++) {
        if (digits[index] != digits[index - 1]) {
            // This digit is a differnt value than the previous digit, signally the end of the previous
            // common digit span and the beginning of a new one.    
            commonDigitSpanStartIndexes.push(index);
        }
    }
    let resultDescription = '';
    length = commonDigitSpanStartIndexes.length;
    for (let index = 0; index < length; index++) {
        let startIndex = commonDigitSpanStartIndexes[index];
        let count = digits.length; // if all digits are the same
        if (length > 1) {
            if (index === length - 1) {
                // The last span
                count  = digits.length - commonDigitSpanStartIndexes[index];
            } else {
                // The number of this digit in the span is the start of the next span - the start of the current span
                count = commonDigitSpanStartIndexes[index + 1] - startIndex;
            }
        }
        let value = digits[startIndex];
        resultDescription += `${count}${value}`;
    }
    return resultDescription;
};
const n = 4;
const result = countAndSay(n);
console.log('!');