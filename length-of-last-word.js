/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    // s consists of some words separated by some number of spaces, return the lengthg of the last word in the string.
    // a word is a maximal substring consisting of non-space characters only.
    return s.split(' ').filter(word => word.length > 0).pop().length;
};
const s =  "luffy is still joyboy";
const result = lengthOfLastWord(s);
console.log('!');