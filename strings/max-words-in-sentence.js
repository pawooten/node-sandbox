/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxLength = 0;
    for (const sentence of sentences) {
        maxLength = Math.max(maxLength, sentence.split(' ').length);
    }
    return maxLength;
};

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
const result = mostWordsFound(sentences);
console.log('!');
