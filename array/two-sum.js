/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // No shortcircuit for now
    const length = nums.length;
    let result = [];
    for (let index = 0; index < length && !result.length; index++) {
        twoSumInternal(nums, index, target, result);
    }
    return result[0];
};
const twoSumInternal = function(nums, firstIndex, target, result) {
    const length = nums.length;
    let first = nums[firstIndex];
    for (let index = 0; index < length && !result.length; index++) {
        if (index === firstIndex) {
            continue;
        }
        if (first + nums[index] === target) {
            result.push([firstIndex, index]);
        }
    }
}
const nums = [3,2,4], target = 6;
const result = twoSum(nums, target);
console.log('!');