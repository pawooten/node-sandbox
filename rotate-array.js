/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    while (k > 0) {
        k -= 1;
        nums = [nums.pop(), ...nums];
    }
};
const nums = [1,2,3,4,5,6,7], k=3;
const result = rotate(nums, k);
console.log('!');