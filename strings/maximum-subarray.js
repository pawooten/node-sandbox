/**
 * @param {number[]} nums
 * @return {number}
 */
 const maxSubArray = (nums) => {
    // Initialize maxmimumSum to the first value in the array.
    let maximumSum = nums[0];
    // Iterate over the remaining numbers in the array.
    const length = nums.length;
    for (let index = 1; index < length; index++) {
        // If the sum of the current value with the previous value is greater than the current value, overwrite.
        // In other words, is the single element chain beginning with this value are greater value than the 
        nums[index] = Math.max(nums[index], nums[index] + nums[index - 1]);
        maximumSum = Math.max(maximumSum, nums[index]);
    }
    return maximumSum;
  };
  const nums = [-2,1,-3,4,-1,2,1,-5,4];
  const result = maxSubArray(nums);
  console.log('!');