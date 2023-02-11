/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);
    if (index >= 0) {
        const prefix = word.slice(0, index + 1).split('').reverse().join('');
        return prefix + word.slice(index + 1);
    }

    return word;
};

const word = "abcdefd", ch = "d";
const result = reversePrefix(word, ch);
console.log('!');