/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    // usage of capitals is right whern all letters in the word are capitals, "USA",
    // all letters in the word are not capitals, "leetcode",
    // or only the first letter in the word is capital, like "Google".
    // return true if the word is usaging capitals correctly, otherwise false.

    const firstLetter = word.charAt(0);
    const remainingLetters = word.slice(1).split('');
    if (firstLetter.toUpperCase() === firstLetter) {
        // first letter is uppercase. If every remaining character is lowercase, or if every remaining character is uppercase, the string
        // has valid capitalization.
        const lowercaseRemainingCharactersCount =  remainingLetters.filter( letter => letter.toLowerCase() === letter).length;
        return 0 === lowercaseRemainingCharactersCount || remainingLetters.length === lowercaseRemainingCharactersCount;
    } else {
        // first letter is lowercase, so the only valid capitalization is if the entire word is lowercase.
        return remainingLetters.every(letter => letter.toLowerCase() === letter);
    }
};
const  word = "FlaG";
const result = detectCapitalUse(word);
console.log('!');