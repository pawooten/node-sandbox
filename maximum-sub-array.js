/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let recordKeeper = { maxSum: null };
    findSubArrays(nums, 0, recordKeeper);
    return recordKeeper.maxSum;
};
const findSubArrays = function(nums, startIndex, recordKeeper) {
    // Score all contiguous arrays starting with this startIndex.
    const length = nums.length;
    for (let index = startIndex + 1; index <= length; index++) {
        let score = scoreArray(nums, startIndex, index)
        if (recordKeeper.maxSum === null) {
            recordKeeper.maxSum = score;
        }
        recordKeeper.maxSum = Math.max(recordKeeper.maxSum, score);
    }
    if (startIndex < length) {
        findSubArrays(nums, startIndex + 1, recordKeeper);
    }
}
const scoreArray = function(nums, startIndex, endIndex) {
    let sum = 0;
    return nums.slice(startIndex, endIndex).reduce((previous, current) => previous + current, sum);
}

const  nums = [5,4,-1,7,8];
const result = maxSubArray(nums);
console.log('!');
