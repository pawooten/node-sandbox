/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    // Reverse the string by modifying in place with O(1) extra memmory.
    let temp, length = s.length, halfLength = s.length / 2;
    for (let index = 0; index < halfLength; index++) {
        temp = s[index];
        s[index] = s[length - index - 1];
        s[length - index - 1] = temp;
    }
    return s;
};
const s = ["H","a","n","n","a","h"];
const result = reverseString(s);
console.log('!');