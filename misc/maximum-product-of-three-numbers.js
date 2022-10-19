/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
    // sort
    nums.sort((left, right) => left - right);
    return nums.pop() * nums.pop() * nums.pop();
};
const nums = [1,2,3];
const result = maximumProduct(nums);
console.log('!');