/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    // A map whose keys are strings and whose values are arrays of strings that match that key
    const anagramGroupsByKey = new Map();
    let key;
    for (const currentString of strs) {
        key = getAnagramKey(currentString);
        if (!anagramGroupsByKey.has(key)) {
            anagramGroupsByKey.set(key, [ currentString ]);
        } else {
            anagramGroupsByKey.get(key).push(currentString);
        }
    }
    return [...anagramGroupsByKey.values()];
};

const getAnagramKey = (str) => str.split('').sort().join('');


const strs = ["a"];
const result = groupAnagrams(strs);
console.log('!');