/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    // A running sum of an array is runningSum[i] = sum(nums[0]...nums[i]);
    // return the running sum of nums.
    let runningSum = [], currentSum = 0;
    const length = nums.length;
    for (let index = 0; index < length; index++) {
        currentSum += nums[index];
        runningSum.push(currentSum);
    }
    return runningSum;
};
const nums = [1,1,1,1];
const result = runningSum(nums);
console.log('!');