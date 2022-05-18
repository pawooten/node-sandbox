/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    // If target exists, return its index, otherwise -1.
    return nums.indexOf(target);
};
const nums = [-1,0,3,5,9,12], target = 9;
const result = search(nums, target);
console.log('!');