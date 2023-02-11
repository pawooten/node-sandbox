/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    // Return the sum of lengths of all good strings in words -- strings which can be formed using the characters in chars.

    // Build a map whose keys are each unique character in chars, and whose value is the number of instances of that character.
    const charMap = new Map();
    for (const char of chars.split('')) {
        if (!charMap.has(char)) {
            charMap.set(char, 1);
        } else {
            charMap.set(char, charMap.get(char) + 1);
        }
    }

    // Iterate over each word, and determine if it is good or not.
    let result = 0;
    const wordCharMap = new Map();
    let requiredCharCount, charCount, wordCharCount;
    for (const word of words) {
        // Clear the map of word characters, since it may contain data from the previous word.
        wordCharMap.clear();
        wordCharCount = 0;

        // Iterate over each character of the word.
        for (const wordChar of word.split('')) {
            if (!wordCharMap.has(wordChar)) {
                // This is the first instance of this character we've encountered in this word.
                requiredCharCount = 1;
            } else {
                requiredCharCount = wordCharMap.get(wordChar) + 1;
            }
            charCount = charMap.get(wordChar);
            if ( charCount === undefined || requiredCharCount > charCount ) {
                // This word isn't good because we don't have enough instances of this character.
                break;
            }
            wordCharMap.set(wordChar, requiredCharCount);
            wordCharCount++;
        }
        if (wordCharCount === word.length) {
            result += wordCharCount;
        }
    }

        return result;
};

const words = ["hello","world","leetcode"], chars = "welldonehoneyr";
const result = countCharacters(words, chars);
console.log('!');