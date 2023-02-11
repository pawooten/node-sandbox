/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const aCharCode = 'a'.charCodeAt(0);
    const getValue = (char) => {
        return char.charCodeAt(0) - aCharCode;
    };

    let firstValues = '';
    for (const firstWordChar of firstWord.split('')) {
        firstValues += getValue(firstWordChar);
    }
    let secondValues = '';
    for (const secondWordChar of secondWord.split('')) {
        secondValues += getValue(secondWordChar);
    }
    let targetValues = '';
    for (const targetChar of targetWord.split('')) {
        targetValues += getValue(targetChar);
    }
    return parseInt(firstValues) + parseInt(secondValues) === parseInt(targetValues);
};

const firstWord = "j", secondWord = "j", targetWord = "bi"
const result = isSumEqual(firstWord, secondWord, targetWord);
console.log('!');