/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (isPalindrome(s)) {
        return s;
    }
    // Test every substring of s to see if it is a palindrome.
    const lengthOffset = s.length - 1;
    let maxPalindrome = '';
    for (let startIndex = 0; startIndex <= lengthOffset; startIndex++ ) {
        // Test each substring that starts with the character at startIndex, but do in order from largest substring to smallest, so that we can sort circuit:
        // as soon as we find a palindrome, that is the largest palindrome that starts at this startIndex.
        let found = false;
        for (let endIndex = lengthOffset; endIndex >= startIndex && !found; endIndex--) {
            let subString = s.slice(startIndex, endIndex + 1);
            found = isPalindrome(subString);
            if (found) {
                if (subString.length > maxPalindrome.length) {
                    maxPalindrome = subString;
                }
            }
        }
    }
    return maxPalindrome;
 }
 const isPalindrome = function(s) {
     return s === s.split('').reverse().join('');
 }
 const s = 'ac';
 const result = longestPalindrome(s);
 console.log('!');