/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    const length = nums.length;

    nums.sort((left, right) => left - right);
    if (nums[0] != 0) {
        return 0;
    }
    // Iterate across the sorted array of numbers
    let expectedValue = nums[0];
    for (let index = 0; index < length; index++) {
        if (nums[index] != expectedValue) {
            return expectedValue;
        }
        expectedValue++;
    }
    return expectedValue;
};
const nums = [1];
const result = missingNumber(nums);
console.log('!');