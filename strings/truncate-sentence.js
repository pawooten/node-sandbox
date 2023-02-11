/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const words = s.split(' ').filter(word => word.length > 0);
    return words.slice(0, k).join(' ');
};

const s = "Hello how are you Contestant", k = 4;
const result = truncateSentence(s, k);
console.log('!');