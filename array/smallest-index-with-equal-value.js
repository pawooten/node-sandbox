/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    const length = nums.length;
    for (let index = 0; index < length; index++) {
        if (nums[index] === index % 10) {
            return index;
        }
    }
    return -1;
};
const nums = [4,3,2,1];
const result = smallestEqual(nums);
console.log('!');