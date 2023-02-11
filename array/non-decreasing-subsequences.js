/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const result = [], length = nums.length;

    // Iterate over each value in the array and determine what subsets are increasing which begin with that value.
    let subset, isIncreasing, offsetIndex, current;
    for (let index = 0; index < length; index++) {
        isIncreasing = true;
        offsetIndex = index + 1;
        subset = [ nums[index] ];
        do {
            current = nums[offsetIndex];
            isIncreasing = current >= subset[subset.length - 1];
            if (isIncreasing) {
                subset.push(current);
                result.push([...subset]);
            }
            offsetIndex++;
        } while (isIncreasing);
    }
    return result;
};

const nums = [4,6,7,7];
const result = findSubsequences(nums);
console.log('!');