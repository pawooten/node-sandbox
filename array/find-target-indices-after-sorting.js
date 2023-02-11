/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((left, right) => left - right);
    const result = [], length = nums.length;
    for (let index = 0; index < length; index++) {
        if (nums[index] === target) {
            result.push(index);
        }
    }
    return result;
};

const nums = [1,2,5,2,3], target = 2;
const result = targetIndices(nums, target);
console.log('!');