/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const letterIndexes = new Map(), length = s.length;
    let letter, actualDistance;
    for (let index = 0; index < length; index++) {
        letter = s.charAt(index);
        if (!letterIndexes.has(letter)) {
            letterIndexes.set(letter, [ index ]);
        } else {
            letterIndexes.get(letter).push(index);
        }
    }

    const aCode = 'a'.charCodeAt(0);
    for (const [mappedLetter, [firstMappedIndex, secondMappedIndex]] of letterIndexes.entries()) {
        actualDistance = secondMappedIndex - firstMappedIndex;
        if (actualDistance !== distance[mappedLetter.charCodeAt(0) - aCode] + 1) {
            return false;
        }
    }
    return true;
};

const s = "aa", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const result = checkDistances(s, distance);
console.log('!');