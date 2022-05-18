/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    // return the maximum length of a contiguous subarray with an equal number of 0 and 1.

    let maxLength = 0, oneCount, zeroCount;
    for (let index = 0; index < nums.length; index++) {
        oneCount = 0, zeroCount = 0;
        // what is the maximum length of any contiguous subarrays starting at this index?
        for (let subIndex = index; subIndex < nums.length; subIndex++) {
            if (nums[subIndex] === 1) {
                oneCount += 1;
            } else {
                zeroCount += 1;
            }
            // do we have an equal number of ones and zeros currently? If so, that means this is a contiguous block
            if (oneCount === zeroCount) {
                maxLength = Math.max(maxLength, oneCount + zeroCount);
            }
        }
    }
    return maxLength;
};
const nums = [0,0,1,0,0,0,1,1];
const result = findMaxLength(nums);
console.log('!');