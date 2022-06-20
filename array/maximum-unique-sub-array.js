/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumUniqueSubarray = function(nums) {
    // nums is an array of positive integers. We want to erase a subarray of nums containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.
    // Return the maximum score you can get by erasing exactly one subarray.

    // Determine the score of erasing each subarray, and return the maximum score.

    let maxScore = 0;
    
    // Iterate over each number in nums, and evaluate all subarrays which begin with that value.
    const length = nums.length;
    for (let index = 0; index < length; index++) {
        // nums must contain non-negative values only, which means that the score of a one element sub array can never exceed the score of a larger subarray
        // don't bother evaluating the score of one element sub arrays.
        let isUnique = true;
        for (let subIndex = index + 1; subIndex <= length && isUnique; subIndex++) {
            let numSet = new Set();
            let subSet = nums.slice(index, subIndex);
            for (let subSetIndex = 0; subSetIndex < subSet.length && isUnique; subSetIndex++) {
                let subSetValue = subSet[subSetIndex];
                if (numSet.has(subSetValue)) {
                    // This subset is not unique, we've just encountered a value that is already present in the subset. shortcircuit this evaluation and further evaluations
                    // of longer subsets (if any) which begin with this character, since they are guaranteed to also not be unique.
                    isUnique = false;
                    continue;
                }
                numSet.add(subSetValue);
            }
            if (isUnique) {
                // We've iterated over this subSet without encountering a duplicate
                let subSetScore = subSet.reduce((previous, current) => previous + current, 0);
                maxScore = Math.max(maxScore, subSetScore);
            }
        }
    }
    return maxScore;
};
const  nums = [5,2,1,2,5,2,1,2,5];
const result = maximumUniqueSubarray(nums);
console.log('!');