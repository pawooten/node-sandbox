/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    // return an array of the start indices of p's anagrams in s. 
    let matchIndices = [];
    const patternLength = p.length;
    const patternLetters = p.split('');
    for (let index = 0; index <= s.length - patternLength; index++) {
        // does s[index] - s[index + patternLength] contain each of the letters in p?
        let searchString = s.substring(index, index + patternLength);
        let letterFound = true;
        for (letterIndex = 0; letterIndex < patternLetters.length && letterFound; letterIndex++) {
            letterFound = -1 !== searchString.indexOf(patternLetters[letterIndex]);
        }
        if (letterFound) {
            // We iterated across each letter in our pattern and found a match in the substring for each letter
            matchIndices.push(index);
        }
    }
    return matchIndices;
};

const s = "baa", p = "aa";
const result = findAnagrams(s, p);
console.log('!');