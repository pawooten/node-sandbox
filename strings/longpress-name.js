/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    const nameCharacters = name.split(''), typedCharacters = typed.split(''), nameLength = nameCharacters.length - 1;
    
    // Iterate over all but the last character of the name.
    let typedIndex = 0, currentNameCharacter, nextNameCharacter;
    for (let nameIndex = 0; nameIndex < nameLength; nameIndex++) {
        currentNameCharacter = nameCharacters[nameIndex];
        if (currentNameCharacter !== typedCharacters[typedIndex]) {
            return false;
        }
        // If we haven't short-circuited, that means we are able to satisfy this name character with the current typed character.
        // Is the next name character a different character than current? If so, that could be a long press we should eat.
        nextNameCharacter = nameCharacters[nameIndex + 1];
        if (nextNameCharacter !== typedCharacters[typedIndex]) {
            while (typedCharacters[typedIndex] === nextNameCharacter) {
                typedIndex++;
            }
        }
    }

    return true;
};

const name = "leelee", typed = "lleeelee";
const result = isLongPressedName(name, typed);
console.log('!');