/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const numbers1 = [], numbers2 = new Set(), zeroCode = '0'.charCodeAt(0), nineCode = '9'.charCodeAt(0);
    let firstLetterCode, parsedNumber;
    for (const word of s.split(' ')) {
        firstLetterCode = word.charCodeAt(0);
        if (firstLetterCode >= zeroCode && firstLetterCode <= nineCode) {
            // The first character of this word is a number, assume its a number
            parsedNumber = parseInt(word);
            numbers1.push(parsedNumber);
            numbers2.add(parsedNumber);
        }
    }

    if (numbers1.length !== numbers2.size) {
        return false;
    }

    const numbers3 = [...numbers2.values()].sort((left, right) => left - right);
    const length = numbers1.length;
    for (let index = 0; index < length; index++) {
        if (numbers1[index] !== numbers3[index]) {
            return false;
        }
    }
    return true;
};

const s = "hello world 7 x 5";
const result = areNumbersAscending(s);
console.log('!');