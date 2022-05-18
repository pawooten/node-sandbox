/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  // Move all 0s to the end while maintaining the relative order of non-zero elements.  In place
  const length = nums.length;
  let readPointer = 0, writePointer = 0;
  for (; writePointer < length; writePointer++) {
      if (nums[writePointer] === 0) {
        // Read ahead to the next non-zero value
        while (!nums[readPointer] && readPointer < length) { readPointer++}
        if (readPointer === length || writePointer > readPointer) {
            return nums;
        }
        nums[writePointer] = nums[readPointer];
        nums[readPointer] = 0;
      }
      readPointer++;
  }
  return nums;
};
const nums = [1,0,1];
const result = moveZeroes(nums);
console.log('!');