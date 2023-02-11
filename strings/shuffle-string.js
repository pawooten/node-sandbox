/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const characters = s.split(''), length = characters.length, result = new Array(length);
    for (let index = 0; index < length; index++) {
        result[indices[index]] = characters[index];
    }
    return result.join('');
};

const s = "codeleet", indices = [4,5,6,7,0,2,1,3];
const result = restoreString(s, indices);
console.log('!');