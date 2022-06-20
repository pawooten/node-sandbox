/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 var minOperations = function(nums, x) {
     const length = nums.length;
     const sum = nums.reduce( (previous, current) => previous + current, 0);
     const target = sum - x;

     let currentSum = 0, result = -1;

     // Iterate across the values of nums
     for (let leftIndex = 0, rightIndex = 0; rightIndex < length; rightIndex++) {
         currentSum += nums[rightIndex];

         while (leftIndex <= rightIndex && currentSum > target) {
             currentSum -= nums[leftIndex];
             leftIndex++;
         }

         if (currentSum === target) {
             result = Math.max(result, (rightIndex - leftIndex + 1));
         }
     }

     return result === -1 ? -1 : length - result;
};

const nums = [10,1,1,1,1,1], x=5;
const result = minOperations(nums, x);
console.log('!');