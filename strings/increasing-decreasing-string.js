/**
 * @param {string} s
 * @return {string}
 */
 var sortString = function(s) {
    // Populate a map whose keys are the unique characters of s and whose value is the number of instances of that character.
    const characterCountMap = new Map();
    for (const character of s.split(''))  {
        if (!characterCountMap.has(character)) {
            characterCountMap.set(character, 1);
        } else {
            characterCountMap.set(character, characterCountMap.get(character) + 1);
        }
    }

    let keys = [...characterCountMap.keys()].sort(), index, lastAppended;
    const result = [];
    while (characterCountMap.size > 0) {
        // Append the first character of this pass from either the set of the lowest or the set of the highest remaining characters.
        index = 0;
        lastAppended = keys[index];
        result.push(lastAppended);
        let count = characterCountMap.get(lastAppended) - 1;
        if (count === 0) {
            characterCountMap.delete(lastAppended);
        } else {
            characterCountMap.set(lastAppended, count);
        }
        index++;
        while (index < characterCountMap.size) {
            lastAppended = keys[index];
            result.push(lastAppended);
            let count = characterCountMap.get(lastAppended) - 1;
            if (count === 0) {
                characterCountMap.delete(lastAppended);
            } else {
                characterCountMap.set(lastAppended, count);
            }
            index++;
        }
        isIncrementing = !isIncrementing;
    }

    return result.join('');
};

const s = 'aaaabbbbcccc';
const result = sortString(s);
console.log('!');