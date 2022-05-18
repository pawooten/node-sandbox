/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    // Return true if s can be transformed into a palindrome by deleting at most one character.
    // Is the string already a palindrome without removing a character?
    if (isPalindrome(s)) {
        return true;
    }
    // Iterate through each character to see if removing it results in a palindrome.
    const length = s.length;
    for (let index = 0; index < length; index++) {
        let temp = [...s];
        temp.splice(index, 1);
        if (isPalindrome(temp.join(''))) {
            return true;
        }
    }
    return false;
};
const isPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    while (left != right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// const isPalindrome = function(s) {
//     // A palindrome is a string which read forwards matches the same string read backwards.
//     const reversed = s.split('').reverse().join('');
//     return s === reversed;
// }
const s = "abca";
const result = validPalindrome(s);
console.log('!');