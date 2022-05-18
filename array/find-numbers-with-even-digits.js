/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    return nums.filter(num => !(num.toString().length % 2) ).length;
};
const nums = [555,901,482,1771]
const result = findNumbers(nums);
console.log('!');
