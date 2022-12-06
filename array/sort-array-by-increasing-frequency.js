/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    // Build a frequency map.
    const frequencyMap = new Map();
    for (const num of nums) {
        if (!frequencyMap.has(num)) {
            frequencyMap.set(num, 1);
        } else {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        }
    }

    const numsByFrequency = new Map();
    let count;
    for (const num of frequencyMap.keys()) {
        count = frequencyMap.get(num);
        if (!numsByFrequency.has(count)) {
            numsByFrequency.set(count, [ num ]);
        } else {
            numsByFrequency.get(count).push(num);
        }
    }

    let result = [];
    // Sort the keys of numsByFrequency, which are the distinct frequencies of all numbers in the array.
    for (const frequencyCount of [...numsByFrequency.keys()].sort((left, right) => left - right)) {
        // Retrieve the set of nums that have this frequency, and sort the.
        for (const num of numsByFrequency.get(frequencyCount).sort((left, right) => right - left)) {
            count = frequencyCount;
            while (count > 0) {
                result.push(num);
                count--;
            }
        }
    }
    return result;
};
const nums = [1,1,2,2,2,3];
const result = frequencySort(nums);
console.log('!');