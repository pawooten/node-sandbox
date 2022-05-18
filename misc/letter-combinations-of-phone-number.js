/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
     if (digits.length === 0) {
         return [];
     }
    const splitDigits = digits.split('');
    let results = [];
    findCombinations(splitDigits, '', results);
    return results;
};
const findCombinations = function(digits, currentRoot, results) {
    const length = digits.length, isLast = currentRoot.length === length - 1;
    let currentDigit = digits[currentRoot.length];
    let letters = lettersByDigit.get(currentDigit);
    for (let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
        let letter = letters[letterIndex];
        if (!isLast) {
            findCombinations(digits, currentRoot + letter, results);
        } else {
            results.push(currentRoot + letter);
        }
    }
};
const lettersByDigit = (function() {
    let map = new Map();
    map.set('2', ['a', 'b', 'c']);
    map.set('3', ['d', 'e', 'f']);
    map.set('4', ['g', 'h', 'i']);
    map.set('5', ['j', 'k', 'l']);
    map.set('6', ['m', 'n', 'o']);
    map.set('7', ['p', 'q', 'r', 's']);
    map.set('8', ['t', 'u', 'v']);
    map.set('9', ['w', 'x', 'y', 'z']);
    return map;
})();

const digits = "";
const result = letterCombinations(digits);
console.log('!');