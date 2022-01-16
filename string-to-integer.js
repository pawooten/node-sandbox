/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    s = s.trim();
    let isPositive = true;
    if (s[0] === '-') {
        isPositive = false;
        s = s.substring(1,s.length); // Remove the negative sign
    }else if (s[0] === '+') {
        s = s.substring(1,s.length); // Remove the positive sign
    }

    // If there was a sign character, it has been removed. Iterate over the remaining string
    // looking for digit characters
    let i;
    for(i = 0; i < s.length && /\d/.test(s[i]); i++) {}
    if (i !== s.length){
        // The string contains non-numeric digits becaue we failed to iterate across the entire string
        s = s.substring(0, i);
    }
    let intValue = s.length > 0 ? parseInt(s, 10) : 0;
    intValue = isPositive ? intValue : intValue * -1;
    if (intValue === -0) {
        intValue = 0;
    }
    if (intValue < min) {
        intValue = min;
    }
    if (intValue > max) {
        intValue = max;
    }
    return intValue;
};
let s = '-+12';
var result = myAtoi(s);
console.log('!')