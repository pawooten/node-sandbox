/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    // Pick middle character, and determine largest subString which contains the middle character using two pointers
    // If 

    // Return the number of palindromic substrings within s.

    let subStrings = [];
    const length = s.length;
    for (let startIndex = 0; startIndex < length; startIndex++) {
        for (let sliceLength = startIndex + 1; sliceLength <= length; sliceLength++) {
            let subString = s.slice(startIndex, sliceLength);
            if (isPalindromic(subString)) {
                subStrings.push(subString);
            }
        }
    }
    return subStrings.length;
};

const findLargestContainingSubString = function(s, index) {
    let largestSubString = s[index]; // A subString consisting solely of the indexed character is technically palindromic.
    const length = s;
    let left = index - 1, right = index + 1;
    while (left >= 0 && right <= length - 1) {
        let newSubString = s.slice(left, right);
        if (isPalindromic(newSubString)) {
            if (newSubString.length > largestSubString.length) {
                largestSubString = newSubString;
            }
        }
    }
    return largestSubString;
}

const isPalindromic = function(subString) {
    let reversed = subString.split('').reverse().join('');
    const length = subString.length;
    for (let index = 0; index < length; index++) {
        if (subString[index] != reversed[index]) {
            return false;
        }
    }
    return true;
}

const s = "aaa";
const result = countSubstrings(s);
console.log('!');