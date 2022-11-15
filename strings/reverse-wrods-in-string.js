/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const words = s.split(' ').filter(word => word.length > 0);
    return words.reverse().join(' ');
};

const s = "a good   example";
const result = reverseWords(s);
console.log('!');
