/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    const length = rocks.length;
    let fullBagCount = 0, index, diff;

    const indexesByDiff = new Map();
    for (index = 0; index < length; index++) {
        diff = capacity[index] - rocks[index];
        if (diff === 0) {
            // This bag is already full, no additional rocks are required.
            fullBagCount++;
            continue;
        }
        if (!indexesByDiff.has(diff)) {
            // This is the first value we've encountered with this diff value (the number of rocks that must be added for this bag to reach capacity).
            indexesByDiff.set(diff, [ index ]);
        } else {
            // This is not the first value we've encountered with this diff value.
            indexesByDiff.get(diff).push(index);
        }
    }

    // Sort in reverse order to pop rather than shift the set of next-most-valuable indices.
    const orderedDiffs = [...indexesByDiff.keys()].sort((left, right) => right - left);
    let currentIndexes;
    while (additionalRocks > 0 && orderedDiffs.length > 0) {
        diff = orderedDiffs.pop();
        currentIndexes = indexesByDiff.get(diff);
        while (currentIndexes.length > 0 && additionalRocks > 0) {
            if (diff <= additionalRocks) {
                currentIndexes.pop();

                additionalRocks -= diff;
                fullBagCount++;    
            }
        }
    }
    return fullBagCount;
};

const capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100;
const result = maximumBags(capacity, rocks, additionalRocks);
console.log('!');