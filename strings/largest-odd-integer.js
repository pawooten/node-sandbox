/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const isOdd = (v) => {
        if (v.length === 0) {
            return false;
        }
        return +(v[v.length - 1]) % 2;
    };
    const chars = num.split('');
    let valueIsOdd;
    do {
        valueIsOdd = isOdd(chars);
        if (valueIsOdd) {
            return chars.join('');
        }
        chars.pop();
    
    } while (!valueIsOdd && chars.length > 0);
    return '';
};

const num = "4206";
const result = largestOddNumber(num);
console.log('!');
