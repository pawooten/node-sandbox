/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
 var hasAllCodes = function(s, k) {
    // Return true if every binary code of length k is a substring of s, otherwise return false.
    const max = Math.pow(2, k) - 1;
    let code = 0;
    do {
        if (s.indexOf(code.toString(2).padStart(k, '0')) < 0) {
            // This code isn't contained within s, shortcircuit.
            return false;
        }
        code++;
    } while (code <= max);

    // We iterated across all codes of length k without finding a code which is not a substring of s, therefore all
    // codes are substrings of s.
    return true;
};

// const getCodes = function(k) {
//     if (k === 1) {
//         return [[0], [1]];
//     }
//     let previousResult = getCodes(k - 1);
//     let newResult = [];
//     previousResult.forEach(combination => {
//         newResult.push([...combination, 0]);
//         newResult.push([...combination, 1]);
//     });
//     return newResult;
// }
const getCodes = function(k) {
    let codes = [], code = 0;
    const max = parseInt(new Array(k).fill('1').join(''), 2);
    do {
        let strCode = code.toString(2).padStart(k, '0');        
        codes.push(strCode);
        code++;
    } while (code <= max);
    return codes;
}
const s = "0110", k = 20;
const result = hasAllCodes(s, k);
console.log('!');