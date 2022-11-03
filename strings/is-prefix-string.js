/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
 var isPrefixString = function(s, words) {
    // Return true if s is a prefix string of words.

    const sCharacters = s.split('');
    let prefixStringCharacters = [];
    for (const word of words) {
        prefixStringCharacters.push(...word.split(''));
        if (sCharacters.length < prefixStringCharacters.length) {
            // We've appended enough words that prefixStringCharacters is longer than sCharacters, shortcircuit.
            return false;
        }
        // Iterate across each character we've appended to prefixStringCharacters so far. If any of them do not match the corresponding index of sChar, shortcircuit
        // Do not shortcircuit if we make it through all the prefixStringCharacters though, since we may not have applied enough words yet to know one way or the other.
        for (let index = 0; index < prefixStringCharacters.length; index++) {
            if (prefixStringCharacters[index] != sCharacters[index]) {
                // Mismatch
                return false;
            }
        }
        // We iterated across all characters without shortcircuiting due to a mismatch. Have we found a prefix string?
        if (sCharacters.length === prefixStringCharacters.length) {
            return true;
        }
    }

    return false;
};

const s = "iloveleetcode", words = ["i","love","leetcode","apples"];
const result = isPrefixString(s, words);
console.log('!');