/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const digits = new Set(), zeroCode = '0'.charCodeAt(0), nineCode = '9'.charCodeAt(0);
    let code;
    for (const character of s.split('')) {
        code = character.charCodeAt(0);
        if (code >= zeroCode && code <= nineCode) {
            digits.add(character);
        }
    }
    if (digits.size < 2) {
        return -1;
    }
    const result = [...digits.values()].sort();
    result.pop();
    return +result.pop();
};

const s = "dfa12321afd";
const result = secondHighest(s);
console.log('!');