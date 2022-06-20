/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
    // Return the minimum number of steps to make the given string empty by removing one palindromic subsequence from s at a time.
    if (isPalindrome(s)) {
        // s is already a palindrome.
        return 1;
    }
    return 2;
};

const isPalindrome = function(s) {
    let reverse = s.split('').reverse().join('');
    return s === reverse;
}

const getPalindromicSubStrings = function(s) {
    // If s is a palindromic substring, just return s.

    // Explore all the substrings that result from removing 1 letter, then 2, then 3, etc
}

const s = 'ababa';
const result = removePalindromeSub(s);
console.log('!');