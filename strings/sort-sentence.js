/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const result = [];
    let index, length;
    for (const indexedWord of s.split(' ')) {
        length = indexedWord.length;
        index = +indexedWord.charAt(length - 1) - 1;
        result[index] = indexedWord.slice(0, -1);
    }
    return result.join(' ');
};

const s = "is2 sentence4 This1 a3";
const result = sortSentence(s);
console.log('!');