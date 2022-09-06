/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const transformedWords = new Set();
    words.forEach(word => {
        transformedWords.add(transform(word));
    });
    return transformedWords.size;
};

const morseCodeValues = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const transform = function(word) {
    return word.split('').map(character => {
        return morseCodeValues[character.charCodeAt(0) - offset];
    }).join('');
}

const offset = 'a'.charCodeAt(0);


const words = ["gin","zen","gig","msg"];
const result = uniqueMorseRepresentations(words);
console.log('!');