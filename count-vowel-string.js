/**
 * @param {number} n
 * @return {number}
 */
 var countVowelStrings = function(n) {
    // Return the number of strings of length n that consist only of vowels (a,e, i, o, u) and are lexicographically sorted.
    let combinations = [], currentCombination = [];
    findCombinations(n, currentCombination, combinations);
    return combinations.length;
};
const findCombinations = function(remainingN, currentCombination, combinations) {
    for (let index = vowels.length - 1; index >= 0; index--) {
        let newCombination = [...currentCombination, vowels[index]];
        if (isLexicographicallySorted(newCombination.slice(-2))) {
            // Lexicographically sorted! Are we done with the combination or do we need additional digits
            if (remainingN === 1) {
                combinations.push(newCombination);
            } else {
                // We need additional digits
                findCombinations(remainingN - 1, newCombination, combinations);
            }
        }
    }
}
const isLexicographicallySorted = function(combination) {
    let isSorted = true;
    // Iterate over the combination, starting with the last character of the combination.
    // If the current character is greater than current - i character throughout the combination, it
    // is lexicographically sorted.
    for (let index = combination.length - 1; isSorted && index > 0; index--) {
        isSorted = (combination[index] >= combination[index - 1]);
    }
    return isSorted;
}
const vowels = [ 'a', 'e', 'i', 'o', 'u'];

const n = 2;
const result = countVowelStrings(n);
console.log('!');