/**
 * @param {string[]} words
 * @return {string[]}
 */
 var removeAnagrams = function(words) {

    // Create another array whose value is a string representation of the sorted letters of the actual value at that index.
    const alphabetizedLetterWords = [];
    for (const word of words) {
        alphabetizedLetterWords.push(word.split('').sort().join(''));
    }
    
    for (let index = 1; index < words.length; index++) {
        if (alphabetizedLetterWords[index] === alphabetizedLetterWords[index - 1]) {
            // Anagram!
            words.splice(index, 1);
            alphabetizedLetterWords.splice(index, 1);
            index--;
        }        
    }

    return words;
};
const  words = ["z","z","z","gsw","wsg","gsw","krptu"];
const result = removeAnagrams(words);
console.log('!');