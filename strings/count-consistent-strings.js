/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed.split(''));
    let count = 0;
    for (const word of words) {
        if (word.split('').every(wordCharacter => allowedSet.has(wordCharacter))) {
            count++;
        }
    }
    return count;
};

const allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"];
const result = countConsistentStrings(allowed, words);
console.log('!');