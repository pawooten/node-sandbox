/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Split each string into an array of characters.
    const letters1 = text1.split(''), letters2 = text2.split('');
    // Select the shortest array to be the pattern we will attempt to match.
    let pattern = (letters1.length < letters2.length) ? letters1 : letters2;
};

const text1 = "abcde", text2 = "ace" ;
const result = longestCommonSubsequence(text1, text2);
console.log('!');