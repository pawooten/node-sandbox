/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // reverse the order of characters in each word within a sentence

    const words = s.split(' ');
    let result = [];
    words.forEach((word) => {
        result.push(word.split('').reverse().join(''));
    });
    return result.join(' ');
};
const s = "Let's take LeetCode contest";
const result = reverseWords(s);
console.log('!');