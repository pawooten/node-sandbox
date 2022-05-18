/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
     const characters = s.split('');
    // interate character by character over s, looking for k duplicate removals.
    let duplicates = [];
    const lastIndex = characters.length - k;
    for (let index = 0; index <= lastIndex; index++) {
        let value = characters[index], isDuplicate = true, subIndex;
        for (subIndex = index + 1; subIndex < index + k && isDuplicate; subIndex++) {
            isDuplicate = characters[subIndex] == value;
        }
        if (isDuplicate) {
            duplicates.push(index);
            index = subIndex;
        }
    }
    let duplicatesFound = duplicates.length > 0;
    // Remove the k duplicates from highest index (last in the array) to lowest, to avoid messing up the indexes
    for (let index = duplicates.length - 1; index >= 0; index--) {
        characters.splice(duplicates[index], k);
    }
    let newS = characters.join('');
    if (duplicatesFound) {
        return removeDuplicates(newS, k);
    }
    return newS;
};
const s = "yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy", k = 4;
const result = removeDuplicates(s, k);
console.log('!');