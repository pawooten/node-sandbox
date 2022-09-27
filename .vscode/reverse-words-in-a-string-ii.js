/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    // reverse the first k characters for every 2k characters counting from the start of the string.
    let result = '';
    
    const batchSize = k * 2, length = s.length;
    let index = 0;
    while (index < s.length) {
        result += s.slice(index, batchSize).reverse().join('');
    }
    return '';
};

const s = "abcdefg", k = 2;
const result = reverseStr(s, k);
console.log('!');