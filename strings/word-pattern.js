/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' '), length = words.length;
    if (pattern.length !== length) {
        return false;
    }
    // Create a map of each pattern character which has been allocated thus far. Key is pattern character, value is mapped word.
    const patternWordMap = new Map(), mappedWords = new Set();
    let currentPattern, currentWord;
    for (let index = 0; index < length; index++) {
        currentPattern = pattern.charAt(index);
        currentWord = words[index];
        if (!patternWordMap.has(currentPattern)) {
            // We have not yet mapped this character to a word. Is the word eligible to be mapped because it is not yet mapped to a different word?
            if (!mappedWords.has(currentWord)) {
                // Both the pattern character and the current word are not yet mapped. Map them and continue on to the next patternCharacter + word.
                patternWordMap.set(currentPattern, currentWord);
                mappedWords.add(currentWord);
            } else {
                // This patternCharacter is not mapped, but the value it must be mapped to in order for the string to match the pattern has already been mapped.
                return false;
            }
        } else {
            // The patternCharacter is mapped already mapped.
            if (patternWordMap.get(currentPattern) !== currentWord) {
                // The patternCharacter is mapped to a word that doesn't match the current word.
                return false;
            }
        }
    }
    return true;
};

const pattern = "abba", s = "a b b a";
const result = wordPattern(pattern, s);
console.log('!');