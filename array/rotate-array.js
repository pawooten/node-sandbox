/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    const length = nums.length;
    if (k > length) {
        k = k % length;
    }
    let temp = [...nums.splice(length - k), ...nums];
    for (let index = 0; index < length; index++) {
        nums[index] = temp[index];
    }
};
let nums = [1,2], k=5;
const result = rotate(nums, k);
console.log('!');