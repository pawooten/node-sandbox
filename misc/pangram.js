/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    // Return true if sentence is a pangram, otherwise false. A pangram is a sentence where every letter of the English alphabet appears at least once.

    let missingLetters = new Set(), letterCode = 'a'.charCodeAt(0);
    while (letterCode < 123) {
        missingLetters.add(String.fromCharCode(letterCode));
        letterCode++;
    }

    for (const letter of sentence.split('')) {
        missingLetters.delete(letter);
        if (missingLetters.size === 0) {
            // We've removed every letter in the English alphabet, short circuit.
            return true;
        }
    }

    // We failed to shorcircuit, therefore there is at least one letter remaining.
    return false;
};

const sentence = "thequickbrownfoxjumpsoverthelazydog";
const result = checkIfPangram(sentence);
console.log('!');