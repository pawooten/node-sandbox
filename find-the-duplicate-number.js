/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    // Given an array of integers nums containing n+1 integers where each integer is in the range [1, n] inclusive.
    // There is only one repeated number in nums, return this number.
    // Must solve using only constant extra space.

    let map = new Map();
    let length = nums.length;
    for (let index = 0; index < length; index++) {
        let currentValue = nums[index];
        if (map.has(currentValue)) {
            return currentValue;
        }
        map.set(currentValue, true);
    }
};
nums = [1,3,4,2,2]
const result = findDuplicate(nums);
console.log('!');