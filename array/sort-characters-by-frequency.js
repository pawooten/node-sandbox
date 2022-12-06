/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    // Build a map with keys of each unique character, and values of the number of instances of that character.
    const characterMap = new Map();
    for (const character of s.split('')) {
        if (!characterMap.has(character)) {
            characterMap.set(character, 1);
        } else {
            characterMap.set(character, characterMap.get(character) + 1);
        }
    }

    const characters = [...characterMap.keys()].sort((left, right) => characterMap.get(right) - characterMap.get(left));

    const result = [];
    let count;

    for (const character of characters) {
        count = characterMap.get(character);
        while (count > 0) {
            result.push(character);
            count--;
        }
    }
    return result.join('');
};

const s = "Aabb";
const result = frequencySort(s);
console.log('!');