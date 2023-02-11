/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let characters = s.split('');
    characters.sort((left, right) => right.charCodeAt(0) - left.charCodeAt(0));
    const result = [characters.pop() ];



    return result.join('');
};

const s = "aaaabbbbcccc";
const result = sortString(s);
console.log('!');