/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const length = s.length;
    if (length === 1) {
        return s;
    }
    let recordKeeper = { longestPalindrome: '', longestPalindromeScore: 0 };
    for ( let index = 0; index <= length; index++) {
        findPalindromes(s, index, recordKeeper);
    }
    return recordKeeper.longestPalindrome;
};
const findPalindromes = function(s, startIndex, recordKeeper) {
    let longestPalindrome = '', longestPalindromeScore = 0;
    const length = s.length;
    for (let index = startIndex + 1; index < length; index++) {
        let palindrome = s.slice(startIndex, index);
        let palindromeScore = getPalindromeScore(palindrome);
        if (palindromeScore > longestPalindromeScore) {
            longestPalindrome = palindrome;
            longestPalindromeScore = palindromeScore;
        }
    }
    if (recordKeeper.longestPalindromeScore < longestPalindromeScore) {
        recordKeeper.longestPalindrome = longestPalindrome;
        recordKeeper.longestPalindromeScore = longestPalindromeScore;
    }
}
const getPalindromeScore = function(subString) {
    const length = subString.length;
    let left, right;
    if (length % 2) {
        // odd length
        let half = Math.floor(length / 2);
        left = subString.slice(0, half);
        right = subString.slice(half + 1);
    } else {
        // even length
        let half = Math.floor(length / 2);
        left = subString.slice(0, half);
        right = subString.slice(half);
    }
    if (left.split('').reverse().join('') === right) {
        return subString.length;
    }
    return 0;
}

const s = "cbbd";
const result = longestPalindrome(s);
console.log('!');
