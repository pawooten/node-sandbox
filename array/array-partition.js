/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // To maximize the sum of the pairs, we want to minimize the difference between the min and max of each pair.
    nums.sort((left, right) => left - right);
    let sum = 0;
    while (nums.length > 0) {
        sum += Math.min(nums.pop(), nums.pop());
    }
    return sum;
};
const nums = [6,2,6,5,1,2];
const result = arrayPairSum(nums);
console.log('!');