// maximum 2,147,483,647
/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function(num) {
     if (num === 0) {
         return 'Zero';
     }
    const places = [ '' /* ones */, 'Thousand', 'Million', 'Billion'];
    let numArray = num.toString().split('');
    let result = '', current, placeIndex = 0;
    do {
        if (numArray.length < 4) {
            // Less than three characters remain, eat all remaining characters
            current = getNumberDescription(+numArray.join(''));
            numArray = [];
        } else {
            current = getNumberDescription(+numArray.splice(numArray.length - 3).join('')); 
        }
        current = current.trim();
        if (current.length > 0) {
            // Only append current and it's place index description if current has a value
            // Current would be whitespace if this section of the number is 000, such as in 1001.
            result = `${current} ${places[placeIndex]} ${result}`.trim();
        }
        placeIndex++;
    } while (numArray.length > 0);

    return result.trim();
};
const tensDigits = ['', '','Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'], tensDigitsLength = tensDigits.length;
const digits = ['' /* zero */, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine' ], digitsLength = digits.length;
const twentyDigits = [ ...digits, 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'], twentyDigitsLength = twentyDigits.length;

const getNumberDescription = function(num) {    
    // Assuming num < 1000
    let result = '', computed;

    // Append the hundred's digit, if any
    for (let hundredsDigit = digitsLength - 1; hundredsDigit >= 0 && num >= 100; hundredsDigit--) {
        computed = hundredsDigit * 100;
        if (num >= computed) {
            result += digits[hundredsDigit];
            num -= computed;
        }
    }
    if (result.length > 0) {
        result += ' Hundred';
    }
    if (num === 0) {
        return result;
    }
    result += ' ';

    // Append ninety - twenty
    for (let tensDigit = tensDigitsLength - 1; tensDigit >= 2 && num >= 20; tensDigit--) {
        computed = tensDigit * 10;
        if (num >= computed) {
            result += tensDigits[tensDigit];
            num -= computed;
        }
    }
    if (num === 0) {
        return result;
    }
    if (result.charAt(result.length - 1) != ' ') {
        result += ' ';
    }

    // Append one - nineteen
    for (let onesDigit = twentyDigitsLength - 1; onesDigit >= 0 && num > 0; onesDigit--) {
        if (num >= onesDigit) {
            result += twentyDigits[onesDigit];
            num -= onesDigit;
        }
    }

    return result;
}
//two billion, one hundred forty seven million, four hundred eighty three thousand, six hundred forty seven
const num = 1000000;
const result = numberToWords(num);
console.log('!');