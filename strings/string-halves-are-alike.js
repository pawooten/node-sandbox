/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const characters = s.split(''), half = characters.length / 2;
    let leftVowelCount = 0, rightVowelCount = 0;
    for (let index = 0; index < half; index++) {
        if (vowels.has(characters[index])) {
            leftVowelCount++;
        }
        if (vowels.has(characters[index + half])) {
            rightVowelCount++;
        }
    }

    return leftVowelCount === rightVowelCount;
};
const s = 'textbook';
const result = halvesAreAlike(s);
console.log('!');