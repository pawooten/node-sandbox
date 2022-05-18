/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var str = s;
    const numeralValues = [ [1, 'I'], [5, 'V'], [10, 'X'], [50, 'L'], [100, 'C'], [500, 'D'], [1000, 'M']];
    const compoundNumeralValues = [ [4, 'IV'], [9, 'IX'], [40, 'XL'], [90, 'XC'], [400, 'CD'], [900, 'CM'] ];

    var sum = 0;
    compoundNumeralValues.forEach(compoundNumeral => {
        //const newStr = str.replaceAll(compoundNumeral[1], '');
        const newStr = str.replace(new RegExp(compoundNumeral[1], "g"), '');
        // I think Roman Numerals don't allow multiple compound numerals. For instance, a valid roman numeral can't include multiple instances of "IV"
        if (newStr.length != str.length) {
            // We must have replaced an instance of the compound numeral. Add it to the sum
            sum += compoundNumeral[0];
        }
        str = newStr;
    });

    // We've replaced all the compound numerals, now replace the simple numerals and we're done
    numeralValues.forEach(numeral => {
        const newStr = str.replace(new RegExp(numeral[1], "g"), '');
        // Roman numerals are allowed to contain multiple simple numerals, for instance, "III" contains three 'I' and is valid.
        sum += numeral[0] * (str.length - newStr.length);
        str = newStr;
    });         
    return sum;
};
console.log(romanToInt('MCMXCIV'))