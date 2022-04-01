/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    return nums.map(num => Math.pow(num, 2)).sort((first, second) => first - second);
};
const nums = [-4,-1,0,3,10];
const result = sortedSquares(nums);
console.log('!');