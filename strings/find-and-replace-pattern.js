/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    // Given a list og string words and a string pattern, return a list of words[i] that match pattern (in any order).
    // A word matches a pattern if there exists a permutation of letters p so that after replacing every letter x
    // in the pattern with p(x), we get the desired word.

    let matches = [];
    const patternCharacters = pattern.split(''), patternCharacterCount = patternCharacters.length;

    // Evaluate each word to determine if it matches the pattern or not.
    words.forEach(word => {
        // A map of pattern characters to (current) word characters.
        let characterMap = new Map(), mappedCharacters = new Set();
        let wordCharacters = word.split(''), characterCount = wordCharacters.length, index, shortcircuit = false;
        // Iterate through the characters of the pattern.
        for (index = 0; index < patternCharacterCount && !shortcircuit; index++) {
            let currentCharacter = wordCharacters[index], currentPatternCharacter = patternCharacters[index];
            if (characterMap.has(currentPatternCharacter)) {
                // This character is already mapped. If the mapped character matches the current character of this word, we're ok.
                // If not, this word doesn't match the pattern.
                if (currentCharacter != characterMap.get(currentPatternCharacter)) {
                    // It doesn't match, this word doesn't match the pattern.
                    shortcircuit = true;
                }
            } else {
                // This pattern character isn't mapped, but it is about to be. Any further instances of this character in the pattern must match the mapped character.
                if (mappedCharacters.has(currentCharacter)) {
                    // Scratch that. This word character is mapped to some other pattern character already, this is unsolvable.
                    shortcircuit = true;
                }
                characterMap.set(currentPatternCharacter, currentCharacter);
                mappedCharacters.add(currentCharacter);
            }
        }
        if (!shortcircuit && index === patternCharacterCount) {
            matches.push(word);
        }
    });

    return matches;
};
const  words = ["a","b","c"], pattern = "a";
const result = findAndReplacePattern(words, pattern);
console.log('!');