/**
 * @param {number[]} nums
 * @return {number}
 */
 var findShortestSubArray = function(nums) {
    // The degree of the array nums is defined as the maximum frequency of any one of its elements.

    const numMap = new Map(), length = nums.length;
    let num;
    for (let index = 0; index < length; index++) {
        num = nums[index];
        if (!numMap.has(num)) {
            numMap.set(num, [ index ]);
        } else {
            numMap.set(num, numMap.get(num).concat(index));
        }
    }

    let maxFrequencyKeys = [];
    let frequency, maxFrequency = 0;
    for (const numKey of numMap.keys()) {
        frequency = numMap.get(numKey).length;
        if (frequency === maxFrequency) {
            maxFrequencyKeys.push(numKey);
        }
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            maxFrequencyKeys = [ numKey ];
        }
    }

    let shortestSubArray = Number.MAX_VALUE, indices, subArrayLength;
    for (const maxFrequencyKey of maxFrequencyKeys) {
        indices = numMap.get(maxFrequencyKey);
        subArrayLength = Math.max(...indices) - Math.min(...indices) + 1;
        shortestSubArray = Math.min(shortestSubArray, subArrayLength);
    }

    return shortestSubArray;
};

const nums = [1,2,2,3,1,4,2];
const result = findShortestSubArray(nums);
console.log('!');