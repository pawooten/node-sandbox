/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    // Remove duplicate letters so that every letter appears once and only once, in the smallest lexicographical order among all possible results.
    let map = new Map();
    let uniqueCharacters = [];
    let characters = s.split('');
    for (let index = 0; index < s.length; index++) {
        let char = characters[index];
        if (!map.has(char)) {
            map.set(char, [index]);
            uniqueCharacters.push(char);
            continue;
        }
        map.get(char).push(index);
    }
    
    // iterate over the keys of the map in lexicographical order.
    uniqueCharacters.sort();
    let cursor = 0;
    uniqueCharacters.forEach(char => {
        let charIndices = map.get(char);
        if (charIndices.length > 1) {
            // There are duplicates of this character and all but one must be removed. Since we are iterating in lexicographical order, the left
            // most index which is greater than our cursor should survive.
            let survivorIndex = charIndices.filter(index => index > cursor)[0];
            // Overwrite all instances of this char in the characters array, and the rewrite at the survivor index.
            charIndices.forEach(index => characters[index] = '');
            characters[survivorIndex] = char;
            cursor = survivorIndex;
        } else {
            cursor++;
        }
    });

    return characters.join('');
};
const s = 'cbacdcbc';
const result = removeDuplicateLetters(s);
console.log('!');