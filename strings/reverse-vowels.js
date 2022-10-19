/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    // Reverse the vowel characters only and return the string.

    const characters = s.split('');
    const vowels = characters.filter(char => {
        return isVowel(char);
    }).reverse();
    
    // Iterate over the characters. Each time we encounter a vowel in the array, replace it with a value from the reversed array.
    let vowelIndex = 0;
    characters.forEach((character, index) => {
        if (isVowel(character)) {
            // We've encountered a vowel and must replace it.
            characters[index] = vowels[vowelIndex];
            vowelIndex++;
        }
    });

    return characters.join('');
};

const s = 'leetcode';
const result = reverseVowels(s);
console.log('!');

function isVowel(char) {
    switch (char) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            return true;
        default:
            return false;
    }
}
