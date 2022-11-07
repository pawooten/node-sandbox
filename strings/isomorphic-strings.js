/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    // s and t are isomorphic if the characters in s can be replaced to get t. All occurences of a character must be replaced with another character
    // while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

    const sCharacters = s.split(''), tCharacters = t.split(''), length  = sCharacters.length, characterMap = new Map(), mappedCharacters = new Set();
    let currentSCharacter, mappedCharacter;
    for (let index = 0; index < length; index++) {
        currentSCharacter = sCharacters[index];
        mappedCharacter = tCharacters[index];
        // Have we already mapped this character?
        if (!characterMap.has(currentSCharacter)) {
            // We have yet to encounter this character while iterating over the characters of s, so it is not mapped. Is the character we need to map to already mapped?
            if (!mappedCharacters.has(mappedCharacter)) {
                // The character we need to map to is not currently mapped!
                mappedCharacters.add(mappedCharacter);
                characterMap.set(currentSCharacter, mappedCharacter);
            } else {
                // Bad news, this character isn't mapped, but the character we need to map it to is already mapped to a different character. Not isomorphic.
                return false;
            }
        } else {
            // We have encountered this character before. Is the mapping compatible with the corresponding character of tCharacters?
            if (characterMap.get(currentSCharacter) != mappedCharacter) {
                // This character is mapped to a different character than the one we need to map it to in order for the strings to be isomorphic.
                return false;
            }
        }
    }

    // We iterated across all characters of s without short circuiting, it is isomorphic!
    return true;
};

const s = "paper", t = "title";
const result = isIsomorphic(s, t);
console.log('!');