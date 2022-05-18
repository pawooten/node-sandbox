/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
     const characters = s.split('');
    let charMap = new Map();
    characters.forEach((char, index) => {
        if (!charMap.has(char)) {
            charMap.set(char, []);
        }
        charMap.get(char).push(index);
    });

    // Filter out any keys for which multiple indices within the string were found matching that character.
    let keys = [...charMap.keys()].filter(key => charMap.get(key).length === 1);
    keys.sort((left, right) => charMap.get(left).length - charMap.get(right).length);
    if (!keys.length) {
        return -1;
    }
    return charMap.get(keys[0])[0];
};
const s = "leetcode";
const result = firstUniqChar(s);
console.log('!');