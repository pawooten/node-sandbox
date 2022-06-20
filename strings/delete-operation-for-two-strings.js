/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    // In one step, you may delete exactly one character in either string.
    // Return the minimum number of steps required to make word1 and word2 the same.

    let recordKeeper = { minimumSteps: undefined };
    findMatch(word1.split(''), word2.split(''), 0, recordKeeper);
    return recordKeeper.minimumSteps;
};

const findMatch = function(word1, word2, stepCount, recordKeeper) {
    if (match(word1, word2)) {
        // They match! Is our stepCount a record?
        if (recordKeeper.minimumSteps === undefined) {
            recordKeeper.minimumSteps = stepCount;
            return;
        }
        recordKeeper.minimumSteps = Math.min(recordKeeper.minimumSteps, stepCount);
        return;
    }

    // The words are not a match. Explore paths where we remove a character from word1 first
    let length = word1.length, index;
    for (index = 0; index < length; index++) {
        let word1clone = [...word1];
        word1clone.splice(index, 1);
        findMatch(word1clone, word2, stepCount + 1, recordKeeper);
    }
    // ... and also paths where we remove a character from word2.
    length = word2.length;
    for (index = 0; index < length; index++) {
        let word2clone = [...word2];
        word2clone.splice(index, 1);
        findMatch(word1, word2clone, stepCount + 1, recordKeeper);
    }
    
}
const match = function(word1, word2) {
    const length = word1.length;
    if (word2.length != length) {
        return false;
    }
    for (let index = 0; index < length; index++) {
        if (word1[index] != word2[index]) {
            return false;
        }
    }
    return true;
}
const word1 = "leetcode", word2 = "etco";
const result = minDistance(word1, word2);
console.log('!');